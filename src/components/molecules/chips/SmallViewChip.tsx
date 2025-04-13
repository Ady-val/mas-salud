import { FaEye } from 'react-icons/fa6';

import { Chip } from '../../atoms';
import { SimpleTooltip } from '../tooltips';

export default function SmallViewChip({ onClick }: { onClick: () => void }) {
  return (
    <SimpleTooltip text='Ver'>
      <button onClick={onClick}>
        <Chip size='md' className='bg-secondary'>
          <FaEye className='text-lg text-white' />
        </Chip>
      </button>
    </SimpleTooltip>
  );
}
