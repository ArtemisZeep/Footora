"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './NataliaPractice.module.css';

interface Activity {
  name: string;
  place?: string;
}

interface PracticeItem {
  year: string;
  activities: Activity[];
}

export default function NataliaPractice() {
  const { t, tData } = useLanguage();
  
  const practiceData = tData('nataliaPage.practice.items') as PracticeItem[];
  const validPracticeData = Array.isArray(practiceData) ? practiceData : [];
  
  return (
    <section className={styles.practiceSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('nataliaPage.practice.title')}</h2>
        
        <div className={styles.practiceList}>
          {validPracticeData.map((item, index) => (
            <div key={index} className={styles.practiceItem}>
              <div className={styles.separator}></div>
              <div className={styles.content}>
                <div className={styles.yearColumn}>
                  <span className={styles.year}>{item.year}</span>
                </div>
                <div className={styles.activitiesColumn}>
                  {item.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className={styles.activityItem}>
                      <p className={styles.activityName}>{activity.name}</p>
                      {activity.place && (
                        <p className={styles.activityPlace}>{activity.place}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}