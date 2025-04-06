import { isAxiosError } from 'axios';

interface ErrorFormat {
  field: string;
  error: string;
}

export const errorFormat = (error: Error): ErrorFormat[] => {
  if (isAxiosError(error)) {
    const response = error?.response?.data;

    if (Array.isArray(response?.message)) {
      return response.message.map((err: { field: string; error: string }) => ({
        field: err.field,
        error: err.error,
      }));
    } else if (typeof response?.message === 'string') {
      return [{ field: 'general', error: response.message }];
    }
  }

  return [{ field: 'Error', error: error.message }];
};
