import type { Metadata } from "next";

import About from "./components/about/about";
import Authority from "./components/authority/authority";
import Hero from "./components/hero/hero";
import Space from "./components/space/space";
import Trans from "./components/trans/trans";

export const metadata: Metadata = {
  title: "Fisioterapia Pélvica em Porto Alegre",
  description:
    "Fisioterapia pélvica, massoterapia e estética dermatofuncional no Passo da Areia, Porto Alegre. Atendimento humanizado para todos os corpos, com atenção especial para pessoas trans. Agende sua avaliação.",
  alternates: {
    canonical: "https://www.terapiasdocorpo.com.br", 
  },
  openGraph: {
    title: "Fisioterapia Pélvica em Porto Alegre | Terapias do Corpo",
    description:
      "Cuide da sua saúde pélvica com quem realmente acolhe. Atendimento especializado no Passo da Areia, Porto Alegre.",
    url: "https://www.terapiasdocorpo.com.br",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Authority />
      <About />
      <Trans />
      <Space />
    </>
  );
}
