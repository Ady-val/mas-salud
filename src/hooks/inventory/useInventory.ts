import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import {
  IInventoryItemsParams,
  IInventoryParams,
  INewInventoryItem,
} from '@mas-salud/interfaces/inventory';
import {
  createInventoryItem,
  fetchInventory,
  fetchInventoryItems,
} from '@mas-salud/lib/apiClient/inventoryQueries';
import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query';

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

export const useNewInventoryItem = () => {
  return useMutation({
    mutationFn: (data: INewInventoryItem) => createInventoryItem(data),
    mutationKey: [QUERY_KEYS.NEW_INVENTORY_ITEM],
  });
};
