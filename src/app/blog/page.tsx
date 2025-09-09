import React from 'react';
import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogHero from '../../components/BlogHero';
import BlogArticlesGrid from '../../components/BlogArticlesGrid';
import { client, queries } from '../../lib/sanity';
import { SanitySiteSettings } from '../../types/sanity';
import { urlFor } from '../../lib/sanity';
import { getPublishedArticles } from '../../lib/blogApi';
import styles from './blog.module.css';
import { pageMetadata } from '../../lib/metadata';

// Динамические метатеги для страницы блога
export const metadata: Metadata = pageMetadata.blog;

// Функция для получения настроек сайта с основной статьей
async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  try {
    const settings = await client.fetch(queries.siteSettings);
    return settings;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}

const BlogPage: React.FC = async () => {
  const [settings, articles] = await Promise.all([
    getSiteSettings(),
    getPublishedArticles()
  ]);

  // Если нет настроек или основной статьи, показываем заглушку
  if (!settings || !settings.featuredArticle) {
    return (
      <>
        <Header />
        <main>
          <div className={styles.blogPlaceholder}>
            <h1>Блог</h1>
            <p>Настройте основную статью в Sanity Studio для отображения hero блока.</p>
            <p>Перейдите в "⚙️ Настройки сайта" и выберите статью для главной страницы блога.</p>
          </div>
          {articles.length > 0 && <BlogArticlesGrid articles={articles} />}
        </main>
        <Footer />
      </>
    );
  }

  const { featuredArticle, blogHeroTitle, blogHeroDescription } = settings;

  // Используем кастомные заголовок и описание, если они есть, иначе берем из статьи
  const heroTitle = blogHeroTitle || featuredArticle.title;
  const heroDescription = blogHeroDescription || featuredArticle.description;
  
  // Формируем данные для hero блока
  const heroData = {
    title: heroTitle,
    description: heroDescription,
    heroImage: {
      src: featuredArticle.heroImage && featuredArticle.heroImage.asset 
        ? urlFor(featuredArticle.heroImage).url()
        : '/images/default-hero.jpg',
      alt: featuredArticle.heroImage?.alt || featuredArticle.title,
    },
    articleSlug: featuredArticle.slug.current,
  };

  return (
    <>
      <Header />
      <main>
        <BlogHero {...heroData} />
        <BlogArticlesGrid articles={articles} />
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;