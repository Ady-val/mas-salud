'use client';

import { useDisclosure } from '@heroui/modal';
import React, { createContext, useContext, ReactNode } from 'react';

interface ModalContextProps {
  isOpen: boolean;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  modalContent: ReactNode | null;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = React.useState<ReactNode | null>(
    null,
  );

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    onOpen();
  };

  const closeModal = () => {
    onClose();
    setModalContent(null);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, modalContent }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal debe usarse dentro de un ModalProvider');
  }

  return context;
};
