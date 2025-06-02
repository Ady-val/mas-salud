import { IUserForm, IUserParams } from '@mas-salud/interfaces/users';

import axiosInstance from './Axios';

export const fetchUsers = async (params: IUserParams) => {
  const response = await axiosInstance.get('/users', {
    params,
  });

  return response.data;
};

export const createUser = async (user: IUserForm) => {
  const response = await axiosInstance.post('/users', user);

  return response.data;
};

export const updateUser = async (user: IUserForm) => {
  const { id, ...data } = user;
  const response = await axiosInstance.patch(`/users/${id}`, data);

  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await axiosInstance.delete(`/users/${id}`);

  return response.data;
};
