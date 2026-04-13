import { Metadata } from "next";
import Estetica from "./estetica";

export const metadata: Metadata = {
  title: "Estética Dermatofuncional em Porto Alegre",
  description:
    "Estética dermatofuncional em Porto Alegre com laserterapia, radiofrequência e lipo sem corte. Protocolos clínicos personalizados para resultados naturais e duradouros. Agende na Terapias do Corpo.",
  alternates: {
    canonical: "https://www.terapiasdocorpo.com.br/tratamentos/estetica",      
  },
  openGraph: {
    title: "Estética Dermatofuncional em Porto Alegre | Terapias do Corpo",
    description:
      "Tratamentos estéticos com rigor clínico no Passo da Areia, Porto Alegre. Laserterapia, radiofrequência e lipo sem corte com resultados reais.",
    url: "https://www.terapiasdocorpo.com.br/tratamentos/estetica",  
  },
};

export default function Page() {
    return <Estetica />
}