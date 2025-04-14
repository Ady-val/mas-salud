import { Tooltip, TooltipProps } from '../../atoms';

interface SimpleTooltipProps extends TooltipProps {
  text: string;
  isDisabled?: boolean;
  children?: React.ReactNode;
}

export default function SimpleTooltip({
  text,
  isDisabled = false,
  children,
  ...props
}: SimpleTooltipProps) {
  return (
    <Tooltip content={text} isDisabled={isDisabled} placement='top' {...props}>
      {children}
    </Tooltip>
  );
}
