'use client';

import { axiosInstance } from '@mas-salud/lib/apiClient';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { isAxiosError } from 'axios';

import { useToast } from '../useToast';

const logout = async () => {
  try {
    const response = await axiosInstance.post('/auth/logout', {});

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useLogout = () => {
  const router = useRouter();
  const { errorToast } = useToast();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      router.push('/login');
    },
    onError: (error) => {
      console.error('Error al cerrar sesión:', error);
      errorToast('Error al cerrar sesión, intente de nuevo', error.message);
    },
  });
};
