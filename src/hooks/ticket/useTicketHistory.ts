import { QUERY_KEYS } from '@mas-salud/constants/queryKeys';
import { fetchTicketHistory } from '@mas-salud/lib/apiClient';
import { useQuery } from '@tanstack/react-query';

export const useTicketHistory = (beneficiaryId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.TICKET_HISTORY, beneficiaryId],
    queryFn: () => fetchTicketHistory(beneficiaryId),
  });
};
