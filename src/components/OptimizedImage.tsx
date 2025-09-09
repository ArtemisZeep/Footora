import React from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
import { getOptimizedImageProps, imageSizes } from '@/lib/imageOptimization';

interface OptimizedImageProps extends Omit<ImageProps, 'sizes' | 'quality' | 'priority'> {
  type?: keyof typeof imageSizes;
  priority?: boolean;
  quality?: number;
  src: string | StaticImageData;
  alt: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  type = 'card',
  priority,
  quality,
  className,
  ...props 
}) => {
  // Получаем строковый URL из src
  const srcUrl = typeof src === 'string' ? src : src.src;

  // Получаем оптимизированные пропы
  const optimizedProps = getOptimizedImageProps(
    srcUrl,
    alt,
    type,
    {
      priority,
      quality,
      ...props
    }
  );

  return (
    <Image
      {...optimizedProps}
      src={src}
      alt={alt}
      className={className}
      style={{
        width: '100%',
        height: 'auto',
        ...props.style
      }}
    />
  );
};

export default OptimizedImage; 