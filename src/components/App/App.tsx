import React from "react";
import styles from "./App.module.css";
import Header from "../Header/Header";
import Cover from "../../sections/Cover/Cover";
import OurFirm from "../../sections/OurFirm/OurFirm";
import PhotoSection from "../../sections/PhotoSection/PhotoSection";
import bg1 from "../../assets/images/background_1.png";

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
        backgroundImage={bg1} />
    </main>
   </div>
  );
};

export default App;