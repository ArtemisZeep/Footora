import styles from './SchoolBenefits.module.css';

export default function SchoolBenefits() {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Что вы получаете</h2>
        
        <div className={styles.benefitsGrid}>
          {/* Сертификат */}
          <div className={styles.benefitItem}>
            <div className={styles.iconWrapper}>
              <div className={styles.iconCircle}>
                <img 
                  src="/images/school/Icon1.png" 
                  alt="Сертификат" 
                  className={styles.iconImage}
                />
              </div>
            </div>
            <div className={styles.textContent}>
              <h3 className={styles.benefitTitle}>Сертификат школы Footura</h3>
              <p className={styles.benefitDescription}>
                Сертификат о повышении квалификации по теме "Вросший ноготь"
              </p>
            </div>
          </div>

          {/* Профессиональные материалы */}
          <div className={styles.benefitItem}>
            <div className={styles.iconWrapper}>
              <div className={styles.iconCircle}>
                <img 
                  src="/images/school/Icon2.png" 
                  alt="Профессиональные материалы" 
                  className={styles.iconImage}
                />
              </div>
            </div>
            <div className={styles.textContent}>
              <h3 className={styles.benefitTitle}>Профессиональные материалы</h3>
              <p className={styles.benefitDescription}>
                Печатные учебные материалы, перечень рекомендуемых инструментов и препаратов
              </p>
            </div>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.detailsBtn}>
            Подробнее о курсе
            <svg width="41" height="1" viewBox="0 0 41 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.5L40.762 0.5" stroke="white" strokeWidth="1.6"/>
            </svg>
          </button>
          <button className={styles.purchaseBtn}>
            Купить курс
            <svg width="41" height="1" viewBox="0 0 41 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.5L40.762 0.5" stroke="#334258" strokeWidth="1.6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}