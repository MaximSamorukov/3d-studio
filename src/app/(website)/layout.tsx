//import "@fontsource/roboto/300.css";
//import "@fontsource/roboto/400.css";
//import "@fontsource/roboto/500.css";
//import "@fontsource/roboto/700.css";

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/app/(website)/globals.css';
import { Header } from '@/widgets/WebsiteLayoutWidgets';
import { ActionPanel } from '@/widgets/WebsiteLayoutWidgets';
import { Footer } from '@/widgets/WebsiteLayoutWidgets';
import { Provider } from '@/shared/common/Provider';
import { Suspense } from 'react';
import Head from 'next/head';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['cyrillic-ext', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Студия 3D-печати',
  description: 'Печать пластиковых изделий на заказ из пластика',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/crm_icon.svg"
          as="image"
          type="image/svg+xml"
        />
      </Head>
      <body className={roboto.variable}>
        <Provider>
          <header>
            <Header />
            <Suspense fallback={<>...</>}>
              <ActionPanel />
            </Suspense>
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </Provider>
      </body>
    </html>
  );
}
