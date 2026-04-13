import { Metadata } from "next";
import Massoterapia from "./massoterapia";

export const metadata: Metadata = {
  title: "Massoterapia em Porto Alegre",
  description:
    "Massoterapia em Porto Alegre no Passo da Areia. Massagem relaxante, terapêutica e drenagem linfática com atendimento personalizado. Agende sua sessão na Terapias do Corpo.",
  alternates: {
    canonical: "https://www.terapiasdocorpo.com.br/tratamentos/massoterapia",
  },
  openGraph: {
    title: "Massoterapia em Porto Alegre | Terapias do Corpo",
    description:
      "Relaxe de verdade com massoterapia especializada no Passo da Areia, Porto Alegre. Sessões personalizadas para cada necessidade.",
    url: "https://www.terapiasdocorpo.com.br/tratamentos/massoterapia",        
  },
};

export default function Page(){
    return <Massoterapia />
}