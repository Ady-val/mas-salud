import { DeleteChip, EditChip, ViewChip } from '../chips';

export const SettingsCell = (
  value: any,
  onView: (value: any) => void,
  onEdit: (value: any) => void,
  onDelete: (value: any) => void,
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
