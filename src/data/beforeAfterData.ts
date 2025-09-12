export interface BeforeAfterCase {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: 'ingrown_nail' | 'onychomycosis' | 'rehabilitation' | 'correction' | 'restoration';
}

export const beforeAfterData: BeforeAfterCase[] = [
  {
    id: 'restoration_panarytsiya',
    title: 'Восстановление ногтевой пластины после панариция',
    description: 'Комплексная терапия для восстановления поврежденной ногтевой пластины после подногтевого панариция с применением современных методик.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'restoration'
  },
  {
    id: 'ingrown_nail_1',
    title: 'Коррекция вросшего ногтя',
    description: 'Безболезненное лечение вросшего ногтя с применением ортониксии и профессиональных техник коррекции.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'ingrown_nail'
  },
  {
    id: 'ingrown_nail_surgery_cooperation',
    title: 'Сотрудничество с хирургом при лечении вросшего ногтя',
    description: 'Комплексный подход к лечению сложных случаев вросшего ногтя в сотрудничестве с хирургом.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'ingrown_nail'
  },
  {
    id: 'ingrown_nail_2',
    title: 'Лечение вросшего ногтя второй степени',
    description: 'Профессиональная коррекция вросшего ногтя с воспалительным процессом методом ортониксии.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'ingrown_nail'
  },
  {
    id: 'ingrown_nail_3',
    title: 'Коррекция вросшего ногтя с деформацией',
    description: 'Исправление вросшего ногтя с выраженной деформацией ногтевой пластины.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'ingrown_nail'
  },
  {
    id: 'ingrown_nail_4',
    title: 'Лечение хронического вросшего ногтя',
    description: 'Комплексная терапия хронического вросшего ногтя с применением современных методик.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'ingrown_nail'
  },
  {
    id: 'ingrown_nail_6',
    title: 'Коррекция вросшего ногтя у взрослых',
    description: 'Эффективное лечение вросшего ногтя у взрослого пациента с быстрым восстановлением.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'ingrown_nail'
  },
  {
    id: 'ingrown_nail_7',
    title: 'Лечение вросшего ногтя с осложнениями',
    description: 'Профессиональная коррекция осложненного вросшего ногтя с полным восстановлением.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'ingrown_nail'
  },
  {
    id: 'ingrown_nail_8',
    title: 'Коррекция рецидивирующего вросшего ногтя',
    description: 'Лечение повторно возникающего вросшего ногтя с применением специальных техник.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'ingrown_nail'
  },
  {
    id: 'nail_correction_deformation',
    title: 'Коррекция деформированного ногтя',
    description: 'Комплексная коррекция вросшего и деформированного ногтя с восстановлением правильной формы.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'correction'
  },
  {
    id: 'onychomycosis_1',
    title: 'Лечение онихомикоза',
    description: 'Эффективная терапия грибкового поражения ногтя с полным восстановлением здорового вида.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'onychomycosis'
  },
  {
    id: 'onychomycosis_2',
    title: 'Комплексное лечение онихомикоза',
    description: 'Профессиональная терапия запущенного грибкового поражения ногтевой пластины.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'onychomycosis'
  },
  {
    id: 'rehabilitation_surgery_1',
    title: 'Реабилитация после операции',
    description: 'Специализированная реабилитация и восстановление ногтевой пластины после хирургического вмешательства.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'rehabilitation'
  },
  {
    id: 'rehabilitation_surgery_orthonyxia',
    title: 'Реабилитация с ортониксией',
    description: 'Комплексная реабилитация после операции с применением ортониксии для коррекции роста ногтя.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'rehabilitation'
  },
  {
    id: 'nail_restoration_trauma',
    title: 'Восстановление ногтя после травмы',
    description: 'Профессиональное восстановление ногтевой пластины после травматического повреждения.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'restoration'
  },
  {
    id: 'rehabilitation_post_surgery_1',
    title: 'Послеоперационная реабилитация',
    description: 'Специализированный уход и реабилитация ногтевого аппарата в послеоперационном периоде.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'rehabilitation'
  },
  {
    id: 'rehabilitation_post_intervention',
    title: 'Реабилитация после хирургического вмешательства',
    description: 'Комплексная реабилитация и восстановление после хирургического лечения заболеваний стопы.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'rehabilitation'
  },
  {
    id: 'surgeon_cooperation_rehabilitation',
    title: 'Совместная реабилитация с хирургом',
    description: 'Междисциплинарный подход к реабилитации пациентов после хирургического лечения стопы.',
    beforeImage: '/images/before_after/placeholder-before.jpg',
    afterImage: '/images/before_after/placeholder-after.jpg',
    category: 'rehabilitation'
  }
];

// Функция для получения случаев по категории
export const getBeforeAfterByCategory = (category: BeforeAfterCase['category']): BeforeAfterCase[] => {
  return beforeAfterData.filter(item => item.category === category);
};

// Функция для получения случайных случаев
export const getRandomBeforeAfterCases = (count: number): BeforeAfterCase[] => {
  const shuffled = [...beforeAfterData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Статистика по категориям
export const beforeAfterStats = {
  total: beforeAfterData.length,
  byCategory: {
    ingrown_nail: beforeAfterData.filter(item => item.category === 'ingrown_nail').length,
    onychomycosis: beforeAfterData.filter(item => item.category === 'onychomycosis').length,
    rehabilitation: beforeAfterData.filter(item => item.category === 'rehabilitation').length,
    correction: beforeAfterData.filter(item => item.category === 'correction').length,
    restoration: beforeAfterData.filter(item => item.category === 'restoration').length,
  }
};

