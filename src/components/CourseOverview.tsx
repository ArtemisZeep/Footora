"use client";

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
    const nextIndex = (currentCourseIndex + 1) % coursesData.length;
    onCourseChange?.(nextIndex);
  };

  const prevCourse = () => {
    const prevIndex = (currentCourseIndex - 1 + coursesData.length) % coursesData.length;
    onCourseChange?.(prevIndex);
  };

  return (
    <section className={styles.overviewSection}>
      <div className={styles.container}>
        <div className={styles.courseCard}>
          {/* Navigation Arrows */}
          <div className={styles.navigation}>
            <button className={styles.navArrow} onClick={prevCourse}>
              <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
                <path d="M43 6L1 6M1 6L6 1M1 6L6 11" stroke="#506888" strokeWidth="1.6"/>
              </svg>
            </button>
            <button className={styles.navArrow} onClick={nextCourse}>
              <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
                <path d="M1 6L43 6M43 6L38 1M43 6L38 11" stroke="#506888" strokeWidth="1.6"/>
              </svg>
            </button>
          </div>

          {/* Course Type Badge */}
          <div className={styles.courseType}>{currentCourse.overview.type}</div>

          {/* Course Content */}
          <div className={styles.courseContent}>
            {/* Left Column */}
            <div className={styles.leftColumn}>
              <h2 className={`${styles.courseTitle} ${getTitleSizeClass(currentCourse.overview.title)}`}>{currentCourse.overview.title}</h2>
              <div className={styles.courseNumber}>{currentCourse.overview.number}</div>
            </div>

            {/* Middle Column */}
            <div className={styles.middleColumn}>
              <p className={styles.courseDescription}>{currentCourse.overview.description}</p>
              <div className={styles.buttonGroup}>
                {!currentCourse.overview.noButton && (
                  <button className={styles.detailsBtn}>Подробнее о курсе</button>
                )}
                <button className={styles.purchaseBtn}>
                  {currentCourse.overview.noButton ? "Купить" : "Купить курс"}
                  <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
                <path d="M1 6L43 6M43 6L38 1M43 6L38 11" stroke="#FFFFFF" strokeWidth="1.6"/>
              </svg>
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className={styles.rightColumn}>
              <div className={styles.priceSection}>
                {currentCourse.overview.prices.map((price, index) => (
                  <div key={index} className={styles.priceItem}>
                    <div className={styles.priceLabel}>{price.name}</div>
                    <div className={styles.priceValue}>{price.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 