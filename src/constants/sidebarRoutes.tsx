import { Modules } from '@mas-salud/enum/modules';
import {
  FaHandHoldingMedical,
  FaHouse,
  FaPills,
  FaUser,
  FaUserDoctor,
  FaUserGear,
} from 'react-icons/fa6';

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
  {
    title: 'Especialistas',
    path: '/dashboard/specialist',
    icon: <FaUserDoctor />,
    module: Modules.MedicalSpecialists,
  },
  {
    title: 'Entrega de Medicamentos',
    path: '/dashboard/medication-dispensing',
    icon: <FaHandHoldingMedical />,
    module: Modules.MedicationDispensing,
  },
  {
    title: 'Usuarios',
    path: '/dashboard/users/profiles',
    icon: <FaUserGear />,
    module: Modules.Users,
  },
];
