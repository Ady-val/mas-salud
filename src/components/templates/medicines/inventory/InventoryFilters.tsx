'use client';

import { FilterInput, FilterSelect } from '@mas-salud/components/molecules';
import { formatOptions } from '@mas-salud/helpers/DataFormat';
import { useInstitutions } from '@mas-salud/hooks/institutions/useInstitution';
import { useToast } from '@mas-salud/hooks/useToast';
import { IInventoryFilterState } from '@mas-salud/interfaces/inventory';
import { setInventoryFilters } from '@mas-salud/store/slices/inventory';
import { isAxiosError } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const InventoryFilters: React.FC = () => {
  const dispatch = useDispatch();
  const { errorToast } = useToast();
  const { register, setValue, watch } = useForm<IInventoryFilterState>();
  const formValues = watch();

  const { data: fetchedData, error, isFetching } = useInstitutions();

  useEffect(() => {
    dispatch(setInventoryFilters(formValues));
  }, [formValues]);

  useEffect(() => {
    if (isAxiosError(error)) {
      errorToast(
        `Error al buscar institutciones, intente mas tarde`,
        `${error.status}: ${error.message}`,
      );
    }
  }, [error]);

  return (
    <div className='w-full'>
      <form className='flex justify-start items-center gap-2'>
        <FilterInput label='Nombre' type='text' {...register('name')} />
        <FilterSelect
          label='Institución'
          defaultSelectedKeys={[]}
          options={formatOptions(fetchedData)}
          onChange={({ target }) => {
            setValue('institutionId', target.value);
          }}
          isLoading={isFetching}
        />
      </form>
    </div>
  );
};

export default InventoryFilters;
