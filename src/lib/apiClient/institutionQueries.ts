import axiosInstance from './Axios';

export const fetchInstitutions = async () => {
  const response = await axiosInstance.get('/institutions');

  return response.data;
};
