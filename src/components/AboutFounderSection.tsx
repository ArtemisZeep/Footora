"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import styles from '../styles/AboutFounder.module.css';

const AboutFounderSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.aboutFounder}>
      <div className="container">
        <div className={styles.grid}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('aboutFounder.title')} – <br/>{t('aboutFounder.subtitle')}
          </motion.h2>
          
          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <Image
              src="/images/natalia_1.jpg"
              alt={t('aboutFounder.title')}
              width={640}
              height={909}
              className={styles.founderImage}
            />
          </motion.div>
          
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.description}>
              {t('aboutFounder.description')}
            </p>
            
            <motion.div className={styles.secondaryImageContainer} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}>
              <Image
                src="/images/natalia_2.jpg"
                alt={t('aboutFounder.title')}
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link href="/natalia" className={`btn btn-outline ${styles.button}`}>
                {t('aboutFounder.learnMore')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounderSection; 