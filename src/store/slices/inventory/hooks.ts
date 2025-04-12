import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useDebounce } from '@mas-salud/hooks/useDebounce';

import { inventoryFiltersSelector } from './selectors';

export const useInventoryFilters = () => {
  const filters = useSelector(inventoryFiltersSelector);

  const stableFilters = useMemo(() => {
    return { ...filters };
  }, [filters]);

  return useDebounce(stableFilters, 500);
};
