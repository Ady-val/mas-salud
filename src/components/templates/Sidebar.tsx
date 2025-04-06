import { sidebarRoutes } from '@mas-salud/constants/sidebarRoutes';

import { NavLink } from '../atoms';

const SideBar = () => {
  return (
    <aside className='w-[80px] bg-primary h-full'>
      <div className='w-full h-20' />
      <div className='w-full flex flex-col gap-1'>
        {sidebarRoutes.map((item, index) => (
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
