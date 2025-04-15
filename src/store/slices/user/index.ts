import { createSlice } from '@reduxjs/toolkit';

import * as reduce from './reducers';

const { initialState, ...reducers } = reduce;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers,
});

export * from './selectors';
export * from './hooks';
export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
