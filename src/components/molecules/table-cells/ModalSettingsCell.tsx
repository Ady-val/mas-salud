import { SmallDeleteChip, SmallEditChip, SmallViewChip } from '../chips';

interface ModalSettingsCellProps {
  value: any;
  onView?: (value: any) => void;
  onEdit?: (value: any) => void;
  onDelete?: (value: any) => void;
}

export const ModalSettingsCell = ({
  value,
  onView,
  onEdit,
  onDelete,
}: ModalSettingsCellProps): React.ReactNode => {
  return (
    <div className='w-full flex items-center justify-end'>
      <div className='w-fit flex gap-2'>
        {onView && <SmallViewChip onClick={() => onView(value)} />}
        {onEdit && <SmallEditChip onClick={() => onEdit(value)} />}
        {onDelete && <SmallDeleteChip onClick={() => onDelete(value)} />}
      </div>
    </div>
  );
};
