import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Получите эти значения из sanity-studio/sanity.config.js
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1nu2k2zy'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Включить CDN для продакшена
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ запросы
export const queries = {
  // Получить все статьи
  allArticles: `*[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    heroImage {
      asset,
      alt
    },
    author,
    publishedAt,
    readTime,
    published,
    featured,
    tags
  }`,

  // Получить статью по slug
  articleBySlug: `*[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    heroImage {
      asset,
      alt
    },
    author,
    publishedAt,
    readTime,
    published,
    content[] {
      _type,
      _key,
      title,
      text,
      image {
        asset,
        alt,
        caption
      },
      items,
      ordered,
      author
    },
    tags
  }`,

  // Получить только опубликованные статьи
  publishedArticles: `*[_type == "article" && published == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    heroImage {
      asset,
      alt
    },
    author,
    publishedAt,
    readTime,
    published,
    featured,
    tags
  }`,

  // Получить рекомендуемые статьи
  featuredArticles: `*[_type == "article" && featured == true && published == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    description,
    heroImage,
    author,
    publishedAt,
    readTime,
    published
  }`,

  // Получить настройки сайта с основной статьей для блога
  siteSettings: `*[_type == "siteSettings"][0] {
    _id,
    title,
    featuredArticle-> {
      _id,
      title,
      slug,
      description,
      heroImage {
        asset,
        alt
      },
      author,
      publishedAt,
      readTime,
      published
    },
    blogHeroTitle,
    blogHeroDescription
  }`,
}