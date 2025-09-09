"use client";

import styles from './InsolesInfo.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

export default function InsolesInfo() {
  const { t } = useLanguage();

  return (
    <section id="insoles-details" className={styles.infoSection}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <img 
            src="/images/insoles/diagnostic-device.png" 
            alt={t('insolesPage.info.imageAlt')}
            className={styles.image}
          />
        </div>
        <div className={styles.textCol}>
          <h2 className={styles.title}>
            {t('insolesPage.info.title').split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < t('insolesPage.info.title').split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className={styles.description}>
            {t('insolesPage.info.description')}
          </p>
        </div>
      </div>
    </section>
  );
} 