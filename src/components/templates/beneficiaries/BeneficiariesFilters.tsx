'use client';

import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FilterInput } from '@mas-salud/components/atoms';
import { setFilters } from '@mas-salud/store/slices/beneficiaryFilterSlice';

interface IFilterInput {
  name: string;
  lastName: string;
  curp: string;
}

const BeneficiariesFilters: React.FC = () => {
  const dispatch = useDispatch();
  const { register, watch } = useForm<IFilterInput>();
  const formValues = watch();

  useEffect(() => {
    dispatch(setFilters(formValues));
  }, [formValues, dispatch]);

  return (
    <div className='w-full'>
      <form className='flex justify-start items-center gap-2'>
        <FilterInput label='Nombre' type='text' {...register('name')} />
        <FilterInput label='Apellido' type='text' {...register('lastName')} />
        <FilterInput label='CURP' type='text' {...register('curp')} />
      </form>
    </div>
  );
};

export default BeneficiariesFilters;
