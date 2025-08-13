"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './ServicesHero.module.css';

export default function ServicesHero() {
  const { t } = useLanguage();

  return (
    <section className={styles.heroSection}>
      <motion.div 
        className={styles.infoGroup}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('servicesPage.hero.title')}
        </motion.h2>
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('servicesPage.hero.description')}
        </motion.p>
      </motion.div>
    </section>
  );
}