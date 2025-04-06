import React from 'react';

import SideBar from '../Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className='flex h-screen min-h-[40rem] overflow-auto'>
      <SideBar />
      <main className='flex-1 h-full overflow-auto px-6 py-4 shadow-inner-layout'>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
