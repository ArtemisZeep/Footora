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

  // Исправляем неправильно структурированные отзывы
  let name = review.name;
  let text = review.review;
  
  // Специальная обработка для отзыва с перепутанными полями (index 6)
  if (index === 6) {
    name = "Natalie Ruha";
    text = "I highly recommend this center for its exceptional service and professionalism. I recently booked an appointment for a medical pedicure and was thoroughly impressed. My specialist, Kristina, was incredibly skilled, attentive, and client-focused. She made sure I was comfortable throughout the session and demonstrated impressive expertise in her techniques. The center itself is spotless, with a high standard of cleanliness and ambiance. Additionally, Alina at the reception was warm, polite, and welcoming, adding to the high-class experience. Overall, a truly outstanding visit! 10/10!";
  }

  return {
    id: `review-${index + 1}`,
    name: name,
    text: text,
    link: review['link '] || null, // Обратите внимание на пробел в ключе
    language: detectLanguage(text)
  };
}).filter(review => review.text && review.name); // Фильтруем пустые отзывы

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

// Логирование для отладки
console.log('Reviews loaded:', {
  total: reviewsStats.total,
  ru: reviewsStats.byLanguage.ru,
  cs: reviewsStats.byLanguage.cs,
  en: reviewsStats.byLanguage.en
});