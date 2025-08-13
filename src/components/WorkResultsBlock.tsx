import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { beforeAfterData } from '@/data/beforeAfterData';
import styles from './WorkResultsBlock.module.css';

export default function WorkResultsBlock() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const currentCase = beforeAfterData[currentIndex];
  
  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterData.length);
  };
  
  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length);
  };
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
            {currentCase?.title || 'Название проблемы'}
          </div>
          {/* Фото до/после */}
          <div className={styles.photosContainer}>
            <motion.div 
              key={`before-${currentIndex}`}
              className={styles.photoWrapper} 
              initial={{ opacity: 0, scale: 0.96 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5 }}
            >
              <Image 
                src={currentCase?.beforeImage || '/images/default-before.jpg'} 
                alt={`До лечения - ${currentCase?.title}`} 
                fill 
              />
              <div className={styles.photoLabel}>До</div>
            </motion.div>
            <motion.div 
              key={`after-${currentIndex}`}
              className={styles.photoWrapper} 
              initial={{ opacity: 0, scale: 0.96 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <Image 
                src={currentCase?.afterImage || '/images/default-after.jpg'} 
                alt={`После лечения - ${currentCase?.title}`} 
                fill 
              />
              <div className={styles.photoLabel}>После</div>
            </motion.div>
          </div>
        </div>
        {/* Правая часть: описание */}
        <div className={styles.workResultsRight}>
          <div className={styles.workResultsDescription}>
            {currentCase?.description || 'Описание случая лечения'}
          </div>
        </div>
        {/* Стрелки */}
        <div className={styles.arrowsContainer}>
          <button className={styles.arrowButton} onClick={prevCase}>
            <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="41" y1="8" x2="2" y2="8" stroke="#4D5C4D" strokeWidth="1.6" />
              <polyline points="16,1 2,8 16,15" stroke="#4D5C4D" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className={styles.arrowButton} onClick={nextCase}>
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