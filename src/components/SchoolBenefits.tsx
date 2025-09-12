"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './SchoolBenefits.module.css';

export default function SchoolBenefits() {
  const { t, tData } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.3 });
  
  const benefitsItems = tData('schoolPage.benefits.items') as Array<{
    title: string;
    description: string;
  }> || [];

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

  const bookingUrl = "https://n773742.alteg.io/company/720417/activity/select?_gl=1*1stj87e*_ga*NzgyNDMyMzA5LjE3NTIyMzkzMTc.*_ga_2WY57VWNET*czE3NTc2MjQ1MDgkbzMwJGcxJHQxNzU3NjI0NTM0JGozNCRsMCRoMA..*_ga_L53TRF9G65*czE3NTc2MjQ1MDgkbzMwJGcxJHQxNzU3NjI0NTM0JGozNCRsMCRoMA..&o=m2092015act2025-09-11";

  return (
    <section className={styles.benefitsSection} ref={ref}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {t('schoolPage.benefits.title')}
        </motion.h2>
        
        <div className={styles.benefitsGrid}>
          {benefitsItems.map((item, index) => (
            <motion.div 
              key={index}
              className={styles.benefitItem}
              variants={benefitVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.2 + (index * 0.2)}
            >
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <img 
                    src={`/images/school/Icon${index + 1}.png`}
                    alt={item.title}
                    className={styles.iconImage}
                  />
                </div>
              </div>
              <div className={styles.textContent}>
                <h3 className={styles.benefitTitle}>{item.title}</h3>
                <p className={styles.benefitDescription}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.buttonGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#course-details"
            className={styles.detailsBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('schoolPage.benefits.detailsButton')}
            <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
                <path d="M1 6L43 6M43 6L38 1M43 6L38 11" stroke="#FFFFFF" strokeWidth="1.6"/>
              </svg>
          </motion.a>
          <motion.a 
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.purchaseBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('schoolPage.benefits.purchaseButton')}
            <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
                <path d="M1 6L43 6M43 6L38 1M43 6L38 11" stroke="#506888" strokeWidth="1.6"/>
              </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}