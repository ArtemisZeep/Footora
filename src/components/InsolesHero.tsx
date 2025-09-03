"use client";

import styles from './InsolesHero.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

export default function InsolesHero() {
  const { t } = useLanguage();

  const handleDetailsClick = () => {
    // Прокрутка к блоку с подробной информацией
    const infoSection = document.getElementById('insoles-details');
    if (infoSection) {
      infoSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleBookingClick = () => {
    // Переход на сайт записи
    window.open('https://n766508.alteg.io/company/720417/personal/select-services?_gl=1*15h3pye*_ga*MTAyNjk3MTQ4MC4xNzI5MDAzODQy*_ga_2WY57VWNET*MTczNDE3NTk5NC4zLjAuMTczNDE3NTk5NC42MC4wLjA.*_ga_L53TRF9G65*MTczNDE3NTk5NC4zLjAuMTczNDE3NTk5NC42MC4wLjA.&o=m-1', '_blank');
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>{t('insolesPage.hero.badge')}</div>
          <h1 className={styles.title}>
            {t('insolesPage.hero.title').split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < t('insolesPage.hero.title').split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>
          <div className={styles.buttonsGroup}>
            <button 
              className={styles.detailsBtn}
              onClick={handleDetailsClick}
            >
              {t('insolesPage.hero.detailsButton')}
            </button>
            <button 
              className={styles.bookBtn}
              onClick={handleBookingClick}
            >
              {t('insolesPage.hero.bookButton')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 