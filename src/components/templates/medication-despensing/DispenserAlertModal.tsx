'use client';

import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@mas-salud/components/atoms';
import { ModalButton, ModalInfoField } from '@mas-salud/components/molecules';
import { useModal } from '@mas-salud/context/ModalContext';
import { IBeneficiary } from '@mas-salud/interfaces/beneficiaries';
import { IInventoryItem } from '@mas-salud/interfaces/inventory';

const DispenseAlertModal = ({
  beneficiary,
  ticket,
  onAccept,
}: {
  beneficiary: IBeneficiary;
  ticket: IInventoryItem[];
  onAccept: () => void;
}) => {
  const { closeModal } = useModal();

  return (
    <ModalContent>
      <ModalHeader>¿Desea entregar el siguiente medicamento/s?</ModalHeader>
      <ModalBody>
        <ModalInfoField
          label='Beneficiario'
          value={`${beneficiary.name} ${beneficiary.lastName} ${beneficiary.secondLastName}`}
          classNames={{ value: 'border-b-2' }}
        />
        <div className='flex flex-col gap-2'>
          <div className='flex items-center px-4'>
            <div className='w-2/4'>Producto</div>
            <div className='w-1/4 text-center'>Fecha de Expiración</div>
            <div className='w-1/4 text-center'>Código</div>
          </div>
          <div className='bg-white rounded-md shadow-md text-content font-medium px-4 py-2'>
            <div className='divide-y divide-primary'>
              {ticket.map((item, index) => (
                <div key={index} className='h-12 flex items-center'>
                  <div className='w-2/4'>{item.product}</div>
                  <div className='w-1/4 text-center'>{item.expirationDate}</div>
                  <div className='w-1/4 text-center'>{item.barcode}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <ModalButton text='Cancelar' color='secondary' onClick={closeModal} />
        <ModalButton
          text='Entregar Medicamento'
          color='success'
          type='submit'
          onClick={onAccept}
        />
      </ModalFooter>
    </ModalContent>
  );
};

export default DispenseAlertModal;
