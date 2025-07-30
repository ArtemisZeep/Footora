"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

interface HeaderProps {
  variant?: 'default' | 'school';
}

const Header: React.FC<HeaderProps> = ({ variant = 'default' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
                <button className={styles.dropdownBtn}>Центр подологии</button>
                <div className={styles.dropdownContent}>
                  <Link href="/about">О центре</Link>
                  <Link href="/team">Команда</Link>
                  <Link href="/services">Услуги</Link>
                </div>
              </div>
              <Link href="/services" className={styles.navLink}>Услуги</Link>
              <Link href="/prices" className={styles.navLink}>Цены</Link>
              <Link href="/natalia" className={styles.navLink}>Наталия Ротарь</Link>
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
              <Link href="/footura-school" className={styles.navLink}>Школа Footura</Link>
              <Link href="/shop" className={styles.navLink}>Магазин</Link>
              <Link href="/contacts" className={styles.navLink}>Контакты</Link>
              
              <div className={styles.langSwitcher}>
                <button className={styles.langButton}>CZ</button>
                <button className={styles.langButton}>RU</button>
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
                    <h3>Центр подологии</h3>
                    <Link href="/about" onClick={closeMenu}>О центре</Link>
                    <Link href="/team" onClick={closeMenu}>Команда</Link>
                    <Link href="/services" onClick={closeMenu}>Услуги</Link>
                  </div>
                  
                  <div className={styles.mobileMenuSection}>
                    <Link href="/services" onClick={closeMenu}>Услуги</Link>
                    <Link href="/prices" onClick={closeMenu}>Цены</Link>
                    <Link href="/natalia" onClick={closeMenu}>Наталия Ротарь</Link>
                    <Link href="/footura-school" onClick={closeMenu}>Школа Footura</Link>
                    <Link href="/shop" onClick={closeMenu}>Магазин</Link>
                    <Link href="/contacts" onClick={closeMenu}>Контакты</Link>
                  </div>
                  
                  <div className={styles.mobileMenuSection}>
                    <div className={styles.mobileLangSwitcher}>
                      <button className={styles.mobileLangButton}>CZ</button>
                      <button className={styles.mobileLangButton}>RU</button>
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