import { Select, SelectItem, SelectProps } from '../../atoms';

interface Option {
  key: string;
  label: string;
  value: string;
}

interface FilterSelectProps extends Omit<SelectProps, 'children'> {
  label: string;
  placeholder: string;
  options: Option[];
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
