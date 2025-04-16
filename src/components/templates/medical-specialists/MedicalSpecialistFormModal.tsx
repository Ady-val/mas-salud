'use client';

import { useLoading } from '@mas-salud/context/LoadingContext';
import { useModal } from '@mas-salud/context/ModalContext';
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@mas-salud/components/atoms';
import { useToast } from '@mas-salud/hooks/useToast';
import { FormalModalProps } from '@mas-salud/interfaces/formModalProps';
import { IMedicalSpecialist } from '@mas-salud/interfaces/medicalSpecialists';
import {
  ModalButton,
  ModalInput,
  SimpleSelect,
} from '@mas-salud/components/molecules';
import { formatOptions } from '@mas-salud/helpers/DataFormat';
import { useInstitutions } from '@mas-salud/hooks/institutions/useInstitution';
import { useEffect } from 'react';
import { specialityOptions } from '@mas-salud/constants/optinos/specialityOptions';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { medicalSpecialistSchema } from '@mas-salud/schemas/medicalSpecialistSchema';
import { useMedicalSpecialistMutation } from '@mas-salud/hooks/medicalSpecialists/useMedicalSpecialistMutate';
import { useQueryClient } from '@tanstack/react-query';
import { errorFormat } from '@mas-salud/helpers/errorFormt';
import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';

const MedicalSpecialistFormModal = ({
  onlyView,
  obj,
}: FormalModalProps<IMedicalSpecialist>) => {
  const { errorToast, successToast } = useToast();
  const { closeModal } = useModal();
  const { showLoading, hideLoading } = useLoading();
  const {
    data: institutionsFetchedData,
    error: institutionsError,
    isFetching: institutionsIsFetching,
  } = useInstitutions();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<IMedicalSpecialist>({
    resolver: yupResolver(medicalSpecialistSchema),
    defaultValues: { ...obj },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
  });
  const mutation = useMedicalSpecialistMutation();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (institutionsError) {
      errorToast(
        'Error al cargar las instituciones, por favor recargue la página.',
      );
    }
  }, [institutionsError]);

  const handleSave = (data: IMedicalSpecialist) => {
    showLoading();
    mutation.mutate(
      {
        ...(obj?.id ? { id: obj.id } : {}),
        fullName: data.fullName,
        institutionId: data.institutionId,
        speciality: data.speciality,
        phone: data.phone || undefined,
        email: data.email || undefined,
        licenseNumber: data.licenseNumber || undefined,
      },
      {
        onError: (error) => {
          const formatedError = errorFormat(error);

          formatedError.forEach((err: { field: string; error: string }) =>
            setError(err.field as keyof IMedicalSpecialist, {
              type: 'server',
              message: err.error,
            }),
          );
          errorToast('Error', formatedError[0].error);
        },
        onSuccess: () => {
          successToast('Beneficiario guardado correctamente.');
          queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.MEDICAL_SPECIALISTS],
          });
          closeModal();
        },
        onSettled: () => {
          hideLoading();
        },
      },
    );
  };

  return (
    <ModalContent>
      <form onSubmit={handleSubmit(handleSave)}>
        <ModalHeader>Nuevo Especialista de la Salud</ModalHeader>
        <ModalBody>
          <div className='grid grid-cols-2 gap-4'>
            <ModalInput
              isReadOnly={onlyView}
              isRequired
              label='Nombre completo'
              placeholder='Nombre completo'
              {...register('fullName')}
              isInvalid={!!errors.fullName}
              errorMessage={errors.fullName?.message}
              className='col-span-full'
            />
            <SimpleSelect
              isRequired
              isDisabled={onlyView}
              label='Institución'
              placeholder='Institución a la que pertenecerá el medicamento'
              defaultSelectedKeys={[obj?.institutionId as string]}
              options={formatOptions(institutionsFetchedData)}
              onChange={({ target }) => {
                setValue('institutionId', target.value);
              }}
              isInvalid={!!errors.institutionId}
              errorMessage={errors.institutionId?.message}
              isLoading={institutionsIsFetching}
              className='col-span-1'
            />
            <SimpleSelect
              isRequired
              isDisabled={onlyView}
              label='Especialidad'
              placeholder='Seleccione la especialidad'
              defaultSelectedKeys={[obj?.speciality as string]}
              options={specialityOptions}
              onChange={({ target }) => {
                setValue('speciality', target.value);
              }}
              isInvalid={!!errors.speciality}
              errorMessage={errors.speciality?.message}
              className='col-span-1'
            />
            <ModalInput
              isReadOnly={onlyView}
              label='Telefono'
              placeholder='Telefono'
              {...register('phone')}
              isInvalid={!!errors.phone}
              errorMessage={errors.phone?.message}
              className='col-span-1'
            />
            <ModalInput
              isReadOnly={onlyView}
              label='Correo'
              placeholder='Correo'
              {...register('email')}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
              className='col-span-1'
            />
            <ModalInput
              isReadOnly={onlyView}
              label='Número de colegiado'
              placeholder='Número de colegiado'
              {...register('licenseNumber')}
              isInvalid={!!errors.licenseNumber}
              errorMessage={errors.licenseNumber?.message}
              className='col-span-1'
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <ModalButton
            text={onlyView ? 'Cerrar' : 'Cancelar'}
            color='secondary'
            onClick={closeModal}
          />
          {!onlyView && (
            <ModalButton text='Guardar' color='success' type='submit' />
          )}
        </ModalFooter>
      </form>
    </ModalContent>
  );
};

export default MedicalSpecialistFormModal;
