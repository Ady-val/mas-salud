import LayoutSection from '@mas-salud/components/organisms/layout/LayoutSection';
import React from 'react';
import { FaPills, FaUser } from 'react-icons/fa6';

import SelectedBeneficiary from './SelectedBeneficiary';
import MedicineDispenser from './MedicineDispenser';

const MedicationDispensing: React.FC = () => {
  return (
    <div className='gap-3 flex flex-col h-full'>
      <LayoutSection title='Beneficiario' icon={<FaUser />} />
      <SelectedBeneficiary />
      <LayoutSection title='Medicamentos' icon={<FaPills />} />
      <MedicineDispenser />
    </div>
  );
};

export default MedicationDispensing;
