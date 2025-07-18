import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.gradient}></div>
      <div className={styles.container}>
        <div className={styles.navbar}>
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
      </div>
    </header>
  );
};

export default Header; 