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
}: ServiceBlockProps) {
  return (
    <section className={
      styles.serviceBlock +
      ' ' + (isReversed ? styles.reversed : '') +
      ' ' + (variant === 2 ? styles.variant2 : styles.variant1)
    }>
      <div className={styles.serviceBlockContent}>
        <div className={styles.topRow}>
          <div className={styles.textCol}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <div className={styles.buttonsRow}>
              {signUpUrl && (
                <a href={signUpUrl} className={styles.signUpBtn}>Записаться</a>
              )}
              {detailsUrl && (
                <a href={detailsUrl} className={styles.detailsBtn}>Подробнее</a>
              )}
            </div>
          </div>
          <div className={styles.imageCol}>
            <img src={image} alt={title} className={styles.image} />
          </div>
        </div>
        {items.length > 0 && (
          <div className={styles.itemsList}>
            <div className={styles.divider} />
            {items.map((item, idx) => (
              <div key={item.title + idx}>
                <div className={styles.itemRow}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  {item.isBold ? (
                    <strong className={styles.itemDescription + ' ' + styles.bold}>{item.description}</strong>
                  ) : (
                    <div className={styles.itemDescription}>{item.description}</div>
                  )}
                </div>
                {idx !== items.length - 1 && <div className={styles.divider} />}
              </div>
            ))}
          </div>
        )}
      </div>
      {extraText && <div className={styles.extraText}>{extraText}</div>}
    </section>
  );
} 