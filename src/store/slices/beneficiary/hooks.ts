import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useDebounce } from '@mas-salud/hooks/useDebounce';

import { filtersSelector } from './selectors';

export const useBeneficiaryFilters = () => {
  const filters = useSelector(filtersSelector);

  const stableFilters = useMemo(() => {
    return {
      name: filters.name,
      lastName: filters.lastName,
      curp: filters.curp,
    };
  }, [filters]);

  return useDebounce(stableFilters, 500);
};
