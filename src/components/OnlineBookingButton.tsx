"use client";

import Link from 'next/link';
import React from 'react';
import styles from '../styles/OnlineBookingButton.module.css';
import { useLanguage } from '../contexts/LanguageContext';

const OnlineBookingButton: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Link
      href="https://n766508.alteg.io/company/720417/personal/select-services?_gl=1*15h3pye*_ga*MTAyNjk3MTQ4MC4xNzI5MDAzODQy*_ga_2WY57VWNET*MTczNDE3NTk5NC4zLjAuMTczNDE3NTk5NC42MC4wLjA.*_ga_L53TRF9G65*MTczNDE3NTk5NC4zLjAuMTczNDE3NTk5NC42MC4wLjA.&o=m-1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('hero.onlineBooking')}
      className={styles.fab}
    >
      <span className={styles.text}>{t('hero.onlineBooking')}</span>
    </Link>
  );
};

export default OnlineBookingButton;



