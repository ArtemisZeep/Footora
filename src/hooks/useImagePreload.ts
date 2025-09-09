'use client';

import { useEffect } from 'react';
import { criticalImages, preloadImage } from '@/lib/imageOptimization';

// Хук для preload критических изображений
export const useImagePreload = (images: string[] = criticalImages) => {
  useEffect(() => {
    // Preload только в браузере
    if (typeof window === 'undefined') return;

    const preloadImages = async () => {
      // Добавляем небольшую задержку чтобы не блокировать critical rendering path
      await new Promise(resolve => setTimeout(resolve, 100));
      
      images.forEach(src => {
        preloadImage(src);
      });
    };

    preloadImages();
  }, [images]);
};

// Хук для lazy loading изображений при скролле
export const useLazyImages = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const dataSrc = img.getAttribute('data-src');
            
            if (dataSrc) {
              img.src = dataSrc;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    // Находим все изображения с data-src
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => observer.observe(img));

    return () => observer.disconnect();
  }, []);
}; 