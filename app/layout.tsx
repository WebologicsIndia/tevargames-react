import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import './globals.css';
import 'antd/dist/reset.css';

export const metadata: Metadata = {
  title: 'Tevar Games',
  icons: {
    icon: '/whitehjj.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
