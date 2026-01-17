import React from 'react';
import styles from './FeaturedProjectItem.module.css';
import type { IFeaturedProjectItemProps } from '../../types';
import Button from '../Button/Button';

const FeaturedProjectItem: React.FC<IFeaturedProjectItemProps> = ({
  image,
  alt,
  country,
  title,
}) => {
  return (
    <li className={styles.item}>
      <img src={image} alt={alt} className={styles.image} />

      <div className={styles.meta}>
        <h3 className={`heading ${styles.country}`}>{country}</h3>
        <h4 className={styles.title}>{title}</h4>
      </div>

      <Button href="#0" className={styles.link}>Read more</Button>
    </li>
  );
};

export default FeaturedProjectItem;
