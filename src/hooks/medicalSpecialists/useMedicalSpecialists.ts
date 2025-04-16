import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { IMedicalSpecialistsParams } from '@mas-salud/interfaces/medicalSpecialists';
import { fetchMedicalSpecialists } from '@mas-salud/lib/apiClient/medicalSpecialistsQueries';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export const useMedicalSpecialists = (params: IMedicalSpecialistsParams) => {
  return useQuery({
    queryKey: [QUERY_KEYS.MEDICAL_SPECIALISTS, params],
    queryFn: () => fetchMedicalSpecialists(params),
    placeholderData: keepPreviousData,
    staleTime: 5000,
    retry: 3,
  });
};
