'use client';

import React from 'react';

import { Button as HerouiButton } from '../../atoms';
import { SimpleTooltip } from '../tooltips';

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
  disabledText?: string;
  isLoading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  disabledText,
  className = '',
  color = 'secondary',
  isLoading = false,
}) => {
  const disabledMessage = disabledText ?? 'No disponible';

  return (
    <SimpleTooltip text={disabledMessage} isDisabled={!disabled} color='danger'>
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
    </SimpleTooltip>
  );
};

export default Button;
