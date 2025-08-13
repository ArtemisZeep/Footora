'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '../../styles/Hero.module.css';
import aboutStyles from '../../styles/About.module.css';
import CertificatesPopup, { Certificate } from '@/components/CertificatesPopup';
import WorkResultsBlock from '@/components/WorkResultsBlock';
import ReviewsBlock from '@/components/ReviewsBlock';

export default function AboutPage() {
  const { t, tArray } = useLanguage();
  const [isMobileHero, setIsMobileHero] = useState(false);
  const [isMobilePopup, setIsMobilePopup] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileHero(window.innerWidth <= 831);
      setIsMobilePopup(window.innerWidth < 600);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Сертификаты: пример
  const certificates: Certificate[] = [
    {
      src: '/images/Tezza-2723.png',
      orientation: 'vertical',
      alt: `${t('about.certificate')} 1`,
    },
    {
      src: '/images/Tezza-7138.png',
      orientation: 'vertical',
      alt: `${t('about.certificate')} 2`,
    },
    {
      src: '/images/Tezza-4150 1.png',
      orientation: 'horizontal',
      alt: `${t('about.certificate')} 3`,
    },
    {
      src: '/images/cetif3.jpeg',
      orientation: 'vertical',
      alt: `${t('about.certificate')} 4`,
    },
  ];

  // Состояния попапа
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);

  // Логика перехода: если два вертикальных подряд, шаг +2, иначе +1 (только на больших экранах)
  const getNextIndex = (current: number) => {
    if (isMobilePopup) {
      // На мобильных всегда по одному
      return Math.min(current + 1, certificates.length - 1);
    }
    
    if (
      certificates[current]?.orientation === 'vertical' &&
      certificates[current + 1]?.orientation === 'vertical'
    ) {
      return Math.min(current + 2, certificates.length - 1);
    }
    return Math.min(current + 1, certificates.length - 1);
  };
  
  const getPrevIndex = (current: number) => {
    if (isMobilePopup) {
      // На мобильных всегда по одному
      return Math.max(current - 1, 0);
    }
    
    // Ищем предыдущий индекс с учётом двойных вертикальных
    if (current === 0) return 0;
    // Если предыдущие два вертикальных
    if (
      certificates[current - 2]?.orientation === 'vertical' &&
      certificates[current - 1]?.orientation === 'vertical'
    ) {
      return current - 2;
    }
    return current - 1;
  };

  // Открыть попап с первой страницей
  const openPopup = () => {
    setPopupIndex(0);
    setPopupOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className={styles.hero}>
        <Image
          src={isMobileHero ? "/images/hero_about_mob.png" : "/images/hero_about.png"}
          alt={t('about.heroAlt')}
          fill
          className={styles.bgImage}
          priority
        />
        <div className={styles.content}></div>
      </section>
      <section className={aboutStyles.aboutHero}>
        <motion.div 
          className={aboutStyles.aboutHeroContent}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className={aboutStyles.aboutHeroText}>
            <motion.h2 className={aboutStyles.aboutHeroTitle} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>{t('about.title')}</motion.h2>
            <motion.div className={aboutStyles.aboutHeroDescription} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
              {t('about.heroDescription')}
            </motion.div>
            <motion.div className={aboutStyles.aboutHeroSubDescription} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              {t('about.heroSubDescription')}
            </motion.div>
          </div>
          <motion.div className={aboutStyles.aboutHeroImage} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Image
              src="/images/about1.png"
              alt={t('about.heroAlt')}
              fill
              sizes="(max-width: 1440px) 100vw, 641px"
              priority
            />
          </motion.div>
        </motion.div>
      </section>
      <section className={aboutStyles.missionSection}>
        <motion.div className={aboutStyles.missionContent} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className={aboutStyles.missionText}>
            {t('about.mission')}
          </div>
          <motion.button className={aboutStyles.missionButton} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            {t('about.booking')}
          </motion.button>
        </motion.div>
      </section>
      <section className={aboutStyles.descriptionSection}>
        <div className={aboutStyles.descriptionContent}>
          <motion.div className={aboutStyles.descriptionText} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            {t('about.description1')}
          </motion.div>
          <motion.div className={aboutStyles.descriptionTextSecond} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
            {t('about.description2')}
          </motion.div>
        </div>
      </section>
      <section className={aboutStyles.approachSection}>
        <div className={aboutStyles.approachContent}>
          <motion.h2 className={aboutStyles.approachTitle} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            {t('about.approachTitle')}
          </motion.h2>
          <motion.div className={aboutStyles.approachDescription} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
            {t('about.approachDescription')}
          </motion.div>
          <div className={aboutStyles.approachList}>
            <ul className={aboutStyles.approachListUl}>
              {tArray('about.services').map((text: string, i: number) => (
                <motion.li 
                  key={i} 
                  className={aboutStyles.approachListItem}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <span className={aboutStyles.approachListItemText}>{text}</span>
                  <span className={aboutStyles.approachListItemNumber}>{String(i+1).padStart(2, '0')}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={aboutStyles.standardsSection}>
        <div className={aboutStyles.standardsContent}>
          <motion.div className={aboutStyles.standardsLeft} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className={aboutStyles.standardsTitle}>
              {t('about.standardsTitle')}
            </h2>
            <motion.div className={aboutStyles.standardsImage} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
              <Image src="/images/unibrace.png" alt="Unibrace" fill />
            </motion.div>
          </motion.div>
          <motion.div className={aboutStyles.standardsRight} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
            <div className={aboutStyles.standardsText}>
              {t('about.standardsText')}
            </div>
            <div className={aboutStyles.standardsSubText}>
              {t('about.standardsSubText')}
            </div>
          </motion.div>
        </div>
      </section>
      <section className={aboutStyles.qualificationSection}>
        <div className={aboutStyles.qualificationContent}>
          <motion.div className={aboutStyles.qualificationLeft} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className={aboutStyles.qualificationTitle}>
              {t('about.qualificationTitle')}
            </h2>
            <div className={aboutStyles.qualificationText}>
              {t('about.qualificationText')}
            </div>
            <motion.button
              className={aboutStyles.qualificationButton}
              onClick={openPopup}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('about.viewCertificates')}
            </motion.button>
          </motion.div>
          <motion.div className={aboutStyles.qualificationRight} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
            <motion.div className={aboutStyles.certificateImage} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Image src="/images/Tezza-2723.png" alt={`${t('about.certificate')} 1`} fill />
            </motion.div>
            <motion.div className={aboutStyles.certificateImageSecond} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
              <Image src="/images/Tezza-7138.png" alt={`${t('about.certificate')} 2`} fill />
            </motion.div>
          </motion.div>
        </div>
        {/* Попап сертификатов */}
        <CertificatesPopup
          open={popupOpen}
          certificates={certificates}
          currentIndex={popupIndex}
          onClose={() => setPopupOpen(false)}
          onNext={() => setPopupIndex(getNextIndex(popupIndex))}
          onPrev={() => setPopupIndex(getPrevIndex(popupIndex))}
        />
      </section>
      <WorkResultsBlock />
      <ReviewsBlock />
      <Footer />
    </main>
  );
} 