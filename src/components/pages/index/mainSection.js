import React from 'react';
import styles from './mainSection.module.css';
import question from './images/question.svg';

const MainSection = () => (
  <div>
    <div>
      <span className={styles.h1}>buy iconic shoes</span>
      <span className={styles.h2}>with automated software</span>
    </div>
    <div className={styles.notAvailableButton}>
      <span>Not available</span>
      <img src={question} alt="question" />
    </div>
    <div className={styles.image} />
  </div>
);

export default MainSection;
