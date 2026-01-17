import React from "react";
import styles from "./PersonCard.module.css";
import type { IPersonCardProps } from "../../types";

const PersonCard: React.FC<IPersonCardProps> = ({ image, name, role }) => {
  return (
    <div className={styles.card}>
      <img 
        src={image}
        alt={name}
        className={styles.avatar}
      />

      <p className={styles.name}>
        {name} <br />
        <span className={styles.role}>{role}</span>
      </p>
    </div>
  )
}

export default PersonCard;