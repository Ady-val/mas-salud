import { INewTicket } from '@mas-salud/interfaces/ticket';
import { newTicket } from '@mas-salud/lib/apiClient';
import { useMutation } from '@tanstack/react-query';

export const useNewTicket = () => {
  return useMutation({
    mutationFn: (data: INewTicket) => newTicket(data),
    mutationKey: ['newTicket'],
  });
};
