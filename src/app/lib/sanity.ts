import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-04-14", // Data de hoje para garantir a versão da API
  useCdn: false, // true para produção (cache), false para ver mudanças na hora
});

// O Sanity não entrega a URL da imagem direto, ele entrega um "asset".
// Esse builder serve para gerar as URLs otimizadas.
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}