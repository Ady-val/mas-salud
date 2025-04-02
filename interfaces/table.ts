import { Item, TDataHeaders } from '@/types/table';

export interface TableProps {
  headers: TDataHeaders<any>[];
  data: Array<Item>;
  count: number;
  rowsPerPage: number;
  currentPage?: number;
  isLoading?: boolean;
  onPageChange: (page: number) => void;
  onSelectionChange: (item: Item) => void;
}
