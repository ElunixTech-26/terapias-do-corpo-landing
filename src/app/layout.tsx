import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-inter-next',
})


export const metadata: Metadata = {
  title: "Terapias do Corpo",
  description: "A definir....",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png"
  }
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
        <Footer />
        
      </body>
    </html>
  );
}
