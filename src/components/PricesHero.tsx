import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './PricesHero.module.css';

const PricesHero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className={styles.hero}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {t('pricesPage.hero.title').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < t('pricesPage.hero.title').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <div className={styles.buttonContainer}>
            <Link href="/booking" className={styles.bookingButton}>
              <span className={styles.buttonText}>{t('pricesPage.hero.booking')}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricesHero;