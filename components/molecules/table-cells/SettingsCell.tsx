import { FaEye, FaPenToSquare, FaTrash } from 'react-icons/fa6';

export const SettingsCell = (
  value: string,
  onView: (value: string) => void,
  onEdit: (value: string) => void,
  onDelete: (value: string) => void,
): React.ReactNode => {
  return (
    <div className='w-full flex items-center justify-end'>
      <div className='w-fit h-12 flex gap-2'>
        <button onClick={() => onView(value)}>
          <FaEye className='text-2xl text-primary' />
        </button>
        <button onClick={() => onEdit(value)}>
          <FaPenToSquare className='text-2xl text-yellow-300' />
        </button>
        <button onClick={() => onDelete(value)}>
          <FaTrash className='text-2xl text-red-500' />
        </button>
      </div>
    </div>
  );
};
