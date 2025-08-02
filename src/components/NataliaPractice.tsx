import styles from './NataliaPractice.module.css';

interface Activity {
  name: string;
  place?: string;
}

interface PracticeItem {
  year: string;
  activities: Activity[];
}

const practiceData: PracticeItem[] = [
  {
    year: '2008 – 2025',
    activities: [
      {
        name: 'Частная практика',
        place: 'Екатеринбург/ Прага'
      }
    ]
  },
  {
    year: 'c 2018',
    activities: [
      {
        name: 'Автор курсов повышения квалификации для специалистов по педикюру/подологов и стажировок'
      }
    ]
  },
  {
    year: '2022',
    activities: [
      {
        name: 'Организатор курса с врачом-хирургом Николенко Р. «Сотрудничество хирурга и подолога»'
      },
      {
        name: 'Основала Центр Подологии',
        place: 'Прага'
      }
    ]
  },
  {
    year: '2024 – 2025',
    activities: [
      {
        name: 'Организатор вебинара с врачом-эндокринологом Удовиченко Олегом «Пациенты с сахарным диабетом в практике специалиста парамедицинского педикюра»',
        place: 'Израиль'
      },
      {
        name: 'Участница Выставок BeautyForum Prague с компанией Podoland и представитель системы UniBrace',
        place: 'Прага'
      }
    ]
  }
];

export default function NataliaPractice() {
  return (
    <section className={styles.practiceSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>ПРАКТИКА</h2>
        
        <div className={styles.practiceList}>
          {practiceData.map((item, index) => (
            <div key={index} className={styles.practiceItem}>
              <div className={styles.separator}></div>
              <div className={styles.content}>
                <div className={styles.yearColumn}>
                  <span className={styles.year}>{item.year}</span>
                </div>
                <div className={styles.activitiesColumn}>
                  {item.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className={styles.activityItem}>
                      <p className={styles.activityName}>{activity.name}</p>
                      {activity.place && (
                        <p className={styles.activityPlace}>{activity.place}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}