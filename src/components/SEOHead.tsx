'use client';

import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl
}) => {
  useEffect(() => {
    // Обновляем title
    document.title = title;

    // Обновляем meta теги
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Основные meta теги
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);

    // Open Graph теги
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:locale', 'ru_RU', true);
    updateMetaTag('og:site_name', 'Footura - Центр подологии', true);
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage.startsWith('http') ? ogImage : `https://footura.cz${ogImage}`, true);
      updateMetaTag('og:image:width', '1200', true);
      updateMetaTag('og:image:height', '630', true);
      updateMetaTag('og:image:alt', title, true);
    }

    if (canonicalUrl) {
      updateMetaTag('og:url', `https://footura.cz${canonicalUrl}`, true);
    }

    // Twitter Card теги
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    
    if (ogImage) {
      updateMetaTag('twitter:image', ogImage.startsWith('http') ? ogImage : `https://footura.cz${ogImage}`);
    }

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `https://footura.cz${canonicalUrl}`;
    }

    // Robots meta
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:160');

  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
};

export default SEOHead; 