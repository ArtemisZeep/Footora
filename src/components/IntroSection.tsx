import React from 'react';
import styles from '../styles/Intro.module.css';

const IntroSection: React.FC = () => {
  return (
    <section className={styles.intro}>
      <div className="container">
        <p className={styles.text}>
          Центр FOOTURA — команда узкопрофильных специалистов в области ухода за стопами, где забота о их здоровье выходит на новый уровень
        </p>
      </div>
    </section>
  );
};

export default IntroSection; 