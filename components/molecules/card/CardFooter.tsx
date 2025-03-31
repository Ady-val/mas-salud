import React from 'react';

import { CardFooter as AtomFooter } from '@/components/atoms';

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
}) => {
  return (
    <AtomFooter
      className={'flex flex-col justify-center items-end' + className}
    >
      {children}
    </AtomFooter>
  );
};

export default CardFooter;
