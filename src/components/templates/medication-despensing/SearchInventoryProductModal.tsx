import { ModalContent, ModalFooter } from '@heroui/modal';
import { ModalBody, ModalHeader } from '@mas-salud/components/atoms';
import { ModalButton, ModalInput } from '@mas-salud/components/molecules';
import ModalInfoField from '@mas-salud/components/molecules/modals/ModalInfoFields';
import { ModalTable } from '@mas-salud/components/organisms';
import { siteConfig } from '@mas-salud/config/site';
import { HMedicineInventoryItemsModal } from '@mas-salud/constants/headers';
import { useModal } from '@mas-salud/context/ModalContext';
import { useInventoryItems } from '@mas-salud/hooks/inventory/useInventory';
import { useToast } from '@mas-salud/hooks/useToast';
import { IInventoryItem } from '@mas-salud/interfaces/inventory';
import { useEffect, useRef, useState } from 'react';
import { FaSistrix } from 'react-icons/fa6';

interface SearchInventoryProductModalProps {
  onProductSelected: (product: IInventoryItem) => void;
}

const SearchInventoryProductModal = ({
  onProductSelected,
}: SearchInventoryProductModalProps) => {
  const { errorToast } = useToast();
  const { closeModal } = useModal();
  const [productCode, setProductCode] = useState<string>('');
  const [identificationCode, setIdentificationCode] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<IInventoryItem | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    data: fetchedData,
    error,
    isFetching,
  } = useInventoryItems({
    page: currentPage,
    limit: siteConfig.queries.modalLimit,
    name: identificationCode || undefined,
  });

  useEffect(() => {
    if (error) {
      errorToast(
        'Error al cargar los medicamentos, por favor recargue la página.',
      );
    }
  }, [errorToast]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSelectionChange = (key: string | null) => {
    if (!key) {
      setSelectedItem(null);

      return;
    }

    const selected = fetchedData?.data.find(
      (item: { id: string }) => item.id === key,
    );

    setSelectedItem(selected || null);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && productCode) {
      setIdentificationCode(productCode.trim());
      setProductCode('');
    }
  };

  const handleSubmit = () => {
    if (!selectedItem) {
      errorToast('Seleccione un producto del inventario');
      return;
    }

    onProductSelected(selectedItem);
    setProductCode('');
    setIdentificationCode('');
    setSelectedItem(null);
    closeModal();
  };

  return (
    <ModalContent>
      <ModalHeader>Buscar Producto</ModalHeader>
      <ModalBody>
        <ModalInfoField
          label='Producto Seleccionado'
          value={selectedItem?.product || ''}
          description='Busque un producto en el inventario'
          classNames={{ value: 'border-b-2' }}
        />
        <div className='flex flex-col gap-4 px-6'>
          <ModalInput
            ref={inputRef}
            label='Buscar Producto'
            placeholder='Ingrese el código de barras o nombre del producto'
            value={productCode}
            onChange={({ target }) => setProductCode(target.value)}
            onKeyDown={handleInputKeyDown}
            startContent={<FaSistrix />}
          />
          <ModalTable
            headers={HMedicineInventoryItemsModal()}
            data={fetchedData?.data || []}
            count={fetchedData?.count || 0}
            rowsPerPage={siteConfig.queries.modalLimit}
            currentPage={currentPage}
            isLoading={isFetching}
            onPageChange={(page: number) => setCurrentPage(page)}
            onSelectionChange={handleSelectionChange}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <ModalButton text='Cancelar' color='secondary' onClick={closeModal} />
        <ModalButton
          text='Guardar'
          color='success'
          type='submit'
          onClick={handleSubmit}
        />
      </ModalFooter>
    </ModalContent>
  );
};

export default SearchInventoryProductModal;
