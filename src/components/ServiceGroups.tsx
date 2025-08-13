"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './ServiceGroups.module.css';

export default function ServiceGroups() {
  const [isMobile, setIsMobile] = useState(false);
  const { t, tData } = useLanguage();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 750);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categoriesData = tData('servicesPage.groups.categories') as Array<{
    title: string;
    description: string;
  }> || [];

  const buttonText = t('servicesPage.groups.goToServices');

  const targetIds = ['podology', 'pedicure', 'manicure', 'children-services'];
  const colors = ['green', 'darkGreen', isMobile ? 'green' : 'darkGreen', 'lightGreen'];
  const buttonColors = ['lightGreen', 'lightGreen', 'lightGreen', 'green'];
  const textColors = ['white', 'white', 'white', 'darkGreen'];

  const services = categoriesData.map((category, index) => ({
    title: category.title,
    description: category.description,
    color: colors[index],
    button: {
      text: buttonText,
      color: buttonColors[index],
    },
    textColor: textColors[index],
    targetId: targetIds[index],
  }));

  // Функция плавного скролла к элементу
  const scrollToElement = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' as const } }
  };

  return (
    <section className={styles.serviceGroupsSection}>
      <div className={styles.grid}>
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            className={
              styles.card + ' ' +
              (service.color === 'green' ? styles.green : '') +
              (service.color === 'darkGreen' ? styles.darkGreen : '') +
              (service.color === 'lightGreen' ? styles.lightGreen : '')
            }
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          >
            <h3 className={styles.title + ' ' + (service.textColor === 'white' ? styles.white : styles.darkGreenText)}>{service.title}</h3>
            <p className={styles.description + ' ' + (service.textColor === 'white' ? styles.white : styles.darkGreenText)}>{service.description}</p>
            <motion.button
              className={
                styles.button + ' ' +
                (service.button.color === 'lightGreen' ? styles.buttonLightGreen : styles.buttonGreen) +
                (service.textColor === 'darkGreen' ? ' ' + styles.buttonDarkText : '')
              }
              onClick={() => scrollToElement(service.targetId)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {service.button.text}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
