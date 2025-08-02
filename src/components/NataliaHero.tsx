import styles from './NataliaHero.module.css';

export default function NataliaHero() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              О Наталии Ротарь
            </h1>
            <p className={styles.description}>
              Наталия Ротарь — признанный эксперт в области ухода за стопами с 18-летним опытом практической работы, основатель и руководитель подологического центра FOOTURA, автор уникальных методик обучения и вдохновляющий пример для специалистов, которые стремятся достичь высочайших стандартов в профессии.
            </p>
          </div>
        </div>
      </section>
      
      {/* Мобильный текстовый блок */}
      <section className={styles.mobileTextSection}>
        <div className={styles.mobileContainer}>
          <p className={styles.mobileDescription}>
            Наталия Ротарь — признанный эксперт в области ухода за стопами с 18-летним опытом практической работы, основатель и руководитель подологического центра FOOTURA, автор уникальных методик обучения и вдохновляющий пример для специалистов, которые стремятся достичь высочайших стандартов в профессии.
          </p>
        </div>
      </section>
    </>
  );
}