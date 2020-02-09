import React from 'react';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.wrapper}>
    <div className={styles.ghostElement}>
      GHOST
    </div>
    <div className={styles.navigation}>
      <a href="#howItWorks">How it works</a>
      <a href="#home">Features</a>
      <a href="#home">Supported stores</a>
      <a href="#home">Mobile app</a>
      <a href="#home">FAQ</a>
      <a href="#home">Blog</a>
      <a href="#home">Contacts</a>
    </div>
    <div className={styles.loginButton}>
      <span>Login</span>
    </div>
  </header>
);

export default Header;
