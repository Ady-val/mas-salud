import { IProduct, IProductsParams } from '@mas-salud/interfaces/products';
import axiosInstance from '@mas-salud/lib/apiClient/Axios';

export const fetchProducts = async (params: IProductsParams) => {
  const response = await axiosInstance.get('/products', { params });

  return response.data;
};

export const createProduct = async (data: IProduct) => {
  const response = await axiosInstance.post('/products', data);

  return response.data;
};

export const updateProduct = async (data: IProduct) => {
  const response = await axiosInstance.patch(`/products/${data.id}`, data);

  return response.data;
};

export const deleteProduct = async (id: string) => {
  const response = await axiosInstance.delete(`/products/${id}`);

  return response.data;
};
