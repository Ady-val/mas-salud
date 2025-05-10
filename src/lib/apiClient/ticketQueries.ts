import { INewTicket } from '@mas-salud/interfaces/ticket';

import axiosInstance from './Axios';

export const newTicket = (data: INewTicket) => {
  return axiosInstance.post('/tickets', data).then((response) => response.data);
};

export const fetchTicketHistory = (beneficiaryId: string) => {
  return axiosInstance
    .get(`/tickets/history/${beneficiaryId}`)
    .then((response) => response.data);
};
