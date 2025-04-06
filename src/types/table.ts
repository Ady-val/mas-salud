import { TableColumnProps } from '@mas-salud/components/atoms';

export type Item = Record<string, any>;

export type TDataHeaders<T> = {
  key: string;
  label: string;
  props?: Omit<TableColumnProps<T>, 'children' | 'key'>;
  cell?: (value: string, item: Record<string, any>) => React.ReactNode;
};
