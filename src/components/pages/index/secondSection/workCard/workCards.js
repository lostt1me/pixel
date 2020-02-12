/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './workCard.module.css';

const CardTest = (props) => (
  <div style={props.box}>
    <div style={props.boxBackground}>
      <div className={props.boxImage}>
        <span className={styles.boxNumber} id="howItWorks">{props.boxNumber}</span>
      </div>
    </div>
    <h4 className={styles.boxH4}>install the app</h4>
    <span className={styles.boxText}>
      Lorem Ipsum is simply dummy
      text of the printing and typesetting
      industry. Lorem Ipsum has been
      the industry&apos;s standard dummy
    </span>
  </div>
);

export default CardTest;
