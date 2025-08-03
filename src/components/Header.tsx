"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import styles from '../styles/Header.module.css';

interface HeaderProps {
  variant?: 'default' | 'school';
}

const Header: React.FC<HeaderProps> = ({ variant = 'default' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (lang: 'ru' | 'cs') => {
    setLanguage(lang);
  };

  return (
    <header className={`${styles.header} ${variant === 'school' ? styles.schoolVariant : ''}`}>
      {variant !== 'school' && <div className={styles.gradient}></div>}
      <div className={styles.container}>
        <div className={styles.navbar}>
          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {/* Left Navigation */}
            <div className={styles.leftNav}>
              <div className={styles.dropdown}>
                <button className={styles.dropdownBtn}>{t('nav.about')}</button>
                <div className={styles.dropdownContent}>
                  <div>
                    <Link href="/about">{t('nav.about')}</Link>
                    <Link href="/team">{t('nav.team')}</Link>
                    <Link href="/services">{t('nav.services')}</Link>
                  </div>
                </div>
              </div>
              <Link href="/services" className={styles.navLink}>{t('nav.services')}</Link>
              <Link href="/prices" className={styles.navLink}>{t('nav.prices')}</Link>
              <Link href="/natalia" className={styles.navLink}>{t('nav.natalia')}</Link>
            </div>
            
            {/* Center Logo */}
            <div className={styles.centerLogo}>
              <Link href="/">
                <Image 
                  src="/images/logo_up.svg" 
                  alt="Footura logo" 
                  width={140}
                  height={40}
                  priority
                />
              </Link>
            </div>
            
            {/* Right Navigation */}
            <div className={styles.rightNav}>
              <Link href="/school" className={styles.navLink}>{t('nav.school')}</Link>
              <span className={styles.navLink} style={{cursor: 'not-allowed', opacity: 0.6}}>Магазин</span>
              <Link href="#contacts" className={styles.navLink}>{t('nav.contacts')}</Link>
              
              <div className={styles.langSwitcher}>
                <button 
                  className={`${styles.langButton} ${language === 'cs' ? styles.langActive : ''}`}
                  onClick={() => handleLanguageChange('cs')}
                >
                  CZ
                </button>
                <button 
                  className={`${styles.langButton} ${language === 'ru' ? styles.langActive : ''}`}
                  onClick={() => handleLanguageChange('ru')}
                >
                  RU
                </button>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Navigation */}
          <div className={styles.mobileNav}>
            {/* Mobile Logo */}
            <div className={styles.mobileLogo}>
              <Link href="/">
                <Image 
                  src="/images/logo_up.svg" 
                  alt="Footura logo" 
                  width={120}
                  height={34}
                  priority
                />
              </Link>
            </div>

            {/* Burger Menu Button */}
            <button 
              className={`${styles.burgerBtn} ${isMenuOpen ? styles.burgerOpen : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className={styles.mobileMenuOverlay} onClick={closeMenu}>
              <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
                <div className={styles.mobileMenuHeader}>
                  <Image 
                    src="/images/logo_up.svg" 
                    alt="Footura logo" 
                    width={100}
                    height={28}
                  />
                  
                </div>
                
                <nav className={styles.mobileMenuContent}>
                  <div className={styles.mobileMenuSection}>
                    <h3>{t('nav.about')}</h3>
                    <Link href="/about" onClick={closeMenu}>{t('nav.about')}</Link>
                    <Link href="/team" onClick={closeMenu}>{t('nav.team')}</Link>
                    <Link href="/services" onClick={closeMenu}>{t('nav.services')}</Link>
                  </div>
                  
                  <div className={styles.mobileMenuSection}>
                    <Link href="/services" onClick={closeMenu}>{t('nav.services')}</Link>
                    <Link href="/prices" onClick={closeMenu}>{t('nav.prices')}</Link>
                    <Link href="/natalia" onClick={closeMenu}>{t('nav.natalia')}</Link>
                    <Link href="/school" onClick={closeMenu}>{t('nav.school')}</Link>
                    <span style={{cursor: 'not-allowed', opacity: 0.6, padding: '10px 0', display: 'block'}}>Магазин</span>
                    <Link href="#contacts" onClick={closeMenu}>{t('nav.contacts')}</Link>
                  </div>
                  
                  <div className={styles.mobileMenuSection}>
                    <div className={styles.mobileLangSwitcher}>
                      <button 
                        className={`${styles.mobileLangButton} ${language === 'cs' ? styles.langActive : ''}`}
                        onClick={() => handleLanguageChange('cs')}
                      >
                        CZ
                      </button>
                      <button 
                        className={`${styles.mobileLangButton} ${language === 'ru' ? styles.langActive : ''}`}
                        onClick={() => handleLanguageChange('ru')}
                      >
                        RU
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 