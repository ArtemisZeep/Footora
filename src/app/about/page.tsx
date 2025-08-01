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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 831);
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

  // Логика перехода: если два вертикальных подряд, шаг +2, иначе +1
  const getNextIndex = (current: number) => {
    if (
      certificates[current]?.orientation === 'vertical' &&
      certificates[current + 1]?.orientation === 'vertical'
    ) {
      return Math.min(current + 2, certificates.length - 1);
    }
    return Math.min(current + 1, certificates.length - 1);
  };
  const getPrevIndex = (current: number) => {
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
          src={isMobile ? "/images/hero_about_mob.png" : "/images/hero_about.png"}
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
              style={{ objectFit: 'cover', borderRadius: 0 }}
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
      <section style={{ width: '100%', background: '#F5F5F5', minHeight: 963, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: 0 }}>
        <div style={{ width: '100%', maxWidth: 1440, margin: '0 auto', position: 'relative', height: 963, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 82 }}>
          <h2 style={{ color: '#283433', fontFamily: 'Tenor Sans, sans-serif', fontSize: 58, fontWeight: 300, textAlign: 'center', marginBottom: 40, width: 767, maxWidth: '90vw', marginLeft: 'auto', marginRight: 'auto' }}>
            Комплексный подход
          </h2>
          <div style={{ color: '#000', fontFamily: 'Roboto, sans-serif', fontSize: 20, fontWeight: 300, textAlign: 'center', width: 859, maxWidth: '90vw', margin: '0 auto', marginBottom: 60 }}>
            Мы предоставляем полный спектр услуг ухода за ногтями и кожей стоп, включая:
          </div>
          <div style={{ position: 'relative', width: '100%', maxWidth: 860, margin: '0 auto', minHeight: 549, display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '0 10px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%', display: 'flex', flexDirection: 'column', gap: 0 }}>
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
                <li key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: 'Roboto, sans-serif', fontWeight: 300, fontSize: 20, color: '#000', lineHeight: '30px', minHeight: 61, borderBottom: i < 7 ? '1px solid #B8C8BA' : 'none', padding: '15px 0' }}>
                  <span style={{ flex: 1, marginRight: 24 }}>{text}</span>
                  <span style={{ minWidth: 32, textAlign: 'right', fontFamily: 'Tenor Sans, sans-serif', fontWeight: 300, fontSize: 20, color: '#B8C8BA' }}>{String(i+1).padStart(2, '0')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section style={{ width: '100%', background: '#283433', minHeight: 757, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: 0 }}>
        <div style={{ width: '100%', maxWidth: 1440, margin: '0 auto', position: 'relative', height: 757, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', padding: '0 70px', boxSizing: 'border-box' }}>
          <div style={{ width: 628, marginTop: 78 }}>
            <h2 style={{ color: '#B8C8BA', fontFamily: 'Tenor Sans, sans-serif', fontSize: 58, fontWeight: 400, lineHeight: '68px', marginBottom: 60 }}>
              Мировые стандарты в вашем городе
            </h2>
            <div style={{ width: 530, height: 378, background: '#B8C8BA22', borderRadius: 0, marginTop: 60, marginLeft: 0, position: 'relative', overflow: 'hidden' }}>
              <Image src="/images/unibrace.png" alt="Unibrace" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div style={{ width: 638, marginTop: 272, display: 'flex', flexDirection: 'column', gap: 34 }}>
            <div style={{ color: '#fff', fontFamily: 'Roboto, sans-serif', fontWeight: 300, fontSize: 28, lineHeight: '42px', marginBottom: 0 }}>
              Мы являемся официальными представителями системы Unibrace, что позволяет нам применять современные и безопасные технологии коррекции ногтевой пластины.
            </div>
            <div style={{ color: '#fff', fontFamily: 'Roboto, sans-serif', fontWeight: 300, fontSize: 20, lineHeight: '30px' }}>
              Мы — команда профессионалов, которая постоянно совершенствуется, посещая крупнейшие международные выставки, семинары и конференции. Мы активно участвуем в профессиональных событиях, перенимаем передовой опыт и внедряем его в свою работу, чтобы предоставлять нашим клиентам лучшие решения.
            </div>
          </div>
        </div>
      </section>
      <section style={{ width: '100%', background: '#fff', minHeight: 656, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: 0 }}>
        <div style={{ width: '100%', maxWidth: 1440, margin: '0 auto', position: 'relative', height: 656, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', padding: '0 70px', boxSizing: 'border-box' }}>
          <div style={{ width: 426, marginTop: 90, display: 'flex', flexDirection: 'column', gap: 40 }}>
            <h2 style={{ color: '#283433', fontFamily: 'Tenor Sans, sans-serif', fontSize: 58, fontWeight: 400, lineHeight: '68px', marginBottom: 40 }}>
              Квалификация
            </h2>
            <div style={{ color: '#000', fontFamily: 'Roboto, sans-serif', fontWeight: 300, fontSize: 20, lineHeight: '30px', marginBottom: 0 }}>
              Наши Специалисты регулярно подтверждают свою квалификацию на международном уровне. Дипломы и сертификаты служат гарантией профессионализма и высоких стандартов обслуживания.
            </div>
            <button
              style={{ width: 349, height: 64, border: '1px solid #4D5C4D', borderRadius: 64, background: '#fff', color: '#283433', fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: 20, lineHeight: '23px', textAlign: 'center', marginTop: 60, cursor: 'pointer', boxSizing: 'border-box' }}
              onClick={openPopup}
            >
              Посмотреть все сертификаты
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 56, marginTop: 94 }}>
            <div style={{ width: 329, height: 461, border: '6px solid #fff', boxShadow: '0px 4px 24px rgba(0,0,0,0.15)', position: 'relative', overflow: 'hidden', background: '#eee' }}>
              <Image src="/images/Tezza-2723.png" alt="Сертификат 1" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ width: 337, height: 461, border: '6px solid #fff', boxShadow: '0px 4px 24px rgba(0,0,0,0.15)', position: 'relative', overflow: 'hidden', background: '#eee' }}>
              <Image src="/images/Tezza-7138.png" alt="Сертификат 2" fill style={{ objectFit: 'cover' }} />
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