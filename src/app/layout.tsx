import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/UI_Components/Header";
import ActionPanel from "@/UI_Components/ActionPanel";
import Footer from "@/UI_Components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["cyrillic-ext", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Студия 3D-печати",
  description: "Печать пластиковых изделий на заказ из пластика",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <header>
        <Header />
        <ActionPanel />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
