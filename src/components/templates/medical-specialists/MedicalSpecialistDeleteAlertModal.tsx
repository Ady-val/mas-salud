import { AlertModal } from '@mas-salud/components/organisms';
import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { useLoading } from '@mas-salud/context/LoadingContext';
import { useModal } from '@mas-salud/context/ModalContext';
import { errorFormat } from '@mas-salud/helpers/errorFormt';
import { useDeleteMedicalSpecialist } from '@mas-salud/hooks/medicalSpecialists/useMedicalSpecialistMutate';
import { useToast } from '@mas-salud/hooks/useToast';
import { IMedicalSpecialist } from '@mas-salud/interfaces/medicalSpecialists';
import { useQueryClient } from '@tanstack/react-query';

interface MedicalSpecialistDeleteAlertModalProps {
  obj: IMedicalSpecialist;
}

const MedicalSpecialistDeleteAlertModal = ({
  obj,
}: MedicalSpecialistDeleteAlertModalProps) => {
  const { errorToast, successToast } = useToast();
  const { showLoading, hideLoading } = useLoading();
  const { closeModal } = useModal();
  const mutation = useDeleteMedicalSpecialist();
  const queryClient = useQueryClient();

  const handleDelete = () => {
    showLoading();
    if (!obj.id) return;
    mutation.mutate(obj.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.MEDICAL_SPECIALISTS],
        });
        successToast(`Especialista ${obj.fullName} eliminado correctamente`);
      },
      onError: (error) => {
        const formatedError = errorFormat(error);

        errorToast(
          `Error al eliminar el especialista ${obj.fullName}`,
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
      title={`Eliminar especialista ${obj.fullName}`}
      message={
        <div>
          ¿Está seguro de que desea eliminar al especialista{' '}
          {<span className='font-medium'>{obj.fullName}</span>}? Esta acción no
          se puede deshacer.
        </div>
      }
      onClick={handleDelete}
    />
  );
};

export default MedicalSpecialistDeleteAlertModal;
