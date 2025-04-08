'use client';

import { FilterInput } from '@mas-salud/components/molecules';
import FilterSelect from '@mas-salud/components/molecules/select/FilterSelect';
import { IProductsFilterState } from '@mas-salud/interfaces/products';
import { setFilters } from '@mas-salud/store/slices/products';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const ProductsFilters: React.FC = () => {
  const dispatch = useDispatch();
  const { register, watch, setValue } = useForm<IProductsFilterState>();
  const formValues = watch();

  useEffect(() => {
    dispatch(setFilters(formValues));
  }, [formValues, dispatch]);

  return (
    <div className='w-full'>
      <form className='flex justify-start items-center gap-2'>
        <FilterInput label='Nombre' type='text' {...register('name')} />
        <FilterInput label='Marca' type='text' {...register('brand')} />
      </form>
    </div>
  );
};

export default ProductsFilters;
