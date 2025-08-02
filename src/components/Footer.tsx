import React from 'react';
import Link from 'next/link';
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
              <FooterLink href="/about">О центре подологии</FooterLink>
              <FooterLink href="/team">Команда</FooterLink>
              <FooterLink href="/services">Услуги</FooterLink>
              <FooterLink href="/prices">Цены</FooterLink>
              <FooterLink href="/natalia">Наталия Ротарь</FooterLink>
              <FooterLink href="/insoles">Стельки</FooterLink>
              <FooterLink href="/school">Школа Footura</FooterLink>
              <FooterLink href="/blog">Блог</FooterLink>
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
          <div className={styles.copyrightText}>© 2025 All Right Reserved</div>
          <Link href="/privacy" className={styles.privacyLink}>
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;