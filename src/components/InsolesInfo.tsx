"use client";

import Image from 'next/image';
import styles from './InsolesInfo.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

export default function InsolesInfo() {
  const { t } = useLanguage();

  return (
    <section id="insoles-details" className={styles.infoSection}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <Image 
            src="/images/insoles/diagnostic-device.png" 
            alt={t('insolesPage.info.imageAlt')}
            width={600}
            height={400}
            className={styles.image}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
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