"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './CourseBenefits.module.css';

interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

interface Benefits {
  title: string;
  items: BenefitItem[];
  detailsButton: string;
  purchaseButton: string;
}

interface Course {
  id: string;
  overview: any;
  description: any;
  plan: any;
  benefits?: Benefits;
}

interface CourseBenefitsProps {
  currentCourseIndex: number;
  direction: 'left' | 'right';
  isAnimating: boolean;
  coursesData: Course[];
}

// Icon image mapping for different benefit types
const getIconImage = (iconType: string) => {
  const iconMap: { [key: string]: string } = {
    certificate: '/images/school/Icon1.png',
    materials: '/images/school/Icon2.png',
    knowledge: '/images/school/Icon3.png',
    communication: '/images/school/Icon4.png',
    referral: '/images/school/Icon5.png'
  };
  
  return iconMap[iconType] || iconMap.certificate;
};

export default function CourseBenefits({ 
  currentCourseIndex, 
  direction, 
  isAnimating,
  coursesData 
}: CourseBenefitsProps) {
  const { t } = useLanguage();
  
  if (!coursesData || coursesData.length === 0) return null;
  
  const currentCourse = coursesData[currentCourseIndex];
  
  if (!currentCourse?.benefits) return null;

  const containerVariants = {
    initial: { opacity: 0, x: direction === 'right' ? 50 : -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: direction === 'right' ? -50 : 50 }
  };

  const getIcon = (iconType: string) => {
    const iconSrc = getIconImage(iconType);
    return (
      <img 
        src={iconSrc}
        alt={iconType}
        className={styles.iconImage}
      />
    );
  };

  const bookingUrl = "https://n773742.alteg.io/company/720417/activity/select?_gl=1*1stj87e*_ga*NzgyNDMyMzA5LjE3NTIyMzkzMTc.*_ga_2WY57VWNET*czE3NTc2MjQ1MDgkbzMwJGcxJHQxNzU3NjI0NTM0JGozNCRsMCRoMA..*_ga_L53TRF9G65*czE3NTc2MjQ1MDgkbzMwJGcxJHQxNzU3NjI0NTM0JGozNCRsMCRoMA..&o=m2092015act2025-09-11";

  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCourseIndex}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h2 className={styles.benefitsTitle}>{currentCourse.benefits.title}</h2>
            
            <div className={styles.benefitsGrid}>
              {currentCourse.benefits.items.map((item, index) => (
                <motion.div 
                  key={index}
                  className={styles.benefitItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.benefitIcon}>
                    {getIcon(item.icon)}
                  </div>
                  <div className={styles.benefitContent}>
                    <h3 className={styles.benefitTitle}>{item.title}</h3>
                    {item.description && (
                      <p className={styles.benefitDescription}>{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className={styles.buttonGroup}>
              <a href="#course-details" className={styles.detailsBtn}>
                {currentCourse.benefits.detailsButton}
              </a>
              <a 
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.purchaseBtn}
              >
                {currentCourse.benefits.purchaseButton}
                <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
                  <path d="M1 6L43 6M43 6L38 1M43 6L38 11" stroke="#506888" strokeWidth="1.6"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
} 