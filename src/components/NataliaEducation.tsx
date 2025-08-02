'use client';
import { useState, useEffect } from 'react';
import styles from './NataliaEducation.module.css';

interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  city: string;
}

const educationData: EducationItem[] = [
  {
    year: '2006',
    institution: 'Базовый курс по педикюру и маникюру',
    degree: 'Сертификат',
    city: 'Екатеринбург'
  },
  {
    year: '2008',
    institution: 'Аппаратная обработка стоп и ногтей по немецкой технологии Gerlach',
    degree: 'Специализированный курс',
    city: 'Екатеринбург'
  },
  {
    year: '2010',
    institution: 'Beauty - конференция, ЭКСПО',
    degree: 'Участие в конференции',
    city: 'Москва'
  },
  {
    year: '2013',
    institution: 'РГСУ (Российский Государственный Социальный Университет)',
    degree: 'Специализация "Специалист по социальной работе", Бакалавр',
    city: 'Москва'
  },
  {
    year: '2014',
    institution: 'Ортониксия - скоба Росса Фрезера',
    degree: 'Специализированный курс',
    city: 'Екатеринбург'
  },
  {
    year: '2016',
    institution: 'Протезирование/восстановление ногтей Gehwol Gel, Gehwolnageimasse, BS-nagel, Unguisan. Ортониксия 3ТО',
    degree: 'Комплексное обучение',
    city: 'Екатеринбург'
  },
  {
    year: '2017',
    institution: 'Ортониксия - Титановая нить',
    degree: 'Специализированный курс',
    city: 'Екатеринбург'
  },
  {
    year: '2018',
    institution: 'Курсы повышения квалификации: Вросший и деформированный ноготь, 3TO Аксель Пельстер. Лимфотическая система нижних конечностей, Костшембский Петр. Микология в подологии. Основы ортопедии, Шлыков К. А. Синдром диабетической стопы, Бреговский В. Б. Раны и раневой процесс, Еровенков Р. Л.',
    degree: 'Курсы повышения квалификации',
    city: 'Москва'
  },
  {
    year: '2019',
    institution: 'Международные Конференции, научно - практический форум "Подология и медицина". Ортониксия Unibrace System 1 ступень. Конференция "Medical Side of Podology" Wroclaw-Poland',
    degree: 'Конференции и практические курсы',
    city: 'Москва, Вроцлав'
  },
  {
    year: '2020',
    institution: 'Анамнез и план подологической терапии в практике подолога, Дитер Бауманн. Курс Подологии. Карлов университет, 3. Лечебный факультет. Курс "Ногтевая косметология (химия препаратов)", Виталий Соломонов',
    degree: 'Международные курсы подологии',
    city: 'Германия, Прага, США'
  },
  {
    year: '2022',
    institution: 'Ортониксия Unibrace System 2 ступень. Курс метода Куб Аркада. Курс инструктора системы UniBrace',
    degree: 'Продвинутые курсы и инструкторская подготовка',
    city: 'Вроцлав'
  },
  {
    year: '2024',
    institution: 'Вебинар «Пациенты с сахарным диабетом в практике специалиста парамедицинского педикюра». Международная подологическая конференция',
    degree: 'Современные методики и конференции',
    city: 'Германия'
  }
];

export default function NataliaEducation() {
  const [activeIndex, setActiveIndex] = useState(3); // 2013 по умолчанию
  const [visibleCount, setVisibleCount] = useState(5); // Количество видимых элементов на таймлайне
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedEducation, setDisplayedEducation] = useState(educationData[3]);

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
    if (displayedEducation !== educationData[activeIndex]) {
      setIsTransitioning(true);
      
      // Через 300ms (время исчезновения) обновляем контент
      setTimeout(() => {
        setDisplayedEducation(educationData[activeIndex]);
        setIsTransitioning(false);
      }, 300);
    }
  }, [activeIndex]);

  const handlePrevious = () => {
    setActiveIndex(prev => prev > 0 ? prev - 1 : educationData.length - 1);
  };

  const handleNext = () => {
    setActiveIndex(prev => prev < educationData.length - 1 ? prev + 1 : 0);
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
        <h2 className={styles.title}>ОБРАЗОВАНИЕ</h2>
        
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
        <div className={`${styles.educationDescription} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
          <h3 className={styles.institutionName}>{displayedEducation.institution}</h3>
          <p className={styles.degreeInfo}>{displayedEducation.degree}</p>
          <p className={styles.cityInfo}>{displayedEducation.city}</p>
        </div>
      </div>
    </section>
  );
}