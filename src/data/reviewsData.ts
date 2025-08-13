export interface Review {
  id: string;
  name: string;
  text: string;
  link?: string | null;
  language: 'ru' | 'cs' | 'en';
}

// Импортируем данные из JSON и преобразуем в типизированный массив
import reviewsJson from './r_center.json';

export const reviewsData: Review[] = reviewsJson.map((review, index) => {
  // Определяем язык отзыва на основе содержания
  const detectLanguage = (text: string): 'ru' | 'cs' | 'en' => {
    // Проверяем на русский язык
    if (/[а-яё]/i.test(text)) return 'ru';
    // Проверяем на чешский язык (специфические буквы)
    if (/[áčďéěíňóřšťúůýž]/i.test(text)) return 'cs';
    // По умолчанию английский
    return 'en';
  };

  return {
    id: `review-${index + 1}`,
    name: review.name,
    text: review.review,
    link: review['link '] || null, // Обратите внимание на пробел в ключе
    language: detectLanguage(review.review)
  };
});

// Функции для фильтрации отзывов по языку
export const getReviewsByLanguage = (language: 'ru' | 'cs' | 'en'): Review[] => {
  return reviewsData.filter(review => review.language === language);
};

// Статистика отзывов
export const reviewsStats = {
  total: reviewsData.length,
  byLanguage: {
    ru: reviewsData.filter(r => r.language === 'ru').length,
    cs: reviewsData.filter(r => r.language === 'cs').length,
    en: reviewsData.filter(r => r.language === 'en').length,
  }
};