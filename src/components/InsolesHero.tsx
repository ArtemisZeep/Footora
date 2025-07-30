import styles from './InsolesHero.module.css';

export default function InsolesHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>НОВАЯ УСЛУГА</div>
          <h1 className={styles.title}>
            Диагностика стопы
            <br />
            и изготовление
            <br />
            индивидуальных
            <br />
            анатомических стелек
          </h1>
          <div className={styles.buttonsGroup}>
            <button className={styles.detailsBtn}>Подробнее об услуге</button>
            <button className={styles.bookBtn}>Записаться</button>
          </div>
        </div>
      </div>
    </section>
  );
} 