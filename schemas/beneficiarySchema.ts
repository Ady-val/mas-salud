import * as yup from 'yup';

import { IBeneficiary } from '@/interfaces/beneficiaries';

export const beneficiarySchema: yup.ObjectSchema<Omit<IBeneficiary, 'id'>> = yup
  .object({
    name: yup
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
    gender: yup.string().required('El género es requerido'),
    street: yup.string().required('La calle es requerida'),
    externalNumber: yup.string().required('El número exterior es requerido'),
    internalNumber: yup
      .string()
      .transform((value, originalValue) =>
        originalValue === '' ? null : value,
      )
      .nullable()
      .optional(),
    colony: yup.string().required('La colonia es requerida'),
    postalCode: yup
      .string()
      .required('El código postal es requerido')
      .matches(
        /^\d{5}$/,
        'El código postal debe contener exactamente 5 números',
      ),
  })
  .required();
