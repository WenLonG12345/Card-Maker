import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: { id: userId },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <section className={styles.loginContainer}>
      <Header />
      <section>
        <p className={styles.description}>
          ⚠️ 리액트로 만든 <em>개인 프로젝트입니다.</em> 사진은{' '}
          <strong>서버에 저장</strong>되며 민감한 개인정보는 저장하지 마세요. ❌
        </p>
        <ul>
          <li className={styles.loginItem}>
            <button className={styles.loginBtn} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.loginItem}>
            <button className={styles.loginBtn} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
