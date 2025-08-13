"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './SchoolAdvantages.module.css';

export default function SchoolAdvantages() {
  const { t, tArray } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.2 });
  
  const advantagesItems = tArray('schoolPage.advantages.items') || [];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay
      }
    })
  };

  return (
    <section className={styles.advantagesSection} ref={ref}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {t('schoolPage.advantages.title')}
        </motion.h2>
        
        <div className={styles.advantagesGrid}>
          {advantagesItems.map((item, index) => {
            const cardStyleMap = [
              `${styles.advantageCard} ${styles.solidCard}`,
              `${styles.advantageCard} ${styles.imageCard} ${styles.practicalCard}`,
              `${styles.advantageCard} ${styles.imageCard} ${styles.techCard} ${styles.techOrder}`,
              `${styles.advantageCard} ${styles.solidCard} ${styles.individualOrder}`
            ];

            return (
              <motion.div 
                key={index}
                className={cardStyleMap[index] || `${styles.advantageCard} ${styles.solidCard}`}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.1 + (index * 0.1)}
                whileHover={{ scale: 1.02 }}
              >
                {(index === 1 || index === 2) && <div className={styles.imageOverlay}></div>}
                <h3 className={styles.cardTitle}>{item}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}