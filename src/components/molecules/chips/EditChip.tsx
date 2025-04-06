import { FaPenToSquare } from 'react-icons/fa6';

import { Chip } from '../../atoms';
import { SimpleTooltip } from '../tooltips';

export default function EditChip({ onClick }: { onClick: () => void }) {
  return (
    <SimpleTooltip text='Editar'>
      <button onClick={onClick}>
        <Chip className='bg-yellow-400'>
          <FaPenToSquare className='text-xl text-white' />
        </Chip>
      </button>
    </SimpleTooltip>
  );
}
