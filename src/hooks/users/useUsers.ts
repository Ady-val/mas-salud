import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { IUserParams } from '@mas-salud/interfaces/users';
import { fetchUsers } from '@mas-salud/lib/apiClient/userQueries';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export const useUsers = (params: IUserParams) => {
  return useQuery({
    queryKey: [QUERY_KEYS.USERS, params],
    queryFn: () => fetchUsers(params),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
};
