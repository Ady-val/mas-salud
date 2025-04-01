import React from 'react';

interface DashboardPageProps {
  children: React.ReactNode;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ children }) => {
  return <>{children}</>;
};

export default DashboardPage;
