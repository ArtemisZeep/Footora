import styles from './ServicesHero.module.css';

export default function ServicesHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.infoGroup}>
        <h2 className={styles.mainTitle}>Услуги</h2>
        <p className={styles.description}>
          Наш центр  предлагает комплексные решения проблем и профилактику заболеваний стоп и ногтей, минимизируя риск осложнений и обеспечивая регулярный уход.
        </p>
      </div>
    </section>
  );
} 