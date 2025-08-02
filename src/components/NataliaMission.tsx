import styles from './NataliaMission.module.css';

export default function NataliaMission() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>МИССИЯ И ФИЛОСОФИЯ</h3>
        <h2 className={styles.mission}>
          Здоровые ноги — основа движения, а движение это жизнь
        </h2>
      </div>
    </section>
  );
}