"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import styles from './SchoolBenefits.module.css';

export default function SchoolBenefits() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const benefitVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (delay: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay
      }
    })
  };

  return (
    <section className={styles.benefitsSection} ref={ref}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Что вы получаете
        </motion.h2>
        
        <div className={styles.benefitsGrid}>
          {/* Сертификат */}
          <motion.div 
            className={styles.benefitItem}
            variants={benefitVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2}
          >
            <div className={styles.iconWrapper}>
              <div className={styles.iconCircle}>
                <img 
                  src="/images/school/Icon1.png" 
                  alt="Сертификат" 
                  className={styles.iconImage}
                />
              </div>
            </div>
            <div className={styles.textContent}>
              <h3 className={styles.benefitTitle}>Сертификат школы Footura</h3>
              <p className={styles.benefitDescription}>
                Сертификат о повышении квалификации по теме "Вросший ноготь"
              </p>
            </div>
          </motion.div>

          {/* Профессиональные материалы */}
          <motion.div 
            className={styles.benefitItem}
            variants={benefitVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.4}
          >
            <div className={styles.iconWrapper}>
              <div className={styles.iconCircle}>
                <img 
                  src="/images/school/Icon2.png" 
                  alt="Профессиональные материалы" 
                  className={styles.iconImage}
                />
              </div>
            </div>
            <div className={styles.textContent}>
              <h3 className={styles.benefitTitle}>Профессиональные материалы</h3>
              <p className={styles.benefitDescription}>
                Печатные учебные материалы, перечень рекомендуемых инструментов и препаратов
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className={styles.buttonGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button 
            className={styles.detailsBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Подробнее о курсе
            <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
                <path d="M1 6L43 6M43 6L38 1M43 6L38 11" stroke="#FFFFFF" strokeWidth="1.6"/>
              </svg>
          </motion.button>
          <motion.button 
            className={styles.purchaseBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Купить курс
            <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
                <path d="M1 6L43 6M43 6L38 1M43 6L38 11" stroke="#506888" strokeWidth="1.6"/>
              </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}