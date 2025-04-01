import React from 'react';

interface MainHeaderProps {
  title: string;
  button?: React.ReactNode;
}

const DashboardHeader: React.FC<MainHeaderProps> = ({ title, button }) => {
  return (
    <div className='h-full flex items-center justify-between'>
      <div className='text-primary font-extrabold text-3xl raleway'>
        {title}
      </div>
      {button && button}
    </div>
  );
};

export default DashboardHeader;
