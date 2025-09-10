'use client';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PricesHero from '../../components/PricesHero';
import PricesTable from '../../components/PricesTable';
import { useLanguage } from '@/contexts/LanguageContext';

// Отключаем статическую генерацию для этой страницы
export const dynamic = 'force-dynamic';

export default function PricesPage() {
  const { tData } = useLanguage();
  
  // Получаем данные о ценах из переводов
  const pricesData = tData('pricesPage.sections');
  const validPricesData = Array.isArray(pricesData) ? pricesData : [];
  
  return (
    <>
      <Header />
      <main>
        <PricesHero />
        {validPricesData.map((section: any, index: number) => (
          <PricesTable key={index} section={section} />
        ))}
      </main>
      <Footer />
    </>
  );
}