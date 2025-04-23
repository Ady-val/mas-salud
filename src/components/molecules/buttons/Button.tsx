'use client';

import React from 'react';

import { Button as HerouiButton } from '../../atoms';
import { SimpleTooltip } from '../tooltips';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
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
  disabledText?: string;
  isLoading?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  size = 'md',
  text,
  onClick,
  disabled = false,
  disabledText,
  className = '',
  color = 'secondary',
  isLoading = false,
  icon,
}) => {
  const disabledMessage = disabledText ?? 'No disponible';

  return (
    <SimpleTooltip text={disabledMessage} isDisabled={!disabled} color='danger'>
      <HerouiButton
        type={type}
        size={size}
        radius='md'
        variant='solid'
        color={color}
        className={`${className}`}
        onPress={onClick}
        disabled={disabled}
        isLoading={isLoading}
        startContent={icon}
      >
        {text}
      </HerouiButton>
    </SimpleTooltip>
  );
};

export default Button;
