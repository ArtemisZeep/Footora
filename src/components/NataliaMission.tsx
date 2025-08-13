"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './NataliaMission.module.css';

export default function NataliaMission() {
  const { t } = useLanguage();
  
  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>{t('nataliaPage.mission.subtitle')}</h3>
        <h2 className={styles.mission}>
          {t('nataliaPage.mission.mission')}
        </h2>
      </div>
    </section>
  );
}