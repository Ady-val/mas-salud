import { redirect } from 'next/navigation';
import React from 'react';

const DashboardPage: React.FC = () => {
  redirect('/dashboard/medicines/inventory');
};

export default DashboardPage;
