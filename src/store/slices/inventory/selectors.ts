import { RootState } from '@mas-salud/store';

export const inventoryFiltersSelector = (state: RootState) =>
  state.inventoryFilters;
