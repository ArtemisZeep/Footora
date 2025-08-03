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

  // CORS настройки
  cors: {
    allowOrigins: ['http://localhost:3000', 'https://localhost:3000'],
  },

  // API настройки
  api: {
    projectId: '1nu2k2zy',
    dataset: 'production',
  },

  // Настройки предпросмотра документов
  document: {
    productionUrl: async (prev, { document }) => {
      if (document._type === 'article' && document.slug?.current) {
        return `http://localhost:3000/article/${document.slug.current}`
      }
      return prev
    }
  },
})