import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogHero.module.css';

interface BlogHeroProps {
  title: string;
  description: string;
  heroImage: {
    src: string;
    alt: string;
  };
  articleSlug: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({
  title,
  description,
  heroImage,
  articleSlug
}) => {
  return (
    <section className={styles.hero}>
      {/* Фоновое изображение */}
      <div className={styles.background}>
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className={styles.backgroundImage}
          priority
        />
      </div>

      {/* Контент */}
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <Link href={`/article/${articleSlug}`} className={styles.button}>
            <span className={styles.buttonText}>Читать далее</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;