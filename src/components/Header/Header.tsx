import React from 'react';
import type { INavLink } from '../../types';
import styles from './Header.module.css';
import logo from '../../assets/images/header_logo.svg';
import Button from '../Button/Button';

//массив с сылками по сайту
const navLinks: INavLink[] = [
  { text: 'Projects', href: '#0', active: true },
  { text: 'About', href: '#our_firm' },
  { text: 'News', href: '#0' },
  { text: 'Team', href: '#meet_team' },
  { text: 'Contact', href: '#0' },
];

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a href="#cover">
        <img src={logo} alt="Logo" className={styles.logo} />
      </a>

      <div className={styles.navButton}>
        {/* навигация */}
        <nav aria-label="Main navigation">
          <ul className={styles.linksList}>
            {navLinks.map((link) => (
              <li key={link.text}>
                <a
                  href={link.href}
                  className={link.active ? styles.linkActive : undefined}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* кнопка */}
        <Button onClick={() => console.log("Открывается модалка!")}>
          Get template
        </Button>
      </div>
    </header>
  );
};

export default Header;
