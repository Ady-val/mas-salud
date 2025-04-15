import React from 'react';
import {
  DashboardFooter,
  DashboardHeader,
  DashboardMainLayout,
} from '@mas-salud/components/templates';
import { Modules } from '@mas-salud/enum/modules';

interface MedicinesPageProps {
  children: React.ReactNode;
}

const ProductsLayout: React.FC<MedicinesPageProps> = ({ children }) => {
  return (
    <DashboardMainLayout
      systemModule={Modules.Specialist}
      header={<DashboardHeader title='Especialistas' />}
      footer={<DashboardFooter />}
    >
      {children}
    </DashboardMainLayout>
  );
};

export default ProductsLayout;
