import React from 'react';

import {
  DashboardFooter,
  DashboardHeader,
  DashboardMainLayout,
} from '@/components/templates';

const BeneficiariesPage: React.FC = () => {
  return (
    <DashboardMainLayout
      header={<DashboardHeader title='Beneficiarios' />}
      footer={<DashboardFooter text='Institución: DIF' />}
    >
      <div>Beneficiarios</div>
    </DashboardMainLayout>
  );
};

export default BeneficiariesPage;
