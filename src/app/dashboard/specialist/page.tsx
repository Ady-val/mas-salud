'use client';

import { Button, FilterInput } from '@mas-salud/components/molecules';
import { SimpleTable } from '@mas-salud/components/organisms';
import { siteConfig } from '@mas-salud/config/site';
import { HSpecialist } from '@mas-salud/constants/headers';
import { testDataSpecialist } from '@mas-salud/constants/testData';
import React, { useState } from 'react';

const SpecialistDashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='w-full flex justify-between items-center'>
        <form className='flex justify-start items-center gap-2'>
          <FilterInput label='Nombre' type='text' />
          <FilterInput label='Especialidad' type='text' />
          <FilterInput label='Institucion' type='text' />
        </form>
        <Button text='Agregar Especialista' />
      </div>

      <SimpleTable
        headers={HSpecialist({
          onView: (value: string) => console.log('View:', value),
          onEdit: (value: string) => console.log('Edit:', value),
          onDelete: (value: string) => console.log('Delete:', value),
        })}
        data={testDataSpecialist || []}
        count={testDataSpecialist.length || 0}
        rowsPerPage={siteConfig.queries.defaultLimit}
        currentPage={currentPage}
        isLoading={false} // Replace with actual loading state if needed
        onPageChange={(page: number) => setCurrentPage(page)}
        onSelectionChange={(item: any) => console.log('Selected item:', item)}
      />
    </div>
  );
};

export default SpecialistDashboard;
