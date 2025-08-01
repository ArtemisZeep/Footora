import React from 'react';
import Image from 'next/image';
import styles from './ServicesGrid.module.css';



const ServicesGrid: React.FC = () => {
  return (
    <section className={styles.servicesGrid}>
      <div className={styles.serviceBlock}>
        {/* Podology Image */}
        <div className={styles.imageSection}>
          <div className={styles.imageOverlay}>
            <h2 className={styles.imageTitle}>Podology</h2>
          </div>
          <Image 
            src="/images/podology.jpg" 
            alt="Podology"
            fill
            className={styles.serviceImage}
          />
        </div>
        
        {/* Podology Text */}
        <div 
          className={styles.textSection}
          style={{ backgroundColor: '#4D5C4D' }}
        >
          <h3 className={styles.serviceTitle}>Подология</h3>
          <p className={styles.serviceDescription}>
            Профессиональная комплексная диагностика, коррекция и обработка стоп и ногтей с использованием инновационных технологий в области подологии
          </p>
          <button className={styles.serviceButton}>
            Записаться
          </button>
        </div>
        
        {/* Pedicure & Manicure Text */}
        <div 
          className={styles.textSection}
          style={{ backgroundColor: '#283433' }}
        >
          <h3 className={styles.serviceTitle}>Педикюр и маникюр</h3>
          <p className={styles.serviceDescription}>
            Профессиональная профилактическая обработка стоп и ногтей с использованием аппаратных техник
          </p>
          <button className={styles.serviceButton}>
            Записаться
          </button>
        </div>
        
        {/* Pedicure & Manicure Image */}
        <div className={styles.imageSection}>
          <div className={styles.imageOverlay}>
            <h2 className={styles.imageTitle}>
              <span>Pedicure</span>
              <span className={styles.ampersand}>&</span>
              <span>Manicure</span>
            </h2>
          </div>
          <Image 
            src="/images/pedicure.jpg" 
            alt="Pedicure & Manicure"
            fill
            className={styles.serviceImage}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid; 