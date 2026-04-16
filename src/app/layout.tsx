import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Cta from "./components/cta/cta";

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'], 
  variable: '--font-inter-next',
})

export const metadata: Metadata = {

  metadataBase: new URL('https://www.terapiasdocorpo.com.br'),

  title: {
    default: "Terapias do Corpo | Fisioterapia Pélvica em Porto Alegre",
    template: "%s | Terapias do Corpo",
  },
  description:
    "Fisioterapia pélvica, massoterapia e estética dermatofuncional em Porto Alegre. Atendimento humanizado para todos os corpos, com atenção especial para pessoas trans. Agende sua avaliação.",

  // ── Indexação  
  robots: {
    index: true,
    follow: true,
  },

  // ── Open Graph (WhatsApp, Facebook, LinkedIn)  
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.terapiasdocorpo.com.br",
    siteName: "Terapias do Corpo",
    title: "Terapias do Corpo | Fisioterapia Pélvica em Porto Alegre",
    description:
      "Fisioterapia pélvica, massoterapia e estética dermatofuncional em Porto Alegre. Atendimento acolhedor para todos os corpos.",
    images: [
      {
        url: "/foto-1200-630-graph.png",
        width: 1200,
        height: 630,
        alt: "Clínica Terapias do Corpo — Porto Alegre",
      },
    ],
  },

  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

// ── Schema Markup — LocalBusiness  
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Terapias do Corpo",
  description:
    "Clínica especializada em fisioterapia pélvica, massoterapia e estética dermatofuncional em Porto Alegre. Atendimento humanizado com atenção especial para pessoas trans.",
  url: "https://www.terapiasdocorpo.com.br",           
  telephone: "+55-51-99879-7339",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Porto Alegre",
    addressRegion: "RS",
    addressCountry: "BR",
    streetAddress: "Rua Visconde de Pelotas 289 - Passo da Areia",           
    postalCode: "90540-050",                          
  },
  areaServed: {
    "@type": "City",
    name: "Porto Alegre",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -30.0081121,                             
    longitude: -51.1719311
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/dialogosdapelve/",
    // "https://www.facebook.com/terapiasdocorpo",
  ],
  medicalSpecialty: "PhysicalTherapy",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className={`${inter.variable}`}>
        <Header />
        {children}
        <Cta />
        <Footer />
      </body>
    </html>
  );
}
