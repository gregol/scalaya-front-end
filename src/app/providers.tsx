'use client';

import { SessionProvider } from 'next-auth/react';
import { Provider as JotaiProvider } from 'jotai';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <JotaiProvider>{children}</JotaiProvider>
    </SessionProvider>
  );
}


