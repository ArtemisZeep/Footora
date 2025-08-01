import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ReviewsBlock.module.css';

const reviews = [
  {
    name: 'Алина',
    status: 'КЛИЕНТ',
    text: 'Сегодня была у мастера Кристины на педикюре во второй раз. Мастер Кристина действительно мастер своего дела. Советую всем. Работает очень аккуратно и старается сделать свою работу на 100%. А также очень приятная девушка и дает полезные советы по уходу за ногами.',
    link: '#',
    photo: null,
  },
  {
    name: 'Eugene Butch',
    status: 'CLIENT',
    text: 'Excellent professional Natalia for two month cured my nail, which I thought it was impossible to return to a full healthy state. I recommend her to everyone.',
    link: '#',
    photo: null,
  },
  // Добавьте больше отзывов по необходимости
];

function Avatar({ photo }: { photo: string | null }) {
  return (
    <div className={styles.avatar}>
      {photo ? (
        <Image src={photo} alt="avatar" width={100} height={100} />
      ) : (
        <svg width="47" height="68" viewBox="0 0 47 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="23.5" cy="20.5" rx="16.5" ry="16.5" stroke="#57694C" strokeWidth="2" />
          <path d="M2 66C2 54.9543 11.9543 45 23.5 45C35.0457 45 45 54.9543 45 66" stroke="#57694C" strokeWidth="2" />
        </svg>
      )}
    </div>
  );
}

export default function ReviewsBlock() {
  const [page, setPage] = useState(0);
  const perPage = 2;
  const pageCount = Math.ceil(reviews.length / perPage);
  const start = page * perPage;
  const visible = reviews.slice(start, start + perPage);

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.reviewsContainer}>
        {visible.map((review, i) => (
          <div key={i} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <Avatar photo={review.photo} />
              <div className={styles.clientInfo}>
                <div className={styles.clientName}>{review.name}</div>
                <div className={styles.clientStatus}>{review.status}</div>
              </div>
            </div>
            <div className={styles.reviewText}>{review.text}</div>
            <a href={review.link} className={styles.reviewLink}>ссылка на отзыв</a>
          </div>
        ))}
      </div>
      {/* Точки-пагинация */}
      <div className={styles.pagination}>
        {Array.from({ length: pageCount }).map((_, i) => (
          <span 
            key={i} 
            className={`${styles.paginationDot} ${i === page ? styles.active : styles.inactive}`}
          ></span>
        ))}
      </div>
      {/* Стрелки */}
      <div className={styles.arrowsContainer}>
        <button onClick={() => setPage(Math.max(0, page - 1))} className={styles.arrowButton}>
          <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="41" y1="8" x2="2" y2="8" stroke="#4D5C4D" strokeWidth="1.6" />
            <polyline points="16,1 2,8 16,15" stroke="#4D5C4D" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button onClick={() => setPage(Math.min(pageCount - 1, page + 1))} className={styles.arrowButton}>
          <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2" y1="8" x2="41" y2="8" stroke="#4D5C4D" strokeWidth="1.6" />
            <polyline points="27,1 41,8 27,15" stroke="#4D5C4D" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
} 