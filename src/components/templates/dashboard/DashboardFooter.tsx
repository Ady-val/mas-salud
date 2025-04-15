'use client';

import { useUserInfo } from '@mas-salud/store/slices/user';
import React from 'react';

const MainFooter: React.FC = () => {
  const user = useUserInfo();

  return (
    <div className='h-full flex items-center justify-end'>
      <div className='text-primary font-medium text-xl raleway'>
        Institución: {user.institution}
      </div>
    </div>
  );
};

export default MainFooter;
