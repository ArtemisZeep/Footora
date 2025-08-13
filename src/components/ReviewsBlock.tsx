import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { reviewsData, getReviewsByLanguage } from '@/data/reviewsData';
import styles from './ReviewsBlock.module.css';

function Avatar({ photo }: { photo: string | null }) {
  return (
    <div className={styles.avatar}>
      {photo ? (
        <Image src={photo} alt="avatar" width={100} height={100} />
      ) : (
        <svg width="47" height="68" viewBox="0 0 47 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="23.5" cy="20.5" rx="16.5" ry="16.5" stroke="#57694C" strokeWidth="2" />
          <path d="M2 66C2 54.9543 11.9543 45 23.5 45C35.0457 45 45 54.9543 45 66" stroke="#57694C" strokeWidth="2" />
        </svg>
      )}
    </div>
  );
}

export default function ReviewsBlock() {
  const { language } = useLanguage();
  const [page, setPage] = useState(0);
  
  // Получаем отзывы для текущего языка
  const currentLanguage = language as 'ru' | 'cs' | 'en';
  const languageReviews = getReviewsByLanguage(currentLanguage);
  
  // Если нет отзывов для текущего языка, показываем все отзывы
  const reviews = languageReviews.length > 0 ? languageReviews : reviewsData;
  
  // Сбрасываем страницу при смене языка
  React.useEffect(() => {
    setPage(0);
  }, [language]);
  
  const perPage = 2;
  const pageCount = Math.ceil(reviews.length / perPage);
  const start = page * perPage;
  const visible = reviews.slice(start, start + perPage);

  return (
    <section className={styles.reviewsSection}>
      <AnimatePresence mode="wait">
        <motion.div 
          key={page}
          className={styles.reviewsContainer}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4 }}
        >
          {visible.map((review, i) => (
            <motion.div key={review.id} className={styles.reviewCard} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }}>
              <div className={styles.reviewHeader}>
                <Avatar photo={null} />
                <div className={styles.clientInfo}>
                  <div className={styles.clientName}>{review.name}</div>
                  <div className={styles.clientStatus}>
                    {review.language === 'ru' ? 'клиент' : review.language === 'cs' ? 'klient' : 'client'}
                  </div>
                </div>
              </div>
              <div className={styles.reviewText}>{review.text}</div>
              {review.link && (
                <div className={styles.reviewLink}>
                  <a href={review.link} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                    {review.language === 'ru' ? 'Читать полностью' : review.language === 'cs' ? 'Číst celé' : 'Read full review'}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      {/* Точки-пагинация */}
      <div className={styles.pagination}>
        {Array.from({ length: pageCount }).map((_, i) => (
          <motion.span 
            key={i} 
            className={`${styles.paginationDot} ${i === page ? styles.active : styles.inactive}`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
      {/* Стрелки */}
      <div className={styles.arrowsContainer}>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setPage(Math.max(0, page - 1))} className={styles.arrowButton}>
          <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="41" y1="8" x2="2" y2="8" stroke="#4D5C4D" strokeWidth="1.6" />
            <polyline points="16,1 2,8 16,15" stroke="#4D5C4D" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setPage(Math.min(pageCount - 1, page + 1))} className={styles.arrowButton}>
          <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2" y1="8" x2="41" y2="8" stroke="#4D5C4D" strokeWidth="1.6" />
            <polyline points="27,1 41,8 27,15" stroke="#4D5C4D" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </div>
    </section>
  );
} 