'use client';
import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './NataliaEducation.module.css';

interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  city: string;
}
export default function NataliaEducation() {
  const { t, tData } = useLanguage();
  
  const educationData = useMemo(() => {
    return tData('nataliaPage.education.items') as EducationItem[] || [];
  }, [tData]);
  
  const [activeIndex, setActiveIndex] = useState(3); // 2013 по умолчанию
  const [visibleCount, setVisibleCount] = useState(5); // Количество видимых элементов на таймлайне
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedEducation, setDisplayedEducation] = useState<EducationItem | null>(null);

  // Инициализируем displayedEducation когда данные загружаются
  useEffect(() => {
    if (educationData.length > 0 && !displayedEducation) {
      setDisplayedEducation(educationData[3] || educationData[0]);
    }
  }, [educationData, displayedEducation]);

  // Отслеживаем размер экрана для адаптивности
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(3); // Мобайл - 3 элемента
      } else {
        setVisibleCount(5); // Десктоп/планшет - 5 элементов
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);

    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Обрабатываем смену активного элемента с анимацией
  useEffect(() => {
    if (educationData.length > 0 && activeIndex < educationData.length) {
      const currentEducation = educationData[activeIndex];
      if (currentEducation && displayedEducation !== currentEducation) {
        setIsTransitioning(true);
        
        // Через 300ms (время исчезновения) обновляем контент
        setTimeout(() => {
          setDisplayedEducation(currentEducation);
          setIsTransitioning(false);
        }, 300);
      }
    }
  }, [activeIndex, educationData]);

  const handlePrevious = () => {
    if (educationData.length > 0) {
      setActiveIndex(prev => prev > 0 ? prev - 1 : educationData.length - 1);
    }
  };

  const handleNext = () => {
    if (educationData.length > 0) {
      setActiveIndex(prev => prev < educationData.length - 1 ? prev + 1 : 0);
    }
  };

  const handleYearClick = (index: number) => {
    setActiveIndex(index);
  };

  // Вычисляем диапазон видимых элементов
  const getVisibleRange = () => {
    const halfVisible = Math.floor(visibleCount / 2);
    let start = activeIndex - halfVisible;
    let end = activeIndex + halfVisible;

    // Корректируем границы если выходим за пределы массива
    if (start < 0) {
      end += Math.abs(start);
      start = 0;
    }
    if (end >= educationData.length) {
      start -= (end - educationData.length + 1);
      end = educationData.length - 1;
    }

    // Финальная проверка границ
    start = Math.max(0, start);
    end = Math.min(educationData.length - 1, end);

    return { start, end };
  };

  const { start, end } = getVisibleRange();
  const visibleEducations = educationData.slice(start, end + 1);

  return (
    <section className={styles.educationSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('nataliaPage.education.title')}</h2>
        
        {educationData.length > 0 && (
          <>
            <div className={styles.timelineSection}>
          {/* Левая стрелка */}
          <button className={styles.arrowButton} onClick={handlePrevious}>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path d="M12 4L6 10L12 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Таймлайн */}
          <div className={styles.timeline}>
            <div className={styles.timelineLine}></div>
            
            {visibleEducations.map((education, visibleIndex) => {
              const originalIndex = start + visibleIndex;
              const isActive = originalIndex === activeIndex;
              return (
                <div 
                  key={`${education.year}-${originalIndex}`}
                  className={`${styles.timelineItem} ${isActive ? styles.active : ''}`}
                  style={{ 
                    left: `${(visibleIndex / (visibleEducations.length - 1)) * 100}%`,
                    animationDelay: `${visibleIndex * 0.1}s`
                  }}
                  onClick={() => handleYearClick(originalIndex)}
                >
                  {isActive ? (
                    <div className={styles.activeCircle}>
                      <span className={styles.activeYear}>{education.year}</span>
                    </div>
                  ) : (
                    <div className={styles.inactiveCircle}>
                      <span className={styles.inactiveYear}>{education.year}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Правая стрелка */}
          <button className={styles.arrowButton} onClick={handleNext}>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path d="M7 4L13 10L7 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

            {/* Описание активного образования */}
            {displayedEducation && (
              <div className={`${styles.educationDescription} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
                <h3 className={styles.institutionName}>{displayedEducation.institution}</h3>
                <p className={styles.degreeInfo}>{displayedEducation.degree}</p>
                <p className={styles.cityInfo}>{displayedEducation.city}</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}