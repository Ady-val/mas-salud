interface ModalInfoFieldProps {
  label: string;
  value: string | number | undefined | null;
  classNames?: {
    label?: string;
    value?: string;
    layout?: string;
  };
}

const ModalInfoField = ({ label, value, classNames }: ModalInfoFieldProps) => {
  return (
    <div className={`gap-2 ${classNames?.layout}`}>
      <div className={`font-extralight ${classNames?.label}`}>{label}:</div>
      <div className={`font-light text-lg ${classNames?.value}`}>
        {value || ''}
      </div>
    </div>
  );
};

export default ModalInfoField;
