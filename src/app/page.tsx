import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import ServicesGrid from '@/components/ServicesGrid';
import StatsSection from '@/components/StatsSection';
import BenefitsSection from '@/components/BenefitsSection';
import AboutFounderSection from '@/components/AboutFounderSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <IntroSection />
      <ServicesGrid />
      <StatsSection />
      <BenefitsSection />
      <AboutFounderSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
