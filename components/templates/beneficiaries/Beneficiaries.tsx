import React from 'react';

import {
  BeneficiariesData,
  BeneficiariesFilters,
  CreateBeneficiaryModal,
} from '.';

import { useModal } from '@/context/ModalContext';
import { Button } from '@/components/atoms';

const Beneficiaries: React.FC = () => {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal(
      <CreateBeneficiaryModal
        onSave={() => {
          // Handle save action here
        }}
      />,
    );
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <BeneficiariesFilters />
        <Button
          text='Agregar Beneficiario'
          color='primary'
          onClick={handleOpenModal}
        />
      </div>
      <BeneficiariesData />
    </div>
  );
};

export default Beneficiaries;
