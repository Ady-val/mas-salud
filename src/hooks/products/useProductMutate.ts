import { IProduct } from '@mas-salud/interfaces/products';
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from '@mas-salud/lib/apiClient';
import { useMutation } from '@tanstack/react-query';

export const useNewProduct = () => {
  return useMutation({
    mutationFn: (data: IProduct) => createProduct(data),
  });
};

export const useUpdateProduct = () => {
  return useMutation({
    mutationFn: (data: IProduct) => updateProduct(data),
  });
};

export const useDeleteProduct = () => {
  return useMutation({
    mutationFn: (id: string) => deleteProduct(id),
  });
};

export const useProductMutation = () => {
  const mutation = useMutation({
    mutationFn: async (productData: Partial<IProduct> & { id?: string }) => {
      if (!!productData?.id) {
        return await updateProduct(productData as IProduct);
      } else {
        return await createProduct(productData as IProduct);
      }
    },
  });

  return mutation;
};
