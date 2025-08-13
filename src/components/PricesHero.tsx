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
            <Link 
              href="https://n766508.alteg.io/company/720417/personal/select-services?_gl=1*15h3pye*_ga*MTAyNjk3MTQ4MC4xNzI5MDAzODQy*_ga_2WY57VWNET*MTczNDE3NTk5NC4zLjAuMTczNDE3NTk5NC42MC4wLjA.*_ga_L53TRF9G65*MTczNDE3NTk5NC4zLjAuMTczNDE3NTk5NC42MC4wLjA.&o=m-1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bookingButton}
            >
              <span className={styles.buttonText}>{t('pricesPage.hero.booking')}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricesHero;