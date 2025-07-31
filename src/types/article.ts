// Типы для блоков статьи
export interface ArticleBlock {
  id: string;
  type: 'text' | 'image' | 'text-image' | 'image-text' | 'quote' | 'list' | 'gallery' | 'video' | 'cta' | 'divider' | 'alert' | 'faq' | 'table' | 'code';
  content: any; // Упрощенный тип для поддержки всех блоков
}

// Основная структура статьи
export interface Article {
  id: string;
  title: string;
  description: string;
  heroImage: {
    src: string;
    alt: string;
  };
  publishedAt: string;
  author?: string;
  readTime?: string;
  published: boolean; // Флаг публикации статьи
  blocks: ArticleBlock[];
}

// Мета-информация для статьи
export interface ArticleMeta {
  id: string;
  title: string;
  description: string;
  heroImage: {
    src: string;
    alt: string;
  };
  publishedAt: string;
  author?: string;
  readTime?: string;
  published: boolean; // Флаг публикации статьи
  slug: string;
}