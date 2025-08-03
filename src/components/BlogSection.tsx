"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import styles from '../styles/Blog.module.css';
import { BlogArticle } from '../lib/blogApi';

type BlogPostProps = {
  article: BlogArticle;
  locale: string;
};

type BlogSectionClientProps = {
  articles: BlogArticle[];
};

const BlogPost: React.FC<BlogPostProps> = ({ article, locale }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'cs' ? 'cs-CZ' : 'ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <Link href={`/article/${article.slug}`} className={styles.post}>
      <div className={styles.imageContainer}>
        <Image 
          src={article.heroImage.src} 
          alt={article.heroImage.alt} 
          fill 
          className={styles.postImage}
        />
      </div>
      
      <div className={styles.postContent}>
        <span className={styles.date}>{formatDate(article.publishedAt)}</span>
        <h3 className={styles.postTitle}>{article.title}</h3>
        <p className={styles.postDescription}>{article.description}</p>
      </div>
    </Link>
  );
};

const BlogSectionClient: React.FC<BlogSectionClientProps> = ({ articles }) => {
  const { t, language } = useLanguage();

  return (
    <section className={styles.blog}>
      <div className="container">
        <h2 className={styles.title}>
          {t('blog.title')}
        </h2>
        
        {articles.length > 0 ? (
          <>
            <div className={styles.grid}>
              {articles.map((article) => (
                <BlogPost 
                  key={article._id}
                  article={article}
                  locale={language}
                />
              ))}
            </div>
            
            <div className={styles.viewAllContainer}>
              <Link href="/blog" className={styles.viewAllButton}>
                {t('blog.viewAll')}
              </Link>
            </div>
          </>
        ) : (
          <div className={styles.noArticles}>
            <p>{t('blog.noArticles')}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSectionClient; 