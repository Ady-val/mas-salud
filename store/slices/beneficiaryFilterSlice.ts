import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  name: string;
  lastName: string;
  curp: string;
}

const initialState: FiltersState = {
  name: '',
  lastName: '',
  curp: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
      return { ...state, ...action.payload };
    },
    resetFilters: () => initialState,
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
