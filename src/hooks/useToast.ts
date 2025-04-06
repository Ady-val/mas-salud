import { addToast } from '@heroui/toast';

export function useToast() {
  const simpleToast = (
    message: string,
    description: string | undefined = undefined,
  ) => {
    addToast({
      title: message,
      description,
      color: 'default',
    });
  };

  const successToast = (
    message: string,
    description: string | undefined = undefined,
  ) => {
    addToast({
      title: message,
      description,
      color: 'success',
    });
  };

  const errorToast = (
    message: string,
    description: string | undefined = undefined,
  ) => {
    addToast({
      title: message,
      description,
      color: 'danger',
    });
  };

  const warningToast = (
    message: string,
    description: string | undefined = undefined,
  ) => {
    addToast({
      title: message,
      description,
      color: 'warning',
    });
  };

  return { simpleToast, successToast, errorToast, warningToast };
}
