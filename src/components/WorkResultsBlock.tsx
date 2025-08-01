import React from 'react';
import Image from 'next/image';
import styles from './WorkResultsBlock.module.css';

const photos = [
  {
    src: '/images/file-1681162744334.png', // замените на реальный путь
    alt: 'До',
  },
  {
    src: '/images/file-1700502093549.png', // замените на реальный путь
    alt: 'После',
  },
];

export default function WorkResultsBlock() {
  return (
    <section className={styles.workResultsSection}>
      {/* Заголовок */}
      <h2 className={styles.workResultsTitle}>
        Результаты работы
      </h2>
      {/* Белая карточка */}
      <div className={styles.workResultsCard}>
        {/* Левая часть: фото и подписи */}
        <div className={styles.workResultsLeft}>
          {/* Название проблемы */}
          <div className={styles.problemTitle}>
            НАЗВАНИЕ ПРОБЛЕМЫ
          </div>
          {/* Фото до/после */}
          <div className={styles.photosContainer}>
            <div className={styles.photoWrapper}>
              <Image src={photos[0].src} alt={photos[0].alt} fill />
            </div>
            <div className={styles.photoWrapper}>
              <Image src={photos[1].src} alt={photos[1].alt} fill />
            </div>
          </div>
        </div>
        {/* Правая часть: описание */}
        <div className={styles.workResultsRight}>
          <div className={styles.workResultsDescription}>
            Сотрудничество с хирургом.<br />Восстановление ногтевой пластины после травмы
          </div>
        </div>
        {/* Стрелки */}
        <div className={styles.arrowsContainer}>
          <button className={styles.arrowButton}>
            <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="41" y1="8" x2="2" y2="8" stroke="#4D5C4D" strokeWidth="1.6" />
              <polyline points="16,1 2,8 16,15" stroke="#4D5C4D" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className={styles.arrowButton}>
            <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="2" y1="8" x2="41" y2="8" stroke="#4D5C4D" strokeWidth="1.6" />
              <polyline points="27,1 41,8 27,15" stroke="#4D5C4D" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 