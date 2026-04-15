import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";

export const revalidate = 60;

// Busca os dados para o metadata — função separada da página
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    smallDescription,
    mainImage,
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) return {};

  return {
    title: post.title,
    description: post.smallDescription ?? "Leia este artigo no blog da Terapias do Corpo.",
    alternates: {
      canonical: `https://www.terapiasdocorpo.com.br/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.smallDescription ?? "Leia este artigo no blog da Terapias do Corpo.",
      url: `https://www.terapiasdocorpo.com.br/blog/${slug}`, 
      images: post.mainImage
        ? [
            {
              url: urlFor(post.mainImage).width(1200).height(630).url(),
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
  };
}

// busca 1 post específico pelo slug
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    body,
    publishedAt,
    _createdAt
  }`;

  // slug como parâmetro para evitar "GROQ Injection"
  const data = await client.fetch(query, { slug });
  return data;
}

export default async function PostPage({ 
  params 
}: { 
  //pega o slug por parametro por meio de uma promise
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params; 

  const post = await getPost(slug);

  if (!post) return <div>Post não encontrado.</div>;

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm">
          Publicado em: {
              post.publishedAt 
                ? new Date(post.publishedAt).toLocaleDateString('pt-BR') 
                : post._createdAt 
                  ? new Date(post._createdAt).toLocaleDateString('pt-BR')
                  : 'Data indisponível'
            }        
        </p>
      </header>

      {post.mainImage && (
        <div className="relative h-96 w-full mb-8 rounded-xl overflow-hidden">
          <Image 
            src={urlFor(post.mainImage).url()} 
            alt={post.title} 
            fill 
            className="object-cover" 
          />
        </div>
      )}

      {/* RENDERIZADOR DE TEXTO RICO DO SANITY */}
      <div className="prose prose-lg prose-teal max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const slugs: { slug: string }[] = await client.fetch(query);

  return slugs.map((item) => ({
    slug: item.slug,
  }));
}