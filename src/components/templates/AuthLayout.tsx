import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const AuthLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${className}`}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
