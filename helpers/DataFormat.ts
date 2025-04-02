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
