import React from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Cover from '../../sections/Cover/Cover';
import OurFirm from '../../sections/OurFirm/OurFirm';
import PhotoSection from '../../sections/PhotoSection/PhotoSection';
import bg1 from '../../assets/images/background_1.png';
import HowWeDo from '../../sections/HowWeDo/HowWeDo';
import bg2 from '../../assets/images/background_2.png';
import Customers from '../../sections/Customers/Customers';
import bg3 from '../../assets/images/background_3.png';
import FeaturedProjects from '../../sections/FeaturedProjects/FeaturedProjects';

const App: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Cover />
        <OurFirm />
        <PhotoSection
          title="Reeding House"
          text="Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet."
          backgroundImage={bg1}
        />
        <HowWeDo />
        <PhotoSection
          title="The marble staircase"
          text="Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet."
          backgroundImage={bg2}
        />
        <Customers />
        <PhotoSection
          title="The swirling staircase"
          text="Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet."
          backgroundImage={bg3}
          align="left"
        />
        <FeaturedProjects />
      </main>
    </div>
  );
};

export default App;
