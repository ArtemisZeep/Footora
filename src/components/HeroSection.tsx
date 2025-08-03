"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import styles from '../styles/Hero.module.css';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  // Варианты анимации для разных элементов
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className={styles.hero}>
      <Image 
        src="/images/hero_image.jpg" 
        alt="Footura - центр подологии" 
        fill
        className={styles.bgImage}
        priority
      />
      
      <motion.div 
        className={`container ${styles.content}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className={styles.logo}
          variants={logoVariants}
        >
          {/* Logo */}
          <Image 
            src="/images/logo_part.svg" 
            alt="Footura logo" 
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.h1 
          className={styles.title}
          variants={itemVariants}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.div 
          className={styles.buttons}
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/about" className={`${styles.button} ${styles.buttonOutline}`}>{t('hero.learnMore')}</Link>
          </motion.div>
          <motion.button 
            className={`${styles.button} ${styles.buttonPrimary}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.booking')}
          </motion.button>
        </motion.div>

        <motion.div 
          className={styles.onlineBooking}
          variants={itemVariants}
        >
          <span className={styles.onlineBookingText}>
            {t('hero.onlineBooking')}
          </span>
        </motion.div>
        
        {/* Pagination dots */}
        <motion.div 
          className={styles.pagination}
          variants={itemVariants}
        >
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 