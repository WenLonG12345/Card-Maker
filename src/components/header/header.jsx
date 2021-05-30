import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => {
  const displayType = onLogout ? styles.onLogout : styles.onLogin;
  const headingType = onLogout
    ? 'Card Maker'
    : '안녕하세요, CARD MAKER입니다! 🎉';
  return (
    <header className={`${styles.header} ${displayType}`}>
      {!onLogout && (
        <img className={styles.logo} src='/images/logo.png' alt='로고' />
      )}
      <h1 className={`${styles.title} ${displayType}`}>{headingType}</h1>
      {onLogout && (
        <button onClick={onLogout} className={styles.logout}>
          로그아웃
        </button>
      )}
    </header>
  );
};

export default Header;
