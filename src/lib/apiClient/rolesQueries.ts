import { IRole, IRolesParams } from '@mas-salud/interfaces/roles';

import axiosInstance from './Axios';

export const fetchRolesOptions = async () => {
  const response = await axiosInstance.get('/roles/options');

  return response.data;
};

export const fetchRoles = async (params: IRolesParams) => {
  const response = await axiosInstance.get('/roles', { params });

  return response.data;
};

export const createRole = async (data: IRole) => {
  const response = await axiosInstance.post('/roles', {
    ...data,
    isGlobal: false,
  });

  return response.data;
};

export const updateRole = async (data: IRole) => {
  const { id, ...obj } = data;
  const response = await axiosInstance.patch(`/roles/${id}`, {
    ...obj,
    isGlobal: false,
  });

  return response.data;
};

export const deleteRole = async (id: string) => {
  const response = await axiosInstance.delete(`/roles/${id}`);

  return response.data;
};
