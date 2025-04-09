import { Spinner } from '@mas-salud/components/atoms';

export default function Loading() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Spinner size='lg' color='primary' />
    </div>
  );
}
