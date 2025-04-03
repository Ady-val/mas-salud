'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useModal } from '@/context/ModalContext';
import {
  ModalBody,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalInput,
} from '@/components/atoms';
import { IBeneficiary } from '@/interfaces/beneficiaries';
import { useEffect } from 'react';
import { useLoading } from '@/context/LoadingContext';

interface EditUserModalProps {
  onSave: () => void;
}

const schema: yup.ObjectSchema<IBeneficiary> = yup
  .object({
    firstName: yup
      .string()
      .required('El nombre es requerido')
      .max(50, 'El nombre no puede tener más de 50 caracteres'),
    lastName: yup
      .string()
      .required('El apellido es requerido')
      .max(50, 'El apellido no puede tener más de 50 caracteres'),
    secondLastName: yup
      .string()
      .required('El segundo apellido es requerido')
      .max(50, 'El segundo apellido no puede tener más de 50 caracteres'),
    curp: yup
      .string()
      .required('La CURP es requerida')
      .length(18, 'La CURP debe contener exactamente 18 caracteres'),
    phone: yup
      .string()
      .required('El teléfono es requerido')
      .matches(/^\d{10}$/, 'El teléfono debe contener exactamente 10 números'),
    street: yup.string().required('La calle es requerida'),
    exteriorNumber: yup.string().required('El número exterior es requerido'),
    interiorNumber: yup.string().optional(),
    neighborhood: yup.string().required('La colonia es requerida'),
    postalCode: yup
      .string()
      .required('El código postal es requerido')
      .matches(
        /^\d{5}$/,
        'El código postal debe contener exactamente 5 números',
      ),
  })
  .required();

const CreateBeneficiaryModal = ({ onSave }: EditUserModalProps) => {
  const { closeModal } = useModal();
  const { showLoading } = useLoading();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBeneficiary>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
  });

  useEffect(() => {
    showLoading();
  }, [showLoading]);

  const handleSave = (data: IBeneficiary) => {
    console.log('Data:', data);
    // onSave();
    // closeModal();
  };

  return (
    <ModalContent>
      <form onSubmit={handleSubmit(handleSave)}>
        <ModalHeader>Nuevo Beneficiario</ModalHeader>
        <ModalBody>
          <div className='grid grid-cols-3 gap-4'>
            <ModalInput
              isRequired
              label='Nombre/s'
              placeholder='Nombre del beneficiario'
              {...register('firstName')}
              isInvalid={!!errors.firstName}
              errorMessage={errors.firstName?.message}
            />
            <ModalInput
              isRequired
              label='Apellido Paterno'
              placeholder='Apellido Paterno del beneficiario'
              {...register('lastName')}
              isInvalid={!!errors.lastName}
              errorMessage={errors.lastName?.message}
            />
            <ModalInput
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
              isRequired
              label='CURP'
              placeholder='CURP del beneficiario'
              className='col-span-2'
              {...register('curp')}
              isInvalid={!!errors.curp}
              errorMessage={errors.curp?.message}
            />
            <ModalInput
              isRequired
              label='Teléfono'
              placeholder='Teléfono del beneficiario'
              {...register('phone')}
              isInvalid={!!errors.phone}
              errorMessage={errors.phone?.message}
            />
          </div>
          <div className='grid grid-cols-4 gap-4'>
            <ModalInput
              isRequired
              label='Calle'
              placeholder='Calle de domicilio'
              className='col-span-2'
              {...register('street')}
              isInvalid={!!errors.street}
              errorMessage={errors.street?.message}
            />
            <ModalInput
              isRequired
              label='Número Exterior'
              placeholder='Num Ext domicilio'
              className='col-span-1'
              {...register('exteriorNumber')}
              isInvalid={!!errors.exteriorNumber}
              errorMessage={errors.exteriorNumber?.message}
            />
            <ModalInput
              label='Número Interior'
              placeholder='Num Int domicilio'
              className='col-span-1'
              {...register('interiorNumber')}
              isInvalid={!!errors.interiorNumber}
              errorMessage={errors.interiorNumber?.message}
            />
            <ModalInput
              isRequired
              label='Colonia'
              placeholder='Colonia de domicilio'
              className='col-span-2'
              {...register('neighborhood')}
              isInvalid={!!errors.neighborhood}
              errorMessage={errors.neighborhood?.message}
            />
            <ModalInput
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
          <ModalButton text='Cancelar' color='secondary' onClick={closeModal} />
          <ModalButton
            type='submit'
            text='Guardar'
            color='success'
            className='text-content-secondary'
          />
        </ModalFooter>
      </form>
    </ModalContent>
  );
};

export default CreateBeneficiaryModal;
