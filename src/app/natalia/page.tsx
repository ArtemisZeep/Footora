"use client";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NataliaHero from '../../components/NataliaHero';
import NataliaExperience from '../../components/NataliaExperience';
import NataliaEducation from '../../components/NataliaEducation';
import NataliaPractice from '../../components/NataliaPractice';
import NataliaAchievements from '../../components/NataliaAchievements';
import NataliaExpertise from '../../components/NataliaExpertise';
import NataliaSchool from '../../components/NataliaSchool';
import NataliaMission from '../../components/NataliaMission';
import NataliaWhyChoose from '../../components/NataliaWhyChoose';
import ClientJsonLd from '../../components/ClientJsonLd';
import { createMedicalProfessionalSchema } from '../../lib/jsonLd';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedPages from '../../components/RelatedPages';
import SEOHead from '../../components/SEOHead';

export default function NataliaPage() {
  // Структурированные данные для медицинского специалиста
  const nataliaInfo = {
    name: "Наталия Ротарь",
    jobTitle: "Подолог, основатель центра Footura",
    description: "Ведущий подолог и основатель центра Footura. Опытный специалист в области подологии и медицинского педикюра с международным образованием.",
    experience: "18 лет",
    qualifications: [
      "РГСУ (Российский Государственный Социальный Университет)",
      "Карлов университет, 3. Лечебный факультет", 
      "UniBrace System - курс инструктора",
      "Международные подологические конференции"
    ]
  };

  const medicalProfessionalSchema = createMedicalProfessionalSchema(nataliaInfo);

  return (
    <>
      <SEOHead
        title="Наталия Ротарь - Ведущий подолог Footura | Образование и опыт"
        description="Познакомьтесь с Наталией Ротарь - основателем центра Footura. Опыт работы, образование, сертификации в области подологии и медицинского педикюра."
        keywords="наталия ротарь, подолог прага, основатель footura, образование подолога, опыт работы"
        canonicalUrl="/natalia"
      />

      <ClientJsonLd data={medicalProfessionalSchema} />
      
      <Header />
      <main>
        {/* Breadcrumbs БЕЗ нарушения стилей */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Breadcrumbs currentPage="natalia" />
        </div>

        <NataliaHero />
        <NataliaExperience />
        <NataliaEducation />
        <NataliaPractice />
        <NataliaAchievements />
        <NataliaExpertise />
        <NataliaSchool />
        <NataliaMission />
        <NataliaWhyChoose />
        
        {/* Связанные страницы */}
        <RelatedPages currentPage="natalia" />
      </main>
      <Footer />
    </>
  );
}