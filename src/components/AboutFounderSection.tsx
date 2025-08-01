import React from 'react';
import Image from 'next/image';
import styles from '../styles/AboutFounder.module.css';

const AboutFounderSection: React.FC = () => {
  return (
    <section className={styles.aboutFounder}>
      <div className="container">
        <div className={styles.grid}>
          <h2 className={styles.title}>
            Наталия Ротарь – <br/>основательница центра
          </h2>
          
          <div className={styles.imageContainer}>
            <Image
              src="/images/natalia_1.jpg"
              alt="Наталия Ротарь"
              width={640}
              height={909}
              className={styles.founderImage}
            />
          </div>
          
          <div className={styles.content}>
            <p className={styles.description}>
              Наталия Ротарь – признанный эксперт в области ухода за стопами с 18-летним опытом практической работы, основатель и руководитель подологического центра FOOTURA, автор уникальных методик обучения и вдохновляющий пример для специалистов, которые стремятся достичь высочайших стандартов в профессии.
            </p>
            
            <div className={styles.secondaryImageContainer}>
              <Image
                src="/images/natalia_2.jpg"
                alt="Наталия Ротарь"
                fill
                className="object-cover"
              />
            </div>
            
            <button className={`btn btn-outline ${styles.button}`}>
              Подробнее о Наталии Ротарь
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounderSection; 