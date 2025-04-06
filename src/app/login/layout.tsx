import React from 'react';

export const metadata = {
  title: 'Más Salud: Login',
  description: 'Más Salud Login',
};

const LoginLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex flex-col min-h-screen">{children}</div>;
};

export default LoginLayout;
