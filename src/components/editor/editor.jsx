import React from 'react';
import CardEditFrom from '../card_edit_form/card_edit_from';
import styles from './editor.module.css';

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Editor</h1>
    {cards.map((card) => {
      return <CardEditFrom card={card} />;
    })}
  </section>
);

export default Editor;
