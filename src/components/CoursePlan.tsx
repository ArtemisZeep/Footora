"use client";

import { useState, useEffect } from 'react';
import { coursesData } from '../data/coursesData';
import styles from './CoursePlan.module.css';

interface CoursePlanProps {
  currentCourseIndex?: number;
}

export default function CoursePlan({ currentCourseIndex = 0 }: CoursePlanProps) {
  const [courseIndex, setCourseIndex] = useState(currentCourseIndex);
  const currentCourse = coursesData[courseIndex];

  useEffect(() => {
    setCourseIndex(currentCourseIndex);
  }, [currentCourseIndex]);

  if (!currentCourse.plan.hasPlan) {
    return null;
  }

  return (
    <section className={styles.planSection}>
      <div className={styles.container}>
        <h2 className={styles.planTitle}>План курса</h2>
        <div className={styles.planContent}>
          <div className={styles.planList}>
            {currentCourse.plan.items.map((item, index) => (
              <div key={index} className={styles.planItem}>
                <div className={styles.itemContent}>
                  <span className={styles.itemTitle}>{item.title}</span>
                </div>
                <div className={styles.itemNumber}>{item.number}</div>
                {index < currentCourse.plan.items.length - 1 && (
                  <div className={styles.itemSeparator}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 