import React from 'react';
import styles from './MeetTeam.module.css';
import { team } from '../../data/team';
import PersonCard from '../../components/PersonCard/PersonCard';
import Button from '../../components/Button/Button';
//эффект скролла
import type { IWithClassName } from '../../types';

const MeetTeam: React.FC<IWithClassName> = ({ className = ''}) => {
  return (
    <section className={`${styles.meetTeam} ${className}`} id="meet_team">
      {/* текстовый блок */}
      <div>
        <h2 className={`section_title_mini ${styles.header}`}>Meet our team</h2>
        <p className={`main_text_mini ${styles.text}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis.
        </p>

        <Button href="#0" className={styles.button}>
          See team
        </Button>
      </div>

      {/* список людей */}
      <div className={styles.people}>
        {team.map((person) => (
          <PersonCard key={person.name} {...person} />
        ))}
      </div>
    </section>
  );
};

export default MeetTeam;
