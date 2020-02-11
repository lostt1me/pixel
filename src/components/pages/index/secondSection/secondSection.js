/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './secondSection.module.css';

const box = {
  position: 'absolute',
  width: '280px',
  height: '420px',
  left: '370px',
  top: '1123px',

  background: '#ffffff',
  border: '4px solid #000000',
  boxSizing: 'border-box',
};
const box1 = {
  position: 'absolute',
  width: '280px',
  height: '420px',
  left: '670px',
  top: '1123px',

  background: '#FF690F',
  border: '4px solid #000000',
  boxSizing: 'border-box',
};
const box2 = {
  position: 'absolute',
  width: '280px',
  height: '420px',
  left: '970px',
  top: '1123px',

  background: '#50AAF5',
  border: '4px solid #000000',
  boxSizing: 'border-box',
};

const box3 = {
  position: 'absolute',
  width: '280px',
  height: '420px',
  left: '1270px',
  top: '1123px',

  background: '#FF1437',
  border: '4px solid #000000',
  boxSizing: 'border-box',
};

const boxBackground = {
  position: 'absolute',
  left: '16px',
  top: '16px',
  width: '240px',
  height: '240px',

  backgroundColor: '#FFC80E',
};

const CardTest = (props) => (
  <div style={props.box}>
    <div style={props.boxBackground}>
      <div className={styles.boxImage}>
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

const SecondSection = () => (
  <div>
    <h1 className={styles.secondSectionCaption}>how it works</h1>
    <div>
      <CardTest box={box} boxBackground={boxBackground} boxNumber={1} />
      <CardTest box={box1} boxBackground={boxBackground} boxNumber={2} />
      <CardTest box={box2} boxBackground={boxBackground} boxNumber={3} />
      <CardTest box={box3} boxBackground={boxBackground} boxNumber={4} />
    </div>
  </div>
);
export default SecondSection;
