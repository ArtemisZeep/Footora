"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '../styles/Hero.module.css';
import { getImageConfig, commonSizes } from '@/lib/imageOptimization';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-switch slides every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev === 0 ? 1 : 0);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  // Slide variants for smooth transitions
  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 }
  };

  // Получаем оптимизированные конфигурации изображений
  const heroImageConfig = getImageConfig('hero', { width: 1920, height: 1080 });
  const logoConfig = getImageConfig('logo', { width: 180, height: 60 });
  const backgroundConfig = getImageConfig('background', { width: 1920, height: 1080 });

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
          priority={heroImageConfig.priority}
          sizes={commonSizes.fullWidth}
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
              width={logoConfig.width}
              height={logoConfig.height}
              className="object-contain"
              sizes={logoConfig.sizes}
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
            <button className={styles.primaryButton}>
              {t('hero.primaryButton')}
            </button>
            <button className={styles.secondaryButton}>
              {t('hero.secondaryButton')}
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Second slide - new content */}
      <motion.div
        className={`${styles.slide} ${currentSlide === 1 ? styles.slideActive : ''}`}
        variants={slideVariants}
        initial="enter"
        animate={currentSlide === 1 ? "center" : "exit"}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/background_2_hero.png"
          alt="Footura - профессиональная подология"
          fill
          className={styles.bgImage}
          priority={backgroundConfig.priority}
          sizes={commonSizes.fullWidth}
        />
        
        <motion.div 
          className={`container ${styles.content}`}
          variants={containerVariants}
          initial="hidden"
          animate={currentSlide === 1 ? "visible" : "hidden"}
        >
          <motion.div 
            className={styles.logoSecond}
            variants={logoVariants}
          >
            <Image 
              src="/images/logo_2_hero.png" 
              alt="Footura logo" 
              width={200}
              height={80}
              className="object-contain"
              priority={false}
              quality={95}
              sizes="(max-width: 768px) 150px, 200px"
            />
          </motion.div>

          <motion.h1 
            className={styles.titleSecond}
            variants={itemVariants}
          >
            {t('hero.titleSecond')}
          </motion.h1>

          <motion.p 
            className={styles.descriptionSecond}
            variants={itemVariants}
          >
            {t('hero.descriptionSecond')}
          </motion.p>

          <motion.div 
            className={styles.buttonsSecond}
            variants={itemVariants}
          >
            <button className={styles.primaryButtonSecond}>
              {t('hero.primaryButtonSecond')}
            </button>
            <button className={styles.secondaryButtonSecond}>
              {t('hero.secondaryButtonSecond')}
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Slide indicators */}
      <div className={styles.indicators}>
        <button 
          className={`${styles.indicator} ${currentSlide === 0 ? styles.active : ''}`}
          onClick={() => setCurrentSlide(0)}
          aria-label="Перейти к первому слайду"
        />
        <button 
          className={`${styles.indicator} ${currentSlide === 1 ? styles.active : ''}`}
          onClick={() => setCurrentSlide(1)}
          aria-label="Перейти ко второму слайду"
        />
      </div>
    </section>
  );
};

export default HeroSection; 