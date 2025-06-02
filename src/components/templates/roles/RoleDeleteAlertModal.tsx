import { AlertModal } from '@mas-salud/components/organisms';
import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { useLoading } from '@mas-salud/context/LoadingContext';
import { useModal } from '@mas-salud/context/ModalContext';
import { errorFormat } from '@mas-salud/helpers/errorFormt';
import { useRoleDelete } from '@mas-salud/hooks/roles/useRolesMutate';
import { useToast } from '@mas-salud/hooks/useToast';
import { IRole } from '@mas-salud/interfaces/roles';
import { useQueryClient } from '@tanstack/react-query';

interface RoleDeleteAlertModalProps {
  obj: IRole;
}

const RoleDeleteAlertModal = ({ obj }: RoleDeleteAlertModalProps) => {
  const { errorToast, successToast } = useToast();
  const { showLoading, hideLoading } = useLoading();
  const { closeModal } = useModal();
  const mutation = useRoleDelete();
  const queryClient = useQueryClient();

  const handleDelete = () => {
    showLoading();
    if (!obj.id) return;
    mutation.mutate(obj.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.ROLES],
        });
        successToast(`Rol ${obj.name} eliminado correctamente`);
      },
      onError: (error) => {
        const formatedError = errorFormat(error);

        if (formatedError.length > 0) {
          errorToast(
            `Error al eliminar el rol ${obj.name}`,
            formatedError[0].error === 'Cannot delete role'
              ? 'No se puede eliminar el rol porque está en uso'
              : formatedError[0].error,
          );

          return;
        }
        errorToast(`Error al eliminar el rol ${obj.name}`, error.message);
      },
      onSettled: () => {
        hideLoading();
        closeModal();
      },
    });
  };

  return (
    <AlertModal
      title={`Eliminar rol ${obj.name}`}
      message={
        <div>
          ¿Está seguro de que desea eliminar el rol{' '}
          {<span className='font-medium'>{obj.name}</span>}? Esta acción no se
          puede deshacer.
        </div>
      }
      onClick={handleDelete}
    />
  );
};

export default RoleDeleteAlertModal;
