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
      text: "Текст - подробное описание курса.",
      image: "/images/school/course-unibrace.jpg"
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
      text: "Текст - подробное описание курса.",
      image: "/images/school/course-ingrown.jpg"
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
  }
]; 