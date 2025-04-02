'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavLinkProps {
  id: string;
  to: string;
  label: string;
  icon: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ id, to, label, icon }) => {
  const pathname = usePathname();
  const isActive = pathname.includes(to);

  return (
    <Link id={id} href={to} className='navlink-component'>
      <div className={`navlink-item ${isActive && ' navlink-item-active'}`}>
        {icon}
      </div>
    </Link>
  );
};

export default NavLink;
