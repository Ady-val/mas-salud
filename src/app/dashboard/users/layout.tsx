import { NavigatorTabs } from '@mas-salud/components/organisms';
import {
  DashboardFooter,
  DashboardHeader,
  DashboardMainLayout,
} from '@mas-salud/components/templates';
import { Modules } from '@mas-salud/enum/modules';

let tabs = [
  {
    id: 'users',
    label: 'Perfiles',
    href: '/dashboard/users/profiles',
  },
  {
    id: 'roles',
    label: 'Roles',
    href: '/dashboard/users/roles',
  },
];

interface UsersPageProps {
  children: React.ReactNode;
}

const UsersPage: React.FC<UsersPageProps> = ({ children }) => {
  return (
    <DashboardMainLayout
      systemModule={Modules.Users}
      header={<DashboardHeader title='Usuarios' />}
      footer={<DashboardFooter />}
    >
      <NavigatorTabs tabs={tabs} />
      <div>{children}</div>
    </DashboardMainLayout>
  );
};

export default UsersPage;
