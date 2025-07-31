import React from 'react';
import Image from 'next/image';
import styles from './ArticleHero.module.css';

interface ArticleHeroProps {
  title: string;
  description: string;
  heroImage: {
    src: string;
    alt: string;
  };
  publishedAt: string;
  author?: string;
  readTime?: string;
}

const ArticleHero: React.FC<ArticleHeroProps> = ({
  title,
  description,
  heroImage,
  publishedAt,
  author,
  readTime
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className={styles.backgroundImage}
          priority
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.meta}>
            {author && <span className={styles.author}>{author}</span>}
            <span className={styles.date}>{formatDate(publishedAt)}</span>
            {readTime && <span className={styles.readTime}>{readTime}</span>}
          </div>
          
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ArticleHero;