'use client';

import { Button } from '@mas-salud/components/molecules';
import { useModal } from '@mas-salud/context/ModalContext';
import { useHasPermission } from '@mas-salud/store/slices/permissions';
import { Action } from '@mas-salud/enum/actions';
import { Modules } from '@mas-salud/enum/modules';

import MedicalSpecialistFormModal from './MedicalSpecialistFormModal';
import MedicalSpecialistsFilters from './MedicalSpecialistsFilters';
import MedicalSpecialistsData from './MedicalSpecialistsData';

const MedicalSpecialists: React.FC = () => {
  const { openModal } = useModal();
  const createPermission = useHasPermission(
    Action.Create,
    Modules.Beneficiaries,
  );

  const handleOpenModal = () => {
    openModal(<MedicalSpecialistFormModal />);
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <MedicalSpecialistsFilters />
        <Button
          text='Agregar Nuevo Especialista'
          onClick={handleOpenModal}
          disabled={!createPermission}
          disabledText='No tienes permisos para crear un beneficiario'
        />
      </div>
      <MedicalSpecialistsData />
    </div>
  );
};

export default MedicalSpecialists;
