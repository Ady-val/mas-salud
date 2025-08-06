import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
} from '@mas-salud/components/atoms';
import { ModalButton } from '@mas-salud/components/molecules';
import { fetchBeneficiary } from '@mas-salud/lib/apiClient';
import img from '@mas-salud/public/plantilla.png';
import { useEffect, useRef, useState } from 'react';
import JsBarcode from 'jsbarcode';
import { useModal } from '@mas-salud/context/ModalContext';
import { toPng } from 'html-to-image';

const BeneficiaryCredencialModal = ({ id }: { id: string }) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const [image, setImage] = useState<string | undefined>(undefined);
  const barcodeRef = useRef<SVGSVGElement>(null);
  const { closeModal } = useModal();
  const [identificationCode, setIdentificationCode] = useState<string>('');
  const [barcodeReady, setBarcodeReady] = useState(false);
  const [beneficiaryName, setBeneficiaryName] = useState<string>('');

  useEffect(() => {
    const getBeneficiary = async (beneficiaryId: string) => {
      try {
        const data = await fetchBeneficiary(beneficiaryId);

        const { image } = data;

        setImage(image || undefined);
        setIdentificationCode(data.identificationCode || '');
        setBeneficiaryName(`${data.name}-${data.lastName}`);
        setLoadingImage(false);
      } catch (error) {
        console.log(error);
        setImage(undefined);
        setLoadingImage(false);
      }
    };

    getBeneficiary(id || '');
  }, [id, setImage]);

  useEffect(() => {
    if (barcodeRef.current && identificationCode) {
      JsBarcode(barcodeRef.current, identificationCode, {
        format: 'CODE128',
        width: 2,
        height: 40,
        displayValue: false,
      });
      setBarcodeReady(true);
    }
  }, [identificationCode]);

  return (
    <ModalContent>
      <ModalHeader>Credencial de Beneficiario</ModalHeader>
      <ModalBody>
        <div className='flex flex-col items-center justify-center'>
          {loadingImage && !image && !barcodeReady ? (
            <div className='flex items-top justify-center w-full h-full'>
              <Spinner size='lg' color='secondary' />
            </div>
          ) : !!image ? (
            <div
              id='credential'
              style={{
                position: 'relative',
                width: 300,
                height: 510,
                backgroundImage: `url(${img.src})`,
                backgroundSize: 'cover',
              }}
            >
              <img
                src={image}
                alt='Beneficiario'
                style={{
                  position: 'absolute',
                  top: 98,
                  left: 75,
                  width: 142,
                  height: 145.5,
                  backgroundSize: 'cover',
                  borderRadius: '18%',
                }}
              />
              <div
                className='bg-white flex flex-col items-center justify-center'
                style={{
                  position: 'absolute',
                  top: 270,
                  left: 25,
                  width: 250,
                  height: 80,
                }}
              >
                <div className='text-2xl font-bold text-black text-center'>
                  Adalberto Valles Bonilla Delgado Junior
                </div>
                <div className='text-xl font-medium text-black'>
                  Beneficiario
                </div>
              </div>
              <div
                className='bg-white flex flex-col items-center justify-center'
                style={{
                  position: 'absolute',
                  top: 415,
                  left: 25,
                  width: 250,
                  height: 65,
                }}
              >
                <svg ref={barcodeRef} />
              </div>
            </div>
          ) : (
            <div className='flex flex-col items-center justify-start w-full h-full'>
              <p className='text-xl text-center'>
                No se encontró imagen del beneficiario
              </p>
              <p className='text-lg text-center mt-2'>
                Primero debes agregar una imagen para el beneficiario antes de
                crear una credencial
              </p>
            </div>
          )}
        </div>
      </ModalBody>
      <ModalFooter>
        <ModalButton
          text='Salir'
          color='secondary'
          onClick={closeModal}
          disabled={loadingImage || !image}
        />
        <ModalButton
          text='Descargar Credencial'
          color='success'
          onClick={() => downloadCredentialAsImage({ name: beneficiaryName })}
        />
      </ModalFooter>
    </ModalContent>
  );
};

const downloadCredentialAsImage = ({ name }: { name: string }) => {
  const node = document.getElementById('credential');

  if (node) {
    toPng(node)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${name}-credencial.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Error generando imagen', err);
      });
  }
};

export default BeneficiaryCredencialModal;
