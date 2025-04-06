import { ModalHeader as HerouiHeaderModal } from '@heroui/modal';
import { ReactNode } from 'react';

export default function ModalHeader({ children }: { children: ReactNode }) {
  return (
    <HerouiHeaderModal className='text-white font-light text-xl border-b-2 border-white'>
      {children}
    </HerouiHeaderModal>
  );
}
