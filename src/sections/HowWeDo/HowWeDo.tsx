import React from 'react';
import styles from './HowWeDo.module.css';
import HowWeDoCard from '../../components/HowWeDoCard/HowWeDoCard';

import sketchingIcon from '../../assets/images/Sketching.svg';
import finalizingIcon from '../../assets/images/Finalizing.svg';
import buildingIcon from '../../assets/images/Building.svg';

const cards = [
  {
    image: sketchingIcon,
    title: 'Sketching',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae tempor leo iaculis.',
  },
  {
    image: finalizingIcon,
    title: 'Finalizing',
    text: 'Adipiscing elit. Nulla ut tristique libero. Nulla vitae tempor leo iaculis luctus sapien ac arcu tempor, vitae.',
  },
  {
    image: buildingIcon,
    title: 'Building',
    text: 'Nulla ut tristique libero. Lorem ipsum ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae lorem ipsum dolor leo iaculis.',
  },
];

const HowWeDo: React.FC = () => {
  return (
    <section className={styles.howWeDo}>
      <p className={`heading ${styles.heading}`}>Our process</p>
      <h2 className={`section_title_maxi ${styles.title}`}>
        How we do what we do.
      </h2>

      <ul className={styles.list}>
        {cards.map((card) => (
          <HowWeDoCard
            key={card.title}
            image={card.image}
            title={card.title}
            text={card.text}
            alt={card.title}
          />
        ))}
      </ul>
    </section>
  );
};

export default HowWeDo;