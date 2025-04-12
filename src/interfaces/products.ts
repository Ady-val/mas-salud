import { EProductForm, EProductUnit } from '@mas-salud/enum/products';

export interface IProductsParams {
  page?: number;
  limit?: number;
  name?: string;
  brand?: string;
  form?: string;
  unit?: string;
}

export interface IProductsFilterState
  extends Omit<IProductsParams, 'page' | 'limit'> {}

export interface IProduct {
  id?: string;
  name: string;
  brand: string;
  dosage: string;
  form: EProductForm;
  unit: EProductUnit;
  presentation: string;
}
