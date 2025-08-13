"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './SchoolAbout.module.css';

export default function SchoolAbout() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section className={styles.aboutSection} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {t('schoolPage.about.badge')}
        </motion.div>
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('schoolPage.about.description')}
        </motion.p>
      </div>
    </section>
  );
} 