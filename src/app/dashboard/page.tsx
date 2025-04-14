import { ScreenLoading } from '@mas-salud/components/molecules';
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardPage: React.FC = () => {
  redirect('/dashboard/home');

  return <ScreenLoading />;
};

export default DashboardPage;
