'use client';

import { Button } from '@mas-salud/components/molecules';
import { useModal } from '@mas-salud/context/ModalContext';
import React, { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa6';
import { IBeneficiary } from '@mas-salud/interfaces/beneficiaries';

import SelectBenficiaryModal from './SelectBeneficiaryModal';
import { useDispatch } from 'react-redux';
import { setBeneficiaryForMedicines } from '@mas-salud/store/slices/beneficiaryForMedicines';

const SelectedBeneficiary: React.FC = () => {
  const dispatch = useDispatch();
  const { openModal } = useModal();
  const [beneficiary, setBeneficiary] = useState<IBeneficiary | null>(null);

  const handleGetSelectedBeneficiary = (
    selectedBeneficiary: IBeneficiary | null,
  ) => {
    if (!selectedBeneficiary) return;

    dispatch(setBeneficiaryForMedicines(selectedBeneficiary));
    setBeneficiary(selectedBeneficiary);
  };

  const handleOpenSelectBeneficiaryModal = () => {
    openModal(
      <SelectBenficiaryModal
        onBeneficiarySelected={handleGetSelectedBeneficiary}
      />,
    );
  };

  return (
    <div className='h-32 flex justify-center items-center'>
      {beneficiary ? (
        <div>{beneficiary.name}</div>
      ) : (
        <Button
          size='lg'
          text={'Seleccionar Beneficiario'}
          onClick={handleOpenSelectBeneficiaryModal}
          icon={<FaUserPlus className='text-2xl' />}
        />
      )}
    </div>
  );
};

export default SelectedBeneficiary;
