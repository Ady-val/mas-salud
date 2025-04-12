import { IInventoryParams } from '@mas-salud/interfaces/inventory';

import axiosInstance from './Axios';

export const fetchInventory = async (params: IInventoryParams) => {
  const response = await axiosInstance.get('/inventories/grouped', { params });

  return response.data;
};
