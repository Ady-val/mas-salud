import React from 'react';
import {
  DashboardFooter,
  DashboardHeader,
  DashboardMainLayout,
} from '@mas-salud/components/templates';

interface MedicinesPageProps {
  children: React.ReactNode;
}

const ProductsLayout: React.FC<MedicinesPageProps> = ({ children }) => {
  return (
    <DashboardMainLayout
      header={<DashboardHeader title='Especialistas' />}
      footer={<DashboardFooter text='Institución: DIF' />}
    >
      {children}
    </DashboardMainLayout>
  );
};

export default ProductsLayout;
