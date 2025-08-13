"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './ServiceBlock.module.css';

export interface ServiceBlockItem {
  title: string;
  description: string;
  isBold?: boolean;
}

export interface ServiceBlockProps {
  title: string;
  description: string;
  image: string;
  signUpUrl?: string;
  detailsUrl?: string;
  isReversed?: boolean;
  variant?: 1 | 2;
  items?: ServiceBlockItem[];
  extraText?: string;
  isPhotoLeft?: boolean;
}

export default function ServiceBlock({
  title,
  description,
  image,
  signUpUrl,
  detailsUrl,
  isReversed = false,
  variant = 1,
  items = [],
  extraText,
  isPhotoLeft = false,
}: ServiceBlockProps) {
  const { t } = useLanguage();
  const [screenWidth, setScreenWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Устанавливаем начальное значение
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // На экранах менее 812px всегда используем isPhotoLeft = false
  const effectiveIsPhotoLeft = screenWidth < 812 ? false : isPhotoLeft;

  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.1 } }
  };

  const buttonWhile = { hover: { scale: 1.03 }, tap: { scale: 0.98 } } as const;

  return (
    <section className={
      styles.serviceBlock +
      ' ' + (isReversed ? styles.reversed : '') +
      ' ' + (variant === 2 ? styles.variant2 : styles.variant1)
    }>
      <motion.div 
        className={styles.serviceBlockContent}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={`${styles.topRow} ${effectiveIsPhotoLeft ? styles.photoLeft : ''}`}>
          {!effectiveIsPhotoLeft ? (
            <>
              <div className={styles.textCol}>
                <motion.h2 className={styles.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>{title}</motion.h2>
                <motion.p className={styles.description} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }}>{description}</motion.p>
                <div className={styles.buttonsRow}>
                  {signUpUrl && (
                    <motion.a href={signUpUrl} className={styles.signUpBtn} whileHover={buttonWhile.hover} whileTap={buttonWhile.tap}>{t('serviceBlock.bookButton')}</motion.a>
                  )}
                  {detailsUrl && (
                    <motion.a href={detailsUrl} className={styles.detailsBtn} whileHover={buttonWhile.hover} whileTap={buttonWhile.tap}>Подробнее</motion.a>
                  )}
                </div>
              </div>
              <motion.div className={styles.imageCol} variants={imageVariants}>
                <img src={image} alt={title} className={styles.image} />
              </motion.div>
            </>
          ) : (
            <>
              <motion.div className={styles.imageCol} variants={imageVariants}>
                <img src={image} alt={title} className={styles.image} />
              </motion.div>
              <div className={styles.textCol}>
                <motion.h2 className={styles.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>{title}</motion.h2>
                <motion.p className={styles.description} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }}>{description}</motion.p>
                <div className={styles.buttonsRow}>
                  {signUpUrl && (
                    <motion.a href={signUpUrl} className={styles.signUpBtn} whileHover={buttonWhile.hover} whileTap={buttonWhile.tap}>{t('serviceBlock.bookButton')}</motion.a>
                  )}
                  {detailsUrl && (
                    <motion.a href={detailsUrl} className={styles.detailsBtn} whileHover={buttonWhile.hover} whileTap={buttonWhile.tap}>Подробнее</motion.a>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        {items.length > 0 && (
          <div className={styles.itemsList}>
            <div className={styles.divider} />
            {items.map((item, idx) => (
              <motion.div key={item.title + idx} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.05 * idx }}>
                <div className={styles.itemRow}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  {item.isBold ? (
                    <strong className={styles.itemDescription + ' ' + styles.bold}>{item.description}</strong>
                  ) : (
                    <div className={styles.itemDescription}>{item.description}</div>
                  )}
                </div>
                {idx !== items.length - 1 && <div className={styles.divider} />}
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
      {extraText && <div className={styles.extraText}>{extraText}</div>}
    </section>
  );
} 