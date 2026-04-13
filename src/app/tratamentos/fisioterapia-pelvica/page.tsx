import { Metadata } from "next";
import FisioterapiaPelvica from "./fisioPelvica";

export const metadata: Metadata = {
  title: "Fisioterapia Pélvica em Porto Alegre",
  description:
    "Tratamento especializado em fisioterapia pélvica em Porto Alegre. Incontinência urinária, dor pélvica, pré e pós-parto, cirurgias de afirmação de gênero e mais. Agende sua avaliação com a Dani.",
  alternates: {
    canonical: "https://www.terapiasdocorpo.com.br/tratamentos/fisioterapia-pelvica", 
  },
  openGraph: {
    title: "Fisioterapia Pélvica em Porto Alegre | Terapias do Corpo",
    description:
      "Especialistas em saúde pélvica no Passo da Areia, Porto Alegre. Atendimento para todos os corpos, com suporte especializado para pessoas trans.",
    url: "https://www.terapiasdocorpo.com.br/tratamentos/fisioterapia-pelvica",
  },
};

export default function Page(){
    return <FisioterapiaPelvica />
}