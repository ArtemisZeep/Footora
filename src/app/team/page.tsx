"use client";

import React from "react";
import { motion } from 'framer-motion';
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import styles from "./team.module.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Отключаем статическую генерацию для этой страницы
export const dynamic = 'force-dynamic';

const CheckIcon = () => (
  <svg
    width="25"
    height="22"
    viewBox="0 0 25 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.41115 21.9923C7.90066 21.9741 7.56034 21.725 7.28079 21.3483C6.01674 19.6229 4.74053 17.9097 3.4704 16.1843C2.41905 14.7627 1.3677 13.3471 0.316343 11.9255C0.109719 11.646 -0.066519 11.3666 0.0246387 10.996C0.182645 10.3884 0.79644 10.109 1.36162 10.4188C2.49197 11.0324 3.61625 11.6582 4.74053 12.2839C5.63388 12.776 6.52722 13.2681 7.41449 13.7724C7.56642 13.8574 7.65758 13.8453 7.77304 13.7177C10.1249 11.1904 12.4829 8.66303 14.8408 6.14176C16.0259 4.87202 17.217 3.5962 18.4081 2.33253C18.7667 1.94978 19.2407 1.89511 19.6235 2.18065C20.0186 2.47226 20.1097 2.95829 19.8484 3.41394C18.7059 5.3945 17.5573 7.37506 16.4148 9.36169C14.1176 13.335 11.8265 17.3022 9.53543 21.2754C9.28018 21.7189 8.91555 21.9741 8.41115 21.9923Z"
      fill="#4D5C4D"
    />
  </svg>
);

const ServicesList = ({ services }: { services: string[] }) => (
  <div className={styles.servicesGrid}>
    {services.map((service, index) => (
      <motion.div 
        key={index} 
        className={styles.serviceItem}
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: index * 0.04 }}
      >
        <div className={styles.serviceCheck}>
          <CheckIcon />
        </div>
        <span className={styles.serviceText}>{service}</span>
      </motion.div>
    ))}
  </div>
);

const TeamMember = ({
  name,
  title,
  description,
  services,
  imageSrc,
  imageAlt,
  isReversed = false,
  showButton = false,
  buttonText = "",
  backgroundClass = "bgLightgray",
}: {
  name: string;
  title: string;
  description: string;
  services: string[];
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
  showButton?: boolean;
  buttonText?: string;
  backgroundClass?: string;
}) => (
  <section className={`${styles.teamSection} ${styles[backgroundClass]}`}>
    <div className="container">
      <motion.div
        className={`${styles.teamContent} ${isReversed ? styles.teamContentReversed : ""}`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image */}
        <motion.div className={styles.teamImage} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
          <img src={imageSrc} alt={imageAlt} className={styles.teamPhoto} />
        </motion.div>

        {/* Content */}
        <motion.div className={styles.teamInfo} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
          <h2 className={styles.teamName}>{name}</h2>

          <p className={styles.teamTitle}>{title}</p>

          <div className={styles.teamServices}>
            <ServicesList services={services} />
          </div>

          <p className={styles.teamDescription}>{description}</p>

          {showButton && (
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link href="/natalia" className={styles.teamButton}>
                {buttonText}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default function TeamPage() {
  const { t, tData } = useLanguage();
  
  const teamMembers = tData('team.members') as Array<{
    name: string;
    title: string;
    description: string;
    services: string[];
  }>;
  
  const validTeamMembers = Array.isArray(teamMembers) ? teamMembers : [];

  const buttonText = t('team.learnMore');

  const imageUrls = [
    "https://api.builder.io/api/v1/image/assets/TEMP/b8f2facd3cc9db08b050911179ac0f94bf3b1196?width=838",
    "https://api.builder.io/api/v1/image/assets/TEMP/34e569de84f0691dcb3c41f64282bcadfdaadfab?width=838",
    "https://api.builder.io/api/v1/image/assets/TEMP/ca4f7eae59b616ad96e5d00ae7180bbb04753304?width=838",
    "https://api.builder.io/api/v1/image/assets/TEMP/8bed7758a5f60f641d2334b4cb92bf3994881c20?width=836",
    "https://api.builder.io/api/v1/image/assets/TEMP/425827757dcb741c69d7633d451a2dea7ee50b89?width=838"
  ];

  const backgroundClasses = ["bgGradient", "bgWhite", "bgLightgray", "bgWhite", "bgLightgray"];
  const isReversedArray = [true, false, true, false, true];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {validTeamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            title={member.title}
            description={member.description}
            services={member.services}
            imageSrc={imageUrls[index]}
            imageAlt={member.name}
            showButton={index === 0} // Only show button for Natalia (first member)
            buttonText={buttonText}
            backgroundClass={backgroundClasses[index]}
            isReversed={isReversedArray[index]}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
