import React from 'react';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.wrapper}>
    <div className={styles.ghostElement}>
      GHOST
    </div>
  </header>
);

export default Header;
