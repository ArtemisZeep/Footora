import React, { useState } from 'react';
import Image from 'next/image';

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
    <div style={{
      width: 100,
      height: 100,
      borderRadius: '50%',
      background: '#EDF1EE',
      border: '2px solid #57694C',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {photo ? (
        <Image src={photo} alt="avatar" width={100} height={100} style={{ objectFit: 'cover' }} />
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
    <section style={{
      width: 1440,
      height: 536,
      background: '#fff',
      margin: '0 auto',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: 1299,
        height: 358,
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        margin: '86px auto 0 auto',
        position: 'relative',
      }}>
        {visible.map((review, i) => (
          <div key={i} style={{
            width: 639 + i, // 639px левая, 640px правая
            height: 317,
            background: '#B8C8BA',
            opacity: i === 0 ? 0.5 : 0.25,
            borderRadius: 0,
            position: 'relative',
            padding: '40px 40px 0 40px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 32 }}>
              <Avatar photo={review.photo} />
              <div>
                <div style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 400,
                  fontSize: 26,
                  lineHeight: '90%',
                  color: '#001E09',
                  marginBottom: 4,
                }}>{review.name}</div>
                <div style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: '90%',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#57694C',
                  marginBottom: 0,
                }}>{review.status}</div>
              </div>
            </div>
            <div style={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 300,
              fontSize: 16,
              lineHeight: '150%',
              color: '#000',
              marginTop: 32,
              marginBottom: 24,
              width: 592,
              minHeight: 48,
            }}>{review.text}</div>
            <a href={review.link} style={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 300,
              fontSize: 14,
              lineHeight: '150%',
              color: '#4D5C4D',
              textDecoration: 'underline',
            }}>ссылка на отзыв</a>
          </div>
        ))}
      </div>
      {/* Точки-пагинация */}
      <div style={{ position: 'absolute', left: '50%', bottom: 60, transform: 'translateX(-50%)', display: 'flex', gap: 12 }}>
        {Array.from({ length: pageCount }).map((_, i) => (
          <span key={i} style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: i === page ? '#B8C8BA' : '#DDE6DE',
            display: 'inline-block',
          }}></span>
        ))}
      </div>
      {/* Стрелки */}
      <div style={{ position: 'absolute', right: 60, bottom: 60, display: 'flex', gap: 32 }}>
        <button onClick={() => setPage(Math.max(0, page - 1))} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="41" y1="8" x2="2" y2="8" stroke="#4D5C4D" strokeWidth="1.6" />
            <polyline points="16,1 2,8 16,15" stroke="#4D5C4D" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button onClick={() => setPage(Math.min(pageCount - 1, page + 1))} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2" y1="8" x2="41" y2="8" stroke="#4D5C4D" strokeWidth="1.6" />
            <polyline points="27,1 41,8 27,15" stroke="#4D5C4D" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
} 