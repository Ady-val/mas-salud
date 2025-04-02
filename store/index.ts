import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from './slices/beneficiaryFilterSlice';
import errorReducer from './slices/errorSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
