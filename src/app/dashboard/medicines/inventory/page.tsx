'use client';

import React, { useState } from 'react';

import { Button, FilterInput } from '@mas-salud/components/molecules';
import { SimpleTable } from '@mas-salud/components/organisms';
import { HMedicineInventory } from '@mas-salud/constants/headers';
import { testDataMedicineInventory } from '@mas-salud/constants/testData';
import { siteConfig } from '@mas-salud/config/site';

const InventoryPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='w-full flex justify-between items-center'>
        <form className='flex justify-start items-center gap-2'>
          <FilterInput label='Institución ' type='text' />
          <FilterInput label='Medicamento' type='text' />
          <FilterInput label='Marca' type='text' />
          <FilterInput label='Dosis' type='text' />
        </form>
        <Button text='Agregar Registro' color='primary' />
      </div>

      <SimpleTable
        headers={HMedicineInventory({
          onView: (value: string) => console.log('View:', value),
          onEdit: (value: string) => console.log('Edit:', value),
          onDelete: (value: string) => console.log('Delete:', value),
        })}
        data={testDataMedicineInventory || []}
        count={testDataMedicineInventory.length || 0}
        rowsPerPage={siteConfig.queries.defaultLimit}
        currentPage={currentPage}
        isLoading={false} // Replace with actual loading state if needed
        onPageChange={(page: number) => setCurrentPage(page)}
        onSelectionChange={(item: any) => console.log('Selected item:', item)}
      />
    </div>
  );
};

export default InventoryPage;
