"use client";

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './SchoolLector.module.css';

export default function SchoolLector() {
  const { t } = useLanguage();
  return (
    <section className={styles.lectorSection}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <img 
            src="/images/school/natalia-rotar.png" 
            alt="Наталия Ротарь" 
            className={styles.image}
          />
        </div>
        <div className={styles.textCol}>
          <div className={styles.badge}>{t('schoolPage.lector.badge')}</div>
          <h2 className={styles.title}>
            {t('schoolPage.lector.title')}
          </h2>
          <Link href="/natalia" className={styles.detailsBtn}>
            {t('schoolPage.lector.button')}
          </Link>
        </div>
      </div>
    </section>
  );
} 