import { FaEye } from 'react-icons/fa6';

import { Chip } from '../../atoms';
import { SimpleTooltip } from '../tooltips';

export default function ViewChip({ onClick }: { onClick: () => void }) {
  return (
    <SimpleTooltip text='Ver'>
      <button onClick={onClick}>
        <Chip className='bg-primary'>
          <FaEye className='text-xl text-white' />
        </Chip>
      </button>
    </SimpleTooltip>
  );
}
