'use client';

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
  // baseURL: 'https://tu-api.com/api',
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (axios.isAxiosError(error)) {
//       console.warn(
//         'Interceptado error de Axios:',
//         error.response?.data || error.message,
//       );

//       // Evitar que Next.js lo rastree devolviendo una respuesta vacía en vez de lanzar el error
//       return Promise.resolve({ data: null });
//     }

//     return Promise.reject(error);
//   },
// );

export default axiosInstance;
