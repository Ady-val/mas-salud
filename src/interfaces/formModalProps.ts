export interface FormalModalProps<T> {
  onlyView?: boolean;
  obj?: T | null;
  onDelete?: (item: T | undefined) => void;
}
