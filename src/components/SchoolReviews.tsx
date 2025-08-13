"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { schoolReviewsData } from '@/data/schoolReviewsData';
import styles from './SchoolReviews.module.css';

export default function SchoolReviews() {
  const { language } = useLanguage();
  const [page, setPage] = useState(0);
  
  // Адаптивное количество отзывов на странице
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Показываем все отзывы независимо от языка
  const reviews = schoolReviewsData;
  
  // Сбрасываем страницу при смене языка
  React.useEffect(() => {
    setPage(0);
  }, [language]);
  
  const perPage = windowWidth <= 480 ? 1 : windowWidth <= 768 ? 2 : 3;
  const pageCount = Math.ceil(reviews.length / perPage);
  const start = page * perPage;
  const visible = reviews.slice(start, start + perPage);

  function Avatar({ photo }: { photo: string | null }) {
    return (
      <div className={styles.avatar}>
        {photo ? (
          <img src={photo} alt="avatar" className={styles.avatarImage} />
        ) : (
          <svg width="47" height="68" viewBox="0 0 47 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="23.5" cy="20.5" rx="16.5" ry="16.5" stroke="#57694C" strokeWidth="2" />
            <path d="M2 66C2 54.9543 11.9543 45 23.5 45C35.0457 45 45 54.9543 45 66" stroke="#57694C" strokeWidth="2" />
          </svg>
        )}
      </div>
    );
  }

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.container}>
        <AnimatePresence mode="wait">
          <motion.div 
            key={page}
            className={styles.reviewsContent}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            {visible.map((review, i) => (
              <motion.div 
                key={review.id} 
                className={styles.reviewCard}
                initial={{ opacity: 0, y: 8 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className={styles.reviewHeader}>
                  <Avatar photo={null} />
                  <div className={styles.reviewInfo}>
                    <h3 className={styles.reviewerName}>{review.name}</h3>
                    <p className={styles.reviewerRole}>
                      {review.language === 'ru' ? 'студент' : 
                       review.language === 'cs' ? 'student' : 
                       review.language === 'ua' ? 'студент' : 'student'}
                    </p>
                  </div>
                </div>
                <p className={styles.reviewText}>{review.text}</p>
                {review.link && (
                  <a href={review.link} target="_blank" rel="noopener noreferrer" className={styles.reviewLink}>
                    {review.language === 'ru' ? 'Читать полностью' : 
                     review.language === 'cs' ? 'Číst celé' : 
                     review.language === 'ua' ? 'Читати повністю' : 'Read full review'}
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Точки-пагинация */}
        <div className={styles.indicators}>
          {windowWidth <= 480 ? (
            // Показываем максимум 5 точек на мобильных
            (() => {
              const maxDots = 5;
              const totalPages = pageCount;
              let startPage = Math.max(0, page - Math.floor(maxDots / 2));
              let endPage = Math.min(totalPages, startPage + maxDots);
              
              // Корректируем если не хватает точек в конце
              if (endPage - startPage < maxDots) {
                startPage = Math.max(0, endPage - maxDots);
              }
              
              return Array.from({ length: endPage - startPage }).map((_, i) => {
                const pageIndex = startPage + i;
                return (
                  <motion.button
                    key={pageIndex}
                    className={`${styles.indicator} ${pageIndex === page ? styles.active : ''}`}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setPage(pageIndex)}
                  />
                );
              });
            })()
          ) : (
            // Показываем все точки на больших экранах
            Array.from({ length: pageCount }).map((_, i) => (
              <motion.button
                key={i}
                className={`${styles.indicator} ${i === page ? styles.active : ''}`}
                whileHover={{ scale: 1.2 }}
                onClick={() => setPage(i)}
              />
            ))
          )}
        </div>

        {/* Стрелки навигации */}
        <div className={styles.navigation}>
          <motion.button 
            className={styles.navButton} 
            onClick={() => setPage(Math.max(0, page - 1))}
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            disabled={page === 0}
          >
            <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
              <path d="M43 6L1 6M1 6L6 1M1 6L6 11" stroke="#506888" strokeWidth="1.6"/>
            </svg>
          </motion.button>
          <motion.button 
            className={styles.navButton} 
            onClick={() => setPage(Math.min(pageCount - 1, page + 1))}
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            disabled={page === pageCount - 1}
          >
            <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
              <path d="M1 6L43 6M43 6L38 1M43 6L38 11" stroke="#506888" strokeWidth="1.6"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}