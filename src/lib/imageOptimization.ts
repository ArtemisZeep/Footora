// Утилиты для оптимизации изображений

export interface ImageConfig {
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

// Предустановленные конфигурации для разных типов изображений
export const imageConfigs = {
  // Hero изображения - критические, полный экран
  hero: {
    sizes: '100vw',
    priority: true,
    quality: 90,
  },
  
  // Логотипы - небольшие, точные размеры
  logo: {
    sizes: '(max-width: 768px) 100px, 120px',
    priority: false,
    quality: 95,
  },
  
  // Карточки услуг - адаптивные размеры
  serviceCard: {
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px',
    priority: false,
    quality: 85,
  },
  
  // Изображения статей - средние размеры
  article: {
    sizes: '(max-width: 768px) 100vw, 800px',
    priority: false,
    quality: 80,
  },
  
  // Портреты команды - квадратные
  portrait: {
    sizes: '(max-width: 768px) 50vw, 300px',
    priority: false,
    quality: 85,
  },
  
  // Сертификаты - большие изображения документов
  certificate: {
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px',
    priority: false,
    quality: 90,
  },
  
  // Иконки - маленькие, точные размеры
  icon: {
    sizes: '(max-width: 768px) 20px, 24px',
    priority: false,
    quality: 95,
  },
  
  // Фоновые изображения - полная ширина
  background: {
    sizes: '100vw',
    priority: false,
    quality: 75,
  },
} as const;

// Функция для получения оптимального размера изображения
export function getImageConfig(type: keyof typeof imageConfigs, customConfig?: Partial<ImageConfig>): ImageConfig {
  const baseConfig = imageConfigs[type];
  
  return {
    width: 800,
    height: 600,
    ...baseConfig,
    ...customConfig,
  };
}

// Функция для создания blur placeholder
export function createBlurDataURL(width: number, height: number): string {
  const canvas = typeof window !== 'undefined' && document.createElement('canvas');
  if (!canvas) {
    // Fallback для SSR
    return `data:image/svg+xml;base64,${btoa(
      `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f0f0f0"/>
            <stop offset="100%" style="stop-color:#e0e0e0"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#gradient)"/>
      </svg>`
    )}`;
  }
  
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    // Создаем градиент для placeholder
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f0f0f0');
    gradient.addColorStop(1, '#e0e0e0');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }
  
  return canvas.toDataURL();
}

// Функция для определения приоритета изображения на основе позиции
export function getImagePriority(isAboveFold: boolean, isCritical: boolean = false): boolean {
  return isAboveFold || isCritical;
}

// Функция для оптимизации путей к изображениям
export function optimizeImageSrc(src: string): string {
  // Если изображение уже оптимизировано Next.js, возвращаем как есть
  if (src.startsWith('/_next/image')) {
    return src;
  }
  
  // Для локальных изображений убеждаемся что путь правильный
  if (src.startsWith('/images/')) {
    return src;
  }
  
  // Для внешних изображений возвращаем без изменений
  if (src.startsWith('http')) {
    return src;
  }
  
  // Добавляем /images/ если путь относительный
  return `/images/${src}`;
}

// Типы размеров для различных breakpoint'ов
export const breakpoints = {
  mobile: '(max-width: 768px)',
  tablet: '(max-width: 1024px)',
  desktop: '(min-width: 1025px)',
} as const;

// Функция для создания sizes строки на основе breakpoint'ов
export function createSizesString(sizesMap: Record<string, string>): string {
  const sizes = [];
  
  if (sizesMap.mobile) {
    sizes.push(`${breakpoints.mobile} ${sizesMap.mobile}`);
  }
  
  if (sizesMap.tablet) {
    sizes.push(`${breakpoints.tablet} ${sizesMap.tablet}`);
  }
  
  // Desktop размер всегда последний без media query
  sizes.push(sizesMap.desktop || sizesMap.default || '100vw');
  
  return sizes.join(', ');
}

// Предустановленные размеры для популярных случаев
export const commonSizes = {
  fullWidth: '100vw',
  halfWidth: createSizesString({
    mobile: '100vw',
    tablet: '50vw',
    desktop: '50vw'
  }),
  thirdWidth: createSizesString({
    mobile: '100vw',
    tablet: '50vw', 
    desktop: '33vw'
  }),
  fixed300: createSizesString({
    mobile: '100vw',
    desktop: '300px'
  }),
  fixed600: createSizesString({
    mobile: '100vw',
    desktop: '600px'
  }),
} as const; 