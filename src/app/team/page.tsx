'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from '../../styles/Team.module.css';

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className={styles.hero}>
        <Image src="/images/team.jpg" alt="Команда Footura" fill priority className={styles.heroImage} />
        <h1 className={styles.heroTitle}>Наша команда</h1>
      </section>
      <section className={styles.memberSection}>
        <div className="container">
          <div className={styles.member}>
            <Image src="/images/natalia_1.jpg" alt="Наталия Ротарь" width={418} height={627} className={styles.memberImage} />
            <div className={styles.memberInfo}>
              <h2 className={styles.name}>Наталия Ротарь</h2>
              <h3 className={styles.role}>Основатель Footura</h3>
              <p className={styles.description}>
                Центр Footura создан Наталией Ротарь – экспертом с более чем 18-летним опытом работы в области подологии.
              </p>
            </div>
          </div>
          <div className={styles.member}>
            <Image src="/images/pedicure.jpg" alt="Специалист педикюра" width={418} height={627} className={styles.memberImage} />
            <div className={styles.memberInfo}>
              <h2 className={styles.name}>Марьяна</h2>
              <h3 className={styles.role}>Специалист педикюра и подологии</h3>
              <p className={styles.description}>
                Профессионально занимается аппаратным педикюром и уходом за стопами, помогая клиентам сохранить здоровье ног.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
