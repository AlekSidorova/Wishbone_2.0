import React from 'react';
import styles from './Footer.module.css';

import logo from '../../assets/images/header_logo.svg';
//запрещённые на территории РФ организация
import twitter from '../../assets/images/twitter.png';
import instagram from '../../assets/images/inst.png';
import facebook from '../../assets/images/facebook.png';

const Footer: React.FC = () => {
  //дата
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* левая часть */}
      <div>
        <a href="#0">
          <img
            src={logo}
            alt="Wishbone+Partners logo"
            className={styles.logo}
          />
        </a>
        <p className={styles.text}>
          Powered by<span>Webflow</span>.
        </p>
        <p className={styles.text}>
          © {currentYear} Wishbone+Partners, Inc.<span> Licensing</span>.
        </p>
      </div>

      {/* соцсети */}
      <div className={styles.links}>
        <a href="#0" aria-label="Twitter">
          <img src={twitter} alt="Twitter" className={styles.imgLogo} />
        </a>

        <a href="#0" aria-label="Instagram">
          <img src={instagram} alt="Instagram" className={styles.imgLogo} />
        </a>

        <a href="#0" aria-label="Facebook">
          <img src={facebook} alt="Facebook" className={styles.imgLogo} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
