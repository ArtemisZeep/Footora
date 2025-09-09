import React from 'react';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ArticleHero from '../../../components/ArticleHero';
import ArticleContent from '../../../components/ArticleContent';
import { client, queries } from '../../../lib/sanity';
import { convertSanityArticle } from '../../../lib/sanityAdapter';
import { sampleArticle } from '../../../data/articleData';
import JsonLd from '../../../components/JsonLd';
import { createArticleSchema } from '../../../lib/jsonLd';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

async function getArticle(slug: string) {
  try {
    const sanityArticle = await client.fetch(queries.articleBySlug, { slug });
    
    if (!sanityArticle) {
      // Fallback to sample article for demo
      if (slug === 'sample-article') {
        return sampleArticle;
      }
      return null;
    }
    
    return convertSanityArticle(sanityArticle);
  } catch (error) {
    console.error('Error fetching article:', error);
    // Fallback to sample article for demo
    if (slug === 'sample-article') {
      return sampleArticle;
    }
    return null;
  }
}

const ArticlePage: React.FC<ArticlePageProps> = async ({ params }) => {
  const { slug } = await params;
  const article = await getArticle(slug);
  
  if (!article) {
    notFound();
  }

  // Создаем JSON-LD схему для статьи
  const articleSchema = createArticleSchema({
    title: article.title,
    description: article.description,
    author: article.author,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt, // Можно добавить поле modifiedAt в будущем
    url: `https://footura.cz/article/${slug}`,
    ...(article.heroImage?.src && { image: article.heroImage.src })
  });

  return (
    <>
      <JsonLd data={articleSchema} />
      <Header />
      <main>
        <ArticleHero
          title={article.title}
          description={article.description}
          heroImage={article.heroImage}
          publishedAt={article.publishedAt}
          author={article.author}
          readTime={article.readTime}
        />
        <ArticleContent blocks={article.blocks} />
      </main>
      <Footer />
    </>
  );
};

export default ArticlePage;