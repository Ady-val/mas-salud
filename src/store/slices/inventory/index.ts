import { createSlice } from '@reduxjs/toolkit';

import * as reduce from './reducers';

const { initialState, ...reducers } = reduce;

const inventoryFiltersSlice = createSlice({
  name: 'inventoryFilters',
  initialState,
  reducers,
});

export * from './selectors';
export * from './hooks';
export const { setInventoryFilters, resetInventoryFilters } =
  inventoryFiltersSlice.actions;
export default inventoryFiltersSlice.reducer;
