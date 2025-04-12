import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from './slices/beneficiary';
import productsFiltersReducer from './slices/products';
import inventoryFiltersReducer from './slices/inventory';
import errorReducer from './slices/errorSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    productsFilters: productsFiltersReducer,
    inventoryFilters: inventoryFiltersReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
