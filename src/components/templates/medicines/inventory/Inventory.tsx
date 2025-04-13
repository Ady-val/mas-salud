'use client';

import { useModal } from '@mas-salud/context/ModalContext';
import { Button } from '@mas-salud/components/molecules';

import InventoryData from './InventoryData';
import InventoryFilters from './InventoryFilters';

const Inventory: React.FC = () => {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    // openModal(<ProductsFormModal />);
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <InventoryFilters />
        <Button text='Agregar Inventario' onClick={handleOpenModal} />
      </div>
      <InventoryData />
    </div>
  );
};

export default Inventory;
