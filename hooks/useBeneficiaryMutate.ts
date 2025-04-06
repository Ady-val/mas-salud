import { useMutation } from '@tanstack/react-query';

import { IBeneficiary } from '@/interfaces/beneficiaries';
import {
  createBeneficiary,
  deleteBeneficiary,
  updateBeneficiary,
} from '@/lib/apiClient';

export const useNewBeneficiary = () => {
  return useMutation({
    mutationFn: (data: IBeneficiary) => createBeneficiary(data),
  });
};

export const useUpdateBeneficiary = () => {
  return useMutation({
    mutationFn: (data: IBeneficiary) => updateBeneficiary(data),
  });
};

export const useDeleteBeneficiary = () => {
  return useMutation({
    mutationFn: (id: string) => deleteBeneficiary(id),
  });
};

export const useBeneficiaryMutation = () => {
  const mutation = useMutation({
    mutationFn: async (
      beneficiaryData: Partial<IBeneficiary> & { id?: string },
    ) => {
      if (!!beneficiaryData?.id) {
        return await updateBeneficiary(beneficiaryData as IBeneficiary);
      } else {
        return await createBeneficiary(beneficiaryData as IBeneficiary);
      }
    },
  });

  return mutation;
};
