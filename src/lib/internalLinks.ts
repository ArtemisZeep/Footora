// Система внутренних ссылок для SEO
// НЕ СОЗДАЕМ новые страницы, только улучшаем SEO существующих

export interface InternalLink {
  text: string;
  href: string;
  section?: string; // Якорь на странице
  keywords: string[];
  description: string;
}

// Карта внутренних ссылок для SEO
export const internalLinksMap: Record<string, InternalLink[]> = {
  // Главная страница
  home: [
    {
      text: "подология в Праге",
      href: "/services#podology",
      section: "podology",
      keywords: ["подология прага", "подолог прага", "лечение стоп"],
      description: "Профессиональная подология в Праге - лечение заболеваний стоп"
    },
    {
      text: "лечение вросшего ногтя",
      href: "/services#ingrown-nail",
      section: "ingrown-nail", 
      keywords: ["вросший ноготь", "ортониксия", "коррекция ногтей"],
      description: "Современные методы лечения вросших ногтей"
    },
    {
      text: "медицинский педикюр",
      href: "/services#medical-pedicure",
      section: "medical-pedicure",
      keywords: ["медицинский педикюр", "лечебный педикюр", "подологический педикюр"],
      description: "Профессиональный медицинский педикюр в Праге"
    },
    {
      text: "лечение грибка стопы",
      href: "/services#fungus-treatment", 
      section: "fungus-treatment",
      keywords: ["грибок стопы", "онихомикоз", "лечение грибка"],
      description: "Эффективное лечение грибковых заболеваний стоп и ногтей"
    }
  ],

  // Страница услуг
  services: [
    {
      text: "обучение подологии",
      href: "/school",
      keywords: ["школа подологии", "курсы подологии", "обучение"],
      description: "Профессиональное обучение подологии в школе Footura"
    },
    {
      text: "индивидуальные стельки",
      href: "/insoles",
      keywords: ["ортопедические стельки", "индивидуальные стельки", "коррекция стопы"],
      description: "Изготовление индивидуальных ортопедических стелек"
    },
    {
      text: "опыт подолога",
      href: "/natalia",
      keywords: ["наталия ротарь", "опыт подолога", "квалификация"],
      description: "Опыт и квалификация ведущего подолога Наталии Ротарь"
    }
  ],

  // Страница о нас
  about: [
    {
      text: "наши услуги",
      href: "/services",
      keywords: ["услуги подолога", "подологические услуги", "лечение стоп"],
      description: "Полный спектр подологических услуг в центре Footura"
    },
    {
      text: "школа подологии",
      href: "/school", 
      keywords: ["обучение подологии", "курсы", "сертификация"],
      description: "Профессиональное обучение в школе подологии Footura"
    }
  ],

  // Страница Наталии
  natalia: [
    {
      text: "записаться на прием",
      href: "/services",
      keywords: ["запись к подологу", "консультация", "прием"],
      description: "Записаться на консультацию к подологу Наталии Ротарь"
    },
    {
      text: "курсы подологии",
      href: "/school",
      keywords: ["обучение у наталии ротарь", "мастер-классы", "семинары"],
      description: "Обучение подологии у опытного специалиста"
    }
  ],

  // Страница школы
  school: [
    {
      text: "подологические услуги",
      href: "/services",
      keywords: ["практическое применение", "услуги после обучения"],
      description: "Применение полученных знаний в практике подологии"
    },
    {
      text: "опыт преподавателя",
      href: "/natalia",
      keywords: ["квалификация преподавателя", "опыт наталии"],
      description: "Опыт и достижения преподавателя школы подологии"
    }
  ],

  // Страница стелек
  insoles: [
    {
      text: "диагностика стопы",
      href: "/services#foot-analysis",
      section: "foot-analysis",
      keywords: ["анализ походки", "диагностика стопы", "плантография"],
      description: "Профессиональная диагностика стопы перед изготовлением стелек"
    },
    {
      text: "консультация подолога",
      href: "/services",
      keywords: ["консультация перед стельками", "рекомендации подолога"],
      description: "Консультация подолога для правильного выбора стелек"
    }
  ]
};

// Функция для получения релевантных ссылок для страницы
export const getInternalLinks = (pageName: keyof typeof internalLinksMap): InternalLink[] => {
  return internalLinksMap[pageName] || [];
};

// Функция для автоматической вставки ссылок в текст
export const insertInternalLinks = (text: string, pageName: keyof typeof internalLinksMap): string => {
  const links = getInternalLinks(pageName);
  let processedText = text;

  links.forEach(link => {
    link.keywords.forEach(keyword => {
      // Создаем регулярное выражение для поиска ключевого слова
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      
      // Заменяем только первое вхождение, чтобы не переспамить
      if (processedText.match(regex) && !processedText.includes(`href="${link.href}"`)) {
        processedText = processedText.replace(regex, (match) => 
          `<a href="${link.href}" title="${link.description}">${match}</a>`
        );
      }
    });
  });

  return processedText;
};

// Функция для генерации breadcrumbs
export const generateBreadcrumbs = (currentPage: string): Array<{text: string, href?: string}> => {
  const breadcrumbsMap: Record<string, Array<{text: string, href?: string}>> = {
    home: [
      { text: "Главная" }
    ],
    services: [
      { text: "Главная", href: "/" },
      { text: "Услуги" }
    ],
    about: [
      { text: "Главная", href: "/" },
      { text: "О центре" }
    ],
    natalia: [
      { text: "Главная", href: "/" },
      { text: "Наталия Ротарь" }
    ],
    school: [
      { text: "Главная", href: "/" },
      { text: "Школа подологии" }
    ],
    insoles: [
      { text: "Главная", href: "/" },
      { text: "Услуги", href: "/services" },
      { text: "Индивидуальные стельки" }
    ]
  };

  return breadcrumbsMap[currentPage] || [{ text: "Главная", href: "/" }];
};

// Функция для генерации связанных страниц
export const getRelatedPages = (currentPage: string): Array<{title: string, href: string, description: string}> => {
  const relatedPagesMap: Record<string, Array<{title: string, href: string, description: string}>> = {
    services: [
      { 
        title: "Школа подологии", 
        href: "/school", 
        description: "Профессиональное обучение подологии и медицинскому педикюру" 
      },
      { 
        title: "Индивидуальные стельки", 
        href: "/insoles", 
        description: "Изготовление ортопедических стелек по индивидуальным параметрам" 
      },
      { 
        title: "О специалисте", 
        href: "/natalia", 
        description: "Опыт и квалификация ведущего подолога Наталии Ротарь" 
      }
    ],
    school: [
      { 
        title: "Наши услуги", 
        href: "/services", 
        description: "Практическое применение знаний подологии в лечении пациентов" 
      },
      { 
        title: "О преподавателе", 
        href: "/natalia", 
        description: "Опыт и достижения основателя школы подологии" 
      }
    ],
    natalia: [
      { 
        title: "Записаться на прием", 
        href: "/services", 
        description: "Консультация и лечение у опытного подолога" 
      },
      { 
        title: "Обучение подологии", 
        href: "/school", 
        description: "Передача знаний и опыта новому поколению подологов" 
      }
    ],
    insoles: [
      { 
        title: "Диагностика стопы", 
        href: "/services", 
        description: "Профессиональная диагностика перед изготовлением стелек" 
      },
      { 
        title: "Консультация специалиста", 
        href: "/natalia", 
        description: "Рекомендации опытного подолога по выбору стелек" 
      }
    ]
  };

  return relatedPagesMap[currentPage] || [];
}; 