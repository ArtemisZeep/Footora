"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { coursesData } from '../data/coursesData';
import styles from './CourseDescription.module.css';

interface CourseDescriptionProps {
  currentCourseIndex?: number;
  direction?: 'left' | 'right';
  isAnimating?: boolean;
}

export default function CourseDescription({ 
  currentCourseIndex = 0,
  direction = 'right',
  isAnimating = false
}: CourseDescriptionProps) {
  const currentCourse = coursesData[currentCourseIndex];

  // Варианты анимации для контента
  const slideVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: 'left' | 'right') => ({
      zIndex: 0,
      x: direction === 'right' ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <section className={styles.descriptionSection}>
      <div className={styles.container}>
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
            <div className={styles.imageColumn}>
              <img 
                src={currentCourse.description.image} 
                alt={`Курс ${currentCourse.overview.title}`}
                className={styles.courseImage}
              />
            </div>
            <div className={styles.textColumn}>
              <p className={styles.descriptionText}>
                {currentCourse.description.text}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
} 