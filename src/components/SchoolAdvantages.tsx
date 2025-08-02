"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import styles from './SchoolAdvantages.module.css';

export default function SchoolAdvantages() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

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
          Преимущества школы Footura
        </motion.h2>
        
        <div className={styles.advantagesGrid}>
          {/* Сертифицированное обучение */}
          <motion.div 
            className={`${styles.advantageCard} ${styles.solidCard}`}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.1}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className={styles.cardTitle}>Сертифицированное обучение</h3>
          </motion.div>

          {/* Практическая направленность */}
          <motion.div 
            className={`${styles.advantageCard} ${styles.imageCard} ${styles.practicalCard}`}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.imageOverlay}></div>
            <h3 className={styles.cardTitle}>Практическая направленность</h3>
          </motion.div>

          {/* Современные технологии */}
          <motion.div 
            className={`${styles.advantageCard} ${styles.imageCard} ${styles.techCard} ${styles.techOrder}`}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.3}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.imageOverlay}></div>
            <h3 className={styles.cardTitle}>Современные технологии</h3>
          </motion.div>

          {/* Индивидуальный подход */}
          <motion.div 
            className={`${styles.advantageCard} ${styles.solidCard} ${styles.individualOrder}`}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.4}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className={styles.cardTitle}>Индивидуальный подход</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}