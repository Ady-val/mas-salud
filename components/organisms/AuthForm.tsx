import React from 'react';

import { Card, Divider, Input, Button } from '@/components/atoms';
import { CardHeader, CardBody, CardFooter } from '@/components/molecules';

interface AuthFormProps {
  username: string;
  password: string;
  onChangeUsername: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  isInvalid?: boolean;
  onClick: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  username,
  password,
  onChangeUsername,
  onChangePassword,
  isLoading,
  isInvalid = false,
  onClick,
}) => {
  return (
    <Card>
      <CardHeader title='Iniciar Sesión' />
      <Divider />
      <CardBody>
        <Input
          label='Ingresa tu usuario'
          type='text'
          className='text-main'
          color='secondary'
          value={username}
          onChange={onChangeUsername}
          isInvalid={isInvalid}
          disabled={isLoading}
        />
        <Input
          label='Ingresa tu contraseña'
          type='password'
          className='text-main'
          color='secondary'
          value={password}
          onChange={onChangePassword}
          isInvalid={isInvalid}
          disabled={isLoading}
        />
      </CardBody>
      <CardFooter>
        <Button
          text='Iniciar Sesión'
          color='secondary'
          className='w-full'
          isLoading={isLoading}
          disabled={isLoading}
          onClick={onClick}
        />
        <div className='w-full h-2 mt-3 flex items-center justify-center text-red-500 text-sm'>
          {isInvalid && 'Error en usuario o contraseña'}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
