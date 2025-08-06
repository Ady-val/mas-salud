import { FaAddressCard } from 'react-icons/fa6';

import { Chip } from '../../atoms';
import { SimpleTooltip } from '../tooltips';

export default function CredencialChip({ onClick }: { onClick: () => void }) {
  return (
    <SimpleTooltip text='Credencial'>
      <button onClick={onClick}>
        <Chip className='bg-secondary'>
          <FaAddressCard className='text-xl text-white' />
        </Chip>
      </button>
    </SimpleTooltip>
  );
}
