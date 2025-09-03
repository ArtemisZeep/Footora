'use client';

import React from 'react';
import styles from './Preloader.module.css';

const LETTERS = ['F', 'O', 'O', 'T', 'U', 'R', 'A'] as const;

export default function Preloader() {
  const [mounted, setMounted] = React.useState(false);
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const [isFading, setIsFading] = React.useState(false);

  // Устанавливаем mounted только после монтирования на клиенте
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Определяем нужно ли показывать прелоадер только после монтирования
  React.useEffect(() => {
    if (!mounted) return;
    
    const shouldShow = sessionStorage.getItem('preloader-shown') !== '1';
    setIsActive(shouldShow);
  }, [mounted]);

  React.useEffect(() => {
    if (!isActive || !mounted) return; // уже решили не показывать — ничего не делаем

    // Показываем только один раз за сессию
    sessionStorage.setItem('preloader-shown', '1');

    const MIN_DURATION_MS = 4000;
    const FADE_MS = 700;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const start = performance.now();
    let finished = false;
    const scheduleFinish = () => {
      if (finished) return;
      finished = true;
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_DURATION_MS - elapsed);
      setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setIsActive(false);
          document.body.style.overflow = originalOverflow;
        }, FADE_MS);
      }, remaining);
    };

    window.addEventListener('load', scheduleFinish, { once: true });
    // На случай, если событие load не сработает — гарантированное завершение
    const hardTimeout = setTimeout(scheduleFinish, MIN_DURATION_MS + 2000);

    return () => {
      window.removeEventListener('load', scheduleFinish);
      clearTimeout(hardTimeout);
      document.body.style.overflow = originalOverflow;
    };
  }, [isActive, mounted]);

  // Не рендерим ничего до монтирования на клиенте
  if (!mounted || !isActive) return null;

  return (
    <div className={`${styles.overlay} ${isFading ? styles.fadeOut : ''}`} aria-hidden>
      {/* Видеофон из ассетов проекта */}
      <video className={styles.bgVideo} autoPlay muted loop playsInline preload="auto">
        <source src="/video/hero_main.mp4" type="video/mp4" />
      </video>
      <div className={styles.tint} />

      <div className={styles.logo}>
        {/* Дуга как mask с эффектом «прорисовки» */}
        <div
          className={styles.arc}
          style={{ ['--mask-url' as any]: "url('/images/preloader/UP.svg')" }}
        />

        {/* Буквы логотипа как маски с мерцающим бликом */}
        <div className={styles.wordmark}>
          {LETTERS.map((letter, index) => (
            <span
              key={letter + index}
              className={styles.letter}
              style={{
                ['--mask-url' as any]: `url('/images/preloader/${letter}.svg')`,
                ['--delay' as any]: `${index * 120}ms`,
                // Цвета как в фирменном логотипе: FOOT — белые, URA — тёмные
                ['--base' as any]: index < 4 ? '#ffffff' : '#23302f',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


