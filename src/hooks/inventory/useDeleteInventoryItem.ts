import { deleteInventoryItem } from '@mas-salud/lib/apiClient/inventoryQueries';
import { useMutation } from '@tanstack/react-query';

export const useDeleteInventoryItem = () => {
  return useMutation({
    mutationFn: (id: string) => deleteInventoryItem(id),
  });
};
