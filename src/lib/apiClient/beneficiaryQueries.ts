import axiosInstance from '@mas-salud/lib/apiClient/Axios';
import {
  IBeneficiary,
  IBeneficiariesParams,
} from '@mas-salud/interfaces/beneficiaries';

export const fetchBeneficiary = async (id: string) => {
  const response = await axiosInstance.get(`/beneficiaries/${id}`);

  return response.data;
};

export const fetchBeneficiaries = async (params: IBeneficiariesParams) => {
  const response = await axiosInstance.get('/beneficiaries', { params });

  return response.data;
};

export const createBeneficiary = async (data: IBeneficiary) => {
  const response = await axiosInstance.post('/beneficiaries', data);

  return response.data;
};

export const updateBeneficiary = async (data: IBeneficiary) => {
  const response = await axiosInstance.patch(`/beneficiaries/${data.id}`, data);

  return response.data;
};

export const deleteBeneficiary = async (id: string) => {
  const response = await axiosInstance.delete(`/beneficiaries/${id}`);

  return response.data;
};

export const uploadBeneficiaryImage = async (
  id: string,
  file: File,
): Promise<boolean> => {
  const formData = new FormData();

  formData.append('image', file, 'profile.jpg');

  try {
    await axiosInstance.post(`/beneficiaries/${id}/image`, formData);

    return true;
  } catch (error) {
    console.error('Error uploading beneficiary image:', error);

    return false;
  }
};
