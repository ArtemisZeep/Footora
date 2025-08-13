"use client";

import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import styles from '../styles/Hero.module.css';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);
  const [shouldUseVideo, setShouldUseVideo] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Respect user preference for reduced motion
    const mediaQuery = typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;
    const prefersReduced = mediaQuery?.matches ?? false;
    setShouldUseVideo(!prefersReduced);

    const handleChange = (event: MediaQueryListEvent) => {
      setShouldUseVideo(!event.matches);
    };
    if (mediaQuery) {
      mediaQuery.addEventListener('change', handleChange);
    }

    return () => {
      if (mediaQuery) {
        mediaQuery.removeEventListener('change', handleChange);
      }
    };
  }, []);

  const tryPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().catch(() => {
        // Autoplay may be blocked. We'll still reveal the first frame.
      });
    }
  };

  const handleVideoLoadedData = () => {
    setIsVideoReady(true);
    tryPlay();
  };

  const handleVideoCanPlay = () => {
    setIsVideoReady(true);
    tryPlay();
  };

  const handleVideoCanPlayThrough = () => {
    setIsVideoReady(true);
    tryPlay();
  };

  const handleVideoPlaying = () => {
    setIsVideoReady(true);
  };

  const handleVideoError = () => {
    // If video fails to load, keep the image background
    setIsVideoReady(false);
    setShouldUseVideo(false);
  };
  
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
      {/* Background image placeholder while the video is loading or disabled */}
      <Image
        src="/images/hero_image.jpg"
        alt="Footura - центр подологии"
        fill
        className={`${styles.bgImage} ${isVideoReady ? styles.bgImageHidden : ''}`}
        priority
      />

      {/* Background video (will fade in once ready) */}
      {shouldUseVideo && (
        <video
          ref={videoRef}
          className={`${styles.bgVideo} ${isVideoReady ? styles.bgVideoVisible : ''}`}
          playsInline
          muted
          loop
          autoPlay
          preload="auto"
          poster="/images/hero_image.jpg"
          onLoadedData={handleVideoLoadedData}
          onCanPlay={handleVideoCanPlay}
          onCanPlayThrough={handleVideoCanPlayThrough}
          onPlaying={handleVideoPlaying}
          onError={handleVideoError}
        >
          <source src="/video/hero_main.mp4" type="video/mp4" />
          <source src="/video/hero_main.mov" type="video/quicktime" />
        </video>
      )}

      {/* Subtle dark overlay only when video is active */}
      <div
        className={`${styles.overlay} ${
          isVideoReady && shouldUseVideo ? styles.overlayVisible : ''
        }`}
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

        {/* Floating online booking button moved to app layout to appear on all pages */}
        
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