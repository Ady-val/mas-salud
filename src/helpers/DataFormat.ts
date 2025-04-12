import { IOption } from '@mas-salud/interfaces/common';

export const formatErrorMessage = (message: any): string => {
  if (message) {
    if (typeof message === 'string') {
      return message;
    } else if (Array.isArray(message)) {
      return message[0];
    } else {
      return message as string;
    }
  }

  return 'Error desconocido. Por favor, inténtalo de nuevo.';
};

export const formatOptions = (data: any[] | undefined): IOption[] => {
  if (!data) return [];
  if (data.length === 0) return [];

  return data.map((item) => ({
    label: item.name,
    value: item.id,
    key: item.id,
  }));
};
