import { useMutation } from '@tanstack/react-query';

import { IBeneficiary } from '@/interfaces/beneficiaries';
import { createBeneficiary } from '@/lib/apiClient';

export const useNewBeneficiary = () => {
  return useMutation({
    mutationFn: (data: IBeneficiary) => createBeneficiary(data),
  });
};
