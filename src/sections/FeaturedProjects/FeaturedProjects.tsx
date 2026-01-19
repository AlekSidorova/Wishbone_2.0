import React from 'react';
import styles from './FeaturedProjects.module.css';
import { featuredProjects } from './data';
import FeaturedProjectItem from '../../components/FeaturedProjectItem/FeaturedProjectItem';
import Button from '../../components/Button/Button';
//эффект скролла
import type { IWithClassName } from '../../types';

const FeaturedProjects: React.FC<IWithClassName> = ({ className = ''}) => {
  return (
    <section className={`${styles.featuredProjects} ${className}`}>
      <h2 className={`section_title_maxi ${styles.title}`}>
        Featured projects
      </h2>
      <p className={styles.text}>
        Some of the latest and greatest projects from us here at
        Wishbone+Partners.
      </p>

      <ul className={styles.list}>
        {featuredProjects.map((project) => (
          <FeaturedProjectItem key={project.title} {...project} />
        ))}
      </ul>
      <div className={styles.buttonStile}>
        <Button href="#0" className={styles.button}>
          View all projects
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProjects;
