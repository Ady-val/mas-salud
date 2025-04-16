'use client';

import { FilterInput, FilterSelect } from '@mas-salud/components/molecules';
import { specialityOptions } from '@mas-salud/constants/optinos/specialityOptions';
import { formatOptions } from '@mas-salud/helpers/DataFormat';
import { useInstitutions } from '@mas-salud/hooks/institutions/useInstitution';
import { useToast } from '@mas-salud/hooks/useToast';
import { setMedicalSpecialistFilters } from '@mas-salud/store/slices/medicalSpecialist';
import { isAxiosError } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

interface IFilterInput {
  fullName: string;
  specialty: string;
  institutionId: string;
}

const MedicalSpecialistsFilters: React.FC = () => {
  const dispatch = useDispatch();
  const { errorToast } = useToast();
  const { register, watch, setValue } = useForm<IFilterInput>();
  const formValues = watch();

  const { data: fetchedData, error, isFetching } = useInstitutions();

  useEffect(() => {
    dispatch(setMedicalSpecialistFilters(formValues));
  }, [formValues, dispatch]);

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
        <FilterInput label='Nombre' type='text' {...register('fullName')} />
        <FilterSelect
          label='Especialidad'
          defaultSelectedKeys={[]}
          options={specialityOptions}
          onChange={({ target }) => {
            setValue('specialty', target.value);
          }}
          isLoading={isFetching}
        />
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

export default MedicalSpecialistsFilters;
