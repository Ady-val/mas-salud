import { EProductUnit } from '@mas-salud/enum/products';
import { IOption } from '@mas-salud/interfaces/common';

interface IUnitOption extends IOption {
  value: EProductUnit;
}

export const unitOptions: IUnitOption[] = [
  {
    label: 'mg',
    value: EProductUnit.MG,
    key: 'mg',
  },
  {
    label: 'mg/5ml',
    value: EProductUnit.MG_5ML,
    key: 'mg/5ml',
  },
  {
    label: 'ml',
    value: EProductUnit.ML,
    key: 'ml',
  },
  {
    label: 'mcg',
    value: EProductUnit.MCG,
    key: 'mcg',
  },
  {
    label: 'mg/ml',
    value: EProductUnit.MG_ML,
    key: 'mg/ml',
  },
  {
    label: 'g',
    value: EProductUnit.G,
    key: 'g',
  },
  {
    label: 'g/5ml',
    value: EProductUnit.G_5ML,
    key: 'g/5ml',
  },
  {
    label: 'g/ml',
    value: EProductUnit.G_ML,
    key: 'g/ml',
  },
  {
    label: 'l',
    value: EProductUnit.L,
    key: 'l',
  },
  {
    label: 'ui',
    value: EProductUnit.UI,
    key: 'ui',
  },
];
