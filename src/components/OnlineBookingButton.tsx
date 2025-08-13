"use client";

import Link from 'next/link';
import React from 'react';
import styles from '../styles/OnlineBookingButton.module.css';
import { useLanguage } from '../contexts/LanguageContext';

const OnlineBookingButton: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Link
      href="/#booking"
      aria-label={t('hero.onlineBooking')}
      className={styles.fab}
    >
      <span className={styles.text}>{t('hero.onlineBooking')}</span>
    </Link>
  );
};

export default OnlineBookingButton;



