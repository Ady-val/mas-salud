import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@mas-salud/components/atoms';
import { ModalButton } from '@mas-salud/components/molecules';
import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { useModal } from '@mas-salud/context/ModalContext';
import { useToast } from '@mas-salud/hooks/useToast';
import { uploadBeneficiaryImage } from '@mas-salud/lib/apiClient';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import Cropper, { Area } from 'react-easy-crop';

const getCroppedImg = async (imageSrc: string, crop: Area) => {
  const img = await fetch(imageSrc).then((res) => res.blob());
  const bitmap = await createImageBitmap(img);

  const canvas = document.createElement('canvas');

  canvas.width = crop.width;
  canvas.height = crop.height;

  const ctx = canvas.getContext('2d')!;

  ctx.drawImage(
    bitmap,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    crop.width,
    crop.height,
  );

  return new Promise<File>((resolve) => {
    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], 'cropped-image.jpg', {
          type: 'image/jpeg',
        });

        resolve(file);
      }
    }, 'image/jpeg');
  });
};

const BeneficiaryImage = ({ id }: { id: string }) => {
  const { errorToast, successToast } = useToast();
  const { closeModal } = useModal();
  const [image, setImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const queryClient = useQueryClient();

  const onCropComplete = (_croppedArea: Area, croppedPixels: Area) => {
    setCroppedAreaPixels(croppedPixels);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || file.type !== 'image/jpeg' || file.size > 2_000_000) {
      errorToast('Error', 'Only JPEG images under 2MB are allowed.');

      return;
    }
    const reader = new FileReader();

    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const upload = async () => {
    if (!image || !croppedAreaPixels) {
      errorToast('Error', 'Por favor selecciona y recorta una imagen.');

      return;
    }
    const croppedBlob = await getCroppedImg(image, croppedAreaPixels);

    const success = await uploadBeneficiaryImage(id, croppedBlob);

    if (success) {
      successToast('Éxito', 'Imagen subida con éxito.');
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.BENEFICIARIES],
      });
      closeModal();
    } else {
      errorToast('Error', 'Error subiendo la imagen, intente de nuevo.');
    }
  };

  return (
    <ModalContent>
      <ModalHeader>Beneficiary Image</ModalHeader>
      <ModalBody>
        <div className='flex gap-4 items-end justify-between'>
          <input
            className='w-1/2'
            type='file'
            accept='image/jpeg'
            onChange={handleFileChange}
          />
          {image ? (
            <div className='w-[400px] h-[400px] relative'>
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
          ) : (
            <div className='w-[400px] h-[400px] flex items-center justify-center bg-gray-200'>
              <p className='text-gray-500'>No image selected</p>
            </div>
          )}
          {/* <Button onClick={upload}>Upload</Button> */}
        </div>
      </ModalBody>
      <ModalFooter>
        <ModalButton text='Cancelar' color='secondary' onClick={closeModal} />
        <ModalButton text='Guardar' color='success' onClick={upload} />
      </ModalFooter>
    </ModalContent>
  );
};

export default BeneficiaryImage;
