import { FaPlus } from 'react-icons/fa6';

import { Chip } from '../../atoms';
import { SimpleTooltip } from '../tooltips';

export default function PlusChip({ onClick }: { onClick: () => void }) {
  return (
    <SimpleTooltip text='Agregar'>
      <button onClick={onClick}>
        <Chip className='bg-success'>
          <FaPlus className='text-xl text-white' />
        </Chip>
      </button>
    </SimpleTooltip>
  );
}
