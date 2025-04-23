import { createSlice } from '@reduxjs/toolkit';

import * as reduce from './reducers';

const { initialState, ...reducers } = reduce;

const beneficiaryForMedicinesSlice = createSlice({
  name: 'beneficiaryForMedicines',
  initialState,
  reducers,
});

export * from './selectors';
export const { setBeneficiaryForMedicines, deleteBeneficiary } =
  beneficiaryForMedicinesSlice.actions;
export default beneficiaryForMedicinesSlice.reducer;
