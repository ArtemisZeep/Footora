"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import styles from '../styles/AboutFounder.module.css';

const AboutFounderSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.aboutFounder}>
      <div className="container">
        <div className={styles.grid}>
          <h2 className={styles.title}>
            {t('aboutFounder.title')} – <br/>{t('aboutFounder.subtitle')}
          </h2>
          
          <div className={styles.imageContainer}>
            <Image
              src="/images/natalia_1.jpg"
              alt={t('aboutFounder.title')}
              width={640}
              height={909}
              className={styles.founderImage}
            />
          </div>
          
          <div className={styles.content}>
            <p className={styles.description}>
              {t('aboutFounder.description')}
            </p>
            
            <div className={styles.secondaryImageContainer}>
              <Image
                src="/images/natalia_2.jpg"
                alt={t('aboutFounder.title')}
                fill
                className="object-cover"
              />
            </div>
            
            <button className={`btn btn-outline ${styles.button}`}>
              {t('aboutFounder.learnMore')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounderSection; 