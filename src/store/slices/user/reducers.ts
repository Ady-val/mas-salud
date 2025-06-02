import { ILoggedUser } from '@mas-salud/interfaces/user';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const initialState: ILoggedUser = {
  name: '',
  username: '',
  institution: '',
};

const setUser: CaseReducer<ILoggedUser, PayloadAction<ILoggedUser>> = (
  state,
  action: PayloadAction<Partial<ILoggedUser>>,
) => {
  return { ...state, ...action.payload };
};

const resetUser: CaseReducer<ILoggedUser> = (state) => {
  return { ...state, ...initialState };
};

export { initialState, setUser, resetUser };
