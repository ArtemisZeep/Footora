import styles from './NataliaExperience.module.css';

export default function NataliaExperience() {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Опыт и путь к успеху
          </h2>
          <p className={styles.description}>
            Наталия — специалист в области ухода за стопой с многолетним практическим опытом. За 7 лет работы в Чехии она успешно подтвердила свою квалификацию, открыв востребованный центр. Постоянное профессиональное развитие, внедрение современных технологий и индивидуальный подход к каждому клиенту обеспечивают высокое качество услуг и безупречную репутацию центра.
          </p>
        </div>
      </div>
    </section>
  );
}