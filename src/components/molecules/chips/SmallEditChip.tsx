import { FaPenToSquare } from 'react-icons/fa6';

import { Chip } from '../../atoms';
import { SimpleTooltip } from '../tooltips';

export default function SmallEditChip({ onClick }: { onClick: () => void }) {
  return (
    <SimpleTooltip text='Editar'>
      <button onClick={onClick}>
        <Chip size='md' className='bg-yellow-400'>
          <FaPenToSquare className='text-lg text-white' />
        </Chip>
      </button>
    </SimpleTooltip>
  );
}
