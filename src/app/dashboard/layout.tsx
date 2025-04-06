import React from 'react';
import DashboardLayout from '@mas-salud/components/templates/dashboard/DashboardLayout';

const Dashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Dashboard;
