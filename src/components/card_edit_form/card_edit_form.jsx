import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { messageRef, cardMakerRef, themeRef, titleRef, nameRef } = useRef();
  const { name, title, message, fileName, theme, cardMaker } = card;

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    event.preventDefault();
    let len = event.currentTarget.value.length;
    let maxLen = event.currentTarget.name === 'message' ? 30 : 12;
    if (len > maxLen) {
      return;
    }

    if (event.currentTarget == null) {
      return;
    }

    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

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
        placeholder='Name (Max 12)'
        onChange={onChange}
      />
      <input
        ref={titleRef}
        className={styles.input}
        type='text'
        name='title'
        value={title}
        placeholder='Title (Max 12)'
        onChange={onChange}
      />
      <input
        ref={cardMakerRef}
        className={styles.input}
        type='text'
        name='cardMaker'
        value={cardMaker}
        placeholder='Maker (Max 12)'
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
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name='message'
        value={message}
        placeholder='Message (Max 30)'
        onChange={onChange}
      ></textarea>
      <FileInput name={fileName} onFileChange={onFileChange} />
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
