import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import BenefitsSection from '@/components/BenefitsSection';
import AboutFounderSection from '@/components/AboutFounderSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <StatsSection />
      <BenefitsSection />
      <AboutFounderSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
