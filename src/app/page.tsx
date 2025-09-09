import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import BenefitsSection from '@/components/BenefitsSection';
import AboutFounderSection from '@/components/AboutFounderSection';
// import BlogSectionWrapper from '@/components/BlogSectionWrapper';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { createMedicalBusinessSchema } from '@/lib/jsonLd';
import { pageMetadata } from '@/lib/metadata';

// Динамические метатеги для главной страницы
export const metadata: Metadata = pageMetadata.home;

export default async function Home() {
  // Структурированные данные для медицинского центра
  const businessInfo = {
    name: "Центр подологии Footura",
    description: "Центр FOOTURA — команда узкопрофильных специалистов в области ухода за стопами. Профессиональная подология в Праге: лечение вросших ногтей, грибка, медицинский педикюр.",
    url: "https://footura.cz",
    telephone: "+420 731 394 090",
    email: "info@footura.cz",
    address: {
      streetAddress: "Na Rybníčku 1329/5",
      addressLocality: "Praha 2",
      postalCode: "120 00",
      addressCountry: "CZ"
    }
  };

  const medicalBusinessSchema = createMedicalBusinessSchema(businessInfo);

  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd data={medicalBusinessSchema} />
      <Header />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <StatsSection />
      <BenefitsSection />
      <AboutFounderSection />
      {/* <BlogSectionWrapper /> */}
      <Footer />
    </main>
  );
}
