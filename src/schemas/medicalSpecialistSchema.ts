import * as yup from 'yup';
import { IMedicalSpecialist } from '@mas-salud/interfaces/medicalSpecialists';
import { ESpecialistType } from '@mas-salud/enum/specialities';

export const medicalSpecialistSchema: yup.ObjectSchema<
  Omit<IMedicalSpecialist, 'id'>
> = yup
  .object({
    fullName: yup
      .string()
      .required('El nombre es requerido')
      .max(50, 'El nombre no puede tener más de 100 caracteres'),
    speciality: yup
      .mixed<ESpecialistType>()
      .oneOf(Object.values(ESpecialistType), 'El tipo debe ser un valor válido')
      .required('El tipo es requerido'),
    institutionId: yup.string().required('La institución es requerida'),
    email: yup
      .string()
      .email('El correo electrónico no es válido')
      .nullable()
      .optional(),
    phone: yup
      .string()
      .matches(/^\d{10}$/, 'El teléfono debe contener exactamente 10 números')
      .nullable()
      .optional(),
    licenseNumber: yup.string().nullable().optional(),
  })
  .required();
