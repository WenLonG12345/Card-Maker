import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: '김병연',
      title: '고기굽기 1급',
      message: '',
      fileName: '',
      fileURL: null,
      theme: 'dark',
      cardMaker: null,
    },
    2: {
      id: '2',
      name: '이종수',
      title: '헬창 2급',
      message: '3대 420kg',
      fileName: '',
      fileURL: null,
      theme: 'light',
      cardMaker: '발행 : 김병연',
    },
    3: {
      id: '3',
      name: '남길현',
      title: '아재 1급',
      message: '특수아재형',
      fileName: '',
      fileURL: null,
      theme: 'colorful',
      cardMaker: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const createOrupdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrupdateCard}
          updateCard={createOrupdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
