import styles from './SchoolAdvantages.module.css';

export default function SchoolAdvantages() {
  return (
    <section className={styles.advantagesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Преимущества школы Footura</h2>
        
        <div className={styles.advantagesGrid}>
          {/* Сертифицированное обучение */}
          <div className={`${styles.advantageCard} ${styles.solidCard}`}>
            <h3 className={styles.cardTitle}>Сертифицированное обучение</h3>
          </div>

          {/* Практическая направленность */}
          <div className={`${styles.advantageCard} ${styles.imageCard} ${styles.practicalCard}`}>
            <div className={styles.imageOverlay}></div>
            <h3 className={styles.cardTitle}>Практическая направленность</h3>
          </div>

          {/* Современные технологии */}
          <div className={`${styles.advantageCard} ${styles.imageCard} ${styles.techCard} ${styles.techOrder}`}>
            <div className={styles.imageOverlay}></div>
            <h3 className={styles.cardTitle}>Современные технологии</h3>
          </div>

          {/* Индивидуальный подход */}
          <div className={`${styles.advantageCard} ${styles.solidCard} ${styles.individualOrder}`}>
            <h3 className={styles.cardTitle}>Индивидуальный подход</h3>
          </div>
        </div>
      </div>
    </section>
  );
}