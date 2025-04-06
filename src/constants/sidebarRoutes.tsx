import { FaHouse, FaUser } from 'react-icons/fa6';

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
  // {
  //   title: 'Configuración',
  //   path: '/dashboard/settings',
  //   icon: <FaScrewdriverWrench />,
  // },
];
