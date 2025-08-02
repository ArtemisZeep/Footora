"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import styles from '../styles/Intro.module.css';

const IntroSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section className={styles.intro} ref={ref}>
      <div className="container">
        <motion.p 
          className={styles.text}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          Центр FOOTURA — команда узкопрофильных специалистов в области ухода за стопами, где забота о их здоровье выходит на новый уровень
        </motion.p>
      </div>
    </section>
  );
};

export default IntroSection; 