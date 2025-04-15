import { IUser } from '@mas-salud/interfaces/user';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const initialState: IUser = {
  name: '',
  username: '',
  institution: '',
};

const setUser: CaseReducer<IUser, PayloadAction<IUser>> = (
  state,
  action: PayloadAction<Partial<IUser>>,
) => {
  return { ...state, ...action.payload };
};

const resetUser: CaseReducer<IUser> = (state) => {
  return { ...state, ...initialState };
};

export { initialState, setUser, resetUser };
