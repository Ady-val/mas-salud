import { FormalModalProps } from '@mas-salud/interfaces/formModalProps';
import { IInventory } from '@mas-salud/interfaces/inventory';
import { useModal } from '@mas-salud/context/ModalContext';
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@mas-salud/components/atoms';
import { ModalButton } from '@mas-salud/components/molecules';
import ModalInfoField from '@mas-salud/components/molecules/modals/ModalInfoFields';
import { useInventoryItems } from '@mas-salud/hooks/inventory/useInventory';
import { useEffect, useState } from 'react';
import { siteConfig } from '@mas-salud/config/site';
import { ModalTable } from '@mas-salud/components/organisms';
import { HMedicineInventoryItems } from '@mas-salud/constants/headers';
import { useToast } from '@mas-salud/hooks/useToast';
import { isAxiosError } from 'axios';

export default function InventoryItemsModal({
  onlyView,
  obj,
  onDelete,
}: FormalModalProps<IInventory>) {
  const { closeModal } = useModal();
  const [currentPage, setCurrentPage] = useState(1);
  const { errorToast } = useToast();

  const {
    data: fetchedData,
    error,
    isFetching,
  } = useInventoryItems({
    page: currentPage,
    limit: siteConfig.queries.modalLimit,
    productId: obj?.productId || undefined,
    institutionId: obj?.institutionId || undefined,
  });

  useEffect(() => {
    if (isAxiosError(error)) {
      errorToast(
        `Error al buscar lotes, intente mas tarde`,
        `${error.status}: ${error.message}`,
      );
    }
  }, [error]);

  return (
    <ModalContent>
      <ModalHeader>Inventario</ModalHeader>
      <ModalBody>
        <div className='grid grid-cols-4 gap-3'>
          <ModalInfoField
            label='Medicamento'
            value={obj?.name}
            classNames={{ layout: 'col-span-full' }}
          />
          <ModalInfoField
            label='Institución'
            value={obj?.institution}
            classNames={{ layout: 'col-span-full' }}
          />
          <ModalInfoField label='Lotes' value={obj?.batches} />
          <ModalInfoField label='Cantidad Total' value={obj?.quantity} />
        </div>
        <ModalTable
          headers={HMedicineInventoryItems({
            onDelete: (item) => onDelete?.(item),
          })}
          data={fetchedData?.data || []}
          count={fetchedData?.count || 0}
          rowsPerPage={siteConfig.queries.modalLimit}
          currentPage={currentPage}
          isLoading={isFetching}
          onPageChange={(page: number) => setCurrentPage(page)}
          onSelectionChange={() => {}}
        />
      </ModalBody>
      <ModalFooter>
        <ModalButton
          text={onlyView ? 'Cerrar' : 'Cancelar'}
          color='secondary'
          onClick={closeModal}
        />
      </ModalFooter>
    </ModalContent>
  );
}
