//import "@fontsource/roboto/300.css";
//import "@fontsource/roboto/400.css";
//import "@fontsource/roboto/500.css";
//import "@fontsource/roboto/700.css";
// export const runtime = 'nodejs';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/app/(website)/globals.css';
import { Provider } from '@/shared/Provider';
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body className={roboto.variable}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
