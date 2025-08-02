"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import styles from '../styles/Stats.module.css';

type StatItemProps = {
  value: string;
  label: string;
  isInView: boolean;
  delay?: number;
}

// Компонент для анимированного счетчика
const AnimatedCounter: React.FC<{ 
  target: number; 
  suffix?: string; 
  isInView: boolean;
  delay?: number;
}> = ({ target, suffix = "", isInView, delay = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      let start = 0;
      const duration = 2000; // 2 секунды
      const increment = target / (duration / 50);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 50);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [target, isInView, delay]);

  return <>{Math.floor(count).toLocaleString()}{suffix}</>;
};

const StatItem: React.FC<StatItemProps> = ({ value, label, isInView, delay = 0 }) => {
  // Извлекаем число и суффикс из value
  const numericValue = value.match(/\d+/)?.[0];
  const suffix = value.replace(/\d+/, '').replace(/\s+/, '');
  const target = numericValue ? parseInt(numericValue) : 0;

  return (
    <motion.div 
      className={styles.statItem}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className={styles.statValue}>
        {numericValue ? (
          <AnimatedCounter 
            target={target} 
            suffix={suffix} 
            isInView={isInView}
            delay={delay}
          />
        ) : (
          value
        )}
      </h3>
      <p className={styles.statLabel}>{label}</p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  
  // Figma colors
  const accentColor = "#B8C8BA"; // rgb(184, 200, 186)
  const backgroundColor = "#4D5C4D"; // rgb(77, 92, 77)

  return (
    <section className={styles.stats} style={{ backgroundColor }} ref={ref}>
      <div className="container">
        <motion.h2 
          className={styles.title} 
          style={{ color: accentColor }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          footura в цифрах
        </motion.h2>
        
        <div className={styles.grid}>
          <StatItem value="16 000+" label="Процедур" isInView={isInView} delay={0.2} />
          <div className={styles.verticalDivider}></div>
          <StatItem value="80%" label="Возвращений" isInView={isInView} delay={0.4} />
          <div className={styles.verticalDivider}></div>
          <StatItem value="90%" label="Восстановлений" isInView={isInView} delay={0.6} />
          <div className={styles.verticalDivider}></div>
          <StatItem value="18" label="Лет опыта" isInView={isInView} delay={0.8} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 