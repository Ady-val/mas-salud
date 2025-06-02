import { AlertModal } from '@mas-salud/components/organisms';
import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { useLoading } from '@mas-salud/context/LoadingContext';
import { useModal } from '@mas-salud/context/ModalContext';
import { errorFormat } from '@mas-salud/helpers/errorFormt';
import { useDeleteUser } from '@mas-salud/hooks/users/useUserMutate';
import { useToast } from '@mas-salud/hooks/useToast';
import { IUser } from '@mas-salud/interfaces/users';
import { useQueryClient } from '@tanstack/react-query';

interface ProfileDeleteAlertModalProps {
  obj: IUser;
}

const ProfileDeleteAlertModal = ({ obj }: ProfileDeleteAlertModalProps) => {
  const { errorToast, successToast } = useToast();
  const { showLoading, hideLoading } = useLoading();
  const { closeModal } = useModal();
  const mutation = useDeleteUser();
  const queryClient = useQueryClient();

  const handleDelete = () => {
    showLoading();
    if (!obj.id) return;
    mutation.mutate(obj.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.USERS],
        });
        successToast(`Usuario ${obj.name} eliminado correctamente`);
      },
      onError: (error) => {
        const formatedError = errorFormat(error);

        errorToast(
          `Error al eliminar el usuario ${obj.name}`,
          formatedError[0].error,
        );
      },
      onSettled: () => {
        hideLoading();
        closeModal();
      },
    });
  };

  return (
    <AlertModal
      title={`Eliminar usuario ${obj.name}`}
      message={
        <div>
          ¿Está seguro de que desea eliminar el usuario{' '}
          {<span className='font-medium'>{obj.name}</span>}? Esta acción no se
          puede deshacer.
        </div>
      }
      onClick={handleDelete}
    />
  );
};

export default ProfileDeleteAlertModal;
