'use client';

import React, { useEffect, useState } from 'react';
import { isAxiosError } from 'axios';
import { SimpleTable } from '@mas-salud/components/organisms';
import { useBeneficiaries } from '@mas-salud/hooks/beneficiaries/useBeneficiaries';
import { HBeneficiaries } from '@mas-salud/constants/headers';
import { useToast } from '@mas-salud/hooks/useToast';
import { useModal } from '@mas-salud/context/ModalContext';
import { IBeneficiary } from '@mas-salud/interfaces/beneficiaries';
import { siteConfig } from '@mas-salud/config/site';
import { useBeneficiaryFilters } from '@mas-salud/store/slices/beneficiary';
import { useHasModulePermissions } from '@mas-salud/store/slices/permissions';
import { Modules } from '@mas-salud/enum/modules';

import BeneficiaryDeleteAlertModal from './BeneficiaryDeleteAlertModal';
import BeneficiaryFormModal from './BeneficiaryFormModal';

const BeneficiariesData: React.FC = () => {
  const { openModal } = useModal();
  const { errorToast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const { name, lastName, curp } = useBeneficiaryFilters();
  const can = useHasModulePermissions(Modules.Beneficiaries);

  const {
    data: fetchedData,
    error,
    isFetching,
  } = useBeneficiaries({
    page: currentPage,
    limit: siteConfig.queries.defaultLimit,
    name: name || undefined,
    lastName: lastName || undefined,
    curp: curp || undefined,
  });

  useEffect(() => {
    if (isAxiosError(error)) {
      errorToast(
        `Error al buscar beneficiarios, intente mas tarde`,
        `${error.status}: ${error.message}`,
      );
    }
  }, [error]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onView = (value: any) => {
    openModal(
      <BeneficiaryFormModal onlyView={true} obj={value as IBeneficiary} />,
    );
  };

  const onEdit = (value: any) => {
    if (!can.update) {
      errorToast(
        `Acceso denegado`,
        `No tienes permisos para editar beneficiarios`,
      );

      return;
    }
    openModal(<BeneficiaryFormModal obj={value as IBeneficiary} />);
  };

  const onDelete = (value: any) => {
    if (!can.delete) {
      errorToast(
        `Acceso denegado`,
        `No tienes permisos para eliminar beneficiarios`,
      );

      return;
    }
    openModal(<BeneficiaryDeleteAlertModal obj={value as IBeneficiary} />);
  };

  return (
    <SimpleTable
      headers={HBeneficiaries({
        onView,
        onEdit,
        onDelete,
      })}
      data={fetchedData?.data || []}
      count={fetchedData?.count || 0}
      rowsPerPage={siteConfig.queries.defaultLimit}
      currentPage={currentPage}
      isLoading={isFetching}
      onPageChange={handlePageChange}
      onSelectionChange={() => {}}
    />
  );
};

export default BeneficiariesData;
