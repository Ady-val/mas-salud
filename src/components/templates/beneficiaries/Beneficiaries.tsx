import React from 'react';
import { useModal } from '@mas-salud/context/ModalContext';
import { Button } from '@mas-salud/components/molecules';

import {
  BeneficiariesData,
  BeneficiariesFilters,
  BeneficiaryFormModal,
} from '.';

const Beneficiaries: React.FC = () => {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal(<BeneficiaryFormModal />);
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
