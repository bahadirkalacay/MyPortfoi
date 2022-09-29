import React from "react";
import styles from "../scss/_OtherProjects.module.scss";


const MyGithub = () => {
    const gitHub = "https://github.com/bahadirkalacay?tab=repositories";
    const webLink = "https://github.com/bahadirkalacay?tab=repositories";

    return (
        <div className={styles.container} data-other-project>
            <h3 className={styles.title}>My Github Repository</h3>
            <h4 className={styles.subtitle}>Front-end</h4>
            <p className={styles.description}>
            All the projects I have done within the scope of freelancer and courses   
            </p>
            <p className={styles.technologies}>HTML, CSS, JavaScript, Bootstrap, TailwindCSS, MaterialUI, React, Redux, Nodejs</p>
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

export default MyGithub;
