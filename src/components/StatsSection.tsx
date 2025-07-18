import React from 'react';
import styles from '../styles/Stats.module.css';

type StatItemProps = {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div className={styles.statItem}>
      <h3 className={styles.statValue}>{value}</h3>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  // Figma colors
  const accentColor = "#B8C8BA"; // rgb(184, 200, 186)
  const backgroundColor = "#4D5C4D"; // rgb(77, 92, 77)

  return (
    <section className={styles.stats} style={{ backgroundColor }}>
      <div className="container">
        <h2 className={styles.title} style={{ color: accentColor }}>
          footura в цифрах
        </h2>
        
        <div className={styles.grid}>
          <StatItem value="16 000+" label="Процедур" />
          <div className={styles.verticalDivider}></div>
          <StatItem value="80%" label="Возвращений" />
          <div className={styles.verticalDivider}></div>
          <StatItem value="90%" label="Восстановлений" />
          <div className={styles.verticalDivider}></div>
          <StatItem value="18" label="Лет опыта" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 