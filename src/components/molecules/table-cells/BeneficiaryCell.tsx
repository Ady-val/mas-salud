export const BeneficiaryCell = (
  _value: string,
  item: Record<string, any>,
): React.ReactNode => {
  return (
    <div className='text-primary'>
      {`${item.name} ${item.lastName} ${item.secondLastName}`}
    </div>
  );
};
