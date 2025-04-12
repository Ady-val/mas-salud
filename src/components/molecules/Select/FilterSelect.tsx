import { IOption } from '@mas-salud/interfaces/common';

import { Select, SelectItem, SelectProps } from '../../atoms';

interface FilterSelectProps extends Omit<SelectProps, 'children'> {
  label: string;
  placeholder?: string;
  options: IOption[];
}

export default function FilterSelect({
  label,
  placeholder,
  options,
  ...props
}: FilterSelectProps) {
  return (
    <Select
      {...props}
      variant='flat'
      color='default'
      className='max-w-xs'
      label={<span className='text-primary'>{label}</span>}
      placeholder={placeholder}
    >
      {options.map((item) => (
        <SelectItem key={item.key}>{item.label}</SelectItem>
      ))}
    </Select>
  );
}
