import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';
import cn from 'clsx';
import { SITE_DESCRIPTION, SITE_NAME } from '@/shared/constants';
import { APP_URL } from '@/shared/config';

const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin'],
});

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: {
      absolute: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
   },
   description: SITE_DESCRIPTION,
   metadataBase: new URL(APP_URL),
   openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      emails: ['sergey.stryuchkov02@gmail.com'],
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="ru">
         <body className={cn(geistSans.variable, geistMono.variable, 'antialiased')}>{children}</body>
      </html>
   );
}
