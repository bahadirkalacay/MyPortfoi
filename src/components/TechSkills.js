import React, { useEffect } from "react";
import styles from "../scss/_TechSkills.module.scss";
import { ReactComponent as FrontEndImg } from "../imgs/front-end.svg";
import { ReactComponent as BackEndImg } from "../imgs/back-end-purple.svg";
import {
    techSkillAnimation,
    techSkillAnimationSmallScreen,
} from "./Animations";
import { breakLarge } from "../variables/variables";

const TechSkills = () => {
    useEffect(() => {
        const windowWidth = window.screen.width;

        if (windowWidth > breakLarge) {
            techSkillAnimation(
                "[data-tech-title-anim]",
                "[data-tech-card1-anim]",
                "[data-tech-card2-anim]"
            );
        } else {
            techSkillAnimationSmallScreen(
                "[data-tech-title-anim]",
                "[data-tech-card1-anim]",
                "[data-tech-card2-anim]"
            );
        }
    }, []);

    return (
        <div>
            <h3 className="secondaryTitle" data-tech-title-anim>
                Technical Skills
            </h3>
            <div className={`${styles.cardGrid}`}>
                <div
                    className={`${styles.skillCard} ${styles.frontEndCard}`}
                    data-tech-card1-anim>
                    <FrontEndImg className={styles.skillImg} />
                    <h4 className={styles.title}>Front End</h4>
                    <ul className={styles.skillList}>
                        <li>Strong fundamentals in HTML, CSS, and JavaScript (ES6).</li>
                        <li>Experienced in front-end frameworks: React and Redux.</li>
                        <li>Advanced animations with CSS.</li>
                        <li>Sass, TailwindCSS, MaterialUI, Bootstrap</li>
                        <li>Responsive, mobile-first design.</li>
                    </ul>
                </div>

                <div
                    className={`${styles.skillCard} ${styles.backEndCard}`}
                    data-tech-card2-anim>
                    <BackEndImg className={styles.skillImg} />
                    <h4 className={styles.title}>Back End</h4>
                    <ul className={styles.skillList}>
                        <li>Solid fundamentals in Node.js, Express.js.</li>
                        <li>Experienced in building RESTful Apps.</li>
                        <li>Full-stack Experiences.</li>
                        <li>HTTP requests handling.</li>
                        <li>User authentication: JSON Web Token (JWT).</li>
                        <li>Design pattern: MVC Architecture.</li>
                        <li>Database: SQL (MySQL) and Non-SQL (MongoDB).</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TechSkills;
