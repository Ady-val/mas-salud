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
import { IProduct } from '@mas-salud/interfaces/products';

import ProductsFormModal from './ProductsFormModal';
import ProductDeleteAlertModal from './ProductsDeleteAlertModal';
import { useHasModulePermissions } from '@mas-salud/store/slices/permissions';
import { Modules } from '@mas-salud/enum/modules';

const ProductsData: React.FC = () => {
  const { openModal } = useModal();
  const { errorToast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const { name, brand, form, unit } = useProductsFilters();
  const can = useHasModulePermissions(Modules.Products);

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
  });

  useEffect(() => {
    if (isAxiosError(error)) {
      errorToast(
        `Error al buscar productos, intente mas tarde`,
        `${error.status}: ${error.message}`,
      );
    }
  }, [error]);

  const onView = (value: any) => {
    openModal(<ProductsFormModal onlyView={true} obj={value as IProduct} />);
  };

  const onEdit = (value: any) => {
    if (!can.update) {
      errorToast(`Acceso denegado`, `No tienes permisos para editar productos`);

      return;
    }
    openModal(<ProductsFormModal obj={value as IProduct} />);
  };

  const onDelete = (value: any) => {
    if (!can.delete) {
      errorToast(
        `Acceso denegado`,
        `No tienes permisos para eliminar productos`,
      );

      return;
    }
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
