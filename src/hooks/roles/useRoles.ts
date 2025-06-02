import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { IRolesParams } from '@mas-salud/interfaces/roles';
import { fetchRoles } from '@mas-salud/lib/apiClient/rolesQueries';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export const useRoles = (params: IRolesParams) => {
  return useQuery({
    queryKey: [QUERY_KEYS.ROLES, params],
    queryFn: () => fetchRoles(params),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
};
