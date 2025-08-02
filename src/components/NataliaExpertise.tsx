import styles from './NataliaExpertise.module.css';

interface ExpertisePoint {
  text: string;
}

const expertisePoints: ExpertisePoint[] = [
  {
    text: 'Многолетняя практическая работа. Это позволяет эффективно решать широкий спектр задач.'
  },
  {
    text: 'Опыт ведущих международных экспертов. Наталия посещает международные семинары и конференции, общается с признанными специалистами и изучает их подходы.'
  },
  {
    text: 'Интеграция новых знаний с собственным опытом. Все полученные навыки проходят адаптацию через профессиональный взгляд и подход Наталии.'
  }
];

export default function NataliaExpertise() {
  return (
    <section className={styles.expertiseSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Левая колонка с заголовком и изображением */}
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>
              Практическая основа<br />
              и международный<br />
              опыт
            </h2>
            <div className={styles.imageContainer}></div>
          </div>

          {/* Правая колонка с контентом */}
          <div className={styles.rightColumn}>
            <div className={styles.topContent}>
              <h3 className={styles.subtitle}>Все методики и решения основаны на:</h3>
              
              <div className={styles.pointsList}>
                {expertisePoints.map((point, index) => (
                  <div key={index} className={styles.point}>
                    <div className={styles.checkIcon}>
                      <img src="/images/Arr_ex.png" alt="Check" width="20" height="20" />
                    </div>
                    <p className={styles.pointText}>{point.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className={styles.conclusion}>
              Так рождается авторская практика Наталии Ротарь, объединяющая передовые технологии и глубинное понимание работы в данной области. Такой подход стал основой высокого профессионализма и репутации.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}