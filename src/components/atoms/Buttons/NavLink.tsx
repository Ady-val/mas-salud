'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavLinkProps {
  id: string;
  to: string;
  icon: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ id, to, icon }) => {
  const pathname = usePathname();
  const isActive = pathname.includes(to);

  return (
    <Link id={id} href={to} className={`navlink-component relative`}>
      <div className={`navlink-item ${isActive && ' navlink-item-active'}`}>
        {icon}
      </div>
      {isActive && (
        <div className='absolute w-6 h-full bg-gradient-to-r from-main via-transparent to-transparent bottom-0 -right-6' />
      )}
    </Link>
  );
};

export default NavLink;
