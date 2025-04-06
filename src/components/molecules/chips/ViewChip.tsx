import { FaEye } from 'react-icons/fa6';

import { Chip, SimpleTooltip } from '../../atoms';

export default function ViewChip({ onClick }: { onClick: () => void }) {
  return (
    <SimpleTooltip text='Ver'>
      <Chip onClick={onClick} className='bg-primary'>
        <FaEye className='text-xl text-white' />
      </Chip>
    </SimpleTooltip>
  );
}
