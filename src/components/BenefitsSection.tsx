import React from 'react';
import Image from 'next/image';
import styles from '../styles/Benefits.module.css';

const benefits = [
  {
    number: '01',
    title: 'Безопасность',
    description: 'Мы обеспечиваем высокий уровень стерилизации инструмента и его хранение. Используем исключительно одноразовые расходные материалы.',
    brackets: false
  },
  {
    number: '02',
    title: 'Передовые технологии',
    description: 'Используем современное оборудование, регулярно совершенствуем технику и навыки, обмениваемся международным опытом для эффективности результатов',
    brackets: false
  },
  {
    number: '03',
    title: 'Лучшие специалисты',
    description: 'Вся команда прошла обучение под руководством Наталии Ротарь, сочетая свой опыт с высочайшей квалификацией',
    brackets: true
  },
  {
    number: '04',
    title: 'Комплексное сотрудничество',
    description: 'Работаем с медицинскими центрами и врачами смежных специализаций для решения и контроля более сложных заболеваний стоп',
    brackets: false
  },
  {
    number: '05',
    title: 'Индивидуальный подход',
    description: 'Учитываем индивидуальные особенности каждого клиента, предлагая персонализированные решения для эффективного восстановления и профилактики',
    brackets: false
  },
  {
    number: '06',
    title: 'Приватность',
    description: 'Процедуры проводятся в отдельных комфортабельных кабинетах, что обеспечивает максимальное удобство и приватность для каждого клиента',
    brackets: true
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className={styles.benefits} id="benefits">
      <div className={styles.bgWrap}>
      <Image
        src="/images/team.jpg"
        alt="Footura team"
        fill
        className={styles.bgImage}
        priority
      />
      <h2 className={styles.title}>
        Почему выбирают нас
      </h2>
      </div>
      <div className={styles.benefitsBox}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.column}>
              {benefits.slice(0, 3).map((b, i) => (
                <div className={styles.benefitItem} key={b.number}>
                  <div className={styles.benefitNumber}>{b.number}</div>
                  <div className={styles.benefitTextBlock}>
                    <div className={styles.benefitTitle}>{b.title}</div>
                    <div className={styles.benefitDescription}>{b.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.column}>
              {benefits.slice(3, 6).map((b, i) => (
                <div className={styles.benefitItem} key={b.number}>
                  <div className={styles.benefitNumber}>{b.number}</div>
                  <div className={styles.benefitTextBlock}>
                    <div className={styles.benefitTitle}>{b.title}</div>
                    <div className={styles.benefitDescription}>{b.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 