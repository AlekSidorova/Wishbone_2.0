import React from 'react';
import styles from './ThemeToggle.module.css';
import { useTheme } from '../../utils/hooks/useTheme';

import toggleIconLight from '../../assets/theme_toggle/toggle-icon-dark.png';
import toggleIconDark from '../../assets/theme_toggle/toggle-icon-light.png';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label="Toggle theme"
    >
      <img
        src={theme === 'light' ? toggleIconLight : toggleIconDark}
        alt="Toggle theme"
      />
    </button>
  );
};

export default ThemeToggle;
