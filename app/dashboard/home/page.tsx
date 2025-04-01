import React from 'react';

import img from '@/public/massalud.png';
import {
  DashboardFooter,
  DashboardHeader,
  DashboardMainLayout,
} from '@/components/templates';
import { ImageContainer } from '@/components/atoms';

const HomePage: React.FC = () => {
  return (
    <DashboardMainLayout
      header={<DashboardHeader title='Inicio' />}
      footer={<DashboardFooter text='Institución: DIF' />}
    >
      <div className='w-full h-full items-center main-background p-10'>
        <div className='h-[28%] flex justify-center items-center'>
          <div className='text-[5rem] text-textHeading-primary raleway font-bold'>
            Bienvenido a la plataforma
          </div>
        </div>
        <div className='h-[36%] debug-border'>
          <ImageContainer img={img} alt='mas salud logo' />
        </div>
        <div className='h-[36%] w-full flex justify-center items-center p-5'>
          <div className='w-full h-full  main-background-2 debug-border'>
            tre
          </div>
        </div>
      </div>
    </DashboardMainLayout>
  );
};

export default HomePage;
