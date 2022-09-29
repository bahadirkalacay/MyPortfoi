import React from "react";
import styles from "../scss/_OtherProjects.module.scss";

const QuizApp = () => {
  const gitHub = "https://github.com/bahadirkalacay/Quiz";
  const webLink = "https://quiz-theta-one.vercel.app/";

  return (
    <div className={styles.container} data-other-project>
      <h3 className={styles.title}>Quiz-App</h3>
      <h4 className={styles.subtitle}>Front-end</h4>
      <p className={styles.description}>
        Front project of question and answer system.
      </p>
      <p className={styles.technologies}>CSS, JavaScript, React</p>
      <a href={gitHub} className={styles.link} target="_blank" rel="noreferrer">
        Git
      </a>
      <a
        href={webLink}
        className={styles.link}
        target="_blank"
        rel="noreferrer"
      >
        Web
      </a>
    </div>
  );
};

export default QuizApp;
