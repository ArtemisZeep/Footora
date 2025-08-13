"use client";

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './NataliaSchool.module.css';

export default function NataliaSchool() {
  const { t } = useLanguage();
  
  return (
    <section className={styles.schoolSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleColumn}>
            <h2 className={styles.title}>{t('nataliaPage.school.title')}</h2>
          </div>
          
          <div className={styles.textColumn}>
            <p className={styles.description}>
              {t('nataliaPage.school.description')}
            </p>
            
            <Link href="/school" className={styles.button}>
              {t('nataliaPage.school.button')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}