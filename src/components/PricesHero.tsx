import React from 'react';
import Link from 'next/link';
import styles from './PricesHero.module.css';

const PricesHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Стоимость<br />
            услуг
          </h1>
          <div className={styles.buttonContainer}>
            <Link href="/booking" className={styles.bookingButton}>
              <span className={styles.buttonText}>Записаться</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricesHero;