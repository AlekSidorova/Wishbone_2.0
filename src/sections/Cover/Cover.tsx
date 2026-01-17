import React from 'react';
import styles from './Cover.module.css';
import Button from '../../components/Button/Button';
import coverImage from '../../assets/images/cover.png';

const Cover: React.FC = () => {
  return (
    <section className={styles.cover} id="cover">
      {/* текстовый блок */}
      <div className={styles.about}>
        <p className={`heading ${styles.logo}`}>Wishbone+Partners</p>
        <h1 className={styles.title}>The home of beautiful architecture.</h1>
        <p className={`main_text_maxi ${styles.text}`}>
          We are an architecture firm with a focus on beautiful but functional
          design. At its heart, we believe design is about usability and
          accessibility — these are the guiding principles for our work. Read
          more about our previous projects, our process and our team below.
        </p>

        <Button href="#0" className={styles.coverButton}>Read more</Button>
      </div>

      {/* блок с картинкой */}
      <div style={{ backgroundImage: `url(${coverImage})` }}></div>
    </section>
  );
};

export default Cover;
