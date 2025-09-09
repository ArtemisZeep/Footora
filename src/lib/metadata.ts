import type { Metadata } from 'next'

interface PageMetadata {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
}

const baseUrl = 'https://footura.cz'
const siteName = 'Footura - Центр подологии'
const defaultImage = '/images/og-default.jpg'

// Функция для создания метатегов страницы
export function createPageMetadata({
  title,
  description,
  keywords,
  ogImage,
  canonicalUrl
}: PageMetadata): Metadata {
  const fullTitle = title.includes('Footura') ? title : `${title} | ${siteName}`
  const imageUrl = ogImage || defaultImage
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`
  
  return {
    title: fullTitle,
    description,
    keywords,
    
    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      locale: 'ru_RU',
      alternateLocale: 'cs_CZ',
      url: canonicalUrl ? `${baseUrl}${canonicalUrl}` : undefined,
      siteName,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImageUrl]
    },
    
    // Canonical URL
    alternates: canonicalUrl ? {
      canonical: `${baseUrl}${canonicalUrl}`
    } : undefined,
    
    // Robots
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': 160,
      'max-video-preview': -1
    }
  }
}

// Предустановленные метатеги для страниц
export const pageMetadata = {
  home: createPageMetadata({
    title: 'Footura - Профессиональная подология в Праге',
    description: 'Центр FOOTURA — команда узкопрофильных специалистов в области ухода за стопами. Лечение вросших ногтей, грибка, медицинский педикюр в Праге.',
    keywords: 'подология прага, медицинский педикюр, лечение вросших ногтей, грибок стопы, подолог прага',
    canonicalUrl: '/'
  }),
  
  about: createPageMetadata({
    title: 'О центре подологии Footura - Профессиональный уход за стопами',
    description: 'Узнайте о центре подологии Footura в Праге. Наша миссия - профессиональный уход за здоровьем ваших стоп с использованием современных методик.',
    keywords: 'центр подологии, footura, о нас, подология прага, команда подологов',
    canonicalUrl: '/about'
  }),
  
  services: createPageMetadata({
    title: 'Услуги подолога - Лечение стоп и ногтей в Праге | Footura',
    description: 'Полный спектр подологических услуг: лечение вросших ногтей, грибка, медицинский педикюр, коррекция деформаций стоп. Запись онлайн.',
    keywords: 'услуги подолога, лечение вросших ногтей, медицинский педикюр, грибок ногтей, коррекция стопы',
    canonicalUrl: '/services'
  }),
  
  natalia: createPageMetadata({
    title: 'Наталия Ротарь - Ведущий подолог Footura | Образование и опыт',
    description: 'Познакомьтесь с Наталией Ротарь - основателем центра Footura. Опыт работы, образование, сертификации в области подологии и медицинского педикюра.',
    keywords: 'наталия ротарь, подолог прага, основатель footura, образование подолога, опыт работы',
    canonicalUrl: '/natalia'
  }),
  
  school: createPageMetadata({
    title: 'Школа подологии Footura - Обучение медицинскому педикюру в Праге',
    description: 'Профессиональное обучение подологии и медицинскому педикюру. Курсы для начинающих и специалистов. Сертификаты установленного образца.',
    keywords: 'школа подологии, обучение медицинскому педикюру, курсы подологии, сертификация подолога',
    canonicalUrl: '/school'
  }),
  
  insoles: createPageMetadata({
    title: 'Индивидуальные стельки - Изготовление ортопедических стелек | Footura',
    description: 'Изготовление индивидуальных ортопедических стелек по слепку стопы. Коррекция плоскостопия, поддержка свода стопы, улучшение походки.',
    keywords: 'индивидуальные стельки, ортопедические стельки, изготовление стелек, коррекция стопы',
    canonicalUrl: '/insoles'
  }),
  
  blog: createPageMetadata({
    title: 'Блог о подологии - Советы по уходу за стопами | Footura',
    description: 'Полезные статьи о здоровье стоп, профилактике заболеваний, правильном уходе за ногтями. Экспертные советы от подологов Footura.',
    keywords: 'блог подолога, уход за стопами, здоровье ногтей, профилактика грибка, советы подолога',
    canonicalUrl: '/blog'
  })
}

// Функция для создания метатегов статьи блога
export function createArticleMetadata(article: {
  title: string
  description: string
  slug: string
  publishedAt: string
  author: string
  image?: string
  tags?: string[]
}): Metadata {
  const fullTitle = `${article.title} | Footura Blog`
  const imageUrl = article.image || defaultImage
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`
  const keywords = article.tags?.join(', ')
  
  return {
    title: fullTitle,
    description: article.description,
    keywords,
    
    // Open Graph Article
    openGraph: {
      title: fullTitle,
      description: article.description,
      type: 'article',
      locale: 'ru_RU',
      url: `${baseUrl}/article/${article.slug}`,
      siteName,
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: article.title
        }
      ]
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: article.description,
      images: [fullImageUrl]
    },
    
    // Article specific
    alternates: {
      canonical: `${baseUrl}/article/${article.slug}`
    },
    
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': 160
    }
  }
}

// Функция для создания метатегов курса
export function createCourseMetadata(course: {
  name: string
  description: string
  id: string
  price?: string
  duration?: string
  image?: string
}): Metadata {
  const fullTitle = `${course.name} - Курс подологии | Школа Footura`
  const imageUrl = course.image || defaultImage
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`
  
  let description = course.description
  if (course.price && course.duration) {
    description += ` Цена: ${course.price}, продолжительность: ${course.duration}.`
  }
  
  return {
    title: fullTitle,
    description,
    
    // Open Graph Product
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      locale: 'ru_RU',
      url: `${baseUrl}/school/course/${course.id}`,
      siteName,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: course.name
        }
      ]
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImageUrl]
    },
    
    alternates: {
      canonical: `${baseUrl}/school/course/${course.id}`
    },
    
    robots: {
      index: true,
      follow: true
    }
  }
} 