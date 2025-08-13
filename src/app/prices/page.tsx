'use client';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PricesHero from '../../components/PricesHero';
import PricesTable from '../../components/PricesTable';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PricesPage() {
  const { tData } = useLanguage();
  
  // Получаем данные о ценах из переводов
  const pricesData = tData('pricesPage.sections') || [];
  
  return (
    <>
      <Header />
      <main>
        <PricesHero />
        {pricesData.map((section: any, index: number) => (
          <PricesTable key={index} section={section} />
        ))}
      </main>
      <Footer />
    </>
  );
}