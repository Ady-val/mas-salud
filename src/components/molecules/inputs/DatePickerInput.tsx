import { I18nProvider } from '@react-aria/i18n';

import { DatePicker as HeroDatePicker, DatePickerProps } from '../../atoms';

export default function DatePickerInput({ label, ...props }: DatePickerProps) {
  return (
    <I18nProvider locale='es-ES'>
      <HeroDatePicker
        showMonthAndYearPickers={true}
        label={label}
        labelPlacement='outside'
        classNames={{
          label: 'text-white',
          input: ['bg-transparent', 'text-black/90 dark:text-white/90'],
          inputWrapper: ['shadow-xl', 'bg-white'],
        }}
        {...props}
      />
    </I18nProvider>
  );
}
