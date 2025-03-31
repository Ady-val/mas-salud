import React from 'react';
import { Button as HerouiButton } from '@heroui/button';
import { FaCircleNotch } from 'react-icons/fa6';

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
      colorScheme='primary'
      className={`${className}`}
      onClick={onClick}
      disabled={disabled}
      isLoading={isLoading}
    >
      {text}
    </HerouiButton>
  );
};

export default Button;
