import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import "./globals.css";
import Header from "./components/header/header";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-inter-next',
})


export const metadata: Metadata = {
  title: "Terapias do Corpo",
  description: "A definir....",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Header />
        {children}
        
      </body>
    </html>
  );
}
