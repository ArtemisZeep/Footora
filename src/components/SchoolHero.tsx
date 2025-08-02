"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './SchoolHero.module.css';

export default function SchoolHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className={styles.badge}
            variants={itemVariants}
          >
            ОНЛАЙН<br />ОФФЛАЙН
          </motion.div>
          <motion.h1 
            className={styles.title}
            variants={itemVariants}
          >
            Практико-ориентированное
            <br />
            обучение с элементами
            <br />
            клинической подологии
          </motion.h1>
          <motion.button 
            className={styles.enrollBtn}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Посмотреть курсы
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 