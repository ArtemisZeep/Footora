"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './NataliaExpertise.module.css';

export default function NataliaExpertise() {
  const { t, tArray } = useLanguage();
  
  const expertisePoints = tArray('nataliaPage.expertise.points');
  const validExpertisePoints = Array.isArray(expertisePoints) ? expertisePoints : [];
  
  return (
    <section className={styles.expertiseSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Левая колонка с заголовком и изображением */}
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>
              {t('nataliaPage.expertise.title')}
            </h2>
            <div className={styles.imageContainer}></div>
          </div>

          {/* Правая колонка с контентом */}
          <div className={styles.rightColumn}>
            <div className={styles.topContent}>
              <h3 className={styles.subtitle}>{t('nataliaPage.expertise.subtitle')}</h3>
              
              <div className={styles.pointsList}>
                {validExpertisePoints.map((pointText, index) => (
                  <div key={index} className={styles.point}>
                    <div className={styles.checkIcon}>
                      <img src="/images/Arr_ex.png" alt="Check" width="20" height="20" />
                    </div>
                    <p className={styles.pointText}>{pointText}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className={styles.conclusion}>
              {t('nataliaPage.expertise.conclusion')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}