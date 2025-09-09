import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export const sanityConfig = defineConfig({
  name: 'default',
  title: 'Footura Blog',

  projectId: '1nu2k2zy',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  // Настройки для интеграции в основной сайт
  basePath: '/blogmaker',

  // CORS настройки для продакшена
  cors: {
    allowOrigins: [
      'http://localhost:3000', 
      'https://localhost:3000',
      'https://footura.cz'
    ],
  },

  // API настройки
  api: {
    projectId: '1nu2k2zy',
    dataset: 'production',
  },

  // Настройки предпросмотра документов
  document: {
    productionUrl: async (prev, { document }) => {
      if (document && typeof document === 'object' && '_type' in document && document._type === 'article' && 'slug' in document && document.slug && typeof document.slug === 'object' && 'current' in document.slug && document.slug.current) {
        return `https://footura.cz/article/${document.slug.current}`
      }
      return prev
    }
  },
})