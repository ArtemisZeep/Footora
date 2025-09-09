import React from 'react';
import { Metadata } from 'next';
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
import { createArticleMetadata } from '../../../lib/metadata';

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

// Динамическая генерация метатегов для статей
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticle(params.slug);
  
  if (!article) {
    return {
      title: 'Статья не найдена | Footura Blog',
      description: 'Запрашиваемая статья не найдена на сайте центра подологии Footura.'
    };
  }

  return createArticleMetadata({
    title: article.title,
    description: article.description,
    slug: params.slug,
    publishedAt: article.publishedAt,
    author: article.author || 'Footura Team',
    ...(article.heroImage?.src && { image: article.heroImage.src })
    // tags: article.tags || []  // Article type doesn't have tags, will be undefined
  });
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
    author: article.author || 'Footura Team',
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