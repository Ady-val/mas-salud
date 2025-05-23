'use client';

import { useModal } from '@mas-salud/context/ModalContext';

import { Modal } from '../../atoms';

export default function BaseModal() {
  const { isOpen, closeModal, modalContent } = useModal();

  return (
    <Modal
      size='3xl'
      isOpen={isOpen}
      onOpenChange={closeModal}
      isDismissable={false}
      classNames={{
        backdrop:
          'bg-gradient-to-t from-button-primary/20 to-button-primary/10 backdrop-opacity-20',
      }}
      placement='top'
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: 'easeOut',
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: 'easeIn',
            },
          },
        },
      }}
      className='base-modal'
    >
      {modalContent}
    </Modal>
  );
}
