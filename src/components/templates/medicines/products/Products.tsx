'use client';

import { useModal } from '@mas-salud/context/ModalContext';
import { Button } from '@mas-salud/components/molecules';

import { ProductsData, ProductsFilters } from '../../medicines';

import ProductsFormModal from './ProductsFormModal';

const Products: React.FC = () => {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal(<ProductsFormModal />);
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <ProductsFilters />
        <Button
          text='Agregar Producto'
          color='primary'
          onClick={handleOpenModal}
        />
      </div>
      <ProductsData />
    </div>
  );
};

export default Products;
