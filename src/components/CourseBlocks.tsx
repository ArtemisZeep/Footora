"use client";

import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import CourseOverview from './CourseOverview';
import CourseDescription from './CourseDescription';
import CoursePlan from './CoursePlan';
import CourseBenefits from './CourseBenefits';

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

export default function CourseBlocks() {
  const { tData } = useLanguage();
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const coursesData = useMemo(() => {
    return tData('schoolPage.courses') as Course[] || [];
  }, [tData]);

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
        coursesData={coursesData}
      />
      <CourseDescription 
        currentCourseIndex={currentCourseIndex} 
        direction={direction}
        isAnimating={isAnimating}
        coursesData={coursesData}
      />
      <CoursePlan 
        currentCourseIndex={currentCourseIndex} 
        direction={direction}
        isAnimating={isAnimating}
        coursesData={coursesData}
      />
      <CourseBenefits 
        currentCourseIndex={currentCourseIndex} 
        direction={direction}
        isAnimating={isAnimating}
        coursesData={coursesData}
      />
    </>
  );
} 