'use client";';

import { Input as HeroInput, InputProps } from '../../atoms';

export default function ModalInput({
  label,
  type = 'text',
  placeholder,
  ...props
}: InputProps) {
  return (
    <HeroInput
      label={label}
      color='primary'
      labelPlacement='outside'
      placeholder={placeholder}
      type={type}
      classNames={{
        label: 'text-white',
        input: [
          'bg-transparent',
          'text-black/90 dark:text-white/90',
          'placeholder:text-black/50',
        ],
        inputWrapper: ['shadow-xl', 'bg-white'],
      }}
      {...props}
    />
  );
}
