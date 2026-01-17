import React from 'react';
import styles from './HowWeDoCard.module.css';
import type { IHowWeDoCardProps } from '../../types';

const HowWeDoCard: React.FC<IHowWeDoCardProps> = ({
  image,
  title,
  text,
  alt = '',
}) => {
  return (
    <li className={styles.card}>
      <img src={image} alt={alt} className={styles.image} />
      <h4 className={styles.name}>{title}</h4>
      <p className={`main_text_mini ${styles.text}`}>{text}</p>
    </li>
  );
};

export default HowWeDoCard;
