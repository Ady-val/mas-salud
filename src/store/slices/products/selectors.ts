import { RootState } from '@mas-salud/store';

export const productsFiltersSelector = (state: RootState) =>
  state.productsFilters;
