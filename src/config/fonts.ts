import { Roboto as FontRoboto, Raleway as FontRaleway } from 'next/font/google';

export const fontRoboto = FontRoboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

export const fontRaleway = FontRaleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});
