'use client';

import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
import styles from './BlogArticlesGrid.module.css';

interface BlogArticle {
  _id: string;
  title: string;
  description: string;
  publishedAt: string;
  heroImage: {
    src: string;
    alt: string;
  };
  slug: string;
}

interface BlogArticlesGridProps {
  articles: BlogArticle[];
  articlesPerPage?: number;
}

const BlogArticlesGrid: React.FC<BlogArticlesGridProps> = ({ 
  articles, 
  articlesPerPage = 9 
}) => {
  const [visibleArticles, setVisibleArticles] = useState(articlesPerPage);

  const handleLoadMore = () => {
    setVisibleArticles(prev => Math.min(prev + articlesPerPage, articles.length));
  };

  const displayedArticles = articles.slice(0, visibleArticles);
  const hasMoreArticles = visibleArticles < articles.length;

  // Группируем статьи по рядам: 2-3-2-3...
  const groupArticlesByRows = (articles: BlogArticle[]) => {
    const rows: BlogArticle[][] = [];
    let currentIndex = 0;
    let rowIndex = 0;

    while (currentIndex < articles.length) {
      const isEvenRow = rowIndex % 2 === 0; // 0, 2, 4... - четные ряды (2 статьи)
      const articlesInRow = isEvenRow ? 2 : 3; // четные ряды - 2 статьи, нечетные - 3
      
      const rowArticles = articles.slice(currentIndex, currentIndex + articlesInRow);
      if (rowArticles.length > 0) {
        rows.push(rowArticles);
      }
      
      currentIndex += articlesInRow;
      rowIndex++;
    }
    
    return rows;
  };

  const articleRows = groupArticlesByRows(displayedArticles);

  if (!articles || articles.length === 0) {
    return (
      <section className={styles.emptyState}>
        <h2>Статьи не найдены</h2>
        <p>Пока что нет опубликованных статей для отображения.</p>
      </section>
    );
  }

  return (
    <section className={styles.articlesSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {articleRows.map((rowArticles, rowIndex) => {
            const isEvenRow = rowIndex % 2 === 0;
            const rowClass = isEvenRow ? styles.twoColumns : styles.threeColumns;
            
            return (
              <div key={rowIndex} className={`${styles.row} ${rowClass}`}>
                {rowArticles.map((article) => (
                  <ArticleCard
                    key={article._id}
                    title={article.title}
                    description={article.description}
                    publishedAt={article.publishedAt}
                    heroImage={article.heroImage}
                    slug={article.slug}
                    size={isEvenRow ? 'large' : 'medium'}
                  />
                ))}
              </div>
            );
          })}
        </div>

        {hasMoreArticles && (
          <div className={styles.loadMoreContainer}>
            <button onClick={handleLoadMore} className={styles.loadMoreButton}>
              <span className={styles.buttonText}>Показать еще</span>
              <svg className={styles.buttonArrow} width="55" height="2" viewBox="0 0 55 2" fill="none">
                <path d="M0 1H53M53 1L52 0M53 1L52 2" stroke="#283433" strokeWidth="1"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogArticlesGrid;