'use client';

import React from 'react';
import { CardHeader as HeroCardHeader } from '@mas-salud/components/atoms';

interface CardHeaderProps {
  title: string;
  subtitle?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, subtitle }) => {
  return (
    <HeroCardHeader className='flex flex-col text-content-card gap-2'>
      <div className='text-xl font-medium'>{title}</div>
      {subtitle && <div className='text-sm font-medium'>{subtitle}</div>}
    </HeroCardHeader>
  );
};

export default CardHeader;
