import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { siteConfig } from '@/config/site';
import { fontRoboto } from '@/config/fonts';
import { Providers } from '@/providers/providers';
import { BaseModal } from '@/components/organisms';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head />3
      <body
        className={clsx(
          'flex-1 h-screen min-h-[15rem] overflow-auto bg-main antialiased font-roboto',
          fontRoboto.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          {children}
          <BaseModal />
        </Providers>
      </body>
    </html>
  );
}
