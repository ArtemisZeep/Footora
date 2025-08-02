import styles from './NataliaWhyChoose.module.css';

interface WhyChoosePoint {
  number: string;
  text: string;
}

const whyChooseData: WhyChoosePoint[] = [
  {
    number: '01',
    text: 'Постоянное совершенствование профессиональных навыков и подходов'
  },
  {
    number: '02',
    text: 'Индивидуальная работа с каждым клиентом и учеником'
  },
  {
    number: '03',
    text: 'Сотрудничество с медицинскими учреждениями и частными практиками'
  },
  {
    number: '04',
    text: 'Все методики и решения проверены и отточены на основе многолетней практической работы'
  }
];

export default function NataliaWhyChoose() {
  return (
    <section className={styles.whyChooseSection}>
      {/* Фоновое изображение */}
      <div className={styles.backgroundImage}></div>
      
      {/* Контентная часть */}
      <div className={styles.contentSection}>
        <div className={styles.container}>
          <h2 className={styles.title}>Почему выбирают Наталию?</h2>
          
          <div className={styles.pointsGrid}>
            {whyChooseData.map((point, index) => (
              <div key={index} className={styles.point}>
                <div className={styles.pointNumber}>{point.number}</div>
                <p className={styles.pointText}>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}