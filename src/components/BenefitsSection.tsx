"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';
import styles from '../styles/Benefits.module.css';



const BenefitsSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { t, isLoading } = useLanguage();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const imageSrc = isMobile ? "/images/team_mob.png" : "/images/team.jpg";
  
  // Функция для получения текста с fallback на заглушку
  const getBenefitText = (key: string, fallback: string = '') => {
    if (isLoading) return fallback;
    return t(key);
  };
  
  // Получаем переводы для преимуществ
const benefits = [
    {
      number: getBenefitText('benefits.items.0.number', '01'),
      title: getBenefitText('benefits.items.0.title', 'Профессионализм'),
      description: getBenefitText('benefits.items.0.description', 'Высокий уровень медицинского образования')
    },
    {
      number: getBenefitText('benefits.items.1.number', '02'),
      title: getBenefitText('benefits.items.1.title', 'Опыт'),
      description: getBenefitText('benefits.items.1.description', 'Многолетняя практика в области подологии')
    },
    {
      number: getBenefitText('benefits.items.2.number', '03'),
      title: getBenefitText('benefits.items.2.title', 'Оборудование'),
      description: getBenefitText('benefits.items.2.description', 'Современное медицинское оборудование')
    },
    {
      number: getBenefitText('benefits.items.3.number', '04'),
      title: getBenefitText('benefits.items.3.title', 'Безопасность'),
      description: getBenefitText('benefits.items.3.description', 'Соблюдение стандартов стерилизации')
    },
    {
      number: getBenefitText('benefits.items.4.number', '05'),
      title: getBenefitText('benefits.items.4.title', 'Результат'),
      description: getBenefitText('benefits.items.4.description', 'Гарантированное качество процедур')
    },
    {
      number: getBenefitText('benefits.items.5.number', '06'),
      title: getBenefitText('benefits.items.5.title', 'Сервис'),
      description: getBenefitText('benefits.items.5.description', 'Индивидуальный подход к каждому клиенту')
    }
  ];

  return (
    <section className={styles.benefits} id="benefits">
      <div className={styles.bgWrap}>
      <Image
        src={imageSrc}
        alt="Footura team"
        fill
        className={styles.bgImage}
        priority
      />
      <h2 className={styles.title}>
        {getBenefitText('benefits.title', 'Почему выбирают нас')}
      </h2>
      </div>
      <div className={styles.benefitsBox}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.column}>
              {benefits.slice(0, 3).map((b, i) => (
                <div className={styles.benefitItem} key={i}>
                  <div className={styles.benefitNumber}>{b.number}</div>
                  <div className={styles.benefitTextBlock}>
                    <div className={styles.benefitTitle}>{b.title}</div>
                    <div className={styles.benefitDescription}>{b.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.column}>
              {benefits.slice(3, 6).map((b, i) => (
                <div className={styles.benefitItem} key={i + 3}>
                  <div className={styles.benefitNumber}>{b.number}</div>
                  <div className={styles.benefitTextBlock}>
                    <div className={styles.benefitTitle}>{b.title}</div>
                    <div className={styles.benefitDescription}>{b.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 