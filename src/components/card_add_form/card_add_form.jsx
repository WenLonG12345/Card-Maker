import React, { useRef } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const titleRef = useRef();
  const themeRef = useRef();
  const cardMakerRef = useRef();
  const messageRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      title: titleRef.current.value || '',
      theme: themeRef.current.value,
      cardMaker: cardMakerRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: '',
    };

    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type='text'
        name='name'
        placeholder='name'
      />
      <input
        ref={titleRef}
        className={styles.input}
        type='text'
        name='title'
        placeholder='title'
      />
      <select
        ref={themeRef}
        className={styles.select}
        name='theme'
        placeholder='theme'
      >
        <option placeholder='light'>light</option>
        <option placeholder='dark'>dark</option>
        <option placeholder='colorful'>colorful</option>
      </select>
      <input
        ref={cardMakerRef}
        className={styles.input}
        type='text'
        name='cardMaker'
        placeholder='cardMaker'
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name='message'
        placeholder='message'
      ></textarea>
      <ImageFileInput />
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
