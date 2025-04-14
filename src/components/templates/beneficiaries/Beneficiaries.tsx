import React from 'react';
import { useModal } from '@mas-salud/context/ModalContext';
import { Button } from '@mas-salud/components/molecules';
import { useHasPermission } from '@mas-salud/store/slices/permissions';
import { Action } from '@mas-salud/enum/actions';
import { Modules } from '@mas-salud/enum/modules';

import {
  BeneficiariesData,
  BeneficiariesFilters,
  BeneficiaryFormModal,
} from '.';

const Beneficiaries: React.FC = () => {
  const { openModal } = useModal();
  const createPermission = useHasPermission(
    Action.Create,
    Modules.Beneficiaries,
  );

  const handleOpenModal = () => {
    openModal(<BeneficiaryFormModal />);
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <BeneficiariesFilters />
        <Button
          text='Agregar Beneficiario'
          onClick={handleOpenModal}
          disabled={!createPermission}
          disabledText='No tienes permisos para crear un beneficiario'
        />
      </div>
      <BeneficiariesData />
    </div>
  );
};

export default Beneficiaries;
