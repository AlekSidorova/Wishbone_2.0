import React from 'react';
import styles from './Question.module.css';
import Button from '../../components/Button/Button';

const Question: React.FC = () => {
  return (
    <section className={styles.question}>
      <div>
        <h2 className={`heading ${styles.title}`}>Get in touch</h2>
        <p className={styles.text}>
          Think we would be a good fit for your next project?
        </p>
      </div>
      <Button href="#0" className={styles.button}>
        Get in touch
      </Button>
    </section>
  );
};

export default Question;
