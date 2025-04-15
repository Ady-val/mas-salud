import { EProductForm, EProductUnit } from '@mas-salud/enum/products';
import { IProduct } from '@mas-salud/interfaces/products';
import * as yup from 'yup';

export const productSchema: yup.ObjectSchema<Omit<IProduct, 'id'>> = yup
  .object({
    name: yup
      .string()
      .required('El nombre es requerido')
      .max(50, 'El nombre no puede tener más de 50 caracteres'),
    brand: yup
      .string()
      .required('La marca es requerida')
      .max(50, 'La marca no puede tener más de 50 caracteres'),
    dosage: yup.string().required('La dosis es requerida'),
    form: yup
      .mixed<EProductForm>()
      .oneOf(Object.values(EProductForm), 'La forma debe ser un valor válido')
      .required('La forma es requerida'),
    unit: yup
      .mixed<EProductUnit>()
      .oneOf(Object.values(EProductUnit), 'La unidad debe ser un valor válido')
      .required('La unidad es requerida'),
    presentation: yup
      .string()
      .required('La presentación es requerida')
      .max(50, 'La presentación no puede tener más de 50 caracteres'),
  })
  .required();
