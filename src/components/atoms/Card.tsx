'use client';

import { Card as HeroCard } from '@heroui/card';

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return <HeroCard className='card'>{children}</HeroCard>;
}
