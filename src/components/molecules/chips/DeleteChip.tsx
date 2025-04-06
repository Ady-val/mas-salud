import { FaTrash } from 'react-icons/fa6';

import { Chip } from '../../atoms';
import { SimpleTooltip } from '../tooltips';

export default function DeleteChip({ onClick }: { onClick: () => void }) {
  return (
    <SimpleTooltip text='Eliminar'>
      <button onClick={onClick}>
        <Chip className='bg-red-500'>
          <FaTrash className='text-xl text-white' />
        </Chip>
      </button>
    </SimpleTooltip>
  );
}
