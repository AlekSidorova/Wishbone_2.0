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
import MeetTeam from '../../sections/MeetTeam/MeetTeam';
import Question from '../../sections/Question/Question';
import Footer from '../Footer/Footer';
import { useScrollReveal } from '../../utils/hooks/useScrollReveal';

const App: React.FC = () => {
  useScrollReveal({
    selector: '.fade-section',
    threshold: 0.15,
  });

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Cover className="fade-section" />
        <OurFirm className="fade-section"/>
        <PhotoSection
          title="Reeding House"
          text="Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet."
          backgroundImage={bg1}
          className="fade-section"
        />
        <HowWeDo className="fade-section"/>
        <PhotoSection
          title="The marble staircase"
          text="Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet."
          backgroundImage={bg2}
          className="fade-section"
        />
        <Customers className="fade-section"/>
        <PhotoSection
          title="The swirling staircase"
          text="Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet."
          backgroundImage={bg3}
          align="left"
          className="fade-section"
        />
        <FeaturedProjects className="fade-section"/>
        <MeetTeam className="fade-section"/>
        <Question className="fade-section"/>
      </main>
      <Footer />
    </div>
  );
};

export default App;
