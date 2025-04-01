import React from 'react';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className='dashboard-layout'>
      <header className='dashboard-header'>
        <h1>Dashboard</h1>
      </header>
      <main className='dashboard-content'>{children}</main>
      <footer className='dashboard-footer'>
        <p>&copy; {new Date().getFullYear()} Mas Salud</p>
      </footer>
    </div>
  );
};

export default DashboardLayout;
