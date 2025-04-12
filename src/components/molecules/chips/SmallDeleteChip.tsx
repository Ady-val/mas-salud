import { FaTrash } from 'react-icons/fa6';

import { Chip } from '../../atoms';
import { SimpleTooltip } from '../tooltips';

export default function SmallDeleteChip({ onClick }: { onClick: () => void }) {
  return (
    <SimpleTooltip text='Eliminar'>
      <button onClick={onClick}>
        <Chip size='md' className='bg-red-500'>
          <FaTrash className='text-lg text-white' />
        </Chip>
      </button>
    </SimpleTooltip>
  );
}
