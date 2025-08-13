"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './NataliaHero.module.css';

export default function NataliaHero() {
  const { t } = useLanguage();
  
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              {t('nataliaPage.hero.title')}
            </h1>
            <p className={styles.description}>
              {t('nataliaPage.hero.description')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Мобильный текстовый блок */}
      <section className={styles.mobileTextSection}>
        <div className={styles.mobileContainer}>
          <p className={styles.mobileDescription}>
            {t('nataliaPage.hero.description')}
          </p>
        </div>
      </section>
    </>
  );
}