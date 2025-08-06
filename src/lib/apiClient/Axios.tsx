'use client';

import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
  // baseURL: 'http://adal.tailba64d6.ts.net:4000',
  // baseURL: 'http://mas-salud.tailba64d6.ts.net:4000',
  baseURL: 'http://localhost:4000',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('token');

    if (accessToken) {
      if (config.headers) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en la respuesta de Axios:', error.status, error.code);
    if (error?.status === 401 && !window.location.pathname.includes('/login')) {
      window.location.href = '/login';
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
