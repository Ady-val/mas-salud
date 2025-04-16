import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useDebounce } from '@mas-salud/hooks/useDebounce';

import { medicalSpecialistFiltersSelector } from './selectors';

export const useMedicalSpecialistsFilters = () => {
  const filters = useSelector(medicalSpecialistFiltersSelector);

  const stableFilters = useMemo(() => {
    return {
      fullName: filters.fullName,
      specialty: filters.specialty,
      institutionId: filters.institutionId,
    };
  }, [filters]);

  return useDebounce(stableFilters, 500);
};
