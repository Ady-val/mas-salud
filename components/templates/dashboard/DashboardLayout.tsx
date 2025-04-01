import React from 'react';

import SideBar from '../Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen'>
      <SideBar />
      <main className='flex-1 px-6 py-4'>{children}</main>
    </div>
  );
};

export default DashboardLayout;
