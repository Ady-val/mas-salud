'use client';

import { Button } from '@mas-salud/components/molecules';
import { useModal } from '@mas-salud/context/ModalContext';
import React from 'react';
import { FaUserPlus } from 'react-icons/fa6';
import { IBeneficiary } from '@mas-salud/interfaces/beneficiaries';
import { useBeneficiaryForMedicines } from '@mas-salud/store/slices/beneficiaryForMedicines';

import SelectBenficiaryModal from './SelectBeneficiaryModal';

const SelectedBeneficiary: React.FC = () => {
  const { openModal } = useModal();
  const { beneficiary, setBeneficiary } = useBeneficiaryForMedicines();

  const handleGetSelectedBeneficiary = (
    selectedBeneficiary: IBeneficiary | null,
  ) => {
    if (!selectedBeneficiary) return;

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
    <div className='h-20 pl-20 flex justify-center items-center'>
      {beneficiary?.id ? (
        <div className='flex w-full h-full'>
          <div className='flex w-full justify-start items-start'>
            <table className='min-w-[40%]'>
              <tbody>
                <tr>
                  <td className='text-lg font-semibold text-subtitle-primary'>
                    Nombre:
                  </td>
                  <td className='text-lg font-medium text-content-primary'>
                    {`${beneficiary.name} ${beneficiary.lastName} ${beneficiary.secondLastName}`}
                  </td>
                </tr>
                <tr>
                  <td className='text-lg font-semibold text-subtitle-primary'>
                    CURP:
                  </td>
                  <td className='text-lg font-medium text-content-primary'>
                    {beneficiary.curp}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='w-full flex justify-end items-start'>
            <Button
              size='lg'
              text={'Cambiar Beneficiario'}
              onClick={handleOpenSelectBeneficiaryModal}
              icon={<FaUserPlus className='text-2xl' />}
            />
          </div>
        </div>
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
