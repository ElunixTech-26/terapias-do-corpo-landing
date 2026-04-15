import { client, urlFor } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import styles from "../blog/blog.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Fisioterapia Pélvica e Saúde Pélvica em Porto Alegre",
  description:
    "Artigos e novidades sobre fisioterapia pélvica, saúde pélvica, massoterapia e bem-estar em Porto Alegre. Conteúdo especializado pela Terapias do Corpo.",
  alternates: {
    canonical: "https://www.terapiasdocorpo.com.br/blog", 
  },
  openGraph: {
    title: "Blog Terapias do Corpo | Fisioterapia Pélvica em Porto Alegre",
    description:
      "Conteúdo especializado sobre saúde pélvica, bem-estar e qualidade de vida. Escrito pela equipe da Terapias do Corpo no Passo da Areia, Porto Alegre.",
    url: "https://www.terapiasdocorpo.com.br/blog",
  },
};

// Fallback de imagem - algumas opções
// const DEFAULT_IMAGE = "/capa-card-blog.png";
// const DEFAULT_IMAGE = "/ambiente-clinica-3.JPG";
const DEFAULT_IMAGE = "/foto-dani-hero.png";

async function getPosts(page:  number = 1) {
  
  // pega 7 posts por página - na primeira vai 3 para os recentes e 4 para o 'todos os posts', e nas posteriores serão 7 posts por página na mesma seção 
  const pageSize = 7;

  const start = (page - 1) * pageSize;  
  const end = start + pageSize;
  
  const query = `{ 
    "posts": *[_type == "post"] | order(_createdAt desc) [${start}...${end}] {
    title,
    "slug": slug.current,
    mainImage,
    publishedAt,
    smallDescription
  },
    "total": count(*[_type == "post"]) 
  }`;

  const data = await client.fetch(query);
  return data;
}

interface BlogProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Blog({searchParams } : BlogProps) {

  // promessa da URL - Assim como o slug
  const resolvedParams = await searchParams;
  
  // pega o número da página ou define 1 como padrão
  const currentPage = Number(resolvedParams.page) || 1;

  const pageSize = 7;
  
  // chama a função enviando a página atual
  const { posts, total } = await getPosts(currentPage);

  const useHighlightLayout = total > 3 && currentPage === 1;
  
  // define quantas páginas terá no total
  const totalPages = Math.ceil(total / pageSize);

  // verifica se terá uma próxima página e se terá uma anterior
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  // para os posts recentes, pegar apenas os 3 primeiros do array posts
  const recentPosts = posts.slice(0, 3);

  // para todo o restante usar o resto
  const remainingPosts = posts.slice(3);

  return (
    <main className={styles.blogContainer}>
      
      {/* Capa do Blog */}
      <div className={styles.capaHeroImg}>
          <div className={styles.capaHeroImgTextDiv}>
              <h1 className={styles.capaHeroImgTitle}>Fisioterapia e Saúde Pélvica em Porto Alegre</h1>
              <span className={styles.capaHeroImgText}>Acesse aqui todas as novidades e informações sobre os tratamentos</span>
          </div>
      </div>

      <section className={styles.contentSection}>
        {/* mensagem caso não tenha nenhum post */}
        {total === 0 ? (
          <div className={styles.emptyBlogState}>
            <h2 className="items-center text-center mb-4 font-bold text-xl">Novidades em breve!</h2>
            <p className="text-gray-600 text-center max-w-md mx-auto">
              Estamos preparando conteúdos exclusivos para você. 
              Fique atento, logo teremos artigos fresquinhos por aqui.
            </p>
            <Link href="/" className="mt-8 text-[#1F8374] font-bold hover:underline inline-block">
              ← Voltar para a página inicial
            </Link>
          </div>
        ) : (

          <>
            {/* DESTAQUES (Só na Home do Blog e se tiver posts suficientes) */}
            {useHighlightLayout && (
              <>
                <h2 className={styles.sectionTitle}>Mais recentes</h2>
                <div className={styles.recentPostsGrid}>
                  {recentPosts.map((post: any) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.recentCard}>
                      <div className={`${styles.recentCardDivImg} overflow-hidden`}>
                        <Image 
                          src={post.mainImage ? urlFor(post.mainImage).url() : DEFAULT_IMAGE} 
                          alt={post.title} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className={styles.recentCardTitle}>{post.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}

            {/* 3. LISTAGEM PRINCIPAL */}
            <div className="flex flex-col gap-6 mt-12">
              <h2 className={`${styles.sectionTitle}`}>
                {currentPage === 1 && total > 3 ? 'Todas as postagens' : 'Mais postagens'}
              </h2>

              <div className={styles.gridPosts}>
                {(useHighlightLayout ? remainingPosts : posts).map((post: any) => (
                  <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.mainCard}>
                    <div className={`${styles.CardDivImg} overflow-hidden`}>
                      <Image 
                        src={post.mainImage ? urlFor(post.mainImage).url() : DEFAULT_IMAGE} 
                        alt={post.title} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className={styles.divMainCard}>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-2">
                        {post.smallDescription}
                      </p>
                      <span className="text-xs font-semibold text-[#1F8374]">Ler Mais...</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* PAGINAÇÃO (Só mostra se tiver mais que uma página) */}
            {total > pageSize && (
              <div className="flex justify-center items-center gap-6 mt-16 mb-8">
                {hasPrevPage && (
                  <Link href={`/blog?page=${currentPage - 1}`} className={styles.prevRow}>
                    Anterior
                  </Link>
                )}

                <span className="text-gray-600 font-medium">
                  Página {currentPage} de {totalPages}
                </span>

                {hasNextPage && (
                  <Link href={`/blog?page=${currentPage + 1}`} className={styles.nextRow}>
                    Próxima
                  </Link>
                )}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}