import {defineType} from 'sanity'

export const blockContent = defineType({
  title: 'Контент блоков',
  name: 'blockContent',
  type: 'array',
  of: [
    // Базовый текстовый блок
    {
      name: 'textBlock',
      title: '📝 Текстовый блок',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Заголовок',
          type: 'string',
        },
        {
          name: 'text',
          title: 'Текст',
          type: 'text',
          rows: 4,
        },
      ],
      preview: {
        select: {
          title: 'title',
          text: 'text',
        },
        prepare({title, text}) {
          return {
            title: title || 'Текстовый блок',
            subtitle: text ? `${text.substring(0, 50)}...` : 'Без текста',
          }
        },
      },
    },

    // Блок изображения
    {
      name: 'imageBlock',
      title: '🖼️ Блок изображения',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Изображение',
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
            {
              name: 'caption',
              title: 'Подпись',
              type: 'string',
            },
          ],
        },
      ],
      preview: {
        select: {
          media: 'image',
          caption: 'image.caption',
        },
        prepare({media, caption}) {
          return {
            title: 'Блок изображения',
            subtitle: caption || 'Без подписи',
            media,
          }
        },
      },
    },

    // Текст + Изображение
    {
      name: 'textImageBlock',
      title: '📝🖼️ Текст + Изображение',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Заголовок',
          type: 'string',
        },
        {
          name: 'text',
          title: 'Текст',
          type: 'text',
          rows: 4,
        },
        {
          name: 'image',
          title: 'Изображение',
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
            {
              name: 'caption',
              title: 'Подпись',
              type: 'string',
            },
          ],
        },
      ],
      preview: {
        select: {
          title: 'title',
          media: 'image',
        },
        prepare({title, media}) {
          return {
            title: title || 'Текст + Изображение',
            subtitle: 'Текст слева, изображение справа',
            media,
          }
        },
      },
    },

    // Изображение + Текст
    {
      name: 'imageTextBlock',
      title: '🖼️📝 Изображение + Текст',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Заголовок',
          type: 'string',
        },
        {
          name: 'text',
          title: 'Текст',
          type: 'text',
          rows: 4,
        },
        {
          name: 'image',
          title: 'Изображение',
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
            {
              name: 'caption',
              title: 'Подпись',
              type: 'string',
            },
          ],
        },
      ],
      preview: {
        select: {
          title: 'title',
          media: 'image',
        },
        prepare({title, media}) {
          return {
            title: title || 'Изображение + Текст',
            subtitle: 'Изображение слева, текст справа',
            media,
          }
        },
      },
    },

    // Цитата
    {
      name: 'quoteBlock',
      title: '💬 Блок цитаты',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Текст цитаты',
          type: 'text',
          rows: 3,
        },
        {
          name: 'author',
          title: 'Автор',
          type: 'string',
        },
      ],
      preview: {
        select: {
          text: 'text',
          author: 'author',
        },
        prepare({text, author}) {
          return {
            title: 'Цитата',
            subtitle: author ? `${author}: "${text?.substring(0, 40)}..."` : `"${text?.substring(0, 50)}..."`,
          }
        },
      },
    },

    // Список
    {
      name: 'listBlock',
      title: '📋 Блок списка',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Заголовок списка',
          type: 'string',
        },
        {
          name: 'items',
          title: 'Элементы списка',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'ordered',
          title: 'Нумерованный список',
          type: 'boolean',
          initialValue: false,
        },
      ],
      preview: {
        select: {
          title: 'title',
          items: 'items',
          ordered: 'ordered',
        },
        prepare({title, items, ordered}) {
          const listType = ordered ? 'Нумерованный' : 'Маркированный'
          const itemCount = items ? items.length : 0
          return {
            title: title || `${listType} список`,
            subtitle: `${itemCount} элементов`,
          }
        },
      },
    },

    // Галерея изображений
    {
      name: 'galleryBlock',
      title: '🎨 Галерея изображений',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Заголовок галереи',
          type: 'string',
        },
        {
          name: 'images',
          title: 'Изображения',
          type: 'array',
          of: [
            {
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
                {
                  name: 'caption',
                  title: 'Подпись',
                  type: 'string',
                },
              ],
            },
          ],
        },
        {
          name: 'layout',
          title: 'Макет галереи',
          type: 'string',
          options: {
            list: [
              {title: '2 колонки', value: 'grid-2'},
              {title: '3 колонки', value: 'grid-3'},
              {title: 'Карусель', value: 'carousel'},
            ],
          },
          initialValue: 'grid-2',
        },
      ],
      preview: {
        select: {
          title: 'title',
          images: 'images',
          image0: 'images.0',
        },
        prepare({title, images, image0}) {
          const imageCount = images ? images.length : 0
          return {
            title: title || 'Галерея изображений',
            subtitle: `${imageCount} изображений`,
            media: image0,
          }
        },
      },
    },

    // Видео блок
    {
      name: 'videoBlock',
      title: '🎥 Видео блок',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Заголовок видео',
          type: 'string',
        },
        {
          name: 'videoUrl',
          title: 'URL видео (YouTube/Vimeo)',
          type: 'url',
        },
        {
          name: 'thumbnail',
          title: 'Превью изображение',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'description',
          title: 'Описание',
          type: 'text',
          rows: 2,
        },
      ],
      preview: {
        select: {
          title: 'title',
          media: 'thumbnail',
          url: 'videoUrl',
        },
        prepare({title, media, url}) {
          return {
            title: title || 'Видео блок',
            subtitle: url || 'URL не указан',
            media,
          }
        },
      },
    },

    // Блок кнопки/CTA
    {
      name: 'ctaBlock',
      title: '🔘 Блок кнопки (CTA)',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Заголовок',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Описание',
          type: 'text',
          rows: 2,
        },
        {
          name: 'buttonText',
          title: 'Текст кнопки',
          type: 'string',
        },
        {
          name: 'buttonUrl',
          title: 'Ссылка кнопки',
          type: 'url',
        },
        {
          name: 'style',
          title: 'Стиль кнопки',
          type: 'string',
          options: {
            list: [
              {title: 'Основная', value: 'primary'},
              {title: 'Вторичная', value: 'secondary'},
              {title: 'Контур', value: 'outline'},
            ],
          },
          initialValue: 'primary',
        },
      ],
      preview: {
        select: {
          title: 'title',
          buttonText: 'buttonText',
        },
        prepare({title, buttonText}) {
          return {
            title: title || 'CTA блок',
            subtitle: buttonText ? `Кнопка: "${buttonText}"` : 'Кнопка не настроена',
          }
        },
      },
    },

    // Блок разделителя
    {
      name: 'dividerBlock',
      title: '➖ Разделитель',
      type: 'object',
      fields: [
        {
          name: 'style',
          title: 'Стиль разделителя',
          type: 'string',
          options: {
            list: [
              {title: 'Обычная линия', value: 'line'},
              {title: 'Пунктирная линия', value: 'dashed'},
              {title: 'Пустое пространство', value: 'space'},
              {title: 'Декоративная', value: 'decorative'},
            ],
          },
          initialValue: 'line',
        },
        {
          name: 'size',
          title: 'Размер',
          type: 'string',
          options: {
            list: [
              {title: 'Маленький', value: 'small'},
              {title: 'Средний', value: 'medium'},
              {title: 'Большой', value: 'large'},
            ],
          },
          initialValue: 'medium',
        },
      ],
      preview: {
        prepare() {
          return {
            title: 'Разделитель',
            subtitle: 'Визуальное разделение контента',
          }
        },
      },
    },

    // Блок предупреждения/уведомления
    {
      name: 'alertBlock',
      title: '⚠️ Блок уведомления',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Тип уведомления',
          type: 'string',
          options: {
            list: [
              {title: 'Информация', value: 'info'},
              {title: 'Успех', value: 'success'},
              {title: 'Предупреждение', value: 'warning'},
              {title: 'Ошибка', value: 'error'},
              {title: 'Совет', value: 'tip'},
            ],
          },
          initialValue: 'info',
        },
        {
          name: 'title',
          title: 'Заголовок',
          type: 'string',
        },
        {
          name: 'message',
          title: 'Сообщение',
          type: 'text',
          rows: 3,
        },
      ],
      preview: {
        select: {
          title: 'title',
          type: 'type',
          message: 'message',
        },
        prepare({title, type, message}) {
          const typeEmojis = {
            info: 'ℹ️',
            success: '✅',
            warning: '⚠️',
            error: '❌',
            tip: '💡',
          }
          return {
            title: `${typeEmojis[type] || '📢'} ${title || 'Уведомление'}`,
            subtitle: message?.substring(0, 50) + '...',
          }
        },
      },
    },

    // Блок FAQ
    {
      name: 'faqBlock',
      title: '❓ FAQ блок',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Заголовок FAQ',
          type: 'string',
        },
        {
          name: 'items',
          title: 'Вопросы и ответы',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'question',
                  title: 'Вопрос',
                  type: 'string',
                },
                {
                  name: 'answer',
                  title: 'Ответ',
                  type: 'text',
                  rows: 3,
                },
              ],
              preview: {
                select: {
                  question: 'question',
                  answer: 'answer',
                },
                prepare({question, answer}) {
                  return {
                    title: question || 'Вопрос без заголовка',
                    subtitle: answer ? `${answer.substring(0, 50)}...` : 'Без ответа',
                  }
                },
              },
            },
          ],
        },
      ],
      preview: {
        select: {
          title: 'title',
          items: 'items',
        },
        prepare({title, items}) {
          const itemCount = items ? items.length : 0
          return {
            title: title || 'FAQ блок',
            subtitle: `${itemCount} вопросов`,
          }
        },
      },
    },

    // Блок таблицы
    {
      name: 'tableBlock',
      title: '📊 Таблица',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Заголовок таблицы',
          type: 'string',
        },
        {
          name: 'headers',
          title: 'Заголовки колонок',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'rows',
          title: 'Строки таблицы',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'cells',
                  title: 'Ячейки строки',
                  type: 'array',
                  of: [{type: 'string'}],
                },
              ],
              preview: {
                select: {
                  cells: 'cells',
                },
                prepare({cells}) {
                  return {
                    title: `Строка: ${cells ? cells.join(' | ') : 'Пустая строка'}`,
                  }
                },
              },
            },
          ],
        },
      ],
      preview: {
        select: {
          title: 'title',
          headers: 'headers',
          rows: 'rows',
        },
        prepare({title, headers, rows}) {
          const colCount = headers ? headers.length : 0
          const rowCount = rows ? rows.length : 0
          return {
            title: title || 'Таблица',
            subtitle: `${colCount} колонок, ${rowCount} строк`,
          }
        },
      },
    },

    // Блок кода
    {
      name: 'codeBlock',
      title: '💻 Блок кода',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Заголовок',
          type: 'string',
        },
        {
          name: 'language',
          title: 'Язык программирования',
          type: 'string',
          options: {
            list: [
              {title: 'JavaScript', value: 'javascript'},
              {title: 'TypeScript', value: 'typescript'},
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
              {title: 'Python', value: 'python'},
              {title: 'JSON', value: 'json'},
              {title: 'Bash', value: 'bash'},
              {title: 'Другой', value: 'text'},
            ],
          },
          initialValue: 'javascript',
        },
        {
          name: 'code',
          title: 'Код',
          type: 'text',
          rows: 8,
        },
      ],
      preview: {
        select: {
          title: 'title',
          language: 'language',
          code: 'code',
        },
        prepare({title, language, code}) {
          return {
            title: title || 'Блок кода',
            subtitle: `${language || 'text'} (${code ? code.split('\n').length : 0} строк)`,
          }
        },
      },
    },
  ],
})