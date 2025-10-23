//import "@fontsource/roboto/300.css";
//import "@fontsource/roboto/400.css";
//import "@fontsource/roboto/500.css";
//import "@fontsource/roboto/700.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/(website)/globals.css";
import { Provider } from "@/shared/common/Provider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["cyrillic-ext", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Студия 3D-печати",
  description: "Печать пластиковых изделий на заказ из пластика",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
