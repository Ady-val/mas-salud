import axiosInstance from '@/lib/apiClient/Axios';
import { UseBeneficiariesParams } from '@/interfaces/beneficiaries';

export const fetchBeneficiaries = async (params: UseBeneficiariesParams) => {
  const response = await axiosInstance.get('/beneficiaries', { params });

  return response.data;
};
