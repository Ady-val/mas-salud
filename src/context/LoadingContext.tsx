'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
  Modal,
  ModalBody,
  ModalContent,
  Spinner,
} from '@mas-salud/components/atoms';

interface LoadingContextProps {
  showLoading: () => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(
  undefined,
);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ showLoading, hideLoading }}>
      {children}
      {isLoading && (
        <Modal
          isOpen={isLoading}
          isDismissable={false}
          hideCloseButton
          backdrop='opaque'
        >
          <ModalContent className='bg-transparent'>
            <ModalBody>
              <div className='flex flex-col items-center justify-center'>
                <Spinner size='lg' color='white' />
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useLoading debe usarse dentro de un LoadingProvider');
  }

  return context;
};
