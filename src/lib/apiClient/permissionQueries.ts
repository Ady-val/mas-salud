import axiosInstance from './Axios';

export const fetchMe = async () => {
  const response = await axiosInstance.get('/me');

  return response.data;
};
