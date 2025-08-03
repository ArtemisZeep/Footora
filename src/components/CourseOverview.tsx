"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coursesData, Course } from '../data/coursesData';
import styles from './CourseOverview.module.css';

interface CourseOverviewProps {
  currentCourseIndex?: number;
  onCourseChange?: (index: number) => void;
}

export default function CourseOverview({ 
  currentCourseIndex = 0, 
  onCourseChange 
}: CourseOverviewProps) {
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const currentCourse = coursesData[currentCourseIndex];

  // Функция для определения размера шрифта в зависимости от длины названия
  const getTitleSizeClass = (title: string) => {
    const length = title.length;
    if (length <= 30) return '';
    if (length <= 45) return styles.medium;
    if (length <= 60) return styles.small;
    return styles.extraSmall;
  };

  const nextCourse = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    const nextIndex = (currentCourseIndex + 1) % coursesData.length;
    setTimeout(() => {
      onCourseChange?.(nextIndex);
      setIsAnimating(false);
    }, 150);
  };

  const prevCourse = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    const prevIndex = (currentCourseIndex - 1 + coursesData.length) % coursesData.length;
    setTimeout(() => {
      onCourseChange?.(prevIndex);
      setIsAnimating(false);
    }, 150);
  };

  // Варианты анимации для контента
  const slideVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: 'left' | 'right') => ({
      zIndex: 0,
      x: direction === 'right' ? -50 : 50,
      opacity: 0,
      scale: 0.95,
    }),
  };

  // Убираем переменную transition

  return (
    <section className={styles.overviewSection}>
      <div className={styles.container}>
        <div className={styles.courseCard}>
          {/* Navigation Arrows */}
          <div className={styles.navigation}>
            <motion.button 
              className={styles.navArrow} 
              onClick={prevCourse}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={isAnimating}
            >
              <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
                <path d="M43 6L1 6M1 6L6 1M1 6L6 11" stroke="#506888" strokeWidth="1.6"/>
              </svg>
            </motion.button>
            <motion.button 
              className={styles.navArrow} 
              onClick={nextCourse}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={isAnimating}
            >
              <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
                <path d="M1 6L43 6M43 6L38 1M43 6L38 11" stroke="#506888" strokeWidth="1.6"/>
              </svg>
            </motion.button>
          </div>

          {/* Course Type Badge */}
          <motion.div 
            className={styles.courseType}
            key={`type-${currentCourseIndex}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            {currentCourse.overview.type}
          </motion.div>

          {/* Course Content with Animation */}
          <div className={styles.courseContent}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div 
                key={currentCourseIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: 'tween',
                  ease: [0.4, 0, 0.2, 1],
                  duration: 0.4,
                }}
                className={styles.animatedContent}
              >
                {/* Left Column */}
                <div className={styles.leftColumn}>
                  <h2 className={`${styles.courseTitle} ${getTitleSizeClass(currentCourse.overview.title)}`}>
                    {currentCourse.overview.title}
                  </h2>
                  <div className={styles.courseNumber}>{currentCourse.overview.number}</div>
                </div>

                {/* Middle Column */}
                <div className={styles.middleColumn}>
                  <p className={styles.courseDescription}>{currentCourse.overview.description}</p>
                  <div className={styles.buttonGroup}>
                    {!currentCourse.overview.noButton && (
                      <motion.button 
                        className={styles.detailsBtn}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Подробнее о курсе
                      </motion.button>
                    )}
                    <motion.button 
                      className={styles.purchaseBtn}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {currentCourse.overview.noButton ? "Купить" : "Купить курс"}
                      <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
                        <path d="M1 6L43 6M43 6L38 1M43 6L38 11" stroke="#FFFFFF" strokeWidth="1.6"/>
                      </svg>
                    </motion.button>
                  </div>
                </div>

                {/* Right Column */}
                <div className={styles.rightColumn}>
                  <div className={styles.priceSection}>
                    {currentCourse.overview.prices.map((price, index) => (
                      <motion.div 
                        key={index} 
                        className={styles.priceItem}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                      >
                        <div className={styles.priceLabel}>{price.name}</div>
                        <div className={styles.priceValue}>{price.price}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
} 