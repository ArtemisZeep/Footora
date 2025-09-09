"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServicesHero from '../../components/Services/ServicesHero';
import ServiceGroups from '../../components/ServiceGroups';
import ServiceBlock from '../../components/ServiceBlock';
import ClientJsonLd from '../../components/ClientJsonLd';
import { createMedicalServiceSchema } from '../../lib/jsonLd';

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

  // Основные услуги для JSON-LD схемы
  const mainServices = [
    {
      name: "Лечение вросшего ногтя",
      description: "Профессиональное лечение вросших ногтей современными безболезненными методами. Ортониксия, коррекция формы ногтя.",
      price: "от 1500 CZK"
    },
    {
      name: "Медицинский педикюр",
      description: "Лечебный педикюр с использованием профессионального оборудования. Удаление мозолей, натоптышей, обработка трещин.",
      price: "от 1200 CZK"
    },
    {
      name: "Ортониксия (коррекция ногтей)",
      description: "Коррекция деформированных ногтей системой UniBrace, скобой Росса Фрезера, титановой нитью.",
      price: "от 1800 CZK"
    },
    {
      name: "Лечение грибка ногтей",
      description: "Комплексное лечение онихомикоза. Диагностика, лечение, профилактика рецидивов.",
      price: "от 2000 CZK"
    }
  ];

  // Создаем JSON-LD схемы для основных услуг
  const servicesSchemas = mainServices.map(service => createMedicalServiceSchema(service));

  // Define service groups and their indices in the array
  const serviceGroups = {
    podology: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // First 10 categories
    pedicure: [10], // Index 10
    manicure: [11], // Index 11  
    courses: [12, 13, 14] // Indices 12-14
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
    false,   // 12 - Детские услуги
    false,   // 13 - Course 1
    false    // 14 - Course 2
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

        // Special handling for foot diagnosis service (index 9)
        const isFootDiagnosisService = service.id === 'foot-diagnosis-insoles';
        
        return (
          <ServiceBlock
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
            signUpUrl={isFootDiagnosisService ? undefined : "https://n766508.alteg.io/company/720417/personal/select-services?_gl=1*15h3pye*_ga*MTAyNjk3MTQ4MC4xNzI5MDAzODQy*_ga_2WY57VWNET*MTczNDE3NTk5NC4zLjAuMTczNDE3NTk5NC42MC4wLjA.*_ga_L53TRF9G65*MTczNDE3NTk5NC4zLjAuMTczNDE3NTk5NC42MC4wLjA.&o=m-1"}
            detailsUrl={isFootDiagnosisService ? "/insoles" : undefined}
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
      {/* Добавляем JSON-LD схемы для каждой основной услуги */}
      {servicesSchemas.map((schema, index) => (
        <ClientJsonLd 
          key={`service-${index}`} 
          data={schema} 
          id={`medical-service-${index}`} 
        />
      ))}
      
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