import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { IInventoryParams } from '@mas-salud/interfaces/inventory';
import { fetchInventory } from '@mas-salud/lib/apiClient/inventoryQueries';
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
