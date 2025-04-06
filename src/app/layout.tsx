import '@mas-salud/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import { siteConfig } from '@mas-salud/config/site';
import { fontRaleway, fontRoboto } from '@mas-salud/config/fonts';
import { Providers } from '@mas-salud/providers/providers';
import { BaseModal } from '@mas-salud/components/molecules';

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
      <head />
      <body
        className={clsx(
          'flex-1 h-screen min-h-[15rem] overflow-auto bg-main antialiased font-roboto',
          fontRoboto.variable,
          fontRaleway.variable,
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
