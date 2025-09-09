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

export default function NataliaPage() {
  // Структурированные данные для медицинского специалиста
  const nataliaInfo = {
    name: "Наталия Ротарь",
    jobTitle: "Подолог, основатель центра Footura",
    description: "Признанная экспертка в области ухода за стопами с 18-летними практическими опытом. Основательница и директор подологического центра FOOTURA, автор уникальных образовательных методик.",
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
      <ClientJsonLd data={medicalProfessionalSchema} id="natalia-professional" />
      <Header />
      <main>
        <NataliaHero />
        <NataliaExperience />
        <NataliaEducation />
        <NataliaPractice />
        <NataliaAchievements />
        <NataliaExpertise />
        <NataliaSchool />
        <NataliaMission />
        <NataliaWhyChoose />
      </main>
      <Footer />
    </>
  );
}