import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
  title: string;
  description: string;
  publishedAt: string;
  heroImage: {
    src: string;
    alt: string;
  };
  slug: string;
  size?: 'large' | 'medium'; // large для 640px, medium для 420px
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  publishedAt,
  heroImage,
  slug,
  size = 'medium'
}) => {
  // Форматируем дату
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '.');
  };

  return (
    <Link href={`/article/${slug}`} className={`${styles.card} ${styles[size]}`}>
      {/* Изображение */}
      <div className={styles.imageContainer}>
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className={styles.image}
          sizes={size === 'large' ? '640px' : '420px'}
        />
      </div>

      {/* Контент */}
      <div className={styles.content}>
        <div className={styles.date}>
          {formatDate(publishedAt)}
        </div>
        
        <h3 className={styles.title}>
          {title}
        </h3>
        
        <p className={styles.description}>
          {description}
        </p>
        
        {/* Стрелочка */}
        <div className={styles.arrow}>
          <svg width="43" height="2" viewBox="0 0 43 2" fill="none">
            <path d="M0 1H41M41 1L40 0M41 1L40 2" stroke="#4D5C4D" strokeWidth="1.6"/>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;