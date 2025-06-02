'use client';

import { Button } from '@mas-salud/components/molecules';
import { useModal } from '@mas-salud/context/ModalContext';
import { Action } from '@mas-salud/enum/actions';
import { Modules } from '@mas-salud/enum/modules';
import { useHasPermission } from '@mas-salud/store/slices/permissions';

import RolesData from './RolesData';
import RoleFormModal from './RoleFormModal';

const Roles: React.FC = () => {
  const { openModal } = useModal();
  const createPermission = useHasPermission(Action.Create, Modules.Roles);

  const handleOpenModal = () => {
    openModal(<RoleFormModal />);
  };

  return (
    <div className='flex flex-col gap-4 mt-2'>
      <div className='flex justify-end items-center'>
        <Button
          text='Agregar Role'
          onClick={handleOpenModal}
          disabled={!createPermission}
          disabledText='No tienes permisos para crear un role'
        />
      </div>
      <RolesData />
    </div>
  );
};

export default Roles;
