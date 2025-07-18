import React from 'react';
import Image from 'next/image';

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
    <section style={{
      width: '100vw',
      minHeight: 862,
      background: '#F4F4F4',
      position: 'relative',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      overflow: 'hidden',
    }}>
      {/* Заголовок */}
      <h2 style={{
        fontFamily: 'Tenor Sans, sans-serif',
        fontWeight: 400,
        fontSize: 58,
        lineHeight: '120%',
        color: '#283433',
        textAlign: 'center',
        width: 767,
        margin: '85px auto 0 auto',
        letterSpacing: 0,
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        Результаты работы
      </h2>
      {/* Белая карточка */}
      <div style={{
        width: 1300,
        height: 527,
        background: '#fff',
        position: 'relative',
        marginTop: 55,
        boxSizing: 'border-box',
        boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch', // растягиваем по высоте
        justifyContent: 'flex-start',
      }}>
        {/* Левая часть: фото и подписи */}
        <div style={{ width: 600, height: '100%', position: 'relative', paddingLeft: 51 }}>
          {/* Название проблемы */}
          <div style={{
            fontFamily: 'Lato, sans-serif',
            fontWeight: 700,
            fontSize: 15,
            lineHeight: '18px',
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            color: '#4D5C4D',
            marginTop: 41,
            marginBottom: 18,
            width: 216,
            height: 18,
          }}>
            НАЗВАНИЕ ПРОБЛЕМЫ
          </div>
          {/* Фото до/после */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: 13, marginBottom: 0 }}>
            <div style={{ width: 281, height: 375, position: 'relative', background: 'none' }}>
              <Image src={photos[0].src} alt={photos[0].alt} fill style={{ objectFit: 'cover', borderRadius: 0 }} />
            </div>
            <div style={{ width: 281, height: 375, position: 'relative', background: 'none' }}>
              <Image src={photos[1].src} alt={photos[1].alt} fill style={{ objectFit: 'cover', borderRadius: 0 }} />
            </div>
          </div>
        </div>
        {/* Правая часть: описание */}
        <div style={{
          width: 449,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end', // прижимаем к низу
          alignItems: 'flex-start',
          marginLeft: 70,
          paddingBottom: 48, // отступ от низа как в макете
        }}>
          <div style={{
            fontFamily: 'Tenor Sans, sans-serif',
            fontWeight: 400,
            fontSize: 32,
            lineHeight: '150%',
            color: '#283433',
            textAlign: 'left',
            width: 449,
            height: 'auto',
          }}>
            Сотрудничество с хирургом.<br />Восстановление ногтевой пластины после травмы
          </div>
        </div>
        {/* Стрелки */}
        <div style={{ position: 'absolute', top: 41, right: 51, display: 'flex', flexDirection: 'row', gap: 24 }}>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="41" y1="8" x2="2" y2="8" stroke="#4D5C4D" strokeWidth="1.6" />
              <polyline points="16,1 2,8 16,15" stroke="#4D5C4D" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
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