import styles from './CourseBenefits.module.css';

export default function CourseBenefits() {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <h2 className={styles.benefitsTitle}>Что вы получаете</h2>
        
        <div className={styles.benefitsGrid}>
          {/* Certificate Benefit */}
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <svg width="62" height="59" viewBox="0 0 62 59" fill="none">
                <path d="M30.76 0C47.74 0 61.52 13.26 61.52 29.56C61.52 45.86 47.74 59.13 30.76 59.13C13.78 59.13 0 45.86 0 29.56C0 13.26 13.78 0 30.76 0Z" fill="#506888"/>
                <path d="M30.76 5.43C44.78 5.43 56.17 16.54 56.17 29.56C56.17 42.59 44.78 53.7 30.76 53.7C16.74 53.7 5.35 42.59 5.35 29.56C5.35 16.54 16.74 5.43 30.76 5.43Z" fill="#506888"/>
                <path d="M43.99 20.85L26.79 21.09L17.59 35.51L30.76 29.56L43.99 20.85Z" fill="#506888"/>
              </svg>
            </div>
            <div className={styles.benefitContent}>
              <h3 className={styles.benefitTitle}>Сертификат школы Footura</h3>
              <p className={styles.benefitDescription}>
                Сертификат о повышении квалификации по теме "Вросший ноготь"
              </p>
            </div>
          </div>

          {/* Materials Benefit */}
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <svg width="55" height="55" viewBox="0 0 55 55" fill="none">
                <path d="M27.27 0C42.37 0 54.54 12.17 54.54 27.27C54.54 42.37 42.37 54.54 27.27 54.54C12.17 54.54 0 42.37 0 27.27C0 12.17 12.17 0 27.27 0Z" fill="#506888"/>
                <path d="M34.93 16.38L29.18 5.29L23.43 16.38L34.93 16.38Z" fill="#506888"/>
                <path d="M36.62 18.83L32.15 7.23L27.68 18.83L36.62 18.83Z" fill="#506888"/>
                <path d="M23.64 28.18L4.47 2.53L2.53 28.18L23.64 28.18Z" fill="#506888"/>
                <path d="M25.33 30.63L6.16 4.98L4.22 30.63L25.33 30.63Z" fill="#506888"/>
                <path d="M22.03 33.08L2.86 7.43L0.92 33.08L22.03 33.08Z" fill="#506888"/>
                <path d="M23.72 35.53L4.55 9.88L2.61 35.53L23.72 35.53Z" fill="#506888"/>
              </svg>
            </div>
            <div className={styles.benefitContent}>
              <h3 className={styles.benefitTitle}>Профессиональные материалы</h3>
              <p className={styles.benefitDescription}>
                Печатные учебные материалы, перечень рекомендуемых инструментов и препаратов
              </p>
            </div>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.detailsBtn}>Подробнее о курсе</button>
          <button className={styles.purchaseBtn}>
            Купить курс
            <svg width="40" height="1" viewBox="0 0 40 1" fill="none">
              <path d="M0 0.5L40 0.5" stroke="#334258" strokeWidth="1.6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 