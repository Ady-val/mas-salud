import React from 'react';

interface MainFooterProps {
  text: string;
}

const MainFooter: React.FC<MainFooterProps> = ({ text }) => {
  return (
    <div className='h-full flex items-center justify-end'>
      <div className='text-primary font-medium text-xl raleway'>{text}</div>
    </div>
  );
};

export default MainFooter;
