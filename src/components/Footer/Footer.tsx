import React from 'react';
import styles from './Footer.module.css';

import Logo from '../Logo/Logo';
//запрещённые на территории РФ организация
import { TwitterIcon, InstagramIcon, FacebookIcon } from '../../assets/icons';

const Footer: React.FC = () => {
  //дата
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* левая часть */}
      <div>
        <a href="#0" >
          <div className={styles.logo}>
            <Logo />
          </div>
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
          <TwitterIcon className={styles.imgLogo} />
        </a>

        <a href="#0" aria-label="Instagram">
          <InstagramIcon className={styles.imgLogo} />
        </a>

        <a href="#0" aria-label="Facebook">
          <FacebookIcon className={styles.imgLogo} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
