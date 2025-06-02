'use client';

import { Button } from '@mas-salud/components/molecules';
import { useModal } from '@mas-salud/context/ModalContext';
import { Action } from '@mas-salud/enum/actions';
import { Modules } from '@mas-salud/enum/modules';
import { useHasPermission } from '@mas-salud/store/slices/permissions';

import UsersData from './ProfilesData';
import ProfileFormModal from './ProfileFormModal';

const Profiles: React.FC = () => {
  const { openModal } = useModal();
  const createPermission = useHasPermission(Action.Create, Modules.Users);

  const handleOpenModal = () => {
    openModal(<ProfileFormModal />);
  };

  return (
    <div className='flex flex-col gap-4 mt-2'>
      <div className='flex justify-end items-center'>
        <Button
          text='Agregar Usuario'
          onClick={handleOpenModal}
          disabled={!createPermission}
          disabledText='No tienes permisos para crear un usuario'
        />
      </div>
      <UsersData />
    </div>
  );
};

export default Profiles;
