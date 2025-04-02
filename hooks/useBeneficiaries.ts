import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { UseBeneficiariesParams } from '@/interfaces/beneficiaries';
import { fetchBeneficiaries } from '@/lib/apiClient';

export const useBeneficiaries = (params: UseBeneficiariesParams) => {
  return useQuery({
    queryKey: ['beneficiaries', params],
    queryFn: () => fetchBeneficiaries(params),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });
};
