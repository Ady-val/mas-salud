import { FaTrash } from 'react-icons/fa6';

import { Chip, SimpleTooltip } from '../../atoms';

export default function DeleteChip({ onClick }: { onClick: () => void }) {
  return (
    <SimpleTooltip text='Eliminar'>
      <Chip onClick={onClick} className='bg-red-500'>
        <FaTrash className='text-xl text-white' />
      </Chip>
    </SimpleTooltip>
  );
}
