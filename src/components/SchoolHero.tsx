import styles from './SchoolHero.module.css';

export default function SchoolHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>ОНЛАЙН<br />ОФФЛАЙН</div>
          <h1 className={styles.title}>
            Практико-ориентированное
            <br />
            обучение с элементами
            <br />
            клинической подологии
          </h1>
          <button className={styles.enrollBtn}>Посмотреть курсы</button>
        </div>
      </div>
    </section>
  );
} 