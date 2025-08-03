"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import styles from '../styles/Benefits.module.css';



const BenefitsSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const imageSrc = isMobile ? "/images/team_mob.png" : "/images/team.jpg";
  
  // Получаем переводы для преимуществ
  const benefits = t('benefits.items') as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section className={styles.benefits} id="benefits">
      <div className={styles.bgWrap}>
      <Image
        src={imageSrc}
        alt="Footura team"
        fill
        className={styles.bgImage}
        priority
      />
      <h2 className={styles.title}>
        {t('benefits.title')}
      </h2>
      </div>
      <div className={styles.benefitsBox}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.column}>
              {benefits.slice(0, 3).map((b, i) => (
                <div className={styles.benefitItem} key={b.number}>
                  <div className={styles.benefitNumber}>{b.number}</div>
                  <div className={styles.benefitTextBlock}>
                    <div className={styles.benefitTitle}>{b.title}</div>
                    <div className={styles.benefitDescription}>{b.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.column}>
              {benefits.slice(3, 6).map((b, i) => (
                <div className={styles.benefitItem} key={b.number}>
                  <div className={styles.benefitNumber}>{b.number}</div>
                  <div className={styles.benefitTextBlock}>
                    <div className={styles.benefitTitle}>{b.title}</div>
                    <div className={styles.benefitDescription}>{b.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 