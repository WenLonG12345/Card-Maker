import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
  <header className={styles.header}>
    <img className={styles.logo} src='/images/logo.png' alt='자격증 로고' />
    <h1>안녕하세요, CARD MAKER입니다! 🎉</h1>
  </header>
);

export default Header;
