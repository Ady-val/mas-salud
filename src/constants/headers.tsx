import {
  BeneficiaryCell,
  SettingsCell,
  SimpleCell,
} from '@mas-salud/components/molecules/table-cells';
import { TDataHeaders } from '@mas-salud/types/table';

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
      cell: (_value, item) => SettingsCell(item, onView, onEdit, onDelete),
    },
  ];
};

export const HMedicineProducts = ({
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
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'brand',
      label: 'Marca',
      props: {
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'dosage',
      label: 'Dosis',
      props: {
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'unit',
      label: 'Unidad',
      props: {
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'form',
      label: 'Forma',
      props: {
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'presentation',
      label: 'Presentación',
      props: {
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'quantity',
      label: 'Cantidad',
      props: {
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'id',
      label: 'Configuración',
      props: {
        align: 'end',
        className: 'w-[5rem]',
      },
      cell: (_value, item) => SettingsCell(item, onView, onEdit, onDelete),
    },
  ];
};

export const HMedicineInventory = ({
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
      key: 'medicine',
      label: 'Medicamento',
      props: {
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'institution',
      label: 'Institución',
      props: {
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'quantity',
      label: 'Cantidad',
      props: {
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'unit',
      label: 'Unidad',
      props: {
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'presentation',
      label: 'Presentación',
      props: {
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'quantity',
      label: 'Cantidad',
      props: {
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'id',
      label: 'Configuración',
      props: {
        align: 'end',
        className: 'w-[5rem]',
      },
      cell: (value, _item) => SettingsCell(value, onView, onEdit, onDelete),
    },
  ];
};

export const HSpecialist = ({
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
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'profession',
      label: 'Profesión ',
      props: {
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'institution',
      label: 'Institución',
      props: {
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'id',
      label: 'Configuración',
      props: {
        align: 'end',
        className: 'w-[5rem]',
      },
      cell: (value, _item) => SettingsCell(value, onView, onEdit, onDelete),
    },
  ];
};
