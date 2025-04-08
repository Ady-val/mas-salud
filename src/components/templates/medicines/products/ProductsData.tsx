'use client';

import { SimpleTable } from '@mas-salud/components/organisms';
import { siteConfig } from '@mas-salud/config/site';
import { HMedicineProducts } from '@mas-salud/constants/headers';
import { useModal } from '@mas-salud/context/ModalContext';
import { useProducts } from '@mas-salud/hooks/products/useProducts';
import { useToast } from '@mas-salud/hooks/useToast';
import { useProductsFilters } from '@mas-salud/store/slices/products';
import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

const ProductsData: React.FC = () => {
  const { openModal } = useModal();
  const { errorToast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const { name, brand, form, unit, lotNumber } = useProductsFilters();

  const {
    data: fetchedData,
    error,
    isFetching,
  } = useProducts({
    page: currentPage,
    limit: siteConfig.queries.defaultLimit,
    name: name || undefined,
    brand: brand || undefined,
    form: form || undefined,
    unit: unit || undefined,
    lotNumber: lotNumber || undefined,
  });

  useEffect(() => {
    if (isAxiosError(error)) {
      errorToast(
        `Error al buscar beneficiarios, intente mas tarde`,
        `${error.status}: ${error.message}`,
      );
    }
  }, [error]);

  return (
    <SimpleTable
      headers={HMedicineProducts({
        onView: (value: string) => console.log('View:', value),
        onEdit: (value: string) => console.log('Edit:', value),
        onDelete: (value: string) => console.log('Delete:', value),
      })}
      data={fetchedData?.data || []}
      count={fetchedData?.count || 0}
      rowsPerPage={siteConfig.queries.defaultLimit}
      currentPage={currentPage}
      isLoading={isFetching}
      onPageChange={(page: number) => setCurrentPage(page)}
      onSelectionChange={(item: any) => console.log('Selected item:', item)}
    />
  );
};

export default ProductsData;
