"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './NataliaExpertise.module.css';

const NataliaExpertise: React.FC = () => {
  const { t, tArray } = useLanguage();

  const expertiseItems = tArray('natalia.expertise.list') as string[];

  return (
    <section className={styles.expertiseSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('natalia.expertise.title')}</h2>
          <p className={styles.subtitle}>{t('natalia.expertise.subtitle')}</p>
        </div>
        
        <div className={styles.expertiseGrid}>
          {expertiseItems.map((item, index) => (
            <div key={index} className={styles.expertiseItem}>
              <div className={styles.checkIcon}>
                <Image 
                  src="/images/Arr_ex.png" 
                  alt="Check" 
                  width={20} 
                  height={20}
                  sizes="20px"
                />
              </div>
              <span className={styles.expertiseText}>{item}</span>
            </div>
          ))}
        </div>

        <div className={styles.description}>
          <p>{t('natalia.expertise.description')}</p>
        </div>
      </div>
    </section>
  );
};

export default NataliaExpertise;