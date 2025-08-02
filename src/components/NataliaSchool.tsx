import styles from './NataliaSchool.module.css';

export default function NataliaSchool() {
  return (
    <section className={styles.schoolSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleColumn}>
            <h2 className={styles.title}>ШКОЛА FOOTURA</h2>
          </div>
          
          <div className={styles.textColumn}>
            <p className={styles.description}>
              Наталия Ротарь — не только практикующий эксперт, но и вдохновляющий преподаватель. 
              В своей школе она делится опытом с начинающими и опытными специалистами, помогая им 
              достичь профессиональных высот. Авторские программы обучения Натальи сочетают теорию, 
              практику и индивидуальный подход, делая особый акцент на отработку практических навыков.
            </p>
            
            <button className={styles.button}>
              Подробнее о школе
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}