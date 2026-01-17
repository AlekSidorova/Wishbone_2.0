import React from 'react';
import styles from './OurFirm.module.css';
import PersonCard from '../../components/PersonCard/PersonCard';
import stephenCollier from '../../assets/images/stephen_collier.png';

const OurFirm: React.FC = () => {
  return (
    <section className={styles.ourFirm} id="our_firm">
      <h2 className={`section_title_mini ${styles.title}`}>Our firm</h2>

      <div className={`main_text_maxi ${styles.text}`}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>

        <div className={styles.card}>
          <PersonCard 
            image={stephenCollier}
            name="Stephen Collier"
            role="Senior Partner"/>
        </div>
      </div>
    </section>
  );
};

export default OurFirm;