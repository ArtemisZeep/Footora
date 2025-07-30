"use client";

import { useState, useEffect } from 'react';
import { coursesData } from '../data/coursesData';
import styles from './CourseDescription.module.css';

interface CourseDescriptionProps {
  currentCourseIndex?: number;
}

export default function CourseDescription({ currentCourseIndex = 0 }: CourseDescriptionProps) {
  const [courseIndex, setCourseIndex] = useState(currentCourseIndex);
  const currentCourse = coursesData[courseIndex];

  useEffect(() => {
    setCourseIndex(currentCourseIndex);
  }, [currentCourseIndex]);

  return (
    <section className={styles.descriptionSection}>
      <div className={styles.container}>
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
      </div>
    </section>
  );
} 