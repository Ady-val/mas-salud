import {
  DashboardFooter,
  DashboardHeader,
  DashboardMainLayout,
  MedicationDispensing,
} from '@mas-salud/components/templates';
import { Modules } from '@mas-salud/enum/modules';
import React from 'react';

const MedicationDispensingPage: React.FC = () => {
  return (
    <DashboardMainLayout
      systemModule={Modules.MedicationDispensing}
      header={<DashboardHeader title='Entrega de Medicamentos' />}
      footer={<DashboardFooter />}
    >
      <MedicationDispensing />
    </DashboardMainLayout>
  );
};

export default MedicationDispensingPage;
