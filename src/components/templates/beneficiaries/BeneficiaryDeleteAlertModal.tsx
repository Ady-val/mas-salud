import { AlertModal } from '@mas-salud/components/organisms';
import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { useLoading } from '@mas-salud/context/LoadingContext';
import { useModal } from '@mas-salud/context/ModalContext';
import { errorFormat } from '@mas-salud/helpers/errorFormt';
import { useDeleteBeneficiary } from '@mas-salud/hooks/useBeneficiaryMutate';
import { useToast } from '@mas-salud/hooks/useToast';
import { IBeneficiary } from '@mas-salud/interfaces/beneficiaries';
import { useQueryClient } from '@tanstack/react-query';

interface BeneficiaryDeleteAlertModalProps {
  obj: IBeneficiary;
}

const BeneficiaryDeleteAlertModal = ({
  obj,
}: BeneficiaryDeleteAlertModalProps) => {
  const { errorToast, successToast } = useToast();
  const { showLoading, hideLoading } = useLoading();
  const { closeModal } = useModal();
  const mutation = useDeleteBeneficiary();
  const queryClient = useQueryClient();

  const handleDelete = () => {
    showLoading();
    if (!obj.id) return;
    mutation.mutate(obj.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.BENEFICIARIES],
        });
        successToast(
          `Beneficiario ${obj.name + ' ' + obj.lastName} eliminado correctamente`,
        );
      },
      onError: (error) => {
        const formatedError = errorFormat(error);

        errorToast(
          `Error al eliminar el beneficiario ${obj.name + ' ' + obj.lastName}`,
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
      title={`Eliminar beneficiario ${obj.name + ' ' + obj.lastName}`}
      message={
        <div>
          ¿Está seguro de que desea eliminar al beneficiario{' '}
          {<span className='font-medium'>{obj.name + ' ' + obj.lastName}</span>}
          ? Esta acción no se puede deshacer.
        </div>
      }
      onClick={handleDelete}
    />
  );
};

export default BeneficiaryDeleteAlertModal;
