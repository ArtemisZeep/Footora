"use client";

import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './SchoolReviews.module.css';

interface ReviewData {
  id: string;
  name: string;
  role: string;
  text: string;
  link: string;
}

export default function SchoolReviews() {
  const { t, tData } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const reviewsData = useMemo(() => {
    return tData('schoolPage.reviews.items') as ReviewData[] || [];
  }, [tData]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviewsData.length / 2));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(reviewsData.length / 2)) % Math.ceil(reviewsData.length / 2));
  };

  const getCurrentReviews = () => {
    const startIndex = currentIndex * 2;
    return reviewsData.slice(startIndex, startIndex + 2);
  };

  const currentReviews = getCurrentReviews();

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.container}>
        <div className={styles.reviewsContent}>
          {currentReviews.map((review, index) => (
            <div key={review.id} className={`${styles.reviewCard} ${index === 0 ? styles.leftCard : styles.rightCard}`}>
              <div className={styles.reviewHeader}>
                <div className={styles.avatarWrapper}>
                  <div className={styles.avatar}>
                    <img 
                      src="/images/school/review-image.png" 
                      alt={review.name}
                      className={styles.avatarImage}
                    />
                  </div>
                </div>
                <div className={styles.reviewInfo}>
                  <h3 className={styles.reviewerName}>{review.name}</h3>
                  <p className={styles.reviewerRole}>{review.role}</p>
                </div>
              </div>
              <p className={styles.reviewText}>{review.text}</p>
              <a href="#" className={styles.reviewLink}>{review.link}</a>
            </div>
          ))}
        </div>

        <div className={styles.navigation}>
          <button className={styles.navButton} onClick={prevReview} aria-label={t('schoolPage.reviews.navigationLabels.previous')}>
          <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
                <path d="M43 6L1 6M1 6L6 1M1 6L6 11" stroke="#506888" strokeWidth="1.6"/>
              </svg>
          </button>
          <button className={styles.navButton} onClick={nextReview} aria-label={t('schoolPage.reviews.navigationLabels.next')}>
          <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
                <path d="M1 6L43 6M43 6L38 1M43 6L38 11" stroke="#506888" strokeWidth="1.6"/>
              </svg>
          </button>
        </div>

        <div className={styles.indicators}>
          {Array.from({ length: Math.ceil(reviewsData.length / 2) }, (_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`${t('schoolPage.reviews.navigationLabels.goTo')} ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}