export interface CoursePrice {
  name: string;
  price: string;
}

export interface CourseOverview {
  type: string;
  title: string;
  description: string;
  prices: CoursePrice[];
  courseLink: string;
  purchaseLink: string;
  number: string;
  noButton?: boolean;
}

export interface CourseDescription {
  text: string;
  image: string;
}

export interface CoursePlanItem {
  number: string;
  title: string;
}

export interface CoursePlan {
  hasPlan: boolean;
  items: CoursePlanItem[];
}

export interface Course {
  id: string;
  overview: CourseOverview;
  description: CourseDescription;
  plan: CoursePlan;
}

export const coursesData: Course[] = [
  {
    id: "ingrown-nail",
    overview: {
      type: "ОФФЛАЙН КУРС", 
      title: "Вросший\nноготь",
      description: "Подходит для специалистов с любым опытом работы.\nОбучение в мини-группе до 5 человек\nДлительность курса: 4-5 часов",
      prices: [
        {
          name: "Групповой формат",
          price: "6 000 Kč"
        }
      ],
      courseLink: "/courses/ingrown-nail",
      purchaseLink: "/purchase/ingrown-nail", 
      number: "01"
    },
    description: {
      text: "Изучите современные методы диагностики и лечения вросших ногтей. Курс включает подробный разбор причин врастания, стадий развития проблемы и эффективных способов коррекции. Вы освоите безопасные техники обработки, научитесь оказывать первую помощь при воспалении и узнаете о возможностях ортониксии. Практическая демонстрация на модели поможет закрепить полученные знания.",
      image: "/images/school/course-ingrown1.png"
    },
    plan: {
      hasPlan: true,
      items: [
        { number: "01", title: "Понятие вросшего и деформированного ногтя" },
        { number: "02", title: "Причины врастания ногтя" },
        { number: "03", title: "Стадии врастания ногтя" },
        { number: "04", title: "Стадии раневого процесса" },
        { number: "05", title: "Материалы и средства для оказания первой помощи" },
        { number: "06", title: "Примеры наших работ в сотрудничестве с хирургом" },
        { number: "07", title: "Ортониксия как помощь в решении проблемы вросшего ногтя" },
        { number: "08", title: "Алгоритм работы" },
        { number: "09", title: "Домашние рекомендации" },
        { number: "10", title: "Фото наших работ до/после" },
        { number: "11", title: "Практическая демонстрация на модели" }
      ]
    }
  },
  {
    id: "titanium-wire",
    overview: {
      type: "ОФФЛАЙН КУРС",
      title: "Титановая\nнить",
      description: "Подходит для специалистов с любым опытом работы.\nОбучение в мини-группе до 5 человек\nДлительность курса: 5-6 часов",
      prices: [
        {
          name: "Групповой формат",
          price: "6 000 Kč"
        }
      ],
      courseLink: "/courses/titanium-wire",
      purchaseLink: "/purchase/titanium-wire",
      number: "02"
    },
    description: {
      text: "Курс по применению титановых нитей в ортониксии: от основ теории до практического освоения методик установки и коррекции.",
      image: "/images/school/course-ingrown.png"
    },
    plan: {
      hasPlan: true,
      items: [
        { number: "01", title: "Наука ортониксии" },
        { number: "02", title: "Что такое титановая нить" },
        { number: "03", title: "Сила воздействия" },
        { number: "04", title: "С какими проблемами работает титановая нить" },
        { number: "05", title: "Противопоказания" },
        { number: "06", title: "Принадлежности/инструментарий для работы" },
        { number: "07", title: "Методы установки" },
        { number: "08", title: "Алгоритм работы" },
        { number: "09", title: "Результаты до/после" },
        { number: "10", title: "Частые ошибки в работе с титановой нитью" },
        { number: "11", title: "Демонстрация метода" },
        { number: "12", title: "Практическая отработка" }
      ]
    }
  },
  {
    id: "unibrace-1",
    overview: {
      type: "ОФФЛАЙН КУРС",
      title: "UniBrace\n(ступень 1)",
      description: "Подходит для специалистов с любым опытом работы.\nОбучение в мини-группе до 5 человек\nДлительность курса: 5-6 часов",
      prices: [
        {
          name: "Групповой формат",
          price: "550 €"
        },
        {
          name: "Индивидуальный формат", 
          price: "650 €"
        }
      ],
      courseLink: "/courses/unibrace-1",
      purchaseLink: "/purchase/unibrace-1",
      number: "01"
    },
    description: {
      text: "Освойте инновационную систему UniBrace — безопасную альтернативу хирургическим методам коррекции ногтей. Курс знакомит с принципами ортониксии, особенностями установки и работы с эластичными скобами. Вы изучите показания и противопоказания, освоите алгоритм работы и получите практические навыки установки системы на модели. Подходит для специалистов, стремящихся расширить спектр услуг современными технологиями.",
      image: "/images/school/course-unibrace.png"
    },
    plan: {
      hasPlan: true,
      items: [
        { number: "01", title: "Понятие вросшего и деформированного ногтя" },
        { number: "02", title: "Причины врастания ногтя" },
        { number: "03", title: "Стадии врастания ногтя" },
        { number: "04", title: "Стадии раневого процесса" },
        { number: "05", title: "Материалы и средства для оказания первой помощи" },
        { number: "06", title: "Примеры наших работ в сотрудничестве с хирургом" },
        { number: "07", title: "Ортониксия как помощь в решении проблемы вросшего ногтя" },
        { number: "08", title: "Алгоритм работы" },
        { number: "09", title: "Домашние рекомендации" },
        { number: "10", title: "Фото наших работ до/после" },
        { number: "11", title: "Практическая демонстрация на модели" }
      ]
    }
  },
  {
    id: "unibrace-step-2",
    overview: {
      type: "ОФФЛАЙН КУРС",
      title: "UniBrace\nступень 2",
      description: "Подходит для специалистов, прошедших курс UniBrace ступень 1\nОбучение в мини-группе до 5 человек\nДлительность курса: 5-6 часов",
      prices: [
        { name: "Групповой формат", price: "550 €" },
        { name: "Индивидуальный формат", price: "650 €" }
      ],
      courseLink: "/courses/unibrace-step-2",
      purchaseLink: "/purchase/unibrace-step-2",
      number: "04"
    },
    description: {
      text: "Кто хочет найти ответы на вопросы, возникшие в процессе работы, и обсудить реальные кейсы с коллегами.",
      image: "/images/school/course-unibrace-step-2.png"
    },
    plan: {
      hasPlan: true,
      items: [
        { number: "01", title: "Наука ортониксии" },
        { number: "02", title: "Знакомство с UniBrace" },
        { number: "03", title: "Сила воздействия" },
        { number: "04", title: "С какими проблемами работает UniBrace" },
        { number: "05", title: "Принадлежности/инструментарий для работы" },
        { number: "06", title: "Методы установки" },
        { number: "07", title: "Алгоритм работы" },
        { number: "08", title: "Результаты до/после" },
        { number: "09", title: "Фотодемонстрация и разбор подготовленных 20 кейсов работы с UniBrace" },
        { number: "10", title: "Анализ кейсов с коллегами, вопрос – ответ, кофе-брейк" },
        { number: "11", title: "Демонстрация метода установки на модели" },
        { number: "12", title: "Практическая отработка на моделях" }
      ]
    }
  },  
  {
    id: "individual-training",
    overview: {
      type: "ОФФЛАЙН КУРС",
      title: "Индивидуальное\nобучение",
      description: "Длительность курса: 8 часов\nДата проведения: по договоренности",
      prices: [
        {
          name: "Индивидуальный формат",
          price: "15 000 Kč"
        }
      ],
      courseLink: "/courses/individual-training",
      purchaseLink: "/purchase/individual-training",
      number: "05"
    },
    description: {
      text: `Практическая отработка навыков по выбранным темам:
  • Курс "Титановая нить"
  • Курс "Вросший ноготь"
  • Курс по выбранной теме (например, обработка трещин, мозолей, деформированных ногтей и т.д.)`,
      image: "/images/school/course-individual-training.png"
    },
    plan: {
      hasPlan: false,
      items: []
    }
  },
  {
    id: "derm-podo-collaboration",
    overview: {
      type: "ОФФЛАЙН СЕМИНАР",
      title: "Сотрудничество дерматолога и подолога/специалиста по педикюру",
      description: "14 июня 2025, 10:00 (Прага)\nДлительность: 4 часа\nЯзык: русский",
      prices: [
        {
          name: "Участие",
          price: "3 000 Kč"
        }
      ],
      courseLink: "/seminars/derm-podo-collaboration",
      purchaseLink: "/purchase/seminar/derm-podo-collaboration",
      number: "06",
      noButton: true
    },
    description: {
      text: `Спикеры:
  Ирина Афанасьева — врач-дерматовенеролог (Медицинский университет, Астана), прошла нострификацию и апробацию в Чехии. Опыт работы в FNKV, Canadian Medical, RP Clinic в Праге.
  Наталия Ротарь — подолог, автор курсов для специалистов по педикюру/подологов, основатель центра подологии в Праге.`,
      image: "/images/school/seminar-derm-podo.png"
    },
    plan: {
      hasPlan: true,
      items: [
        { number: "01", title: "Онихомикозы (грибковые поражения ногтей)" },
        { number: "02", title: "Дерматомикозы" },
        { number: "03", title: "Бородавки" },
        { number: "04", title: "Ониходистрофии" },
        { number: "05", title: "Доброкачественные новообразования" },
        { number: "06", title: "Меланома в практике специалиста по педикюру/подолога" },
        { number: "07", title: "Вопрос – ответ" }
      ]
    }
  },
  {
    id: "diabetic-foot-webinar",
    overview: {
      type: "ИНТЕРАКТИВНЫЙ ВЕБИНАР",
      title: "Пациенты с сахарным диабетом в практике специалиста парамедицинского педикюра",
      description: "Длительность: 8–10 часов (2 дня) Формат: Интерактивный вебинар",
      prices: [
        {
          name: "Участие",
          price: "3 000 Kč"
        }
      ],
      courseLink: "/webinars/diabetic-foot",
      purchaseLink: "/purchase/webinar/diabetic-foot",
      number: "07"
    },
    description: {
      text: `Спикеры:
Олег Удовиченко — доктор медицинских наук, врач-эндокринолог кабинета диабетической стопы (Хайфа)
Наталия Ротарь — подолог, руководитель центра Подологии (Прага), автор обучающих программ`,
      image: "/images/school/course-ingrown1.png"
    },
    plan: {
      hasPlan: true,
      items: [
        { number: "01", title: "Что мастер педикюра должен знать о сахарном диабете?" },
        { number: "02", title: "Что такое синдром диабетической стопы (СДС / Diabetic Foot)?" },
        { number: "03", title: "Как правильно оценить риск развития СДС и почему он не всегда связан с уровнем сахара?" },
        { number: "04", title: "Как отличить стопы с высоким риском осложнений от низкого или умеренного?" },
        { number: "05", title: "Эффективные методы ухода и профилактики для пациентов высокого риска" },
        { number: "06", title: "Как избежать ошибок: правильная и неправильная обработка стоп при диабете" },
        { number: "07", title: "Практические рекомендации и ответы на вопросы" }
      ]
    }
  }
  
  
]; 