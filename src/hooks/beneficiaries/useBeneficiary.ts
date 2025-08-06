import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { fetchBeneficiary } from '@mas-salud/lib/apiClient';

export const useBeneficiary = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BENEFICIARY_IMAGE, id],
    queryFn: () => fetchBeneficiary(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 5000,
    retry: 3,
  });
};
