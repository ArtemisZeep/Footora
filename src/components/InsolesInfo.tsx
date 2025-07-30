import styles from './InsolesInfo.module.css';

export default function InsolesInfo() {
  return (
    <section className={styles.infoSection}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <img 
            src="/images/insoles/diagnostic-device.png" 
            alt="Диагностическое оборудование для стоп" 
            className={styles.image}
          />
        </div>
        <div className={styles.textCol}>
          <h2 className={styles.title}>
            Почему важна
            <br />
            точная диагностика
            <br />
            стопы?
          </h2>
          <p className={styles.description}>
            Функциональное состояние стопы напрямую влияет на здоровье всего опорно-двигательного аппарата, а также на состояние кожи и ногтей. Многие поверхностные проблемы — мозоли, вросшие ногти, деформации пальцев — не являются первичными, а являются следствием скрытых нарушений биомеханики стопы. Современная диагностика на 3D-аппарате позволяет точно определить эти нарушения и подобрать эффективную коррекцию.
          </p>
        </div>
      </div>
    </section>
  );
} 