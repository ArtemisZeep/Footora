import styles from './SchoolAbout.module.css';

export default function SchoolAbout() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.badge}>О ШКОЛЕ</div>
        <p className={styles.description}>
          Школа подологии FOOTURA — это профессиональные курсы по уходу за стопами, основанные на современной практике и методиках. Курс разработан для парамедицинских специалистов, оказывающих профилактические услуги в области здоровья и коррекции состояний стопы на стыке медицины и подологии.
        </p>
      </div>
    </section>
  );
} 