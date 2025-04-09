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
    quantity: yup
      .number()
      .required('La cantidad es requerida')
      .positive('La cantidad debe ser mayor a 0')
      .integer('La cantidad debe ser un número entero')
      .max(999999, 'La cantidad no puede ser mayor a 999999'),
    expirationDate: yup
      .string()
      .required('La fecha de expiración es requerida')
      .matches(
        /^\d{4}-\d{2}-\d{2}$/,
        'La fecha de expiración debe tener el formato YYYY-MM-DD',
      )
      .test(
        'is-future-date',
        'La fecha de expiración debe ser futura',
        (value) => {
          if (!value) return false;
          const today = new Date();
          const expirationDate = new Date(value);

          return expirationDate > today;
        },
      ),
    lotNumber: yup
      .string()
      .max(50, 'El número de lote no puede tener más de 50 caracteres')
      .nullable(),
  })
  .required();
