import axiosInstance from '@/lib/apiClient/Axios';
import {
  IBeneficiary,
  UseBeneficiariesParams,
} from '@/interfaces/beneficiaries';

export const fetchBeneficiaries = async (params: UseBeneficiariesParams) => {
  const response = await axiosInstance.get('/beneficiaries', { params });

  return response.data;
};

export const createBeneficiary = async (data: IBeneficiary) => {
  const response = await axiosInstance.post('/beneficiaries', data);

  return response.data;
};
