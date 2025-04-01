import { FaHouse, FaScrewdriverWrench } from 'react-icons/fa6';

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
    title: 'Configuración',
    path: '/dashboard/settings',
    icon: <FaScrewdriverWrench />,
  },
];
