import { IBeneficiaryFilterState } from '@mas-salud/interfaces/beneficiaries';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const initialState: IBeneficiaryFilterState = {
  name: '',
  lastName: '',
  curp: '',
};

const setFilters: CaseReducer<
  IBeneficiaryFilterState,
  PayloadAction<IBeneficiaryFilterState>
> = (state, action: PayloadAction<Partial<IBeneficiaryFilterState>>) => {
  return { ...state, ...action.payload };
};

const resetFilters: CaseReducer<IBeneficiaryFilterState> = (state) => {
  return { ...state, ...initialState };
};

export { initialState, setFilters, resetFilters };
