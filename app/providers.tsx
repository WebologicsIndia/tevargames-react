'use client';

import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';
import ReduxProvider from '@/components/ReduxProvider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider>
      <ConfigProvider
        theme={{
          token: {
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ReduxProvider>
  );
}
