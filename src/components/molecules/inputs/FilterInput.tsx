'use client";';

import { Input as HeroInput, InputProps } from '../../atoms';

export default function FilterInput({
  label,
  type = 'text',
  placeholder,
  className,
  ...props
}: InputProps) {
  return (
    <div className=''>
      <HeroInput
        className={`max-w-[12rem] ${className}`}
        label={<div className='text-primary'>{label}</div>}
        placeholder={placeholder}
        type={type}
        variant='flat'
        {...props}
      />
    </div>
  );
}
