'use client';

import { Modules } from '@mas-salud/enum/modules';
import { isReadPermission } from '@mas-salud/helpers/permissions';
import { useAbilityPermissions } from '@mas-salud/store/slices/permissions';
import { redirect } from 'next/navigation';
import React from 'react';

interface MainLayoutProps {
  systemModule: Modules;
  header?: React.ReactElement;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

const DashboardMainLayout: React.FC<MainLayoutProps> = ({
  systemModule,
  header,
  footer,
  children,
}) => {
  const { ability } = useAbilityPermissions();
  const permissions = ability.actionsFor(systemModule);

  if (!isReadPermission(permissions) && systemModule !== Modules.Dashboard) {
    redirect('/dashboard');
  }

  return (
    <div className='w-full h-full flex flex-col gap-2'>
      {header && <header className='flex-shrink-0'>{header}</header>}
      <main className='flex-grow bg-white rounded-md shadow-lg px-4 py-2'>
        {children}
      </main>
      {footer && <footer className='flex-shrink-0'>{footer}</footer>}
    </div>
  );
};

export default DashboardMainLayout;
