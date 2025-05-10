import {
  IInventoryItem,
  IInventoryItemsParams,
  IInventoryParams,
  INewInventoryItem,
} from '@mas-salud/interfaces/inventory';

import axiosInstance from './Axios';

export const fetchInventory = async (params: IInventoryParams) => {
  const response = await axiosInstance.get('/inventories/grouped', { params });

  return response.data;
};

export const fetchInventoryItems = async (params: IInventoryItemsParams) => {
  const response = await axiosInstance.get('/inventories', { params });

  return response.data;
};

export const deleteInventoryItem = async (id: string) => {
  const response = await axiosInstance.delete(`/inventories/${id}`);

  return response.data;
};

export const createInventoryItem = async (data: INewInventoryItem) => {
  const response = await axiosInstance.post('/inventories', data);

  return response.data;
};

export const findInventoryItemByBarcode = async (barcode: string) => {
  const response = await axiosInstance.get<IInventoryItem>(
    `/inventories/barcode/${barcode}`,
  );

  return response.data;
};
