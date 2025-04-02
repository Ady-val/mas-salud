import { DeleteChip, EditChip, ViewChip } from '../chips';

export const SettingsCell = (
  value: string,
  onView: (value: string) => void,
  onEdit: (value: string) => void,
  onDelete: (value: string) => void,
): React.ReactNode => {
  return (
    <div className='w-full flex items-center justify-end'>
      <div className='w-fit flex gap-2'>
        <ViewChip onClick={() => onView(value)} />
        <EditChip onClick={() => onEdit(value)} />
        <DeleteChip onClick={() => onDelete(value)} />
      </div>
    </div>
  );
};
