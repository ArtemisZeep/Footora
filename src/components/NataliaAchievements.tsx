import styles from './NataliaAchievements.module.css';

interface AchievementCard {
  number: string;
  title: string;
  description: string;
}

const achievementsData: AchievementCard[] = [
  {
    number: '01',
    title: 'Рекомендации клиник',
    description: 'Клиентов к Наталье направляют врачи из больниц, клиник и частных практик.'
  },
  {
    number: '02', 
    title: 'Сотрудничество с врачами',
    description: 'Центр успешно сотрудничает с хирургами, дерматологами, ортопедами и диабетологами, принимая клиентов на реабилитацию и последующий уход после оперативных вмешательств.'
  },
  {
    number: '03',
    title: 'Высокий стандарт сервиса', 
    description: 'Уникальная организация бизнес-процессов и высокий уровень сервиса сделали центр Footura ориентиром в своей области.'
  }
];

export default function NataliaAchievements() {
  return (
    <section className={styles.achievementsSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 className={styles.subtitle}>ДОСТИЖЕНИЯ И РЕПУТАЦИЯ</h3>
          <p className={styles.description}>
            Под руководством Натальи центр Footura приобрёл безупречную репутацию. 
            Сервис и профессионализм специалистов центра привлекают пациентов не только из Чехии, но и из соседних стран
          </p>
        </div>
        
        <div className={styles.cardsGrid}>
          {achievementsData.map((card, index) => (
            <div key={index} className={styles.achievementCard}>
              <div className={styles.cardNumber}>{card.number}</div>
              <h4 className={styles.cardTitle}>{card.title}</h4>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}