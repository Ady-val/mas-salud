import React from 'react';
import {
  DashboardFooter,
  DashboardHeader,
  DashboardMainLayout,
} from '@mas-salud/components/templates';
import { NavigatorTabs } from '@mas-salud/components/organisms';

let tabs = [
  {
    id: 'inventory',
    label: 'Inventario',
    href: '/dashboard/medicines/inventory',
  },
  {
    id: 'products',
    label: 'Productos',
    href: '/dashboard/medicines/products',
  },
];

interface MedicinesPageProps {
  children: React.ReactNode;
}

const MedicinesPage: React.FC<MedicinesPageProps> = ({ children }) => {
  return (
    <DashboardMainLayout
      header={<DashboardHeader title='Medicamentos' />}
      footer={<DashboardFooter text='Institución: DIF' />}
    >
      <NavigatorTabs tabs={tabs} />
      <div>{children}</div>
    </DashboardMainLayout>
  );
};

export default MedicinesPage;
