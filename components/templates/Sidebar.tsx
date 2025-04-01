import { NavLink } from '../atoms';

import { sidebarRoutes } from '@/constants/sidebarRoutes';

const SideBar = () => {
  return (
    <aside className='w-[80px] bg-primary h-screen'>
      <div className='w-full h-20' />
      <div className='w-full flex flex-col gap-1'>
        {sidebarRoutes.map((item, index) => (
          <NavLink
            key={index}
            id={item.title}
            to={item.path}
            label={item.title}
            icon={item.icon}
          />
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
