import React from 'react';

import { AuthLayout, Login } from '@/components/templates';

const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
};

export default LoginPage;
