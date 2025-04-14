import { sidebarRoutes } from '@mas-salud/constants/sidebarRoutes';
import { useAbilityPermissions } from '@mas-salud/store/slices/permissions';

import { NavLink } from '../molecules';

const SideBar = () => {
  const { ability } = useAbilityPermissions();

  const permitedRoutes = sidebarRoutes.filter((route) => {
    const permissions = ability.actionsFor(route.module);

    return permissions.includes('read') || permissions.includes('manage');
  });

  return (
    <aside className='w-[80px] bg-primary h-full'>
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
    </aside>
  );
};

export default SideBar;
