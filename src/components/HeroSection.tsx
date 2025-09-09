"use client";

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import styles from '../styles/Hero.module.css';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides = 2;

  // Auto-scroll every 40 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 40000); // 40 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  // Animation variants
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

  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <section className={styles.hero}>
      {/* First slide - original content */}
      <motion.div
        className={`${styles.slide} ${currentSlide === 0 ? styles.slideActive : ''}`}
        variants={slideVariants}
        initial="enter"
        animate={currentSlide === 0 ? "center" : "exit"}
        transition={{ duration: 0.8 }}
      >
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
              <Link href="/about" className={`${styles.button} ${styles.buttonOutline}`}>
                {t('hero.learnMore')}
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="https://n766508.alteg.io/company/720417/personal/select-services?_gl=1*15h3pye*_ga*MTAyNjk3MTQ4MC4xNzI5MDAzODQy*_ga_2WY57VWNET*MTczNDE3NTk5NC4zLjAuMTczNDE3NTk5NC42MC4wLjA.*_ga_L53TRF9G65*MTczNDE3NTk5NC4zLjAuMTczNDE3NTk5NC42MC4wLjA.&o=m-1"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} ${styles.buttonPrimary}`}
              >
                {t('hero.booking')}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Second slide - new service with adaptive arc */}
      <motion.div
        className={`${styles.slide} ${currentSlide === 1 ? styles.slideActive : ''}`}
        variants={slideVariants}
        initial="enter"
        animate={currentSlide === 1 ? "center" : "exit"}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/background_2_hero.png"
          alt="Диагностика стопы"
          fill
          className={styles.bgImage}
        />
        
        <motion.div 
          className={`container ${styles.content}`}
          variants={containerVariants}
          initial="hidden"
          animate={currentSlide === 1 ? "visible" : "hidden"}
        >
          <motion.div 
            className={`${styles.logo} ${styles.logo2}`}
            variants={logoVariants}
          >
            <Image 
              src="/images/logo_2_hero.png" 
              alt="Новая услуга" 
              fill
              className="object-contain"
            />
          </motion.div>

          <motion.h1 
            className={styles.title}
            variants={itemVariants}
          >
            {t('hero.newService.title')}
          </motion.h1>

          <motion.p 
            className={styles.subtitle}
            variants={itemVariants}
          >
            {t('hero.newService.subtitle')}
          </motion.p>

          <motion.div 
            className={styles.buttons}
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/insoles" className={`${styles.button} ${styles.buttonOutline}`}>
                {t('hero.newService.learnMore')}
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/insoles" className={`${styles.button} ${styles.buttonAccent}`}>
                {t('hero.newService.bookNow')}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Navigation dots */}
      <motion.div 
        className={styles.pagination}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        {[0, 1].map((index) => (
          <button
            key={index}
            className={`${styles.dot} ${currentSlide === index ? styles.dotActive : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection; 