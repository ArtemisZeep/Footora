"use client";

import styles from './AnalysisBlock.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

export interface AnalysisBlockData {
  number: string;
  title: string;
  leftSection: {
    title: string;
    description: string;
    bulletPoints: string[];
  };
  rightSection: {
    title: string;
    description: string;
  };
}

interface AnalysisBlockProps {
  blockNumber: number;
}

export default function AnalysisBlock({ blockNumber }: AnalysisBlockProps) {
  const { t } = useLanguage();
  
  const getBulletPoints = (): string[] => {
    const points: string[] = [];
    let index = 0;
    while (true) {
      try {
        const point = t(`insolesPage.analysis.block${blockNumber}.leftSection.bulletPoints.${index}`);
        if (point === `insolesPage.analysis.block${blockNumber}.leftSection.bulletPoints.${index}`) {
          break; // Если перевод не найден, останавливаемся
        }
        points.push(point);
        index++;
      } catch {
        break;
      }
    }
    return points;
  };

  return (
    <section className={styles.analysisSection}>
      <div className={styles.container}>
        <div className={styles.numberBadge}>{blockNumber.toString().padStart(2, '0')}</div>
        <h2 className={styles.mainTitle}>{t(`insolesPage.analysis.block${blockNumber}.title`)}</h2>
        
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <h3 className={styles.leftTitle}>{t(`insolesPage.analysis.block${blockNumber}.leftSection.title`)}</h3>
            <p className={styles.leftDescription}>{t(`insolesPage.analysis.block${blockNumber}.leftSection.description`)}</p>
            
            <ul className={styles.bulletList}>
              {getBulletPoints().map((point: string, index: number) => (
                <li key={index} className={styles.bulletItem}>
                  <span className={styles.bulletDot}></span>
                  <span className={styles.bulletText}>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.rightColumn}>
            <div className={styles.rightCard}>
              <h3 className={styles.rightTitle}>{t(`insolesPage.analysis.block${blockNumber}.rightSection.title`)}</h3>
              <p className={styles.rightDescription}>{t(`insolesPage.analysis.block${blockNumber}.rightSection.description`)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 