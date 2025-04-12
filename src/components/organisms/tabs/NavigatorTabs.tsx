'use client';

import { usePathname } from 'next/navigation';
import { Tab, Tabs } from '@mas-salud/components/atoms';
import Link from 'next/link';

interface TabItem {
  id: string;
  label: string;
  href: string;
}

interface NavigatorTabsProps {
  tabs: TabItem[];
}

const getPathLabel = (tabs: TabItem[]) => {
  return tabs.reduce(
    (acc, tab) => {
      acc[tab.id] = tab.label;

      return acc;
    },
    {} as Record<string, string>,
  );
};

function getActiveTab(pathname: string) {
  if (pathname.includes('/products')) return 'products';
  if (pathname.includes('/inventory')) return 'inventory';

  return '';
}

const NavigatorTabs = ({ tabs }: NavigatorTabsProps) => {
  const pathname = usePathname();
  const pathLabel = getPathLabel(tabs);

  return (
    <div className='flex w-full justify-between'>
      <div className='header-subtitle'>
        {pathLabel[getActiveTab(pathname) as keyof typeof pathLabel] ||
          'Cargando...'}
      </div>
      <Tabs
        aria-label='Dynamic tabs'
        color='primary'
        selectedKey={getActiveTab(pathname)}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            title={
              <Link href={tab.href} className='w-full block text-left'>
                {tab.label}
              </Link>
            }
          />
        ))}
      </Tabs>
    </div>
  );
};

export default NavigatorTabs;
