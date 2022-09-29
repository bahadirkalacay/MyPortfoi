import React, { useEffect } from "react";
import styles from "../scss/_LandingPage.module.scss";
import btn from "../scss/_button.module.scss";
import { landingPage } from "../components/Animations";

const LandingPage = () => {
  useEffect(() => {
    landingPage();
  });

  return (
    <div className={`container ${styles.landingContainer}`}>
      <h3 className={`${styles.subtitle} fadeIn`}>Welcome to My Portfoi</h3>
      <h1 className={`${styles.mainTitle} bounceIn`}>
        Everything About Me
      </h1>
      <p className={`${styles.description} fadeIn`}>
        I am developing software application by using JavaScript technologies
        within the terms of system development lifecycle, and I am also trying
        to use up-to date technologies by following the news and improvements in
        the software area.
      </p>
      <a
        href="#contact"
        className={`${btn.btn} ${btn.btnPrimary} ${styles.hireMeButton} scaleIn`}
        data-amplify-btn
      >
        Contact Me
      </a>
    </div>
  );
};

export default LandingPage;
