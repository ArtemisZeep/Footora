"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './CoursePlan.module.css';

interface CoursePrice {
  name: string;
  price: string;
}

interface CourseOverviewData {
  type: string;
  title: string;
  description: string;
  prices: CoursePrice[];
  courseLink: string;
  purchaseLink: string;
  number: string;
  noButton?: boolean;
}

interface CourseDescriptionData {
  text: string;
  image: string;
}

interface CoursePlanItem {
  number: string;
  title: string;
}

interface CoursePlanData {
  hasPlan: boolean;
  items: CoursePlanItem[];
}

interface Course {
  id: string;
  overview: CourseOverviewData;
  description: CourseDescriptionData;
  plan: CoursePlanData;
}

interface CoursePlanProps {
  currentCourseIndex?: number;
  direction?: 'left' | 'right';
  isAnimating?: boolean;
  coursesData: Course[];
}

export default function CoursePlan({ 
  currentCourseIndex = 0,
  direction = 'right',
  coursesData
}: CoursePlanProps) {
  const { t } = useLanguage();
  const currentCourse = coursesData[currentCourseIndex];
  
  if (!currentCourse) return null;

  if (!currentCourse.plan.hasPlan) {
    return null;
  }

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
    <section className={styles.planSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.planTitle}
          key={`title-${currentCourseIndex}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {t('schoolPage.coursePlanTitle')}
        </motion.h2>
        <div className={styles.planContent}>
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
              <div className={styles.planList}>
                {currentCourse.plan.items.map((item: CoursePlanItem, index: number) => (
                  <motion.div 
                    key={index} 
                    className={styles.planItem}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.1 + index * 0.05, 
                      duration: 0.3 
                    }}
                  >
                    <div className={styles.itemContent}>
                      <span className={styles.itemTitle}>{item.title}</span>
                    </div>
                    <div className={styles.itemNumber}>{item.number}</div>
                    {index < currentCourse.plan.items.length - 1 && (
                      <div className={styles.itemSeparator}></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
} 