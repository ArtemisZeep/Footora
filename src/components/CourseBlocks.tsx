"use client";

import { useState } from 'react';
import { coursesData } from '../data/coursesData';
import CourseOverview from './CourseOverview';
import CourseDescription from './CourseDescription';
import CoursePlan from './CoursePlan';
import CourseBenefits from './CourseBenefits';

export default function CourseBlocks() {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  return (
    <>
      <CourseOverview 
        currentCourseIndex={currentCourseIndex}
        onCourseChange={setCurrentCourseIndex}
      />
      <CourseDescription currentCourseIndex={currentCourseIndex} />
      <CoursePlan currentCourseIndex={currentCourseIndex} />
    </>
  );
} 