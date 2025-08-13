"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './NataliaAchievements.module.css';

interface AchievementCard {
  number: string;
  title: string;
  description: string;
}

export default function NataliaAchievements() {
  const { t, tData } = useLanguage();
  
  const achievementsData = tData('nataliaPage.achievements.cards') as AchievementCard[] || [];
  
  return (
    <section className={styles.achievementsSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.subtitle}>{t('nataliaPage.achievements.subtitle')}</h3>
          <p className={styles.description}>
            {t('nataliaPage.achievements.description')}
          </p>
        </div>
        
        <div className={styles.cardsGrid}>
          {achievementsData.map((card, index) => (
            <div key={index} className={styles.achievementCard}>
              <div className={styles.cardNumber}>{card.number}</div>
              <h4 className={styles.cardTitle}>{card.title}</h4>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}