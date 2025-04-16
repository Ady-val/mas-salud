import { createSlice } from '@reduxjs/toolkit';

import * as reduce from './reducers';

const { initialState, ...reducers } = reduce;

const medicalSpecialistSlice = createSlice({
  name: 'medicalSpecialistFilters',
  initialState,
  reducers,
});

export * from './selectors';
export * from './hooks';
export const { setMedicalSpecialistFilters, resetMedicalSpecialistFilters } =
  medicalSpecialistSlice.actions;
export default medicalSpecialistSlice.reducer;
