import React, { memo, useRef } from 'react';
import styles from './card.module.css';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';

const DEFAULT_MAKER = 'Card Maker';
const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = memo(({ card }) => {
  const { name, title, message, fileURL, theme, cardMaker } = card;
  const url = fileURL || DEFAULT_IMAGE;
  const maker = cardMaker || DEFAULT_MAKER;
  const cardRef = useRef();
  const onCaptureBtn = () => {
    domtoimage.toBlob(cardRef.current).then((blob) => {
      saveAs(blob, 'card_maker.png');
    });
  };

  return (
    <li className={styles.cardContainer}>
      <div
        ref={cardRef}
        id='card'
        className={`${styles.card} ${getStyles(theme)}`}
      >
        <img className={styles.avatar} src={url} alt='프로필' />
        <div className={styles.info}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.title}>{title}</p>
          <p className={styles.message}>{message}</p>
          <p className={styles.date}>{getMakerDate()}</p>
          <p className={styles.maker}>{maker}</p>
        </div>
        <button className={styles.downBtn} onClick={onCaptureBtn}>
          <i className='fas fa-download'></i>
        </button>
      </div>
    </li>
  );
});

function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

function getMakerDate() {
  const date = new Date();
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
}

export default Card;
