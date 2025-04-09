import { IOption } from '@mas-salud/interfaces/common';

import { Select, SelectItem, SelectProps } from '../../atoms';

interface SimpleSelectProps extends Omit<SelectProps, 'children'> {
  label: string;
  placeholder: string;
  options: IOption[];
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
      className={`'max-w-xs' ${props.className}`}
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
