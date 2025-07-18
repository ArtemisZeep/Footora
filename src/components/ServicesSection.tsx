import React from 'react';
import Image from 'next/image';
import styles from '../styles/Services.module.css';

const ServiceCard = ({ 
  title, 
  description, 
  buttonText, 
  imagePath,
  textPosition = "left",
  backgroundColor,
  buttonColor = "#B8C8BA"
}: {
  title: string;
  description: string;
  buttonText: string;
  imagePath?: string;
  textPosition?: "left" | "right";
  backgroundColor?: string;
  buttonColor?: string;
}) => {
  const cardStyle = backgroundColor ? { backgroundColor } : {};
  
  return (
    <div className={styles.serviceCard} style={cardStyle}>
      {imagePath && (
        <Image 
          src={imagePath} 
          alt={title}
          fill
          className={styles.cardImage}
        />
      )}
      
      <div className={`${styles.cardContent} ${textPosition === "left" ? styles.cardContentLeft : styles.cardContentRight}`}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <button 
          className={styles.cardButton}
          style={{ 
            borderColor: buttonColor, 
            color: buttonColor 
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const LargeTitle: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <h2 className={styles.largeTitle}>
      {children}
    </h2>
  );
};

const ServicesSection: React.FC = () => {
  // Figma colors
  const podologyGreen = "#4D5C4D"; // rgb(77, 92, 77)
  const pedicureGreen = "#283433"; // rgb(40, 52, 51)
  const accentColor = "#B8C8BA"; // rgb(184, 200, 186)

  return (
    <section className={styles.services}>
      <div className={styles.grid}>
        {/* Top Left - Podology Image */}
        <div className={styles.serviceCard}>
          <div className={styles.titleOverlay}>
            <LargeTitle>Podology</LargeTitle>
          </div>
          <Image 
            src="/images/podology.jpg" 
            alt="Podology" 
            fill
            className={styles.cardImage}
          />
        </div>
        
        {/* Top Right - Green Background */}
        <ServiceCard 
          title="Подология"
          description="Профессиональная комплексная диагностика, коррекция и обработка стоп и ногтей с использованием инновационных технологий в области подологии"
          buttonText="Записаться"
          backgroundColor={podologyGreen}
          textPosition="right"
        />
        
        {/* Bottom Left - Dark Green Background */}
        <ServiceCard 
          title="Педикюр и маникюр"
          description="Профессиональная профилактическая обработка стоп и ногтей с использованием аппаратных техник"
          buttonText="Записаться"
          backgroundColor={pedicureGreen}
          textPosition="left"
        />
        
        {/* Bottom Right - Pedicure & Manicure Image */}
        <div className={styles.serviceCard}>
          <div className={styles.titleOverlay}>
            <LargeTitle>Pedicure</LargeTitle>
            <span className={styles.ampersand}>&</span>
            <LargeTitle>Manicure</LargeTitle>
          </div>
          <Image 
            src="/images/pedicure.jpg" 
            alt="Pedicure & Manicure" 
            fill
            className={styles.cardImage}
          />
        </div>
      </div>
      
      <div className={styles.description}>
        <div className="container">
          <p className={styles.descriptionText}>
            Мы используем современные методы диагностики, коррекции и профилактики, помогая не только устранить следствие проблемы, но и выявить причину
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 