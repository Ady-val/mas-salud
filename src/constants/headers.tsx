'use client';
import {
  BeneficiaryCell,
  KeyValueCell,
  ModalBeneficiaryCell,
  ModalSettingsCell,
  SettingsCell,
  SimpleCell,
  SimpleDateModaCell,
  SimpleModalCell,
} from '@mas-salud/components/molecules/table-cells';
import { TDataHeaders } from '@mas-salud/types/table';

import { SPECIALITIES_LABELS } from './specialities';

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
      cell: (_value, item) =>
        SettingsCell({ value: item, onView, onEdit, onDelete }),
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
      key: 'id',
      label: 'Configuración',
      props: {
        align: 'end',
        className: 'w-[5rem]',
      },
      cell: (_value, item) =>
        SettingsCell({
          value: item,
          onView,
          onEdit,
          onDelete,
        }),
    },
  ];
};

export const HMedicineProductsModal = (): TDataHeaders<any>[] => {
  return [
    {
      key: 'name',
      label: 'Nombre',
      props: {
        width: 300,
      },
      cell: SimpleModalCell,
    },
    {
      key: 'brand',
      label: 'Marca',
      props: {
        width: 300,
        align: 'center',
      },
      cell: SimpleModalCell,
    },
    {
      key: 'dosage',
      label: 'Dosis',
      props: {
        width: 300,
        align: 'center',
      },
      cell: SimpleModalCell,
    },
    {
      key: 'unit',
      label: 'Unidad',
      props: {
        width: 300,
        align: 'center',
      },
      cell: SimpleModalCell,
    },
    {
      key: 'form',
      label: 'Forma',
      props: {
        width: 300,
        align: 'center',
      },
      cell: SimpleModalCell,
    },
    {
      key: 'presentation',
      label: 'Presentación',
      props: {
        width: 300,
        align: 'center',
      },
      cell: SimpleModalCell,
    },
  ];
};

export const HBeneficiariesModal = (): TDataHeaders<any>[] => {
  return [
    {
      key: 'name',
      label: 'Nombre',
      props: {
        width: 300,
      },
      cell: ModalBeneficiaryCell,
    },
    {
      key: 'curp',
      label: 'CURP',
      props: {
        width: 300,
      },
      cell: SimpleModalCell,
    },
  ];
};

export const HBeneficiaryHistoryModal = (): TDataHeaders<any>[] => {
  return [
    {
      key: 'ticketNumber',
      label: 'Ticket',
      props: {
        width: 200,
      },
      cell: SimpleModalCell,
    },
    {
      key: 'product',
      label: 'Medicamento',
      props: {
        width: 300,
      },
      cell: SimpleModalCell,
    },
    {
      key: 'quantity',
      label: 'Cantidad',
      props: {
        width: 100,
        align: 'center',
      },
      cell: SimpleModalCell,
    },
    {
      key: 'institution',
      label: 'Institución',
      props: {
        width: 100,
        align: 'center',
      },
      cell: SimpleModalCell,
    },
    {
      key: 'createdAt',
      label: 'Fecha',
      props: {
        width: 300,
      },
      cell: SimpleDateModaCell,
    },
  ];
};

export const HMedicineInventory = ({
  onView,
}: {
  onView: (value: string) => void;
}): TDataHeaders<any>[] => {
  return [
    {
      key: 'name',
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
      key: 'batches',
      label: 'Lotes',
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
      cell: (_value, item) =>
        SettingsCell({
          value: item,
          onView,
        }),
    },
  ];
};

export const HMedicineInventoryItemsModal = (): TDataHeaders<any>[] => {
  return [
    {
      key: 'barcode',
      label: 'Código de Barras',
      props: {
        align: 'center',
        width: 300,
      },
      cell: SimpleModalCell,
    },
    {
      key: 'product',
      label: 'Nombre',
      props: {
        align: 'center',
        width: 300,
      },
      cell: SimpleModalCell,
    },
    {
      key: 'batchNumber',
      label: 'Número de Lote',
      props: {
        align: 'center',
        width: 300,
      },
      cell: SimpleModalCell,
    },
    {
      key: 'currentQuantity',
      label: 'Disponible',
      props: {
        align: 'center',
        width: 300,
      },
      cell: SimpleModalCell,
    },
    {
      key: 'expirationDate',
      label: 'Fecha de Vencimiento',
      props: {
        align: 'center',
        width: 300,
      },
      cell: SimpleModalCell,
    },
  ];
};

export const HMedicineInventoryItems = ({
  onDelete,
}: {
  onDelete: (value: any) => void;
}): TDataHeaders<any>[] => {
  return [
    {
      key: 'barcode',
      label: 'Código de Barras',
      props: {
        align: 'center',
        width: 300,
      },
      cell: SimpleModalCell,
    },
    {
      key: 'batchNumber',
      label: 'Número de Lote',
      props: {
        align: 'center',
        width: 300,
      },
      cell: SimpleModalCell,
    },
    {
      key: 'quantity',
      label: 'Cantidad Inicial',
      props: {
        align: 'center',
        width: 300,
      },
      cell: SimpleModalCell,
    },
    {
      key: 'currentQuantity',
      label: 'Disponible',
      props: {
        align: 'center',
        width: 300,
      },
      cell: SimpleModalCell,
    },
    {
      key: 'expirationDate',
      label: 'Fecha de Vencimiento',
      props: {
        align: 'center',
        width: 300,
      },
      cell: SimpleModalCell,
    },
    {
      key: 'id',
      label: 'Configuración',
      props: {
        align: 'end',
        className: 'w-[5rem]',
      },
      cell: (_value, item) =>
        ModalSettingsCell({
          value: item,
          onDelete,
        }),
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
      key: 'fullName',
      label: 'Nombre',
      props: {
        width: 300,
      },
      cell: SimpleCell,
    },
    {
      key: 'speciality',
      label: 'Especialidad',
      props: {
        width: 300,
      },
      cell: (value, _item) => KeyValueCell(value, SPECIALITIES_LABELS),
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
      cell: (_value, item) =>
        SettingsCell({
          value: item,
          onView,
          onEdit,
          onDelete,
        }),
    },
  ];
};
