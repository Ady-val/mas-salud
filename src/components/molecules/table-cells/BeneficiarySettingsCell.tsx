import { CredencialChip, DeleteChip, EditChip, ViewChip } from '../chips';

interface SettingsCellProps {
  value: any;
  onView?: (value: any) => void;
  onEdit?: (value: any) => void;
  onCredencial?: (value: any) => void;
  onDelete?: (value: any) => void;
}

export const BeneficiarySettingsCell = ({
  value,
  onView,
  onEdit,
  onDelete,
  onCredencial,
}: SettingsCellProps): React.ReactNode => {
  return (
    <div className='w-full flex items-center justify-end'>
      <div className='w-fit flex gap-2'>
        {onView && <ViewChip onClick={() => onView(value)} />}
        {onEdit && <EditChip onClick={() => onEdit(value)} />}
        {onCredencial && <CredencialChip onClick={() => onCredencial(value)} />}
        {onDelete && <DeleteChip onClick={() => onDelete(value)} />}
      </div>
    </div>
  );
};
