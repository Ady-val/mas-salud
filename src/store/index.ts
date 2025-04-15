import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/user';
import filtersReducer from './slices/beneficiary';
import productsFiltersReducer from './slices/products';
import inventoryFiltersReducer from './slices/inventory';
import errorReducer from './slices/errorSlice';
import permissionsReducer from './slices/permissions';

export const store = configureStore({
  reducer: {
    user: userReducer,
    permissions: permissionsReducer,
    filters: filtersReducer,
    productsFilters: productsFiltersReducer,
    inventoryFilters: inventoryFiltersReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
