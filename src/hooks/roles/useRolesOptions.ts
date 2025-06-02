import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { fetchRolesOptions } from '@mas-salud/lib/apiClient/rolesQueries';
import { useQuery } from '@tanstack/react-query';

export const useRoleOptions = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.ROLES_OPTIONS],
    queryFn: fetchRolesOptions,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 1,
    staleTime: 5000,
  });
};
