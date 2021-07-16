import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => (
  <footer className={styles.footer}>
    <h1>
      친구, 지인의 카드를 만들어 보세요!{' '}
      <a
        className={styles.link}
        title='BYTube GitHub'
        href='https://github.com/ByungyeonKim'
        rel='noopener noreferrer'
        target='_blank'
      >
        <i className='fab fa-github'></i>
      </a>
    </h1>
  </footer>
));
export default Footer;
