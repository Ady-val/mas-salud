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

import BeneficiaryDeleteAlertModal from './BeneficiaryDeleteAlertModal';
import BeneficiaryFormModal from './BeneficiaryFormModal';

const BeneficiariesData: React.FC = () => {
  const { openModal } = useModal();
  const { errorToast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const { name, lastName, curp } = useBeneficiaryFilters();

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

  const handleSelectionChange = (item: any) => {
    console.log('Selected item:', item);
  };

  const onView = (value: any) => {
    openModal(
      <BeneficiaryFormModal onlyView={true} obj={value as IBeneficiary} />,
    );
  };

  const onEdit = (value: any) => {
    openModal(<BeneficiaryFormModal obj={value as IBeneficiary} />);
  };

  const onDelete = (value: any) => {
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
      onSelectionChange={handleSelectionChange}
    />
  );
};

export default BeneficiariesData;
