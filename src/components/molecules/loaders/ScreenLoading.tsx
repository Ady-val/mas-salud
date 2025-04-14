import { Spinner } from '../../atoms';

export default function ScreenLoading() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Spinner size='lg' color='primary' />
    </div>
  );
}
