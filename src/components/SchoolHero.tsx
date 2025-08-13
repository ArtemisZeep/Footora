"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './SchoolHero.module.css';

export default function SchoolHero() {
  const { t } = useLanguage();
  
  // Функция плавного скролла к overviewSection
  const scrollToOverview = () => {
    const element = document.getElementById('overviewSection');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className={styles.badge}
            variants={itemVariants}
            dangerouslySetInnerHTML={{
              __html: t('schoolPage.hero.badge').replace(/\n/g, '<br />')
            }}
          />
          <motion.h1 
            className={styles.title}
            variants={itemVariants}
            dangerouslySetInnerHTML={{
              __html: t('schoolPage.hero.title').replace(/\n/g, '<br />')
            }}
          />
          <motion.button 
            className={styles.enrollBtn}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToOverview}
          >
            {t('schoolPage.hero.button')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 