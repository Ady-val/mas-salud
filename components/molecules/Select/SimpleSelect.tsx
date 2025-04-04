import { SelectProps } from '@heroui/select';

import { Select, SelectItem } from '../../atoms';

interface Option {
  key: string;
  label: string;
  value: string;
}

interface SimpleSelectProps extends Omit<SelectProps, 'children'> {
  label: string;
  placeholder: string;
  options: Option[];
}

export default function SimpleSelect({
  label,
  placeholder,
  options,
  ...props
}: SimpleSelectProps) {
  return (
    <Select
      {...props}
      isRequired
      color='default'
      className='max-w-xs'
      label={<span className='text-white'>{label}</span>}
      placeholder={placeholder}
      labelPlacement='outside'
    >
      {options.map((item) => (
        <SelectItem key={item.key}>{item.label}</SelectItem>
      ))}
    </Select>
  );
}
