import React from "react";
import styles from "./App.module.css";
import Header from "../Header/Header";
import Cover from "../../sections/Cover/Cover";

const App: React.FC = () => {
  return (
   <div className={styles.page}>
    <Header />
    <main>
      <Cover />
    </main>
   </div>
  );
};

export default App;