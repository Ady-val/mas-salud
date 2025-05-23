'use client';

import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import axiosInstance from '@mas-salud/lib/apiClient/Axios';

import { useToast } from './useToast';

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
    console.log('Success respoonse:', username);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useLogin = () => {
  const router = useRouter();
  const { errorToast } = useToast();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log('Success:', data);
      localStorage.setItem('authToken', data['accessToken']);
      window.location.href = '/dashboard';
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        if (error?.response?.status === 401) {
          errorToast(
            'Error al iniciar sesión. Por favor, verifique sus credenciales.',
          );
        } else {
          errorToast('Error en la solicitud:', error?.response?.data);
        }
      } else {
        errorToast('Error:', error.message);
      }
    },
  });
};
