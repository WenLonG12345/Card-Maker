import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => (
  <footer className={styles.footer}>
    <h1>친구, 지인의 카드를 만들어 보세요!</h1>
  </footer>
));
export default Footer;
