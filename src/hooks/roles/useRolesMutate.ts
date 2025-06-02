import { IRole } from '@mas-salud/interfaces/roles';
import {
  createRole,
  deleteRole,
  updateRole,
} from '@mas-salud/lib/apiClient/rolesQueries';
import { useMutation } from '@tanstack/react-query';

export const useRoleMutation = () => {
  const mutation = useMutation({
    mutationFn: async (roleData: Partial<IRole> & { id?: string }) => {
      if (!!roleData?.id) {
        return await updateRole(roleData as IRole);
      } else {
        return await createRole(roleData as IRole);
      }
    },
  });

  return mutation;
};

export const useRoleDelete = () => {
  return useMutation({
    mutationFn: (id: string) => deleteRole(id),
  });
};
