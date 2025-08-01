import React from 'react';
import Image from 'next/image';
import styles from './ServicesGrid.module.css';

const services = [
  {
    id: 'podology',
    imageTitle: 'Podology',
    imageSrc: '/images/podology.jpg',
    title: 'Подология',
    description: 'Профессиональная комплексная диагностика, коррекция и обработка стоп и ногтей с использованием инновационных технологий в области подологии',
    buttonText: 'Записаться',
    backgroundColor: '#4D5C4D'
  },
  {
    id: 'pedicure-manicure',
    imageTitle: 'Pedicure & Manicure',
    imageSrc: '/images/pedicure.jpg',
    title: 'Педикюр и маникюр',
    description: 'Профессиональная профилактическая обработка стоп и ногтей с использованием аппаратных техник',
    buttonText: 'Записаться',
    backgroundColor: '#283433'
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <section className={styles.servicesGrid}>
      {services.map((service) => (
        <div key={service.id} className={styles.serviceBlock}>
          {/* Изображение с заголовком сверху */}
          <div className={styles.imageSection}>
            <div className={styles.imageOverlay}>
              <h2 className={styles.imageTitle}>
                {service.imageTitle.includes('&') ? (
                  <>
                    <span>Pedicure</span>
                    <span className={styles.ampersand}>&</span>
                    <span>Manicure</span>
                  </>
                ) : (
                  service.imageTitle
                )}
              </h2>
            </div>
            <Image 
              src={service.imageSrc} 
              alt={service.title}
              fill
              className={styles.serviceImage}
            />
          </div>
          
          {/* Текстовый блок снизу */}
          <div 
            className={styles.textSection}
            style={{ backgroundColor: service.backgroundColor }}
          >
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <button className={styles.serviceButton}>
              {service.buttonText}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesGrid; 