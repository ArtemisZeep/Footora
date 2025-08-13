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

export default function AboutPage() {
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
      alt: 'Сертификат 1',
    },
    {
      src: '/images/Tezza-7138.png',
      orientation: 'vertical',
      alt: 'Сертификат 2',
    },
    {
      src: '/images/Tezza-4150 1.png',
      orientation: 'horizontal',
      alt: 'Сертификат 3',
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
          alt="О центре Footura"
          fill
          className={styles.bgImage}
          priority
        />
        <div className={styles.content}></div>
      </section>
      <section className={aboutStyles.aboutHero}>
        <div className={aboutStyles.aboutHeroContent}>
          <div className={aboutStyles.aboutHeroText}>
            <h2 className={aboutStyles.aboutHeroTitle}>О центре</h2>
            <div className={aboutStyles.aboutHeroDescription}>
              FOOTURA— команда узкопрофильных специалистов в области ухода за стопами, работающая под руководством Натальи Ротарь, эксперта с 18-летним опытом
            </div>
            <div className={aboutStyles.aboutHeroSubDescription}>
              Наш центр предлагает профессиональный комплексный уход за стопами и ногтями с использованием инновационных технологий в области подологии.
            </div>
          </div>
          <div className={aboutStyles.aboutHeroImage}>
            <Image
              src="/images/about1.png"
              alt="О центре Footura фото"
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
            Наша миссия – возвращать легкость движения, <br />ведь движение – это основа жизни, <br />которая начинается со здоровых ног
          </div>
          <button className={aboutStyles.missionButton}>
            Записаться
          </button>
        </div>
      </section>
      <section className={aboutStyles.descriptionSection}>
        <div className={aboutStyles.descriptionContent}>
          <div className={aboutStyles.descriptionText}>
            Наш подологический центр предоставляет комплексные решения как для устранения острых проблем ногтей и стоп, так и для профилактики их развития. Мы стремимся минимизировать риск осложнений в будущем, предлагая широкий спектр услуг — от решения конкретных локальных проблем до регулярного ухода за стопами.
          </div>
          <div className={aboutStyles.descriptionTextSecond}>
            В случае выявления более глубоких или системных патологий наши специалисты направляют пациентов к профильным экспертам — хирургам, дерматологам, ортопедам, флебологам и т.д. По завершении/вовремя основного лечения пациенты продолжают наблюдение и поддерживающий уход в нашем центре.
          </div>
        </div>
      </section>
      <section className={aboutStyles.approachSection}>
        <div className={aboutStyles.approachContent}>
          <h2 className={aboutStyles.approachTitle}>
            Комплексный подход
          </h2>
          <div className={aboutStyles.approachDescription}>
            Мы предоставляем полный спектр услуг ухода за ногтями и кожей стоп, включая:
          </div>
          <div className={aboutStyles.approachList}>
            <ul className={aboutStyles.approachListUl}>
              {[
                'Аппаратный гигиенический педикюр',
                'Подологическая обработка стоп и ногтей',
                'Обработка трещин, локальных гиперкератозов, стрежневых мозолей',
                'Коррекция вросших и деформированных ногтей',
                'Профилактическая обработка стоп и ногтей клиентов с диагнозом сахарный диабет',
                'Обработка ногтей пораженных грибковой инфекцией и последующее восстановление в сотрудничестве со сторонним дерматологом',
                'Ведение клиента/реабилитация после операции на ногтевом аппарате в сотрудничестве с хирургом',
                'Пилинг и массаж стоп',
              ].map((text, i) => (
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
              Мировые стандарты в вашем городе
            </h2>
            <div className={aboutStyles.standardsImage}>
              <Image src="/images/unibrace.png" alt="Unibrace" fill />
            </div>
          </div>
          <div className={aboutStyles.standardsRight}>
            <div className={aboutStyles.standardsText}>
              Мы являемся официальными представителями системы Unibrace, что позволяет нам применять современные и безопасные технологии коррекции ногтевой пластины.
            </div>
            <div className={aboutStyles.standardsSubText}>
              Мы — команда профессионалов, которая постоянно совершенствуется, посещая крупнейшие международные выставки, семинары и конференции. Мы активно участвуем в профессиональных событиях, перенимаем передовой опыт и внедряем его в свою работу, чтобы предоставлять нашим клиентам лучшие решения.
            </div>
          </div>
        </div>
      </section>
      <section className={aboutStyles.qualificationSection}>
        <div className={aboutStyles.qualificationContent}>
          <div className={aboutStyles.qualificationLeft}>
            <h2 className={aboutStyles.qualificationTitle}>
              Квалификация
            </h2>
            <div className={aboutStyles.qualificationText}>
              Наши Специалисты регулярно подтверждают свою квалификацию на международном уровне. Дипломы и сертификаты служат гарантией профессионализма и высоких стандартов обслуживания.
            </div>
            <button
              className={aboutStyles.qualificationButton}
              onClick={openPopup}
            >
              Посмотреть все сертификаты
            </button>
          </div>
          <div className={aboutStyles.qualificationRight}>
            <div className={aboutStyles.certificateImage}>
              <Image src="/images/Tezza-2723.png" alt="Сертификат 1" fill />
            </div>
            <div className={aboutStyles.certificateImageSecond}>
              <Image src="/images/Tezza-7138.png" alt="Сертификат 2" fill />
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