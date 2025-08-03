"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ru' | 'cs';

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
  const [translations, setTranslations] = useState<Record<string, any>>({});

  // Загружаем язык из localStorage при инициализации
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ru' || savedLanguage === 'cs')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Загружаем переводы при изменении языка
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translationsModule = await import(`../locales/${language}.json`);
        setTranslations(translationsModule.default);
      } catch (error) {
        console.error('Error loading translations:', error);
        // Fallback на пустой объект если файл не найден
        setTranslations({});
      }
    };

    loadTranslations();
  }, [language]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
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