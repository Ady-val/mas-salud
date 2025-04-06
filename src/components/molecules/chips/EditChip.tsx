import { FaPenToSquare } from 'react-icons/fa6';

import { Chip, SimpleTooltip } from '../../atoms';

export default function EditChip({ onClick }: { onClick: () => void }) {
  return (
    <SimpleTooltip text='Editar'>
      <Chip onClick={onClick} className='bg-yellow-400'>
        <FaPenToSquare className='text-xl text-white' />
      </Chip>
    </SimpleTooltip>
  );
}
