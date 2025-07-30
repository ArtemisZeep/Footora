import styles from './SchoolLector.module.css';

export default function SchoolLector() {
  return (
    <section className={styles.lectorSection}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <img 
            src="/images/school/natalia-rotar.png" 
            alt="Наталия Ротарь" 
            className={styles.image}
          />
        </div>
        <div className={styles.textCol}>
          <div className={styles.badge}>О ЛЕКТОРЕ</div>
          <h2 className={styles.title}>
            Наталия Ротарь — эксперт с 18-летним опытом в подологии, руководитель подологического центра Footura и автор уникальных обучающих методик
          </h2>
          <button className={styles.detailsBtn}>Подробнее о лекторе</button>
        </div>
      </div>
    </section>
  );
} 