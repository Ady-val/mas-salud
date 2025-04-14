import { RootState } from '@mas-salud/store';

export const permissionsSelector = (state: RootState) =>
  state.permissions.rules;
