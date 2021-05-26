import React from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card }) => {
  const { name, title, message, fileName, fileURL, theme, cardMaker } = card;
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input className={styles.input} type='text' name='name' value={name} />
      <input className={styles.input} type='text' name='title' value={title} />
      <select className={styles.select} name='theme' value={theme}>
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        className={styles.input}
        type='text'
        name='cardMaker'
        value={cardMaker}
      />
      <textarea
        className={styles.textarea}
        name='message'
        value={message}
      ></textarea>
      <ImageFileInput />
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
