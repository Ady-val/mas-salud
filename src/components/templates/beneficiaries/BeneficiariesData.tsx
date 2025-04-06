'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { isAxiosError } from 'axios';
import { SimpleTable } from '@mas-salud/components/organisms';
import { useBeneficiaries } from '@mas-salud/hooks/useBeneficiaries';
import { HBeneficiaries } from '@mas-salud/constants/headers';
import { RootState } from '@mas-salud/store';
import { useDebounce } from '@mas-salud/hooks/useDebounce';
import { useToast } from '@mas-salud/hooks/useToast';
import { useModal } from '@mas-salud/context/ModalContext';
import { IBeneficiary } from '@mas-salud/interfaces/beneficiaries';

import BeneficiaryDeleteAlertModal from './BeneficiaryDeleteAlertModal';
import BeneficiaryFormModal from './BeneficiaryFormModal';

const ROWS_PER_PAGE = 15;

const BeneficiariesData: React.FC = () => {
  const { openModal } = useModal();
  const { errorToast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const filters = useSelector((state: RootState) => state.filters);

  const stableFilters = useMemo(() => {
    return {
      name: filters.name,
      lastName: filters.lastName,
      curp: filters.curp,
    };
  }, [filters]);

  const { name, lastName, curp } = useDebounce(stableFilters, 500);

  const {
    data: fetchedData,
    error,
    isFetching,
  } = useBeneficiaries({
    page: currentPage,
    limit: ROWS_PER_PAGE,
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
      rowsPerPage={ROWS_PER_PAGE}
      currentPage={currentPage}
      isLoading={isFetching}
      onPageChange={handlePageChange}
      onSelectionChange={handleSelectionChange}
    />
  );
};

export default BeneficiariesData;
