import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { fetchInstitutions } from '@mas-salud/lib/apiClient/institutionQueries';
import { useQuery } from '@tanstack/react-query';

export const useInstitutions = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.INSTITUTIONS],
    queryFn: fetchInstitutions,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 1,
    staleTime: 5000,
  });
};
