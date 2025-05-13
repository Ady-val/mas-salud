import React from 'react';
import { Card, Divider } from '@mas-salud/components/atoms';
import { Button, Input } from '@mas-salud/components/molecules';
import {
  CardHeader,
  CardBody,
  CardFooter,
} from '@mas-salud/components/molecules';

interface AuthFormProps {
  username: string;
  password: string;
  onChangeUsername: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  onClick: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  username,
  password,
  onChangeUsername,
  onChangePassword,
  isLoading,
  isInvalid = false,
  errorMessage,
  onClick,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <form onSubmit={handleSubmit}>
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
            type='submit'
            text='Iniciar Sesión'
            className='w-full'
            isLoading={isLoading}
            disabled={isLoading}
            onClick={onClick}
          />
          <div className='w-full mt-3 flex items-center justify-center text-red-500 text-sm'>
            {isInvalid && errorMessage && (
              <span className='w-3/4 text-wrap text-center'>
                {errorMessage}
              </span>
            )}
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};

export default AuthForm;
