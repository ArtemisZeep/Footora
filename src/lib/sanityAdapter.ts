import { SanityArticle, SanityBlock } from '../types/sanity'
import { Article, ArticleBlock } from '../types/article'
import { urlFor } from './sanity'

// Преобразование Sanity блока в наш формат
export function convertSanityBlock(sanityBlock: SanityBlock): ArticleBlock {
  const baseBlock = {
    id: sanityBlock._key,
    content: {},
  }

  switch (sanityBlock._type) {
    case 'textBlock':
      return {
        ...baseBlock,
        type: 'text',
        content: {
          title: sanityBlock.title,
          text: sanityBlock.text,
        },
      }

    case 'imageBlock':
      return {
        ...baseBlock,
        type: 'image',
        content: {
          image: sanityBlock.image && sanityBlock.image.asset ? {
            src: urlFor(sanityBlock.image).url(),
            alt: sanityBlock.image.alt || '',
            caption: sanityBlock.image.caption,
          } : null,
        },
      }

    case 'textImageBlock':
      return {
        ...baseBlock,
        type: 'text-image',
        content: {
          title: sanityBlock.title,
          text: sanityBlock.text,
          image: sanityBlock.image && sanityBlock.image.asset ? {
            src: urlFor(sanityBlock.image).url(),
            alt: sanityBlock.image.alt || '',
            caption: sanityBlock.image.caption,
          } : null,
        },
      }

    case 'imageTextBlock':
      return {
        ...baseBlock,
        type: 'image-text',
        content: {
          title: sanityBlock.title,
          text: sanityBlock.text,
          image: sanityBlock.image && sanityBlock.image.asset ? {
            src: urlFor(sanityBlock.image).url(),
            alt: sanityBlock.image.alt || '',
            caption: sanityBlock.image.caption,
          } : null,
        },
      }

    case 'quoteBlock':
      return {
        ...baseBlock,
        type: 'quote',
        content: {
          quote: {
            text: sanityBlock.text,
            author: sanityBlock.author,
          },
        },
      }

    case 'listBlock':
      return {
        ...baseBlock,
        type: 'list',
        content: {
          title: sanityBlock.title,
          list: {
            items: sanityBlock.items,
            ordered: sanityBlock.ordered,
          },
        },
      }

    case 'galleryBlock':
      return {
        ...baseBlock,
        type: 'gallery',
        content: {
          title: sanityBlock.title,
          images: sanityBlock.images?.map((img: any) => ({
            src: img.asset ? urlFor(img).url() : null,
            alt: img.alt || '',
            caption: img.caption,
          })) || [],
          layout: sanityBlock.layout || 'grid-2',
        },
      }

    case 'videoBlock':
      return {
        ...baseBlock,
        type: 'video',
        content: {
          title: sanityBlock.title,
          videoUrl: sanityBlock.videoUrl,
          description: sanityBlock.description,
        },
      }

    case 'ctaBlock':
      return {
        ...baseBlock,
        type: 'cta',
        content: {
          title: sanityBlock.title,
          description: sanityBlock.description,
          buttonText: sanityBlock.buttonText,
          buttonUrl: sanityBlock.buttonUrl,
          style: sanityBlock.style || 'primary',
        },
      }

    case 'dividerBlock':
      return {
        ...baseBlock,
        type: 'divider',
        content: {
          style: sanityBlock.style || 'line',
          size: sanityBlock.size || 'medium',
        },
      }

    case 'alertBlock':
      return {
        ...baseBlock,
        type: 'alert',
        content: {
          type: sanityBlock.type || 'info',
          title: sanityBlock.title,
          message: sanityBlock.message,
        },
      }

    case 'faqBlock':
      return {
        ...baseBlock,
        type: 'faq',
        content: {
          title: sanityBlock.title,
          items: sanityBlock.items || [],
        },
      }

    case 'tableBlock':
      return {
        ...baseBlock,
        type: 'table',
        content: {
          title: sanityBlock.title,
          headers: sanityBlock.headers || [],
          rows: sanityBlock.rows?.map((row: any) => row.cells || []) || [],
        },
      }

    case 'codeBlock':
      return {
        ...baseBlock,
        type: 'code',
        content: {
          title: sanityBlock.title,
          language: sanityBlock.language || 'text',
          code: sanityBlock.code,
        },
      }

    default:
      // Fallback для неизвестных типов
      return {
        ...baseBlock,
        type: 'text',
        content: {
          text: 'Неподдерживаемый тип блока',
        },
      }
  }
}

// Преобразование Sanity статьи в наш формат
export function convertSanityArticle(sanityArticle: SanityArticle): Article {
  return {
    id: sanityArticle._id,
    title: sanityArticle.title,
    description: sanityArticle.description,
    heroImage: sanityArticle.heroImage && sanityArticle.heroImage.asset ? {
      src: urlFor(sanityArticle.heroImage).url(),
      alt: sanityArticle.heroImage.alt || sanityArticle.title,
    } : {
      src: '/images/default-hero.jpg', // fallback изображение
      alt: sanityArticle.title,
    },
    publishedAt: sanityArticle.publishedAt,
    author: sanityArticle.author,
    readTime: sanityArticle.readTime,
    published: sanityArticle.published ?? false, // По умолчанию false
    blocks: sanityArticle.content.map(convertSanityBlock),
  }
}