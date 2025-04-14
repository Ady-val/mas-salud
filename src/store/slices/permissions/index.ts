import { createSlice } from '@reduxjs/toolkit';
import { PureAbility } from '@casl/ability';
import { Action } from '@mas-salud/enum/actions';
import { Modules } from '@mas-salud/enum/modules';
import { PayloadAction } from '@reduxjs/toolkit';

export type Subjects = Modules | 'all';
export type AppAbility = PureAbility<[Action, Subjects]>;

interface PermissionsState {
  rules: AppAbility['rules'];
}

const initialState: PermissionsState = {
  rules: [],
};

const permissionsSlice = createSlice({
  name: 'permissions',
  initialState,
  reducers: {
    setPermissions: (state, action: PayloadAction<AppAbility['rules']>) => {
      state.rules = action.payload;
    },
    resetPermissions: (state) => {
      state.rules = initialState.rules;
    },
  },
});

export * from './selectors';
export * from './hooks';
export const { setPermissions, resetPermissions } = permissionsSlice.actions;
export default permissionsSlice.reducer;
