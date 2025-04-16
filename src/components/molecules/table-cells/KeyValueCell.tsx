export const KeyValueCell = (
  value: string,
  constants: { [key: string]: string },
): React.ReactNode => {
  return <div className=''>{constants[value]}</div>;
};
