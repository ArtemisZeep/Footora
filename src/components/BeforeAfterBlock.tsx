'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { beforeAfterData, BeforeAfterCase, getBeforeAfterByCategory } from '@/data/beforeAfterData';
import styles from './BeforeAfterBlock.module.css';

interface BeforeAfterBlockProps {
  title?: string;
  subtitle?: string;
  category?: BeforeAfterCase['category'];
  maxItems?: number;
  showFilters?: boolean;
}

const BeforeAfterBlock: React.FC<BeforeAfterBlockProps> = ({
  title = 'Результаты работы',
  subtitle = 'Примеры успешного лечения наших пациентов',
  category,
  maxItems = 6,
  showFilters = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState<BeforeAfterCase['category'] | 'all'>('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Получаем данные в зависимости от выбранной категории
  const getData = () => {
    if (category) {
      return getBeforeAfterByCategory(category).slice(0, maxItems);
    }
    
    if (selectedCategory === 'all') {
      return beforeAfterData.slice(0, maxItems);
    }
    
    return getBeforeAfterByCategory(selectedCategory).slice(0, maxItems);
  };

  const displayData = getData();

  // Отладка - добавим console.log
  console.log('BeforeAfterBlock debug:', {
    beforeAfterDataLength: beforeAfterData.length,
    displayDataLength: displayData.length,
    selectedCategory,
    category,
    maxItems,
    firstItem: beforeAfterData[0]
  });

  const categories = [
    { key: 'all' as const, label: 'Все случаи' },
    { key: 'ingrown_nail' as const, label: 'Вросший ноготь' },
    { key: 'onychomycosis' as const, label: 'Онихомикоз' },
    { key: 'rehabilitation' as const, label: 'Реабилитация' },
    { key: 'correction' as const, label: 'Коррекция' },
    { key: 'restoration' as const, label: 'Восстановление' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % displayData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + displayData.length) % displayData.length);
  };

  return (
    <section className={styles.beforeAfterSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {showFilters && !category && (
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`${styles.filterButton} ${
                  selectedCategory === cat.key ? styles.active : ''
                }`}
                onClick={() => {
                  setSelectedCategory(cat.key);
                  setCurrentSlide(0);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        <div className={styles.casesGrid}>
          {displayData.map((caseItem, index) => (
            <div key={caseItem.id} className={styles.caseCard}>
              <div className={styles.imageComparison}>
                <div className={styles.beforeAfterContainer}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={caseItem.beforeImage}
                      alt={`До лечения - ${caseItem.title}`}
                      width={300}
                      height={300}
                      className={styles.beforeImage}
                    />
                    <span className={styles.imageLabel}>До</span>
                  </div>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={caseItem.afterImage}
                      alt={`После лечения - ${caseItem.title}`}
                      width={300}
                      height={300}
                      className={styles.afterImage}
                    />
                    <span className={styles.imageLabel}>После</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.caseInfo}>
                <h3 className={styles.caseTitle}>{caseItem.title}</h3>
                <p className={styles.caseDescription}>{caseItem.description}</p>
                
                <div className={styles.categoryBadge}>
                  {categories.find(cat => cat.key === caseItem.category)?.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {displayData.length === 0 && (
          <div className={styles.noResults}>
            <p>В данной категории пока нет примеров работ</p>
            <p>Отладка: beforeAfterData.length = {beforeAfterData.length}</p>
            <p>selectedCategory = {selectedCategory}</p>
            <p>category prop = {category || 'undefined'}</p>
          </div>
        )}

        {/* Мобильная версия с каруселью */}
        <div className={styles.mobileCarousel}>
          <div className={styles.carouselContainer}>
            <button 
              className={styles.carouselButton} 
              onClick={prevSlide}
              disabled={displayData.length <= 1}
            >
              ←
            </button>
            
            <div className={styles.carouselContent}>
              {displayData.length > 0 && (
                <div className={styles.caseCard}>
                  <div className={styles.imageComparison}>
                    <div className={styles.beforeAfterContainer}>
                      <div className={styles.imageWrapper}>
                        <Image
                          src={displayData[currentSlide].beforeImage}
                          alt={`До лечения - ${displayData[currentSlide].title}`}
                          width={150}
                          height={150}
                          className={styles.beforeImage}
                        />
                        <span className={styles.imageLabel}>До</span>
                      </div>
                      <div className={styles.imageWrapper}>
                        <Image
                          src={displayData[currentSlide].afterImage}
                          alt={`После лечения - ${displayData[currentSlide].title}`}
                          width={150}
                          height={150}
                          className={styles.afterImage}
                        />
                        <span className={styles.imageLabel}>После</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.caseInfo}>
                    <h3 className={styles.caseTitle}>{displayData[currentSlide].title}</h3>
                    <p className={styles.caseDescription}>{displayData[currentSlide].description}</p>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              className={styles.carouselButton} 
              onClick={nextSlide}
              disabled={displayData.length <= 1}
            >
              →
            </button>
          </div>
          
          <div className={styles.carouselDots}>
            {displayData.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterBlock;
