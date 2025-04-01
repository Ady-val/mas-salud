'use client';

import React, { use, useEffect, useState } from 'react';

import {
  DashboardFooter,
  DashboardHeader,
  DashboardMainLayout,
} from '@/components/templates';
import { SimpleTable } from '@/components/organisms';
import { testData, testDataHeaders } from '@/constants/testData';

const ROWS_PER_PAGE = 10;

type TTestData = {
  key: string;
  name: string;
  role: string;
  status: string;
};

const BeneficiariesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<TTestData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPaginatedData(testData.slice(0, ROWS_PER_PAGE));
    }, 2000);
  }, []);

  const handlePageChange = (page: number) => {
    setIsLoading(true);
    setCurrentPage(page);

    setTimeout(() => {
      const startIndex = (page - 1) * ROWS_PER_PAGE;
      const endIndex = startIndex + ROWS_PER_PAGE;

      setPaginatedData(testData.slice(startIndex, endIndex));
      setIsLoading(false);
    }, 2000);
  };

  const handleSelectionChange = (item: any) => {
    console.log('Selected item:', item);
  };

  return (
    <DashboardMainLayout
      header={<DashboardHeader title='Beneficiarios' />}
      footer={<DashboardFooter text='Institución: DIF' />}
    >
      <>
        <div>Beneficiarios</div>
        <SimpleTable
          headers={testDataHeaders}
          data={paginatedData}
          count={testData.length}
          rowsPerPage={ROWS_PER_PAGE}
          currentPage={currentPage}
          isLoading={isLoading}
          onPageChange={handlePageChange}
          onSelectionChange={handleSelectionChange}
        />
      </>
    </DashboardMainLayout>
  );
};

export default BeneficiariesPage;
