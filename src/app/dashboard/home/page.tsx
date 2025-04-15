import React from 'react';
import img from '@mas-salud/public/massalud.png';
import {
  DashboardFooter,
  DashboardHeader,
  DashboardMainLayout,
} from '@mas-salud/components/templates';
import { ImageContainer } from '@mas-salud/components/atoms';
import { Modules } from '@mas-salud/enum/modules';

const HomePage: React.FC = () => {
  return (
    <DashboardMainLayout
      systemModule={Modules.Dashboard}
      header={<DashboardHeader title='Inicio' />}
      footer={<DashboardFooter />}
    >
      <div className='w-full h-full flex flex-col items-center justify-center main-background p-10'>
        <div className='h-1/3 flex justify-center items-center'>
          <div className='text-[5rem] text-textHeading-primary raleway font-bold'>
            Bienvenido a la plataforma
          </div>
        </div>
        <div className='h-2/3 w-1/2'>
          <ImageContainer img={img} alt='mas salud logo' />
        </div>
        {/* <div className='h-[36%] w-full flex justify-center items-center p-5'>
          <div className='w-full h-full  main-background-2 debug-border'>
            tre
          </div>
        </div> */}
      </div>
    </DashboardMainLayout>
  );
};

export default HomePage;
