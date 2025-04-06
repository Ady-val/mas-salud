import React from 'react';

interface MainLayoutProps {
  header?: React.ReactElement;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

const DashboardMainLayout: React.FC<MainLayoutProps> = ({
  header,
  footer,
  children,
}) => {
  return (
    <div className='w-full h-full flex flex-col gap-2'>
      {header && <header className='flex-shrink-0'>{header}</header>}
      <main className='flex-grow bg-white rounded-md shadow-lg px-4 py-2'>
        {children}
      </main>
      {footer && <footer className='flex-shrink-0'>{footer}</footer>}
    </div>
  );
};

export default DashboardMainLayout;
