import React from 'react';
import Image from 'next/image';

// Тип сертификата
export type Certificate = {
  src: string;
  orientation: 'vertical' | 'horizontal';
  alt?: string;
};

type CertificatesPopupProps = {
  open: boolean;
  certificates: Certificate[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

const CONTAINER_WIDTH = 1080;
const CONTAINER_HEIGHT = 731;
const MAX_IMG_HEIGHT = 0.8 * CONTAINER_HEIGHT; // 80%
const MAX_IMG_WIDTH = 0.7 * CONTAINER_WIDTH;   // 70%
const GAP = 32;

const CertificatesPopup: React.FC<CertificatesPopupProps> = ({ open, certificates, currentIndex, onClose, onNext, onPrev }) => {
  if (!open) return null;

  // Определяем, показываем ли два вертикальных подряд
  const isDoubleVertical =
    certificates[currentIndex]?.orientation === 'vertical' &&
    certificates[currentIndex + 1]?.orientation === 'vertical';

  // Для пагинации: если два вертикальных, шаг +2, иначе +1
  const getPageCount = () => {
    let count = 0;
    for (let i = 0; i < certificates.length;) {
      if (
        certificates[i]?.orientation === 'vertical' &&
        certificates[i + 1]?.orientation === 'vertical'
      ) {
        count++;
        i += 2;
      } else {
        count++;
        i += 1;
      }
    }
    return count;
  };

  // Текущий номер страницы
  const getCurrentPage = () => {
    let page = 0;
    for (let i = 0; i < certificates.length;) {
      if (i === currentIndex) return page;
      if (
        certificates[i]?.orientation === 'vertical' &&
        certificates[i + 1]?.orientation === 'vertical'
      ) {
        i += 2;
      } else {
        i += 1;
      }
      page++;
    }
    return page;
  };

  // Размеры для фото
  let imgBoxStyle: React.CSSProperties = {};
  let imgBoxStyle2: React.CSSProperties = {};
  if (isDoubleVertical) {
    // Для двух вертикальных: делим ширину на 2 с учетом gap
    const width = (MAX_IMG_WIDTH - GAP) / 2;
    imgBoxStyle = {
      position: 'relative',
      width: width,
      height: MAX_IMG_HEIGHT,
      flex: `0 0 ${width}px`,
      background: 'transparent',
    };
    imgBoxStyle2 = imgBoxStyle;
  } else {
    imgBoxStyle = {
      position: 'relative',
      width: MAX_IMG_WIDTH,
      height: MAX_IMG_HEIGHT,
      margin: '0 auto',
      background: 'transparent',
    };
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(40,52,51,0.5)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        position: 'relative',
        width: 'min(1301px, 95vw)',
        height: 'min(792px, 90vh)',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Белый контейнер */}
        <div style={{
          position: 'relative',
          width: CONTAINER_WIDTH,
          height: CONTAINER_HEIGHT,
          maxWidth: '80vw',
          maxHeight: '80vh',
          background: '#F4F4F4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          margin: '0 auto',
        }}>
          {/* Крестик */}
          <button onClick={onClose} style={{
            position: 'absolute',
            top: 32,
            right: 32,
            width: 29,
            height: 29,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            zIndex: 2,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }} aria-label="Закрыть">
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="4" y1="4" x2="25" y2="25" stroke="#B8C8BA" strokeWidth="2" />
              <line x1="25" y1="4" x2="4" y2="25" stroke="#B8C8BA" strokeWidth="2" />
            </svg>
          </button>
          {/* Стрелка влево */}
          <button onClick={onPrev} style={{
            position: 'absolute',
            left: 24,
            top: '50%',
            width: 40,
            height: 40,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            zIndex: 2,
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }} aria-label="Назад">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="24,6 12,18 24,30" stroke="#B8C8BA" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {/* Стрелка вправо */}
          <button onClick={onNext} style={{
            position: 'absolute',
            right: 24,
            top: '50%',
            width: 40,
            height: 40,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            zIndex: 2,
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }} aria-label="Вперёд">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="12,6 24,18 12,30" stroke="#B8C8BA" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {/* Фото */}
          {isDoubleVertical ? (
            <div style={{ display: 'flex', gap: GAP, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
              <div style={imgBoxStyle}>
                <Image src={certificates[currentIndex].src} alt={certificates[currentIndex].alt || ''} fill style={{ objectFit: 'contain' }} />
              </div>
              <div style={imgBoxStyle2}>
                <Image src={certificates[currentIndex + 1].src} alt={certificates[currentIndex + 1].alt || ''} fill style={{ objectFit: 'contain' }} />
              </div>
            </div>
          ) : (
            <div style={{ ...imgBoxStyle, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image src={certificates[currentIndex].src} alt={certificates[currentIndex].alt || ''} fill style={{ objectFit: 'contain' }} />
            </div>
          )}
          {/* Точки-пагинация */}
          <div style={{ position: 'absolute', left: '50%', bottom: 32, transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>
            {Array.from({ length: getPageCount() }).map((_, i) => (
              <span key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: i === getCurrentPage() ? '#B8C8BA' : '#F4F4F4', display: 'inline-block' }}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPopup; 