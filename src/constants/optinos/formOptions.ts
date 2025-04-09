import { EProductForm } from '@mas-salud/enum/products';
import { IOption } from '@mas-salud/interfaces/common';

interface IFormOption extends IOption {
  value: EProductForm;
}

export const formOptions: IFormOption[] = [
  {
    label: 'tableta',
    value: EProductForm.TABLETA,
    key: 'tableta',
  },
  {
    label: 'jarabe',
    value: EProductForm.JARABE,
    key: 'jarabe',
  },
  {
    label: 'capsula',
    value: EProductForm.CAPSULA,
    key: 'cápsula',
  },
  {
    label: 'inhalador',
    value: EProductForm.INHALADOR,
    key: 'inhalador',
  },
  {
    label: 'inyección',
    value: EProductForm.INYECCION,
    key: 'inyección',
  },
];
