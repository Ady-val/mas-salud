import { createSlice } from '@reduxjs/toolkit';

import * as reduce from './reducers';

const { initialState, ...reducers } = reduce;

const filtersSlice = createSlice({
  name: 'productsFilters',
  initialState,
  reducers,
});

export * from './selectors';
export * from './hooks';
export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
