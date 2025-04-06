'use client';

import React from 'react';
import {
  Beneficiaries,
  DashboardFooter,
  DashboardHeader,
  DashboardMainLayout,
} from '@mas-salud/components/templates';

const BeneficiariesPage: React.FC = () => {
  return (
    <DashboardMainLayout
      header={<DashboardHeader title='Beneficiarios' />}
      footer={<DashboardFooter text='Institución: DIF' />}
    >
      <Beneficiaries />
    </DashboardMainLayout>
  );
};

export default BeneficiariesPage;
