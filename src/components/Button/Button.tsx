import React from "react";
import styles from "./Button.module.css";
import type { IButtonProps } from "../../types";

const Button: React.FC<IButtonProps> = ({ children, href, onClick, className }) => {
  if (href) {
    return (
      <a href={href} className={`${styles.button} ${className ?? ""}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${className ?? ""}`}
    >
      {children}
    </button>
  )
}

export default Button;
