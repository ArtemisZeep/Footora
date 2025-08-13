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

export default function NataliaPage() {
  return (
    <>
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