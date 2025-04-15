import { INewInventoryItem } from '@mas-salud/interfaces/inventory';
import * as yup from 'yup';

export const inventoryItemSchema: yup.ObjectSchema<INewInventoryItem> =
  yup.object({
    productId: yup.string().required('El producto es requerido'),
    institutionId: yup.string().required('La institución es requerida'),
    barcode: yup.string().required('El código de barras es requerido'),
    batchNumber: yup.string().required('El número de lote es requerido'),
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
    quantity: yup
      .number()
      .required('La cantidad es requerida')
      .positive('La cantidad debe ser mayor a 0')
      .integer('La cantidad debe ser un número entero')
      .max(999999, 'La cantidad no puede ser mayor a 999999'),
  });
