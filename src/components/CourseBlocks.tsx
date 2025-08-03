"use client";

import { useState } from 'react';
import { coursesData } from '../data/coursesData';
import CourseOverview from './CourseOverview';
import CourseDescription from './CourseDescription';
import CoursePlan from './CoursePlan';
import CourseBenefits from './CourseBenefits';

export default function CourseBlocks() {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCourseChange = (newIndex: number, animationDirection: 'left' | 'right') => {
    if (isAnimating) return;
    setDirection(animationDirection);
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentCourseIndex(newIndex);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <>
      <CourseOverview 
        currentCourseIndex={currentCourseIndex}
        onCourseChange={handleCourseChange}
        direction={direction}
        isAnimating={isAnimating}
      />
      <CourseDescription 
        currentCourseIndex={currentCourseIndex} 
        direction={direction}
        isAnimating={isAnimating}
      />
      <CoursePlan 
        currentCourseIndex={currentCourseIndex} 
        direction={direction}
        isAnimating={isAnimating}
      />
    </>
  );
} 