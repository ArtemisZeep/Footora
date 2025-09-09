"use client";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SchoolHero from '../../components/SchoolHero';
import SchoolAbout from '../../components/SchoolAbout';
import SchoolLector from '../../components/SchoolLector';
import CourseBlocks from '../../components/CourseBlocks';
import SchoolAdvantages from '../../components/SchoolAdvantages';
import SchoolReviews from '../../components/SchoolReviews';
import SEOHead from '../../components/SEOHead';

export default function SchoolPage() {
  return (
    <>
      <SEOHead
        title="Школа подологии Footura - Обучение медицинскому педикюру в Праге"
        description="Профессиональное обучение подологии и медицинскому педикюру. Курсы для начинающих и специалистов. Сертификаты установленного образца."
        keywords="школа подологии, обучение медицинскому педикюру, курсы подологии, сертификация подолога"
        canonicalUrl="/school"
      />

      <Header variant="school" />
      <main>
        <SchoolHero />
        <SchoolAbout />
        <SchoolLector />
        <CourseBlocks />
        <SchoolAdvantages />
        <SchoolReviews />
      </main>
      <Footer variant="school" />
    </>
  );
} 