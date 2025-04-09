import { AlertModal } from '@mas-salud/components/organisms';
import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { useLoading } from '@mas-salud/context/LoadingContext';
import { useModal } from '@mas-salud/context/ModalContext';
import { errorFormat } from '@mas-salud/helpers/errorFormt';
import { useDeleteProduct } from '@mas-salud/hooks/products/useProductMutate';
import { useToast } from '@mas-salud/hooks/useToast';
import { IProduct } from '@mas-salud/interfaces/products';
import { useQueryClient } from '@tanstack/react-query';

interface ProductDeleteAlertModalProps {
  obj: IProduct;
}

const ProductDeleteAlertModal = ({ obj }: ProductDeleteAlertModalProps) => {
  const { errorToast, successToast } = useToast();
  const { showLoading, hideLoading } = useLoading();
  const { closeModal } = useModal();
  const mutation = useDeleteProduct();
  const queryClient = useQueryClient();

  const handleDelete = () => {
    showLoading();
    if (!obj.id) return;
    mutation.mutate(obj.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.PRODUCTS],
        });
        successToast(`Producto ${obj.name} eliminado correctamente`);
      },
      onError: (error) => {
        const formatedError = errorFormat(error);

        errorToast(
          `Error al eliminar el producto ${obj.name}`,
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
      title={`Eliminar producto ${obj.name}`}
      message={
        <div>
          ¿Está seguro de que desea eliminar el producto{' '}
          {<span className='font-medium'>{obj.name}</span>}? Esta acción no se
          puede deshacer.
        </div>
      }
      onClick={handleDelete}
    />
  );
};

export default ProductDeleteAlertModal;
