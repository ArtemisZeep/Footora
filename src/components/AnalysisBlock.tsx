import styles from './AnalysisBlock.module.css';

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
  data: AnalysisBlockData;
}

export default function AnalysisBlock({ data }: AnalysisBlockProps) {
  return (
    <section className={styles.analysisSection}>
      <div className={styles.container}>
        <div className={styles.numberBadge}>{data.number}</div>
        <h2 className={styles.mainTitle}>{data.title}</h2>
        
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <h3 className={styles.leftTitle}>{data.leftSection.title}</h3>
            <p className={styles.leftDescription}>{data.leftSection.description}</p>
            
            <ul className={styles.bulletList}>
              {data.leftSection.bulletPoints.map((point, index) => (
                <li key={index} className={styles.bulletItem}>
                  <span className={styles.bulletDot}></span>
                  <span className={styles.bulletText}>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.rightColumn}>
            <div className={styles.rightCard}>
              <h3 className={styles.rightTitle}>{data.rightSection.title}</h3>
              <p className={styles.rightDescription}>{data.rightSection.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 