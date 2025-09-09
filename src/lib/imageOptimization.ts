// Утилиты для оптимизации изображений
import { ImageProps } from 'next/image';

// Конфигурация размеров изображений для разных устройств
export const imageSizes = {
  // Размеры для разных типов изображений
  hero: {
    mobile: 768,
    tablet: 1024,
    desktop: 1920
  },
  card: {
    mobile: 350,
    tablet: 400,
    desktop: 500
  },
  thumbnail: {
    mobile: 150,
    tablet: 200,
    desktop: 250
  },
  logo: {
    mobile: 120,
    tablet: 150,
    desktop: 200
  }
};

// Генерация sizes атрибута для responsive изображений
export const generateSizes = (type: keyof typeof imageSizes) => {
  const sizes = imageSizes[type];
  return `(max-width: 768px) ${sizes.mobile}px, (max-width: 1024px) ${sizes.tablet}px, ${sizes.desktop}px`;
};

// Оптимизированные настройки для Next.js Image
export const getOptimizedImageProps = (
  src: string,
  alt: string,
  type: keyof typeof imageSizes,
  options?: Partial<ImageProps>
): Partial<ImageProps> => {
  const baseProps: Partial<ImageProps> = {
    src,
    alt,
    sizes: generateSizes(type),
    quality: 85, // Оптимальное соотношение качество/размер
    priority: type === 'hero', // Hero изображения загружаются с приоритетом
    placeholder: 'blur',
    blurDataURL: generateBlurDataURL(imageSizes[type].mobile, imageSizes[type].mobile),
    ...options
  };

  // Устанавливаем размеры в зависимости от типа
  const typeSize = imageSizes[type];
  baseProps.width = typeSize.desktop;
  baseProps.height = Math.round(typeSize.desktop * 0.6); // Соотношение 5:3

  return baseProps;
};

// Генерация blur placeholder
export const generateBlurDataURL = (width: number, height: number): string => {
  const canvas = typeof window !== 'undefined' ? document.createElement('canvas') : null;
  if (!canvas) {
    // Fallback для SSR - простой base64 blur
    return `data:image/svg+xml;base64,${Buffer.from(
      `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g">
            <stop stop-color="#f4f4f4" offset="0%"/>
            <stop stop-color="#e0e0e0" offset="100%"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)"/>
      </svg>`
    ).toString('base64')}`;
  }
  
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';
  
  // Создаем простой градиент для blur эффекта
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f4f4f4');
  gradient.addColorStop(1, '#e0e0e0');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL();
};

// Preload критических изображений
export const preloadImage = (src: string, as: 'image' = 'image') => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = src;
  document.head.appendChild(link);
};

// Lazy loading для некритических изображений
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(callback, {
    rootMargin: '50px', // Начинаем загрузку за 50px до появления
    threshold: 0.1,
    ...options
  });
};

// Список критических изображений для preload
export const criticalImages = [
  '/images/logo.svg',
  '/images/hero-background.jpg',
  '/images/natalia-hero.jpg'
];

// WebP поддержка
export const supportsWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

// Конвертация URL для WebP если поддерживается
export const getWebPUrl = (originalUrl: string): string => {
  if (!supportsWebP()) return originalUrl;
  
  // Простая логика конвертации - в реальном проекте может быть сложнее
  return originalUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
}; 