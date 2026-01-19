import React from "react";
import styles from "./PhotoSection.module.css";
import type { IPhotoSectionProps } from "../../types";

const PhotoSection: React.FC <IPhotoSectionProps> =({ 
  title, 
  text, 
  backgroundImage, 
  align = 'right',
  className = ''
}) => {
  return (
    <article 
      className={`${styles.photoSection} ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})`}}
    >
      <div
        className={`${styles.text} ${
          align === 'left' ? styles.left : styles.right
        }`}>
          <h3 className={`heading ${styles.title}`}>{title}</h3>
          <p className={`main_text_maxi ${styles.paragraph}`}>{text}</p>
      </div>
    </article>
  )
}

export default PhotoSection;