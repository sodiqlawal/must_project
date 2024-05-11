import Navbar from '@/components/organisms/navbar/Navbar';
import Sidebar from '@/components/organisms/sidebar/Sidebar';
import AppProvider from '@/contexts/AppContext';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.scss';

const pretendard = localFont({
  src: [
    { path: '../fonts/Pretendard-Regular.otf', weight: '400', style: 'normal' },
    { path: '../fonts/Pretendard-Medium.otf', weight: '500', style: 'normal' },
    {
      path: '../fonts/Pretendard-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    { path: '../fonts/Pretendard-Bold.otf', weight: '700', style: 'normal' },
  ],
});

export const metadata: Metadata = {
  title: 'Must Test',
  description: 'Test for CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={pretendard.className}>
        <AppProvider>
          <div className='layout-container'>
            <Navbar />

            <div className='sidebar-page_container'>
              <Sidebar />

              <div className='page'>{children}</div>
            </div>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
