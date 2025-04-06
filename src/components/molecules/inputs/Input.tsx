'use client";';

import { Input as HeroInput, InputProps } from '../../atoms';

export default function Input({
  label,
  type = 'text',
  placeholder,
  className,
  ...props
}: InputProps) {
  return (
    <div className='input-form'>
      <HeroInput
        className={`${className}`}
        label={<div className='text-content-card'>{label}</div>}
        labelPlacement='outside'
        placeholder={placeholder}
        type={type}
        variant='underlined'
        {...props}
      />
    </div>
  );
}
