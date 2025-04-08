import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from './slices/beneficiary';
import productsFiltersReducer from './slices/products';
import errorReducer from './slices/errorSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    productsFilters: productsFiltersReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
