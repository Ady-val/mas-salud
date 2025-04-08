'use client';

import React from 'react';
import { Tab, Tabs } from '@mas-salud/components/atoms';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DashboardFooter,
  DashboardHeader,
  DashboardMainLayout,
} from '@mas-salud/components/templates';

let tabs = [
  {
    id: 'products',
    label: 'Productos',
    href: '/dashboard/medicines/products',
  },
  {
    id: 'inventory',
    label: 'Inventario',
    href: '/dashboard/medicines/inventory',
  },
];

interface MedicinesPageProps {
  children: React.ReactNode;
}

const pathLabel = {
  products: 'Productos',
  inventory: 'Inventario',
};

const MedicinesPage: React.FC<MedicinesPageProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <DashboardMainLayout
      header={<DashboardHeader title='Medicamentos' />}
      footer={<DashboardFooter text='Institución: DIF' />}
    >
      <div className='flex w-full justify-between'>
        <div className='header-subtitle'>
          {pathLabel[getActiveTab(pathname) as keyof typeof pathLabel] ||
            'Cargando...'}
        </div>
        <Tabs
          aria-label='Dynamic tabs'
          color='primary'
          selectedKey={getActiveTab(pathname)}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              title={
                <Link href={tab.href} className='w-full block text-left'>
                  {tab.label}
                </Link>
              }
            />
          ))}
        </Tabs>
      </div>
      <div>{children}</div>
    </DashboardMainLayout>
  );
};

function getActiveTab(pathname: string) {
  if (pathname.includes('/products')) return 'products';
  if (pathname.includes('/inventory')) return 'inventory';
  return '';
}

export default MedicinesPage;
