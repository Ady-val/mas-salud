'use client';

import React from 'react';
import { Button } from '@heroui/button';
import { InputProps } from '@heroui/input';

interface ButtonProps extends InputProps {
  type?: 'button' | 'submit' | 'reset';
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

const ModalButton: React.FC<ButtonProps> = ({
  type = 'button',
  text,
  onClick,
  disabled = false,
  className = '',
  color = 'default',
  isLoading = false,
}) => {
  return (
    <Button
      type={type}
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
    </Button>
  );
};

export default ModalButton;
