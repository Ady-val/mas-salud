'use client';

import ModalInfoField from '@mas-salud/components/molecules/modals/ModalInfoFields';
import { AlertModal } from '@mas-salud/components/organisms';
import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { useLoading } from '@mas-salud/context/LoadingContext';
import { useModal } from '@mas-salud/context/ModalContext';
import { errorFormat } from '@mas-salud/helpers/errorFormt';
import { useDeleteInventoryItem } from '@mas-salud/hooks/inventory/useDeleteInventoryItem';
import { useToast } from '@mas-salud/hooks/useToast';
import { IInventoryItem } from '@mas-salud/interfaces/inventory';
import { useQueryClient } from '@tanstack/react-query';

const InventoryItemAlertDeleteModal = ({ obj }: { obj: IInventoryItem }) => {
  const { errorToast, successToast } = useToast();
  const { showLoading, hideLoading } = useLoading();
  const { closeModal } = useModal();
  const mutation = useDeleteInventoryItem();
  const queryClient = useQueryClient();

  const handleDelete = () => {
    showLoading();
    if (!obj.id) return;
    mutation.mutate(obj.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.INVENTORIES],
        });
        successToast(`Lote ${obj.batchNumber} eliminado correctamente`);
      },
      onError: (error) => {
        const formatedError = errorFormat(error);

        errorToast(
          `Error al eliminar el lote ${obj.batchNumber}`,
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
      title='¿Estás seguro de eliminar este lote?'
      message={
        <div className='gap-4'>
          <div className='mb-2 text-lg text-center underline underline-offset-4 decoration-red-500'>
            ¿Está seguro de que desea eliminar el lote? Esta acción no se puede
            deshacer.
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <ModalInfoField
              label='Producto'
              value={obj?.product}
              classNames={{ layout: 'col-span-full' }}
            />
            <ModalInfoField
              label='Institución'
              value={obj?.institution}
              classNames={{ layout: 'col-span-full' }}
            />
            <ModalInfoField label='Código de Barras' value={obj?.barcode} />
            <ModalInfoField label='Número de Lote' value={obj?.batchNumber} />
            <ModalInfoField
              label='Fecha de Vencimiento'
              value={obj?.expirationDate}
            />
            <ModalInfoField label='Cantidad Registrada' value={obj?.quantity} />
          </div>
        </div>
      }
      onClick={handleDelete}
    />
  );
};

export default InventoryItemAlertDeleteModal;
