import React from 'react';
import styles from './PricesTable.module.css';

export interface PriceItem {
  name: string;
  price: string;
}

export interface PriceSubgroup {
  title: string;
  items: PriceItem[];
}

export interface PriceSection {
  title: string;
  subgroups: PriceSubgroup[];
}

interface PricesTableProps {
  section: PriceSection;
}

const PricesTable: React.FC<PricesTableProps> = ({ section }) => {
  return (
    <section className={styles.pricesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{section.title}</h2>
        
        <div className={styles.table}>
          {section.subgroups.map((subgroup, subgroupIndex) => (
            <div key={subgroupIndex} className={styles.subgroup}>
              {/* Subgroup Title */}
              <div className={styles.subgroupTitle}>
                <span className={styles.subgroupTitleText}>{subgroup.title}</span>
              </div>
              
              {/* Subgroup Items */}
              {subgroup.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <div className={styles.tableRow}>
                    <div className={styles.serviceName}>
                      {item.name}
                    </div>
                    <div className={styles.servicePrice}>
                      {item.price}
                    </div>
                  </div>
                  <div className={styles.separator}></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricesTable;