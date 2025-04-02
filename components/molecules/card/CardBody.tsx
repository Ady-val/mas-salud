'use client';

import React from 'react';

import { CardBody as AtomCardBody } from '@/components/atoms';

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => {
  return (
    <AtomCardBody>
      <div className={`flex flex-col gap-4 ${className}`}>{children}</div>
    </AtomCardBody>
  );
};

export default CardBody;
