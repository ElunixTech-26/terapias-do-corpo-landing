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
  manifest: "/site.webmanifest",
  icons: {
    icon: ["/icon-96x96.png", "/favicon.ico"],
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
        
      </body>
    </html>
  );
}
