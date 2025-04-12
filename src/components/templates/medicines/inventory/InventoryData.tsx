'use client';

import { SimpleTable } from '@mas-salud/components/organisms';
import { siteConfig } from '@mas-salud/config/site';
import { HMedicineInventory } from '@mas-salud/constants/headers';
import { useModal } from '@mas-salud/context/ModalContext';
import { useInventories } from '@mas-salud/hooks/inventory/useInventory';
import { useToast } from '@mas-salud/hooks/useToast';
import { useInventoryFilters } from '@mas-salud/store/slices/inventory';
import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { IInventory } from '@mas-salud/interfaces/inventory';

import InventoryItemsModal from './InventoryItemsModal';

const InventoryData: React.FC = () => {
  const { openModal } = useModal();
  const { errorToast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const { name, institutionId } = useInventoryFilters();

  const {
    data: fetchedData,
    error,
    isFetching,
  } = useInventories({
    page: currentPage,
    limit: siteConfig.queries.defaultLimit,
    name: name || undefined,
    institutionId: institutionId || undefined,
  });

  useEffect(() => {
    if (isAxiosError(error)) {
      errorToast(
        `Error al buscar inventario, intente mas tarde`,
        `${error.status}: ${error.message}`,
      );
    }
  }, [error]);

  const onView = (value: any) => {
    openModal(<InventoryItemsModal obj={value as IInventory} />);
  };

  return (
    <SimpleTable
      headers={HMedicineInventory({
        onView,
      })}
      data={fetchedData?.data || []}
      count={fetchedData?.count || 0}
      rowsPerPage={siteConfig.queries.defaultLimit}
      currentPage={currentPage}
      isLoading={isFetching}
      onPageChange={(page: number) => setCurrentPage(page)}
      onSelectionChange={() => {}}
    />
  );
};

export default InventoryData;
