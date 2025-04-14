'use client';

import { useModal } from '@mas-salud/context/ModalContext';
import { Button } from '@mas-salud/components/molecules';
import { useHasPermission } from '@mas-salud/store/slices/permissions';
import { Action } from '@mas-salud/enum/actions';
import { Modules } from '@mas-salud/enum/modules';

import InventoryFilters from './InventoryFilters';
import InventoryData from './InventoryData';

const Inventory: React.FC = () => {
  const { openModal } = useModal();
  const createPermission = useHasPermission(Action.Read, Modules.InventoryItem);

  const handleOpenModal = () => {
    // openModal(<ProductsFormModal />);
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <InventoryFilters />
        <Button
          text='Agregar Inventario'
          onClick={handleOpenModal}
          disabled={!createPermission}
          disabledText='No tienes permisos para crear un inventario'
        />
      </div>
      <InventoryData />
    </div>
  );
};

export default Inventory;
