import { FaHouse, FaPills, FaUser, FaUserDoctor } from 'react-icons/fa6';

interface SidebarRoute {
  title: string;
  path: string;
  icon: JSX.Element;
}

export const sidebarRoutes: SidebarRoute[] = [
  {
    title: 'Home',
    path: '/dashboard/home',
    icon: <FaHouse />,
  },
  {
    title: 'Beneficiarios',
    path: '/dashboard/beneficiaries',
    icon: <FaUser />,
  },
  {
    title: 'Beneficiarios',
    path: '/dashboard/medicines',
    icon: <FaPills />,
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
