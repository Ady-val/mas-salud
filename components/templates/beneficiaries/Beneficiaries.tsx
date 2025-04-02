import React from 'react';

import { BeneficiariesData, BeneficiariesFilters } from '.';

const Beneficiaries: React.FC = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <BeneficiariesFilters />
        <button className=''>Agregar Beneficiario</button>
      </div>
      <BeneficiariesData />
    </div>
  );
};

export default Beneficiaries;
