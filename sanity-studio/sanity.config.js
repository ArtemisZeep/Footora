import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Footura Blog',

  projectId: '1nu2k2zy',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  // Добавляем CORS настройки для разработки
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