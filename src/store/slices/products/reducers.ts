import { IProductsFilterState } from '@mas-salud/interfaces/products';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const initialState: IProductsFilterState = {
  name: '',
  brand: '',
  form: '',
  unit: '',
  lotNumber: '',
};

const setFilters: CaseReducer<
  IProductsFilterState,
  PayloadAction<IProductsFilterState>
> = (state, action: PayloadAction<Partial<IProductsFilterState>>) => {
  return { ...state, ...action.payload };
};

const resetFilters: CaseReducer<IProductsFilterState> = (state) => {
  return { ...state, ...initialState };
};

export { initialState, setFilters, resetFilters };
