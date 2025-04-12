'use client';

import { FilterInput, FilterSelect } from '@mas-salud/components/molecules';
import { formatOptions } from '@mas-salud/helpers/DataFormat';
import { useInstitutions } from '@mas-salud/hooks/institutions/useInstitution';
import { IInventoryFilterState } from '@mas-salud/interfaces/inventory';
import { setInventoryFilters } from '@mas-salud/store/slices/inventory';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const InventoryFilters: React.FC = () => {
  const dispatch = useDispatch();
  const { register, setValue, watch } = useForm<IInventoryFilterState>();
  const formValues = watch();

  const { data: fetchedData, error, isFetching } = useInstitutions();

  useEffect(() => {
    console.log('Institutions:', formatOptions(fetchedData));
  }, [fetchedData]);

  useEffect(() => {
    dispatch(setInventoryFilters(formValues));
  }, [formValues]);

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
