"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './NataliaWhyChoose.module.css';

interface WhyChoosePoint {
  number: string;
  text: string;
}

export default function NataliaWhyChoose() {
  const { t, tData } = useLanguage();
  
  const whyChooseData = tData('nataliaPage.whyChoose.points') as WhyChoosePoint[];
  const validWhyChooseData = Array.isArray(whyChooseData) ? whyChooseData : [];
  
  return (
    <section className={styles.whyChooseSection}>
      {/* Фоновое изображение */}
      <div className={styles.backgroundImage}></div>
      
      {/* Контентная часть */}
      <div className={styles.contentSection}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t('nataliaPage.whyChoose.title')}</h2>
          
          <div className={styles.pointsGrid}>
            {validWhyChooseData.map((point, index) => (
              <div key={index} className={styles.point}>
                <div className={styles.pointNumber}>{point.number}</div>
                <p className={styles.pointText}>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}