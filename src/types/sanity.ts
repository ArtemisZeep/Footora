// Типы для Sanity данных
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

// Блоки контента
export interface SanityTextBlock {
  _type: 'textBlock'
  _key: string
  title?: string
  text?: string
}

export interface SanityImageBlock {
  _type: 'imageBlock'
  _key: string
  image: SanityImage
}

export interface SanityTextImageBlock {
  _type: 'textImageBlock'
  _key: string
  title?: string
  text?: string
  image: SanityImage
}

export interface SanityImageTextBlock {
  _type: 'imageTextBlock'
  _key: string
  title?: string
  text?: string
  image: SanityImage
}

export interface SanityQuoteBlock {
  _type: 'quoteBlock'
  _key: string
  text: string
  author?: string
}

export interface SanityListBlock {
  _type: 'listBlock'
  _key: string
  title?: string
  items: string[]
  ordered: boolean
}

export type SanityBlock = 
  | SanityTextBlock 
  | SanityImageBlock 
  | SanityTextImageBlock 
  | SanityImageTextBlock 
  | SanityQuoteBlock 
  | SanityListBlock

// Основная структура статьи
export interface SanityArticle {
  _id: string
  title: string
  slug: SanitySlug
  description: string
  heroImage: SanityImage
  author?: string
  publishedAt: string
  readTime?: string
  published?: boolean // Флаг публикации
  content: SanityBlock[]
  featured?: boolean
  tags?: string[]
}