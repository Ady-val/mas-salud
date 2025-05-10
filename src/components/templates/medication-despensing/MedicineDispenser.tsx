'use client';

import {
  Button,
  DeleteChip,
  FilterInput,
  PlusChip,
} from '@mas-salud/components/molecules';
import { useItemByBarcode } from '@mas-salud/hooks/inventory/useInventoryItemByBarcode';
import { useToast } from '@mas-salud/hooks/useToast';
import { IInventoryItem } from '@mas-salud/interfaces/inventory';
import { useBeneficiaryForMedicines } from '@mas-salud/store/slices/beneficiaryForMedicines';
import { useEffect, useRef, useState } from 'react';
import { FaReceipt, FaSistrix } from 'react-icons/fa6';
import { Spinner } from '@mas-salud/components/atoms';
import { errorFormat } from '@mas-salud/helpers/errorFormt';
import { translateRequestErrorMessages } from '@mas-salud/constants/errorMessages';
import { useModal } from '@mas-salud/context/ModalContext';
import { useNewTicket } from '@mas-salud/hooks/ticket/useNewTicket';

import SearchInventoryProductModal from './SearchInventoryProductModal';
import DispenserCancelAlertModal from './DispenserCancelAlertModal';
import DispenseAlertModal from './DispenserAlertModal';

const MedicineDispenser: React.FC = () => {
  const { openModal, closeModal } = useModal();
  const { errorToast } = useToast();
  const { beneficiary, deleteBeneficiary } = useBeneficiaryForMedicines();
  const [ticket, setTicket] = useState<IInventoryItem[]>();
  const { mutateAsync: sendTicket } = useNewTicket();

  const handleNewItem = (item: IInventoryItem) => {
    const isItemInTicket =
      ticket?.filter((i) => i.barcode === item.barcode) || [];

    if (isItemInTicket.length >= item.currentQuantity) {
      errorToast('Ya no hay más unidades disponibles en inventario');

      return;
    }

    setTicket(ticket?.concat(item) || [item]);
  };

  const handleDeleteItem = (id: string | undefined) => {
    const index = ticket?.findIndex((item) => item.id === id);

    if (index !== undefined && index >= 0) {
      const newTicket = [...ticket!];

      newTicket.splice(index, 1);
      setTicket(newTicket);
    }
  };

  const handleCancelTicket = () => {
    openModal(<DispenserCancelAlertModal onCancel={cancelTicket} />);
  };

  const cancelTicket = () => {
    closeModal();
    setTicket([]);
    deleteBeneficiary();
  };

  const handleAcceptTicket = () => {
    if (!beneficiary?.id) {
      errorToast('No hay beneficiario seleccionado');

      return;
    }
    if (!ticket || ticket.length === 0) {
      return;
    }

    sendTicket({
      beneficiaryId: beneficiary?.id,
      inventoryItemId: ticket?.map((item) => item.id || ''),
    })
      .then(() => {
        closeModal();
        setTicket([]);
        deleteBeneficiary();
      })
      .catch((error) => {
        console.log(error);
        const [e] = errorFormat(error);

        errorToast(
          'Error al entregar medicamentos',
          translateRequestErrorMessages[e.error] || '',
        );
      });
  };

  const handleProceed = () => {
    if (!ticket || ticket.length === 0) {
      errorToast('No hay medicamentos en el ticket');

      return;
    }

    openModal(
      <DispenseAlertModal
        beneficiary={beneficiary}
        ticket={ticket}
        onAccept={handleAcceptTicket}
      />,
    );
  };

  return (
    <div className='w-full h-full flex justify-center items-center'>
      {beneficiary?.id ? (
        <div className='w-full h-full flex flex-col gap-3'>
          <div className='w-full h-20 flex justify-start items-end'>
            <Search onNewItem={handleNewItem} />
          </div>
          <div className='w-full h-full'>
            <Medicines
              ticket={ticket || []}
              onDelete={handleDeleteItem}
              onAdd={handleNewItem}
            />
          </div>
          <div className='w-full h-20 flex justify-start items-end'>
            <Actions onProceed={handleProceed} onCancel={handleCancelTicket} />
          </div>
        </div>
      ) : (
        <div className='text-content-secondary text-2xl font-semibold'>
          Tienes que seleccionar a un beneficiario para poder ver los
          medicamentos
        </div>
      )}
    </div>
  );
};

const Search = ({
  onNewItem,
}: {
  onNewItem: (item: IInventoryItem) => void;
}) => {
  const { errorToast } = useToast();
  const { openModal } = useModal();
  const [barcode, setBarcode] = useState<string>('');
  const [keyvalue, setKeyValue] = useState<string>('');
  const { data, isLoading, error } = useItemByBarcode(barcode);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (data) {
      onNewItem(data);
      setBarcode('');
      inputRef.current?.focus();
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      const [e] = errorFormat(error);

      errorToast(
        'Error al buscar el medicamento',
        translateRequestErrorMessages[e.error] || '',
      );
      setBarcode('');
      setKeyValue('');
      inputRef.current?.focus();
    }
  }, [error]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyvalue) return;

    setKeyValue('');

    if (keyvalue.length < 8) {
      errorToast('El código de barras debe tener al menos 8 caracteres');

      return;
    }
    if (keyvalue.length > 12) {
      errorToast('El código de barras no puede tener más de 12 caracteres');

      return;
    }

    setBarcode(keyvalue);
    setKeyValue('');
  };

  const handleOpenModal = () => {
    openModal(<SearchInventoryProductModal onProductSelected={onNewItem} />);
  };

  return (
    <div className='w-full h-full flex justify-between items-center'>
      <form onSubmit={handleOnSubmit}>
        <FilterInput
          ref={inputRef}
          label='Código de Barras'
          placeholder='########'
          value={keyvalue}
          onChange={(e) => setKeyValue(e.target.value)}
          disabled={isLoading}
          endContent={isLoading && <Spinner />}
          className='w-[30rem] max-w-1/3 h-full'
        />
      </form>
      <Button
        size='lg'
        text={'Buscar Medicamento'}
        onClick={handleOpenModal}
        icon={<FaSistrix className='text-2xl' />}
      />
    </div>
  );
};

const Actions = ({
  onProceed,
  onCancel,
}: {
  onProceed: () => void;
  onCancel: () => void;
}) => {
  return (
    <div className='w-full h-full flex items-center justify-end gap-2'>
      <Button size='lg' color='default' text={'Cancelar'} onClick={onCancel} />
      <Button
        size='lg'
        color='success'
        text={'Entregar Medicamentos'}
        onClick={onProceed}
        icon={<FaReceipt />}
        className='text-white'
      />
    </div>
  );
};

const Medicines = ({
  ticket,
  onDelete,
  onAdd,
}: {
  ticket: IInventoryItem[];
  onDelete: (id: string | undefined) => void;
  onAdd: (item: IInventoryItem) => void;
}) => {
  return (
    <div className='w-full h-full p-2 rounded-lg bg-primary'>
      <div className='w-full h-full p-2 rounded-lg bg-white'>
        <table className='w-full'>
          <thead className='bg-tertiary'>
            <tr className='w-full h-12 text-content font-semibold text-lg'>
              <th className='w-[15%] text-left p-2'>Código</th>
              <th className='w-[50%] text-left p-2'>Medicamentos</th>
              <th className='w-[25%] text-left p-2'>Fecha de Caducidad</th>
              <th className='w-[10%] text-right p-2'>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {ticket?.map((item, index) => (
              <tr
                key={index}
                className='h-12 font-medium text-content hover:bg-tertiary border-b-1 border-primary'
              >
                <td className='w-[15%] text-left p-2'>{item.barcode}</td>
                <td className='w-[50%] text-left p-2'>{item.product}</td>
                <td className='w-[25%] text-left p-2'>{item.expirationDate}</td>
                <td className='w-[10%]'>
                  <div className='w-full h-full flex items-center justify-end gap-2'>
                    <DeleteChip onClick={() => onDelete(item?.id)} />
                    <PlusChip onClick={() => onAdd(item)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicineDispenser;
