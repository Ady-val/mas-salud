'use client';

import React from 'react';

import { Button as HerouiButton } from '../../atoms';

interface ButtonProps {
  text: string;
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  className = '',
  color = 'default',
  isLoading = false,
}) => {
  return (
    <HerouiButton
      size='md'
      radius='md'
      variant='solid'
      color={color}
      className={`${className}`}
      onPress={onClick}
      disabled={disabled}
      isLoading={isLoading}
    >
      {text}
    </HerouiButton>
  );
};

export default Button;
