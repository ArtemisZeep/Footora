"use client";

import { useEffect, useState } from 'react';
import styles from './ServiceGroups.module.css';

const getServices = (isMobile: boolean) => [
  {
    title: 'Подология',
    description: 'профессиональная комплексная диагностика, коррекция и обработка стоп и ногтей с использованием инновационных технологий в области Подологии',
    color: 'green',
    button: {
      text: 'Перейти к услугам',
      color: 'lightGreen',
    },
    textColor: 'white',
  },
  {
    title: 'Педикюр',
    description: 'профессиональная профилактическая обработка стоп и ногтей с использованием аппаратных техник',
    color: 'darkGreen',
    button: {
      text: 'Перейти к услугам',
      color: 'lightGreen',
    },
    textColor: 'white',
  },
  {
    title: 'Маникюр',
    description: 'профессиональная уходовая обработка ногтей и кожи рук с применением современных аппаратных и комбинированных техник',
    color: isMobile ? 'green' : 'darkGreen',
    button: {
      text: 'Перейти к услугам',
      color: 'lightGreen',
    },
    textColor: 'white',
  },
  {
    title: 'Детские услуги',
    description: 'деликатная профилактическая обработка стоп и ногтей у детей с использованием безопасных техник и индивидуальным подходом к каждому маленькому клиенту',
    color: 'lightGreen',
    button: {
      text: 'Перейти к услугам',
      color: 'green',
    },
    textColor: 'darkGreen',
  },
];

export default function ServiceGroups() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 750);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = getServices(isMobile);

  return (
    <section className={styles.serviceGroupsSection}>
      <div className={styles.grid}>
        {services.map((service, idx) => (
          <div
            key={service.title}
            className={
              styles.card + ' ' +
              (service.color === 'green' ? styles.green : '') +
              (service.color === 'darkGreen' ? styles.darkGreen : '') +
              (service.color === 'lightGreen' ? styles.lightGreen : '')
            }
          >
            <h3 className={styles.title + ' ' + (service.textColor === 'white' ? styles.white : styles.darkGreenText)}>{service.title}</h3>
            <p className={styles.description + ' ' + (service.textColor === 'white' ? styles.white : styles.darkGreenText)}>{service.description}</p>
            <button
              className={
                styles.button + ' ' +
                (service.button.color === 'lightGreen' ? styles.buttonLightGreen : styles.buttonGreen) +
                (service.textColor === 'darkGreen' ? ' ' + styles.buttonDarkText : '')
              }
            >
              {service.button.text}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
