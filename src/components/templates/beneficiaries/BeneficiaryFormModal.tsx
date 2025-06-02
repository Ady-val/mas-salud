'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQueryClient } from '@tanstack/react-query';
import { useModal } from '@mas-salud/context/ModalContext';
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@mas-salud/components/atoms';
import { IBeneficiary } from '@mas-salud/interfaces/beneficiaries';
import { useLoading } from '@mas-salud/context/LoadingContext';
import { useBeneficiaryMutation } from '@mas-salud/hooks/beneficiaries/useBeneficiaryMutate';
import {
  ModalButton,
  ModalInput,
  SimpleSelect,
} from '@mas-salud/components/molecules';
import { useToast } from '@mas-salud/hooks/useToast';
import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { beneficiarySchema } from '@mas-salud/schemas/beneficiarySchema';
import { FormModalProps } from '@mas-salud/interfaces/formModalProps';
import { errorFormat } from '@mas-salud/helpers/errorFormt';

const BeneficiaryFormModal = ({
  onlyView,
  obj,
}: FormModalProps<IBeneficiary>) => {
  const { errorToast, successToast } = useToast();
  const { closeModal } = useModal();
  const { showLoading, hideLoading } = useLoading();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<IBeneficiary>({
    resolver: yupResolver(beneficiarySchema),
    defaultValues: { ...obj },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
  });
  const mutation = useBeneficiaryMutation();
  const queryClient = useQueryClient();

  const handleSave = (data: IBeneficiary) => {
    showLoading();
    mutation.mutate(
      {
        ...(obj?.id ? { id: obj.id } : {}),
        ...data,
      },
      {
        onError: (error) => {
          const formatedError = errorFormat(error);

          formatedError.forEach((err: { field: string; error: string }) =>
            setError(err.field as keyof IBeneficiary, {
              type: 'server',
              message: err.error,
            }),
          );
          errorToast('Error', formatedError[0].error);
        },
        onSuccess: () => {
          successToast('Beneficiario guardado correctamente.');
          queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.BENEFICIARIES],
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
        <ModalHeader>Nuevo Beneficiario</ModalHeader>
        <ModalBody>
          <div className='grid grid-cols-3 gap-4'>
            <ModalInput
              isReadOnly={onlyView}
              isRequired
              label='Nombre/s'
              placeholder='Nombre del beneficiario'
              {...register('name')}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />
            <ModalInput
              isReadOnly={onlyView}
              isRequired
              label='Apellido Paterno'
              placeholder='Apellido Paterno del beneficiario'
              {...register('lastName')}
              isInvalid={!!errors.lastName}
              errorMessage={errors.lastName?.message}
            />
            <ModalInput
              isReadOnly={onlyView}
              isRequired
              label='Apellido Materno'
              placeholder='Apellido Materno del beneficiario'
              {...register('secondLastName')}
              isInvalid={!!errors.secondLastName}
              errorMessage={errors.secondLastName?.message}
            />
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <ModalInput
              isReadOnly={onlyView}
              isRequired
              label='CURP'
              placeholder='CURP del beneficiario'
              className='col-span-2'
              {...register('curp')}
              isInvalid={!!errors.curp}
              errorMessage={errors.curp?.message}
            />
            <ModalInput
              isReadOnly={onlyView}
              isRequired
              label='Teléfono'
              placeholder='Teléfono del beneficiario'
              {...register('phone')}
              isInvalid={!!errors.phone}
              errorMessage={errors.phone?.message}
            />
            <SimpleSelect
              isDisabled={onlyView}
              label='Género'
              placeholder='Género del beneficiario'
              defaultSelectedKeys={[obj?.gender as string]}
              options={[
                {
                  key: 'Male',
                  label: 'Masculino',
                  value: 'Male',
                },
                {
                  key: 'Female',
                  label: 'Femenino',
                  value: 'Female',
                },
              ]}
              onChange={({ target }) => {
                setValue('gender', target.value);
              }}
              isInvalid={!!errors.gender}
              errorMessage={errors.gender?.message}
            />
          </div>
          <div className='grid grid-cols-4 gap-4'>
            <ModalInput
              isReadOnly={onlyView}
              isRequired
              label='Calle'
              placeholder='Calle de domicilio'
              className='col-span-2'
              {...register('street')}
              isInvalid={!!errors.street}
              errorMessage={errors.street?.message}
            />
            <ModalInput
              isReadOnly={onlyView}
              isRequired
              label='Número Exterior'
              placeholder='Num Ext domicilio'
              className='col-span-1'
              {...register('externalNumber')}
              isInvalid={!!errors.externalNumber}
              errorMessage={errors.externalNumber?.message}
            />
            <ModalInput
              isReadOnly={onlyView}
              label='Número Interior'
              placeholder='Num Int domicilio'
              className='col-span-1'
              {...register('internalNumber')}
              isInvalid={!!errors.internalNumber}
              errorMessage={errors.internalNumber?.message}
            />
            <ModalInput
              isReadOnly={onlyView}
              isRequired
              label='Colonia'
              placeholder='Colonia de domicilio'
              className='col-span-2'
              {...register('colony')}
              isInvalid={!!errors.colony}
              errorMessage={errors.colony?.message}
            />
            <ModalInput
              isReadOnly={onlyView}
              isRequired
              label='Código Postal'
              placeholder='Código Postal de domicilio'
              className='col-span-2'
              {...register('postalCode')}
              isInvalid={!!errors.postalCode}
              errorMessage={errors.postalCode?.message}
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

export default BeneficiaryFormModal;
