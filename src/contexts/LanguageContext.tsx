"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import ruTranslations from '../locales/ru.json';
import csTranslations from '../locales/cs.json';

export type Language = 'ru' | 'cs';
type Translations = { [key: string]: any };

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('ru');
  const [translations, setTranslations] = useState<Translations>(ruTranslations);
  const [mounted, setMounted] = useState(false);

  // Инициализация после монтирования компонента
  useEffect(() => {
    setMounted(true);
    
    // Проверяем localStorage только на клиенте
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'ru' || savedLanguage === 'cs')) {
        setLanguageState(savedLanguage);
      }
    }
  }, []);

  // Обновление переводов при изменении языка
  useEffect(() => {
    switch (language) {
      case 'ru':
        setTranslations(ruTranslations);
        break;
      case 'cs':
        setTranslations(csTranslations);
        break;
      default:
        setTranslations(ruTranslations);
    }
  }, [language]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    
    // Сохраняем только на клиенте после монтирования
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
  };

  // Функция для получения перевода по ключу
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Возвращаем ключ если перевод не найден
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}