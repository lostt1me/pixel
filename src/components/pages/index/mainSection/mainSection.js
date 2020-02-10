import React from 'react';
import styles from './mainSection.module.css';
import question from './images/question.svg';
import Tooltip from './tooltip/tooltip';

const MainSection = () => (
  <div className={styles.image}>
    <div>
      <span className={styles.h1}>buy iconic shoes</span>
      <span className={styles.h2}>with automated software</span>
    </div>
    <Tooltip>
      <div className={styles.notAvailableButton}>
        <span>Not available</span>
        <img src={question} alt="question" />
      </div>
    </Tooltip>
  </div>
);

export default MainSection;
