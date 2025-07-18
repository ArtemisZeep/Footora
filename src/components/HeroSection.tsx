import React from 'react';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Image 
        src="/images/hero_image.jpg" 
        alt="Footura - центр подологии" 
        fill
        className={styles.bgImage}
        priority
      />
      
      <div className={`container ${styles.content}`}>
        <div className={styles.logo}>
          {/* Logo */}
          <Image 
            src="/images/logo_part.svg" 
            alt="Footura logo" 
            fill
            className="object-contain"
          />
        </div>

        <h1 className={styles.title}>
          Здоровые ноги – движение, <br />
          а движение это жизнь
        </h1>

        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.buttonOutline}`}>Подробнее</button>
          <button className={`${styles.button} ${styles.buttonPrimary}`}>Записаться</button>
        </div>

        <div className={styles.onlineBooking}>
          <span className={styles.onlineBookingText}>
            Онлайн-<br />запись
          </span>
        </div>
        
        {/* Pagination dots */}
        <div className={styles.pagination}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 