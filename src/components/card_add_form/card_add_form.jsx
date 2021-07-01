import React, { memo, useRef, useState } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';

const CardAddForm = memo(({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const titleRef = useRef();
  const themeRef = useRef();
  const cardMakerRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      title: titleRef.current.value || '',
      theme: themeRef.current.value,
      cardMaker: cardMakerRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };

    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };

  const onChange = (event) => {
    let len = event.currentTarget.value.length;
    let maxLen = event.currentTarget.name === 'message' ? 30 : 12;
    if (len > maxLen) {
      return event.currentTarget.value = event.currentTarget.value.slice(0, maxLen);
    }
    console.log(event.currentTarget.value.length);
  }

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type='text'
        name='name'
        placeholder='Name (Max 12)'
        onChange={onChange}
      />
      <input
        ref={titleRef}
        className={styles.input}
        type='text'
        name='title'
        placeholder='Title (Max 12)'
        onChange={onChange}
      />
      <input
        ref={cardMakerRef}
        className={styles.input}
        type='text'
        name='cardMaker'
        placeholder='Maker (Max 12)'
        onChange={onChange}
      />
      <select ref={themeRef} className={styles.select} name='theme'>
        <option placeholder='light'>light</option>
        <option placeholder='dark'>dark</option>
        <option placeholder='colorful'>colorful</option>
      </select>
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name='message'
        placeholder='Message (Max 30)'
        onChange={onChange}
      ></textarea>
      <FileInput name={file.fileName} onFileChange={onFileChange} />
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
});

export default CardAddForm;
