import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { IProductsParams } from '@mas-salud/interfaces/products';
import { fetchProducts } from '@mas-salud/lib/apiClient/productsQueries';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export const useProducts = (params: IProductsParams) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS, params],
    queryFn: () => fetchProducts(params),
    placeholderData: keepPreviousData,
    staleTime: 5000,
    retry: 3,
  });
};
