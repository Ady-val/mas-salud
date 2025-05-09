'use client';

import type { ThemeProviderProps } from 'next-themes';

import * as React from 'react';
import { HeroUIProvider } from '@heroui/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { ToastProvider } from '@heroui/toast';
import { store } from '@mas-salud/store';
import { ModalProvider } from '@mas-salud/context/ModalContext';
import { LoadingProvider } from '@mas-salud/context/LoadingContext';

import QueryProvider from './QueryProvider';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>['push']>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <HeroUIProvider navigate={router.push}>
        <QueryProvider>
          <NextThemesProvider {...themeProps}>
            <ModalProvider>
              <LoadingProvider>
                <ToastProvider
                  placement='top-center'
                  maxVisibleToasts={3}
                  toastOffset={3}
                />
                {children}
              </LoadingProvider>
            </ModalProvider>
          </NextThemesProvider>
        </QueryProvider>
      </HeroUIProvider>
    </Provider>
  );
}
