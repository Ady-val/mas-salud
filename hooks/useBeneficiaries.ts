import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { UseBeneficiariesParams } from '@/interfaces/beneficiaries';
import { fetchBeneficiaries } from '@/lib/apiClient';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useBeneficiaries = (params: UseBeneficiariesParams) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BENEFICIARIES, params],
    queryFn: () => fetchBeneficiaries(params),
    placeholderData: keepPreviousData,
    staleTime: 5000,
    retry: 3,
  });
};
