'use client';

import React from 'react';
import DashboardLayout from '@mas-salud/components/templates/dashboard/DashboardLayout';
import { useLoadPermissions } from '@mas-salud/store/slices/permissions';
import { ScreenLoading } from '@mas-salud/components/molecules';

const Dashboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { loading } = useLoadPermissions();

  if (loading) {
    return <ScreenLoading />;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Dashboard;
