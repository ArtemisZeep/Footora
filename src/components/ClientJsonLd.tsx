'use client'
import { useEffect } from 'react'

interface ClientJsonLdProps {
  data: object
  id?: string
}

export default function ClientJsonLd({ data, id = 'json-ld' }: ClientJsonLdProps) {
  useEffect(() => {
    // Удаляем предыдущий скрипт если есть
    const existingScript = document.getElementById(id)
    if (existingScript) {
      existingScript.remove()
    }

    // Создаем новый скрипт с JSON-LD данными
    const script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)

    // Cleanup функция для удаления скрипта при размонтировании
    return () => {
      const scriptToRemove = document.getElementById(id)
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [data, id])

  return null // Этот компонент ничего не рендерит
} 