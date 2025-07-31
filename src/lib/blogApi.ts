import { client, queries, urlFor } from './sanity';
import { SanityArticle } from '../types/sanity';

// Интерфейс для статьи в блоге (упрощенный)
export interface BlogArticle {
  _id: string;
  title: string;
  description: string;
  publishedAt: string;
  heroImage: {
    src: string;
    alt: string;
  };
  slug: string;
}

// Получить все опубликованные статьи для блога
export async function getPublishedArticles(): Promise<BlogArticle[]> {
  try {
    console.log('Fetching published articles from Sanity...');
    const articles: SanityArticle[] = await client.fetch(queries.publishedArticles);
    console.log(`Found ${articles.length} published articles in Sanity`);
    
    const mappedArticles = articles.map(article => ({
      _id: article._id,
      title: article.title,
      description: article.description,
      publishedAt: article.publishedAt,
      heroImage: {
        src: article.heroImage && article.heroImage.asset 
          ? urlFor(article.heroImage).url()
          : '/images/default-hero.jpg',
        alt: article.heroImage?.alt || article.title,
      },
      slug: article.slug.current,
    }));
    
    console.log('Mapped articles:', mappedArticles.map(a => ({ title: a.title, published: true })));
    return mappedArticles;
  } catch (error) {
    console.error('Error fetching published articles:', error);
    return [];
  }
}

// Получить ограниченное количество статей с пагинацией
export async function getPublishedArticlesPaginated(
  offset: number = 0, 
  limit: number = 9
): Promise<{ articles: BlogArticle[], total: number }> {
  try {
    // Запрос для получения статей с пагинацией
    const paginatedQuery = `{
      "articles": *[_type == "article" && published == true] | order(publishedAt desc) [${offset}...${offset + limit}] {
        _id,
        title,
        description,
        heroImage {
          asset,
          alt
        },
        publishedAt,
        slug
      },
      "total": count(*[_type == "article" && published == true])
    }`;

    const result = await client.fetch(paginatedQuery);
    
    const articles: BlogArticle[] = result.articles.map((article: SanityArticle) => ({
      _id: article._id,
      title: article.title,
      description: article.description,
      publishedAt: article.publishedAt,
      heroImage: {
        src: article.heroImage && article.heroImage.asset 
          ? urlFor(article.heroImage).url()
          : '/images/default-hero.jpg',
        alt: article.heroImage?.alt || article.title,
      },
      slug: article.slug.current,
    }));

    return {
      articles,
      total: result.total
    };
  } catch (error) {
    console.error('Error fetching paginated articles:', error);
    return { articles: [], total: 0 };
  }
}