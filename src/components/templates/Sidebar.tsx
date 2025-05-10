'use client';

import { sidebarRoutes } from '@mas-salud/constants/sidebarRoutes';
import { useAbilityPermissions } from '@mas-salud/store/slices/permissions';
import { FaPowerOff } from 'react-icons/fa6';
import { useLogout } from '@mas-salud/hooks/session/useLogout';
import { useToast } from '@mas-salud/hooks/useToast';

import { NavLink } from '../molecules';

const SideBar = () => {
  const { errorToast } = useToast();
  const { ability } = useAbilityPermissions();
  const mutation = useLogout();
  const { mutateAsync: logout } = mutation;

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      errorToast('Error al cerrar sesión');
      console.error('Error al cerrar sesión', error);
    }
  };

  const permitedRoutes = sidebarRoutes.filter((route) => {
    const permissions = ability.actionsFor(route.module);

    return permissions.includes('read') || permissions.includes('manage');
  });

  return (
    <aside className='w-[80px] bg-primary h-full flex flex-col'>
      <div className='w-full h-20' />
      <div className='w-full flex flex-col gap-1'>
        {permitedRoutes.map((item, index) => (
          <NavLink
            key={index}
            id={item.title}
            to={item.path}
            icon={item.icon}
          />
        ))}
      </div>
      <div className='w-full h-full flex items-end justify-center p-3'>
        <button
          onClick={handleLogout}
          className='text-white text-xl h-10 w-10 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-200'
        >
          <FaPowerOff />
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
