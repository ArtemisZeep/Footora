import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './WorkResultsBlock.module.css';

export default function WorkResultsBlock() {
  const { t } = useLanguage();
  
  const photos = [
    {
      src: '/images/file-1681162744334.png',
      alt: t('workResults.before'),
    },
    {
      src: '/images/file-1700502093549.png',
      alt: t('workResults.after'),
    },
  ];
  return (
    <section className={styles.workResultsSection}>
      {/* Заголовок */}
      <motion.h2 
        className={styles.workResultsTitle}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t('workResults.title')}
      </motion.h2>
      {/* Белая карточка */}
      <motion.div 
        className={styles.workResultsCard}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Левая часть: фото и подписи */}
        <div className={styles.workResultsLeft}>
          {/* Название проблемы */}
          <div className={styles.problemTitle}>
            {t('workResults.problemName')}
          </div>
          {/* Фото до/после */}
          <div className={styles.photosContainer}>
            <motion.div className={styles.photoWrapper} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Image src={photos[0].src} alt={photos[0].alt} fill />
            </motion.div>
            <motion.div className={styles.photoWrapper} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
              <Image src={photos[1].src} alt={photos[1].alt} fill />
            </motion.div>
          </div>
        </div>
        {/* Правая часть: описание */}
        <div className={styles.workResultsRight}>
          <div className={styles.workResultsDescription}>
            {t('workResults.description')}
          </div>
        </div>
        {/* Стрелки */}
        <div className={styles.arrowsContainer}>
          <button className={styles.arrowButton}>
            <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="41" y1="8" x2="2" y2="8" stroke="#4D5C4D" strokeWidth="1.6" />
              <polyline points="16,1 2,8 16,15" stroke="#4D5C4D" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className={styles.arrowButton}>
            <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="2" y1="8" x2="41" y2="8" stroke="#4D5C4D" strokeWidth="1.6" />
              <polyline points="27,1 41,8 27,15" stroke="#4D5C4D" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
} 