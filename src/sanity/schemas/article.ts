import {defineType} from 'sanity'

export const article = defineType({
  name: 'article',
  title: '📄 Статья',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название статьи',
      type: 'string',
      validation: Rule => Rule.required().error('Название статьи обязательно'),
    },
    {
      name: 'slug',
      title: 'URL адрес (slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required().error('URL адрес обязателен'),
    },
    {
      name: 'description',
      title: 'Краткое описание',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(300).error('Описание обязательно (максимум 300 символов)'),
    },
    {
      name: 'heroImage',
      title: 'Главное изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt текст',
          type: 'string',
        },
      ],
      validation: Rule => Rule.required().error('Главное изображение обязательно'),
    },
    {
      name: 'author',
      title: 'Автор',
      type: 'string',
      initialValue: 'Наталия Ротарь',
    },
    {
      name: 'publishedAt',
      title: 'Дата публикации',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'readTime',
      title: 'Время чтения',
      type: 'string',
      placeholder: '5 мин',
    },
    {
      name: 'published',
      title: '✅ Опубликовано',
      type: 'boolean',
      description: 'Включить/выключить отображение статьи на сайте',
      initialValue: false,
    },
    {
      name: 'content',
      title: 'Содержание статьи',
      type: 'blockContent',
      validation: Rule => Rule.required().error('Содержание статьи обязательно'),
    },
    {
      name: 'featured',
      title: 'Рекомендуемая статья',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'tags',
      title: 'Теги',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'heroImage',
      publishedAt: 'publishedAt',
      published: 'published',
      slug: 'slug.current',
    },
    prepare({title, author, media, publishedAt, published, slug}: any) {
      const status = published ? '✅' : '❌';
      const statusText = published ? 'Опубликовано' : 'Черновик';
      return {
        title: `${status} ${title}`,
        subtitle: `${statusText} • ${author} • ${new Date(publishedAt).toLocaleDateString('ru-RU')}`,
        media,
      }
    },
  },
  // Добавляем предпросмотр страницы
  liveEdit: true,
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: 'Published Date, Old',
      name: 'publishedAtAsc',
      by: [{field: 'publishedAt', direction: 'asc'}],
    },
  ],
})