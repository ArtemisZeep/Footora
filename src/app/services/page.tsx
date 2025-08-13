"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServicesHero from '../../components/Services/ServicesHero';
import ServiceGroups from '../../components/ServiceGroups';
import ServiceBlock from '../../components/ServiceBlock';

export default function ServicesPage() {
  const { tData } = useLanguage();
  
  const servicesCategories = tData('services.categories') as Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    items: Array<{
      title: string;
      description: string;
      isBold?: boolean;
    }>;
  }> || [];

  // Define service groups and their indices in the array
  const serviceGroups = {
    podology: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // First 10 categories
    pedicure: [10], // Index 10
    manicure: [11], // Index 11  
    'children-services': [12] // Index 12
  };

  // Define specific isReversed values for each service index
  const reversedConfig = [
    true,  // 0 - Первичный прием
    false, // 1 - Подологическая обработка  
    true,  // 2 - Вросший ноготь
    false, // 3 - Ортониксия
    true,  // 4 - Мозоли и стержневые мозоли
    false, // 5 - Трещины и гиперкератоз
    true,  // 6 - Онихомикоз
    false, // 7 - Сотрудничество с дерматологом
    true,  // 8 - Сотрудничество с хирургом
    false, // 9 - Диагностика стопы и стельки
    false, // 10 - Педикюр
    false,  // 11 - Маникюр
    false   // 12 - Детские услуги
  ];

  const renderServiceSection = (sectionId: string, indices: number[]) => (
    <div id={sectionId} key={sectionId}>
      {indices.map((index) => {
        const service = servicesCategories[index];
        if (!service) return null;

        // Determine layout based on index
        const isReversed = reversedConfig[index] ?? (index % 2 === 0); // Use config or fallback to even indices
        const variant = sectionId === 'podology' ? 1 : 2;
        const isPhotoLeft = isReversed;

        return (
          <ServiceBlock
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
            signUpUrl="#"
            isReversed={isReversed}
            variant={variant}
            isPhotoLeft={isPhotoLeft}
            items={service.items}
          />
        );
      })}
    </div>
  );

  return (
    <>
      <Header />
      <main>
        <ServicesHero />
      <ServiceGroups />
        {Object.entries(serviceGroups).map(([sectionId, indices]) =>
          renderServiceSection(sectionId, indices)
        )}
      </main>
      <Footer />
    </>
  );
} 