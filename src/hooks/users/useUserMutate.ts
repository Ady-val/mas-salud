import { IUserForm } from '@mas-salud/interfaces/users';
import {
  createUser,
  deleteUser,
  updateUser,
} from '@mas-salud/lib/apiClient/userQueries';
import { useMutation } from '@tanstack/react-query';

export const useUserMutation = () => {
  const mutation = useMutation({
    mutationFn: async (userData: Partial<IUserForm> & { id?: string }) => {
      if (!!userData?.id) {
        return await updateUser(userData as IUserForm);
      } else {
        return await createUser(userData as IUserForm);
      }
    },
  });

  return mutation;
};

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: (id: string) => deleteUser(id),
  });
};
