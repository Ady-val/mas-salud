'use client';

import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import axiosInstance from '@mas-salud/lib/apiClient/Axios';

interface LoginRequest {
  username: string;
  password: string;
}

const login = async ({ username, password }: LoginRequest): Promise<any> => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem('authToken', data['accessToken']);
      router.push('/dashboard');
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        if (error?.response?.status === 401) {
          console.error('Credenciales incorrectas.');
          // Actualiza el estado para mostrar un mensaje al usuario
        } else {
          console.error('Error en la solicitud:', error?.response?.data);
        }
      } else {
        console.error('Error:', error.message);
      }

      throw error;
    },
  });
};
