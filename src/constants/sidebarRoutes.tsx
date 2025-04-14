import { Modules } from '@mas-salud/enum/modules';
import { FaHouse, FaPills, FaUser, FaUserDoctor } from 'react-icons/fa6';

interface SidebarRoute {
  title: string;
  path: string;
  icon: JSX.Element;
  module: string;
}

export const sidebarRoutes: SidebarRoute[] = [
  {
    title: 'Home',
    path: '/dashboard/home',
    icon: <FaHouse />,
    module: Modules.Dashboard,
  },
  {
    title: 'Beneficiarios',
    path: '/dashboard/beneficiaries',
    icon: <FaUser />,
    module: Modules.Beneficiaries,
  },
  {
    title: 'Beneficiarios',
    path: '/dashboard/medicines',
    icon: <FaPills />,
    module: Modules.Products,
  },
  // {
  //   title: 'Especialistas',
  //   path: '/dashboard/specialist',
  //   icon: <FaUserDoctor />,
  // },
  // {
  //   title: 'Configuración',
  //   path: '/dashboard/settings',
  //   icon: <FaScrewdriverWrench />,
  // },
];
