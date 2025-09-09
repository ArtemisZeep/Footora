'use client';

import { useImagePreload } from '@/hooks/useImagePreload';

interface ImagePreloaderProps {
  images?: string[];
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({ images }) => {
  useImagePreload(images);
  return null; // Этот компонент ничего не рендерит
};

export default ImagePreloader; 