import { Tooltip } from '../../atoms';

export default function SimpleTooltip({
  text,
  children,
}: {
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <Tooltip content={text} placement='top'>
      {children}
    </Tooltip>
  );
}
