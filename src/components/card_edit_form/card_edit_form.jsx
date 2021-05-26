import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const nameRef = useRef();
  const titleRef = useRef();
  const themeRef = useRef();
  const cardMakerRef = useRef();
  const messageRef = useRef();

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const { name, title, message, fileName, fileURL, theme, cardMaker } = card;
  const onSubmit = () => {
    deleteCard(card);
  };
  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type='text'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        ref={titleRef}
        className={styles.input}
        type='text'
        name='title'
        value={title}
        onChange={onChange}
      />
      <select
        ref={themeRef}
        className={styles.select}
        name='theme'
        value={theme}
        onChange={onChange}
      >
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        ref={cardMakerRef}
        className={styles.input}
        type='text'
        name='cardMaker'
        value={cardMaker}
        onChange={onChange}
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name='message'
        value={message}
        onChange={onChange}
      ></textarea>
      <ImageFileInput />
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
