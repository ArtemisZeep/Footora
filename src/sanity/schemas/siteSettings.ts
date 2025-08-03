import {defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: '⚙️ Настройки сайта',
  type: 'document',
  __experimental_actions: [
    // Отключаем возможность создавать множественные документы
    'create',
    'update',
    // 'delete', // Оставляем возможность удалить, если нужно пересоздать
    'publish',
  ],
  fields: [
    {
      name: 'title',
      title: 'Название настроек',
      type: 'string',
      initialValue: 'Основные настройки сайта',
      readOnly: true,
    },
    {
      name: 'featuredArticle',
      title: '⭐ Основная статья для главной страницы блога',
      type: 'reference',
      to: [{ type: 'article' }],
      description: 'Выберите статью, которая будет отображаться в hero блоке на странице блога. Может быть только одна.',
      validation: Rule => Rule.required().error('Выберите основную статью для блога'),
      options: {
        filter: 'published == true', // Показываем только опубликованные статьи
      },
    },
    {
      name: 'blogHeroTitle',
      title: 'Заголовок hero блока (необязательно)',
      type: 'string',
      description: 'Если не указан, будет использован заголовок выбранной статьи',
    },
    {
      name: 'blogHeroDescription',
      title: 'Описание hero блока (необязательно)',
      type: 'text',
      rows: 3,
      description: 'Если не указано, будет использовано описание выбранной статьи',
    },
  ],
  preview: {
    select: {
      title: 'title',
      featuredArticle: 'featuredArticle.title',
    },
    prepare({title, featuredArticle}: any) {
      return {
        title,
        subtitle: featuredArticle ? `Основная статья: ${featuredArticle}` : 'Основная статья не выбрана',
      }
    },
  },
})