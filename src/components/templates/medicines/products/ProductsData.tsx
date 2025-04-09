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
import ProductsFormModal from './ProductsFormModal';
import { IProduct } from '@mas-salud/interfaces/products';
import ProductDeleteAlertModal from './ProductsDeleteAlertModal';

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

  const onView = (value: any) => {
    openModal(<ProductsFormModal onlyView={true} obj={value as IProduct} />);
  };

  const onEdit = (value: any) => {
    openModal(<ProductsFormModal obj={value as IProduct} />);
  };

  const onDelete = (value: any) => {
    openModal(<ProductDeleteAlertModal obj={value as IProduct} />);
  };

  return (
    <SimpleTable
      headers={HMedicineProducts({
        onView,
        onEdit,
        onDelete,
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

export default ProductsData;
