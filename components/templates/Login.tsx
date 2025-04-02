'use client';

import React, { useEffect, useState } from 'react';
import { isAxiosError } from 'axios';
import { redirect } from 'next/navigation';

import { AuthForm } from '@/components/organisms';
import { useLogin } from '@/hooks/useLogin';
import { formatErrorMessage } from '@/helpers/DataFormat';
import { translateRequestErrorMessages } from '@/constants/errorMessages';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const mutation = useLogin();
  const { isError, error, mutateAsync: login } = mutation;

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await login({ username, password });
    } catch (err) {
      setIsLoading(false);
      setIsInvalid(true);
    }
  };

  useEffect(() => {
    if (isError) {
      if (isAxiosError(error)) {
        const message = formatErrorMessage(error?.response?.data.message);

        setErrorMessage(translateRequestErrorMessages[message] || message);
      } else {
        console.log('Error:', error.message);
        setErrorMessage(error.message);
      }
      setIsLoading(false);
      setIsInvalid(true);
    }
  }, [isError, error]);

  return (
    <AuthForm
      username={username}
      password={password}
      onChangeUsername={(e) => setUsername(e.target.value)}
      onChangePassword={(e) => setPassword(e.target.value)}
      isLoading={isLoading}
      onClick={handleLogin}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
    />
  );
};

export default Login;
