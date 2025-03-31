import { Roboto as FontRoboto } from 'next/font/google';

export const fontRoboto = FontRoboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '100',
  preload: true,
});
