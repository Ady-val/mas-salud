'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { SimpleTable } from '@/components/organisms';
import { useBeneficiaries } from '@/hooks/useBeneficiaries';
import { HBeneficiaries } from '@/constants/headers';
import { RootState } from '@/store';
import { useDebounce } from '@/hooks/useDebounce';

const ROWS_PER_PAGE = 10;

const BeneficiariesData: React.FC = () => {
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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSelectionChange = (item: any) => {
    console.log('Selected item:', item);
  };

  const onView = (value: string) => {
    console.log('View:', value);
  };

  const onEdit = (value: string) => {
    console.log('Edit:', value);
  };

  const onDelete = (value: string) => {
    console.log('Delete:', value);
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
