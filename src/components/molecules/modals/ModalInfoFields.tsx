interface ModalInfoFieldProps {
  label: string;
  value: string | number | undefined | null;
  description?: string;
  classNames?: {
    label?: string;
    value?: string;
    description?: string;
    layout?: string;
  };
}

const ModalInfoField = ({
  label,
  value,
  description,
  classNames,
}: ModalInfoFieldProps) => {
  return (
    <div className={`gap-2 ${classNames?.layout}`}>
      <div className={`font-extralight ${classNames?.label}`}>{label}:</div>
      <div className={`font-light text-lg h-8 ${classNames?.value}`}>
        {value || ''}
      </div>
      <div
        className={`text-sm font-light text-white/70 ${classNames?.description}`}
      >
        {description}
      </div>
    </div>
  );
};

export default ModalInfoField;
