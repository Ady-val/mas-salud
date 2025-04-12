import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import {
  IInventoryItemsParams,
  IInventoryParams,
} from '@mas-salud/interfaces/inventory';
import {
  fetchInventory,
  fetchInventoryItems,
} from '@mas-salud/lib/apiClient/inventoryQueries';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export const useInventories = (params: IInventoryParams) => {
  return useQuery({
    queryKey: [QUERY_KEYS.INVENTORIES, params],
    queryFn: () => fetchInventory(params),
    placeholderData: keepPreviousData,
    staleTime: 5000,
    retry: 3,
  });
};

export const useInventoryItems = (params: IInventoryItemsParams) => {
  return useQuery({
    queryKey: [QUERY_KEYS.INVENTORY_ITEMS, params],
    queryFn: () => fetchInventoryItems(params),
    placeholderData: keepPreviousData,
    staleTime: 5000,
    retry: 3,
  });
};
