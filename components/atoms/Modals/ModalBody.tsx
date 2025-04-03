import { ModalBody as HerouiModalBody } from '@heroui/modal';
import { ReactNode } from 'react';

export default function ModalBody({ children }: { children: ReactNode }) {
  return (
    <HerouiModalBody className='mt-4 mb-2 gap-10'>{children}</HerouiModalBody>
  );
}
