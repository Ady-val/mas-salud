import {
  BeneficiaryCell,
  SettingsCell,
  SimpleCell,
} from '@/components/molecules/table-cells';
import { TDataHeaders } from '@/types/table';

export const HBeneficiaries = ({
  onView,
  onEdit,
  onDelete,
}: {
  onView: (value: string) => void;
  onEdit: (value: string) => void;
  onDelete: (value: string) => void;
}): TDataHeaders<any>[] => {
  return [
    {
      key: 'name',
      label: 'Nombre',
      props: {
        //hideheader: true, // true | false
        //align: 'start', // "start" | "center" | "end",
        width: 300,
        // maxWidth: 300,
        // minWidth: '100px',
        // className: '',
      },
      cell: BeneficiaryCell,
    },
    {
      key: 'curp',
      label: 'CURP',
      props: {
        // hideheader: true, // true | false
        // align: 'end', // "start" | "center" | "end",
        width: 300,
        // maxWidth: '100px',
        // minWidth: '100px',
        // className: 'w-[5rem]',
      },
      cell: SimpleCell,
    },
    {
      key: 'id',
      label: 'Configuración',
      props: {
        // hideheader: true, // true | false
        align: 'end', // "start" | "center" | "end",
        // width: 300,
        // maxWidth: '100px',
        // minWidth: '100px',
        className: 'w-[5rem]',
      },
      cell: (value, _item) => SettingsCell(value, onView, onEdit, onDelete),
    },
  ];
};
