export interface SchoolReview {
  id: string;
  name: string;
  text: string;
  link?: string | null;
  language: 'ru' | 'cs' | 'en' | 'ua';
}

// Импортируем данные из JSON и преобразуем в типизированный массив
import schoolReviewsJson from './r_school.json';

export const schoolReviewsData: SchoolReview[] = schoolReviewsJson.map((review, index) => {
  // Определяем язык отзыва на основе содержания
  const detectLanguage = (text: string): 'ru' | 'cs' | 'en' | 'ua' => {
    // Проверяем на украинский язык
    if (/[іїєґ]/i.test(text) || /тепер|щиро|дякую|ніжках/i.test(text)) return 'ua';
    // Проверяем на русский язык
    if (/[а-яё]/i.test(text)) return 'ru';
    // Проверяем на чешский язык (специфические буквы)
    if (/[áčďéěíňóřšťúůýž]/i.test(text)) return 'cs';
    // По умолчанию английский
    return 'en';
  };

  return {
    id: `school-review-${index + 1}`,
    name: review.name.trim(),
    text: review.review,
    link: review['link ']?.trim() || null, // Обратите внимание на пробел в ключе
    language: detectLanguage(review.review)
  };
}).filter(review => review.text && review.name); // Фильтруем пустые отзывы

// Функции для фильтрации отзывов по языку
export const getSchoolReviewsByLanguage = (language: 'ru' | 'cs' | 'en' | 'ua'): SchoolReview[] => {
  return schoolReviewsData.filter(review => review.language === language);
};

// Статистика отзывов о школе
export const schoolReviewsStats = {
  total: schoolReviewsData.length,
  byLanguage: {
    ru: schoolReviewsData.filter(r => r.language === 'ru').length,
    cs: schoolReviewsData.filter(r => r.language === 'cs').length,
    en: schoolReviewsData.filter(r => r.language === 'en').length,
    ua: schoolReviewsData.filter(r => r.language === 'ua').length,
  }
};

// Логирование для отладки
console.log('School reviews loaded:', {
  total: schoolReviewsStats.total,
  ru: schoolReviewsStats.byLanguage.ru,
  cs: schoolReviewsStats.byLanguage.cs,
  en: schoolReviewsStats.byLanguage.en,
  ua: schoolReviewsStats.byLanguage.ua
});
