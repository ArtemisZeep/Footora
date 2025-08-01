import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Blog.module.css';
import { getPublishedArticles } from '../lib/blogApi';
import { BlogArticle } from '../lib/blogApi';

type BlogPostProps = {
  article: BlogArticle;
};

const BlogPost: React.FC<BlogPostProps> = ({ article }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
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

const BlogSection: React.FC = async () => {
  // Получаем 4 последние статьи из Sanity
  const allArticles = await getPublishedArticles();
  const latestArticles = allArticles.slice(0, 4);

  return (
    <section className={styles.blog}>
      <div className="container">
        <h2 className={styles.title}>
          Блог
        </h2>
        
        {latestArticles.length > 0 ? (
          <>
            <div className={styles.grid}>
              {latestArticles.map((article) => (
                <BlogPost 
                  key={article._id}
                  article={article}
                />
              ))}
            </div>
            
            <div className={styles.viewAllContainer}>
              <Link href="/blog" className={styles.viewAllButton}>
                Смотреть все статьи
              </Link>
            </div>
          </>
        ) : (
          <div className={styles.noArticles}>
            <p>Статьи пока не добавлены</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection; 