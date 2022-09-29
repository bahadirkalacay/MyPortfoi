import React from "react";
import styles from "../scss/_OtherProjects.module.scss";

const  Question = () => {
    const gitHub = "https://github.com/bahadirkalacay/Question-Answer-RestApi";
    const webLink = "https://github.com/bahadirkalacay/Question-Answer-RestApi";

    return (
        <div className={styles.container} data-other-project>
            <h3 className={styles.title}>Question-Answer-RestApi</h3>
            <h4 className={styles.subtitle}>Back-end</h4>
            <p className={styles.description}>
            Backend project of question and answer system.
            </p>
            <p className={styles.technologies}>
                Expressjs,Javascript,Nodejs,JWT,MongoDB
            </p>
            <a
                href={gitHub}
                className={styles.link}
                target="_blank"
                rel="noreferrer">
                Git
            </a>
            <a
                href={webLink}
                className={styles.link}
                target="_blank"
                rel="noreferrer">
                Web
            </a>
        </div>
    );
};

export default Question;
