"use client";

import React from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC<{ variant?: string }> = ({ variant }) => {
  const { t } = useLanguage();

  return (
    <footer className={`${styles.footer} ${variant === 'school' ? styles.schoolVariant : ''}`}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.leftSection}>
            <div className={styles.logoSection}>
              <Image 
                src="/images/logo_footura.png" 
                alt="Footura Logo" 
                width={120}
                height={40}
                className={styles.logoImage}
                priority={false}
                sizes="120px"
              />
            </div>
            <div className={styles.mainGrid}>
              <div className={styles.column}>
                <h4 className={styles.columnTitle}>{t('footer.navigation')}</h4>
                <div className={styles.navLinks}>
                  <a href="/" className={styles.navLink}>{t('navigation.home')}</a>
                  <a href="/about" className={styles.navLink}>{t('navigation.about')}</a>
                  <a href="/services" className={styles.navLink}>{t('navigation.services')}</a>
                  <a href="/natalia" className={styles.navLink}>{t('navigation.natalia')}</a>
                  <a href="/school" className={styles.navLink}>{t('navigation.school')}</a>
                  <a href="/insoles" className={styles.navLink}>{t('navigation.insoles')}</a>
                  <a href="/blog" className={styles.navLink}>{t('navigation.blog')}</a>
                </div>
              </div>
              
              <div className={styles.column}>
                <h4 className={styles.columnTitle}>{t('footer.contact')}</h4>
                <div className={styles.contactSection}>
                  <p className={styles.address}>{t('footer.address')}</p>
                  <a href="tel:+420731394090" className={styles.phone}>+420 731 394 090</a>
                  <a href="mailto:info@footura.cz" className={styles.email}>info@footura.cz</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyrightSection}>
            <p className={styles.copyright}>
              © 2024 Footura. {t('footer.rights')}
            </p>
            <div className={styles.legalLinks}>
              <a href="/privacy" className={styles.legalLink}>{t('footer.privacy')}</a>
              <span className={styles.separator}>|</span>
              <a href="/terms" className={styles.legalLink}>{t('footer.terms')}</a>
            </div>
          </div>
          
          <div className={styles.developerSection}>
            <a href="https://zeep.design" target="_blank" rel="noopener noreferrer" className={styles.developerLink}>
              <span className={styles.developerText}>{t('footer.developedBy')}</span>
              <Image 
                src="/images/logo_developer.png" 
                alt="Zeep Design" 
                width={60}
                height={20}
                className={styles.zeepLogo}
                sizes="60px"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;