"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import styles from '../styles/Footer.module.css';

const FooterLink: React.FC<{href: string; children: React.ReactNode}> = ({ href, children }) => {
  return (
    <Link href={href} className={styles.navLink}>
      {children}
    </Link>
  );
};

interface FooterProps {
  variant?: 'default' | 'school';
}

const Footer: React.FC<FooterProps> = ({ variant = 'default' }) => {
  const { t } = useLanguage();

  return (
    <footer id="contacts" className={`${styles.footer} ${variant === 'school' ? styles.schoolVariant : ''}`}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* Logo */}
          <div className={styles.logoSection}>
            <img src="/images/logo_footura.png" alt="Footura Logo" className={styles.logoImage} />
          </div>
          
          {/* Navigation Links */}
          <div className={styles.navigationSection}>
            <nav className={styles.navLinks}>
              <FooterLink href="/about">{t('footer.about')}</FooterLink>
              <FooterLink href="/team">{t('footer.team')}</FooterLink>
              <FooterLink href="/services">{t('footer.services')}</FooterLink>
              <FooterLink href="/prices">{t('footer.prices')}</FooterLink>
              <FooterLink href="/natalia">{t('footer.natalia')}</FooterLink>
              <FooterLink href="/school">{t('footer.school')}</FooterLink>
              {/* <FooterLink href="/blog">{t('footer.blog')}</FooterLink> */}
            </nav>
          </div>
          
          {/* Contact Information */}
          <div className={styles.contactSection}>
            <div className={styles.address}>Na Rybníčku - 1329/5. Praha 2</div>
            <div className={styles.phone}>+420 731 394 090</div>
            <div className={styles.email}>info@footura.cz</div>
          </div>
        </div>
        
        <div className={styles.legalSection}>
          <div className={styles.companyInfo}>
            Nataliia Rotar, Pýchavková 282/7, Praha, 104 00, Česká republika, IČ: 06883869
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyrightText}>{t('footer.copyright')}</div>
          <Link href="/privacy" className={styles.privacyLink}>
            {t('footer.privacy')}
          </Link>
        </div>
        
        {/* Developer Section */}
        <div className={styles.developerSection}>
          <a 
            href="https://zeepdesign.tech" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.developerLink}
          >
            <span className={styles.developerText}>{t('footer.developedBy')}</span>
            <img 
              src="/images/logo_developer.png" 
              alt="ZEEP Design Studio" 
              className={styles.zeepLogo}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;