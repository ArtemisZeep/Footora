"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import styles from '../styles/Services.module.css';

const ServiceCard = ({ 
  title, 
  description, 
  buttonText, 
  imagePath,
  textPosition = "left",
  backgroundColor,
  buttonColor = "#B8C8BA"
}: {
  title: string;
  description: string;
  buttonText: string;
  imagePath?: string;
  textPosition?: "left" | "right";
  backgroundColor?: string;
  buttonColor?: string;
}) => {
  const cardStyle = backgroundColor ? { backgroundColor } : {};
  
  return (
    <div className={styles.serviceCard} style={cardStyle}>
      {imagePath && (
        <Image 
          src={imagePath} 
          alt={title}
          fill
          className={styles.cardImage}
        />
      )}
      
      <div className={`${styles.cardContent} ${textPosition === "left" ? styles.cardContentLeft : styles.cardContentRight}`}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <a 
          href="https://n766508.alteg.io/company/720417/personal/select-services?_gl=1*15h3pye*_ga*MTAyNjk3MTQ4MC4xNzI5MDAzODQy*_ga_2WY57VWNET*MTczNDE3NTk5NC4zLjAuMTczNDE3NTk5NC42MC4wLjA.*_ga_L53TRF9G65*MTczNDE3NTk5NC4zLjAuMTczNDE3NTk5NC42MC4wLjA.&o=m-1"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardButton}
          style={{ 
            borderColor: buttonColor, 
            color: buttonColor,
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const LargeTitle: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <h2 className={styles.largeTitle}>
      {children}
    </h2>
  );
};

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  
  // Figma colors
  const podologyGreen = "#4D5C4D"; // rgb(77, 92, 77)
  const pedicureGreen = "#283433"; // rgb(40, 52, 51)
  const accentColor = "#B8C8BA"; // rgb(184, 200, 186)

  return (
    <section className={styles.services}>
      <div className={styles.grid}>
        {/* Top Left - Podology Image */}
        <div className={styles.serviceCard}>
          <div className={styles.titleOverlay}>
            <LargeTitle>{t('services.podology.titleEn')}</LargeTitle>
          </div>
          <Image 
            src="/images/podology.jpg" 
            alt={t('services.podology.title')} 
            fill
            className={styles.cardImage}
          />
        </div>
        
        {/* Top Right - Green Background */}
        <ServiceCard 
          title={t('services.podology.title')}
          description={t('services.podology.description')}
          buttonText={t('services.booking')}
          backgroundColor={podologyGreen}
          textPosition="right"
        />
        
        {/* Bottom Left - Dark Green Background */}
        <ServiceCard 
          title={t('services.pedicure.title')}
          description={t('services.pedicure.description')}
          buttonText={t('services.booking')}
          backgroundColor={pedicureGreen}
          textPosition="left"
        />
        
        {/* Bottom Right - Pedicure & Manicure Image */}
        <div className={styles.serviceCard}>
          <div className={styles.titleOverlay}>
            <LargeTitle>Pedicure</LargeTitle>
            <span className={styles.ampersand}>&</span>
            <LargeTitle>Manicure</LargeTitle>
          </div>
          <Image 
            src="/images/pedicure.jpg" 
            alt={t('services.pedicure.title')} 
            fill
            className={styles.cardImage}
          />
        </div>
      </div>
      
      <div className={styles.description}>
        <div className="container">
          <p className={styles.descriptionText}>
            {t('services.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 