'use client';

import { useModal } from '@mas-salud/context/ModalContext';
import { Button } from '@mas-salud/components/molecules';
import { useHasPermission } from '@mas-salud/store/slices/permissions';
import { Action } from '@mas-salud/enum/actions';
import { Modules } from '@mas-salud/enum/modules';

import { ProductsData, ProductsFilters } from '../../medicines';

import ProductsFormModal from './ProductsFormModal';

const Products: React.FC = () => {
  const { openModal } = useModal();
  const createPermission = useHasPermission(Action.Read, Modules.Products);

  const handleOpenModal = () => {
    openModal(<ProductsFormModal />);
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <ProductsFilters />
        <Button
          text='Agregar Producto'
          onClick={handleOpenModal}
          disabled={!createPermission}
          disabledText='No tienes permisos para crear un producto'
        />
      </div>
      <ProductsData />
    </div>
  );
};

export default Products;
