import React from 'react';

import { AuthForm } from '@/components/organisms';

const Login: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isInvalid, setIsInvalid] = React.useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    console.log('Logging in with:', { username, password });
  };

  return (
    <div>
      <AuthForm
        username={username}
        password={password}
        onChangeUsername={(e) => setUsername(e.target.value)}
        onChangePassword={(e) => setPassword(e.target.value)}
        isLoading={isLoading}
        onClick={handleLogin}
        isInvalid={isInvalid}
      />
    </div>
  );
};

export default Login;
