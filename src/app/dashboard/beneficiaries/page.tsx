'use client';

import React from 'react';
import {
  Beneficiaries,
  DashboardFooter,
  DashboardHeader,
  DashboardMainLayout,
} from '@mas-salud/components/templates';
import { Modules } from '@mas-salud/enum/modules';

const BeneficiariesPage: React.FC = () => {
  return (
    <DashboardMainLayout
      systemModule={Modules.Beneficiaries}
      header={<DashboardHeader title='Beneficiarios' />}
      footer={<DashboardFooter />}
    >
      <Beneficiaries />
    </DashboardMainLayout>
  );
};

export default BeneficiariesPage;
