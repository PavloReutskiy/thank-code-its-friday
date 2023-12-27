import './globals.css';
import type { Metadata } from 'next';
import { inter } from './fonts';
import { Navbar } from '@/components/Navbar';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import ReduxProvider from '@/redux/provider';
import { Footer } from '@/components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

type Props = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

export default async function RootLayout({ children, params: { locale } }: Props): Promise<JSX.Element> {
  let dictionaries;

  try {
    dictionaries = (await import(`../../dictionaries/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale} className={inter.className}>
      <body className='flex flex-col min-h-screen bg-background'>
        <ReduxProvider>
          <NextIntlClientProvider locale={locale} messages={dictionaries}>
            <Navbar />
            <div className='flex-grow'>
              {children}
            </div>
            <Footer />
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
