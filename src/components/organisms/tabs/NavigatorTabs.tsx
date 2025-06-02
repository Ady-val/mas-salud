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

function getActiveTab(pathname: string, tabs: NavigatorTabsProps['tabs']) {
  if (!tabs || tabs.length === 0) {
    return '';
  }

  const activeTab = tabs.find((tab) => pathname.includes(tab.href));

  if (activeTab) {
    return activeTab.id;
  }

  return '';
}

const NavigatorTabs = ({ tabs }: NavigatorTabsProps) => {
  const pathname = usePathname();
  const pathLabel = getPathLabel(tabs);

  return (
    <div className='flex w-full justify-between'>
      <div className='header-subtitle'>
        {pathLabel[getActiveTab(pathname, tabs) as keyof typeof pathLabel] ||
          'Cargando...'}
      </div>
      <Tabs
        aria-label='Dynamic tabs'
        color='secondary'
        selectedKey={getActiveTab(pathname, tabs)}
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
