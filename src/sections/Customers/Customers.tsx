import React from 'react';
import styles from './Customers.module.css';

import hillLogo from '../../assets/images/hill.png';
import riksLogo from '../../assets/images/riks.png';
import studioLogo from '../../assets/images/studio.png';
import chillLogo from '../../assets/images/chill.png';

const logos = [
  { src: hillLogo, alt: 'logo Hill E Hayes' },
  { src: riksLogo, alt: 'logo Riksgransen' },
  { src: studioLogo, alt: 'logo Studio Cai' },
  { src: chillLogo, alt: 'logo Chill Industries' },
];

const Customers: React.FC = () => {
  return (
    <section className={styles.customers}>
      <div className={styles.text}>
        <p className="heading">prior clients</p>
        <h2 className={`section_title_mini ${styles.header}`}>
          Happy customers.
        </h2>
        <p className="main_text_mini">
          Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
          Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
          ut faucibus orci tincidunt.
        </p>
      </div>

      <div className={styles.logos}>
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className={styles.logo}
          />
        ))}
      </div>
    </section>
  );
};

export default Customers;
