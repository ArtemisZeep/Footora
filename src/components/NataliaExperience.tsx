"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './NataliaExperience.module.css';

export default function NataliaExperience() {
  const { t } = useLanguage();
  
  return (
    <section className={styles.experienceSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {t('nataliaPage.experience.title')}
          </h2>
          <p className={styles.description}>
            {t('nataliaPage.experience.description')}
          </p>
        </div>
      </div>
    </section>
  );
}