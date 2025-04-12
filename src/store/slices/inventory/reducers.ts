import { IInventoryFilterState } from '@mas-salud/interfaces/inventory';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const initialState: IInventoryFilterState = {
  name: '',
  institutionId: '',
  productId: '',
};

const setInventoryFilters: CaseReducer<
  IInventoryFilterState,
  PayloadAction<IInventoryFilterState>
> = (state, action: PayloadAction<Partial<IInventoryFilterState>>) => {
  return { ...state, ...action.payload };
};

const resetInventoryFilters: CaseReducer<IInventoryFilterState> = (state) => {
  return { ...state, ...initialState };
};

export { initialState, setInventoryFilters, resetInventoryFilters };
