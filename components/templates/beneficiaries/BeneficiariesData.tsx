'use client';

import React, { useState } from 'react';

import { SimpleTable } from '@/components/organisms';
import { useBeneficiaries } from '@/hooks/useBeneficiaries';
import { HBeneficiaries } from '@/constants/headers';

const ROWS_PER_PAGE = 10;

const BeneficiariesData: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: fetchedData,
    error,
    isFetching,
  } = useBeneficiaries({
    page: currentPage,
    limit: ROWS_PER_PAGE,
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSelectionChange = (item: any) => {
    console.log('Selected item:', item);
  };

  return (
    <SimpleTable
      headers={HBeneficiaries}
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
