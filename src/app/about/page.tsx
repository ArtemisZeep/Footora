'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from '../../styles/Hero.module.css';
import aboutStyles from '../../styles/About.module.css';
import CertificatesPopup, { Certificate } from '@/components/CertificatesPopup';
import WorkResultsBlock from '@/components/WorkResultsBlock';
import ReviewsBlock from '@/components/ReviewsBlock';
import { useLanguage } from '@/contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

export default function AboutPage() {
  const { t, tArray } = useLanguage();
  const [isMobileHero, setIsMobileHero] = useState(false);
  const [isMobilePopup, setIsMobilePopup] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  useEffect(() => {
    document.title = t('about.title');
  }, [t]);

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
      src: '/images/Cert_es.png',
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
      <SEOHead
        title="О центре подологии Footura - Профессиональный уход за стопами"
        description="Узнайте о центре подологии Footura в Праге. Наша миссия - профессиональный уход за здоровьем ваших стоп с использованием современных методик."
        keywords="центр подологии, footura, о нас, подология прага, команда подологов"
        canonicalUrl="/about"
      />
      <section className={styles.hero}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.bgImage}
          poster={isMobileHero ? "/images/hero_about_mob.png" : "/images/hero_about.png"}
        >
          <source src="/video/hero_main.mp4" type="video/mp4" />
        </video>
        <div className={styles.content}></div>
      </section>
      <section className={aboutStyles.aboutHero}>
        <div className={aboutStyles.aboutHeroContent}>
          <div className={aboutStyles.aboutHeroText}>
            <h2 className={aboutStyles.aboutHeroTitle}>{t('about.title')}</h2>
            <div className={aboutStyles.aboutHeroDescription}>
              {t('about.heroDescription')}
            </div>
            <div className={aboutStyles.aboutHeroSubDescription}>
              {t('about.heroSubDescription')}
            </div>
          </div>
          <div className={aboutStyles.aboutHeroImage}>
            <Image
              src="/images/about1.png"
              alt={t('about.heroAlt')}
              fill
              sizes="(max-width: 1440px) 100vw, 641px"
              priority
            />
          </div>
        </div>
      </section>
      <section className={aboutStyles.missionSection}>
        <div className={aboutStyles.missionContent}>
          <div className={aboutStyles.missionText}>
            {t('about.mission').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < t('about.mission').split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
          <a 
            href="https://n766508.alteg.io/company/720417/personal/select-services?_gl=1*15h3pye*_ga*MTAyNjk3MTQ4MC4xNzI5MDAzODQy*_ga_2WY57VWNET*MTczNDE3NTk5NC4zLjAuMTczNDE3NTk5NC42MC4wLjA.*_ga_L53TRF9G65*MTczNDE3NTk5NC4zLjAuMTczNDE3NTk5NC42MC4wLjA.&o=m-1"
            target="_blank"
            rel="noopener noreferrer"
            className={aboutStyles.missionButton}
          >
            {t('about.booking')}
          </a>
        </div>
      </section>
      <section className={aboutStyles.descriptionSection}>
        <div className={aboutStyles.descriptionContent}>
          <div className={aboutStyles.descriptionText}>
            {t('about.description1')}
          </div>
          <div className={aboutStyles.descriptionTextSecond}>
            {t('about.description2')}
          </div>
        </div>
      </section>
      <section className={aboutStyles.approachSection}>
        <div className={aboutStyles.approachContent}>
          <h2 className={aboutStyles.approachTitle}>
            {t('about.approachTitle')}
          </h2>
          <div className={aboutStyles.approachDescription}>
            {t('about.approachDescription')}
          </div>
          <div className={aboutStyles.approachList}>
            <ul className={aboutStyles.approachListUl}>
              {tArray('about.services').map((text, i) => (
                <li key={i} className={aboutStyles.approachListItem}>
                  <span className={aboutStyles.approachListItemText}>{text}</span>
                  <span className={aboutStyles.approachListItemNumber}>{String(i+1).padStart(2, '0')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={aboutStyles.standardsSection}>
        <div className={aboutStyles.standardsContent}>
          <div className={aboutStyles.standardsLeft}>
            <h2 className={aboutStyles.standardsTitle}>
              {t('about.standardsTitle')}
            </h2>
            <div className={aboutStyles.standardsImage}>
              <Image src="/images/unibrace.png" alt="Unibrace" fill />
            </div>
          </div>
          <div className={aboutStyles.standardsRight}>
            <div className={aboutStyles.standardsText}>
              {t('about.standardsText')}
            </div>
            <div className={aboutStyles.standardsSubText}>
              {t('about.standardsSubText')}
            </div>
          </div>
        </div>
      </section>
      <section className={aboutStyles.qualificationSection}>
        <div className={aboutStyles.qualificationContent}>
          <div className={aboutStyles.qualificationLeft}>
            <h2 className={aboutStyles.qualificationTitle}>
              {t('about.qualificationTitle')}
            </h2>
            <div className={aboutStyles.qualificationText}>
              {t('about.qualificationText')}
            </div>
            <button
              className={aboutStyles.qualificationButton}
              onClick={openPopup}
            >
              {t('about.viewCertificates')}
            </button>
          </div>
          <div className={aboutStyles.qualificationRight}>
            <div className={aboutStyles.certificateImage}>
              <Image src="/images/Tezza-2723.png" alt={`${t('about.certificate')} 1`} fill />
            </div>
            <div className={aboutStyles.certificateImageSecond}>
              <Image src="/images/Tezza-7138.png" alt={`${t('about.certificate')} 2`} fill />
            </div>
          </div>
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