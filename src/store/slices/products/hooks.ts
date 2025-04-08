import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useDebounce } from '@mas-salud/hooks/useDebounce';

import { productsFiltersSelector } from './selectors';

export const useProductsFilters = () => {
  const filters = useSelector(productsFiltersSelector);

  const stableFilters = useMemo(() => {
    return { ...filters };
  }, [filters]);

  return useDebounce(stableFilters, 500);
};
