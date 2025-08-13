'use client';

import BeforeAfterBlock from '@/components/BeforeAfterBlock';
import { beforeAfterData } from '@/data/beforeAfterData';

export default function TestBeforeAfterPage() {
  console.log('Test page - beforeAfterData:', beforeAfterData);
  
  return (
    <div>
      <h1>Тест блока до/после</h1>
      <p>Количество данных: {beforeAfterData.length}</p>
      
      <BeforeAfterBlock 
        title="Тестовый блок"
        subtitle="Проверяем работу компонента"
        maxItems={3}
        showFilters={true}
      />
    </div>
  );
}
