import { redirect } from 'next/navigation';
import React from 'react';

const DashboardPage: React.FC = () => {
  redirect('/dashboard/home');
};

export default DashboardPage;
