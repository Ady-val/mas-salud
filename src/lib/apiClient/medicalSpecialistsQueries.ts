import {
  IMedicalSpecialist,
  IMedicalSpecialistsParams,
} from '@mas-salud/interfaces/medicalSpecialists';

import axiosInstance from './Axios';

export const fetchMedicalSpecialists = async (
  params: IMedicalSpecialistsParams,
) => {
  const response = await axiosInstance.get('/medical-specialists', { params });

  return response.data;
};

export const createMedicalSpecialist = async (data: IMedicalSpecialist) => {
  const response = await axiosInstance.post('/medical-specialists', data);

  return response.data;
};

export const updateMedicalSpecialist = async (data: IMedicalSpecialist) => {
  const response = await axiosInstance.patch(
    `/medical-specialists/${data.id}`,
    data,
  );

  return response.data;
};

export const deleteMedicalSpecialist = async (id: string) => {
  const response = await axiosInstance.delete(`/medical-specialists/${id}`);

  return response.data;
};
