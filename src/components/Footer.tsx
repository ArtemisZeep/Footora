import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const FooterLink: React.FC<{href: string; children: React.ReactNode}> = ({ href, children }) => {
  return (
    <Link href={href} className={styles.navLink}>
      {children}
    </Link>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Navigation Links */}
          <div>
            <nav className={styles.navLinks}>
              <FooterLink href="/about">О центре подологии</FooterLink>
              <FooterLink href="/team">Команда</FooterLink>
              <FooterLink href="/services">Услуги</FooterLink>
              <FooterLink href="/prices">Цены</FooterLink>
              <FooterLink href="/natalia">Наталия Ротарь</FooterLink>
              <FooterLink href="/shop">Магазин</FooterLink>
              <FooterLink href="/school">Школа Footura</FooterLink>
            </nav>
          </div>
          
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <div className={styles.phone}>+420 731 394 090</div>
            <div className={styles.address}>Na Rybníčku - 1329/5. Praha 2</div>
            <div className={styles.email}>info@footura.cz</div>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className={styles.socialLinks}>
          <div className={styles.socialLinksList}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <Link key={num} href="#" className={styles.socialLink}>
                <Image 
                  src={`/images/social${num}.svg`} 
                  alt={`Social media ${num}`} 
                  width={24} 
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
        
        {/* Copyright and Policies */}
        <div className={styles.copyright}>
          <div className={styles.copyrightText}>© 2025 All Right Reserved</div>
          <div className={styles.companyInfo}>
            Nataliia Rotar, Pýchavková 282/7, Praha, 104 00, Česká republika, IČ: 06883869
          </div>
        </div>
        
        <div>
          <Link href="/privacy" className={styles.privacyLink}>
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 