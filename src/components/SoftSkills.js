import React, { useEffect } from "react";
import styles from "../scss/_SoftSkills.module.scss";
import { ReactComponent as SpeakSvg } from "../imgs/speak.svg";
import { ReactComponent as BookSvg } from "../imgs/book.svg";
import { ReactComponent as CuriousSvg } from "../imgs/curious.svg";
import { ReactComponent as ThinkingSvg } from "../imgs/lightbulb.svg";
import {
    softSkillAnimation,
    softSkillAnimationSmallScreen,
} from "./Animations";
import { breakXSmall } from "../variables/variables";

const SoftSkills = () => {
    useEffect(() => {
        const screenWidth = window.screen.width;

        if (screenWidth > breakXSmall) {
            softSkillAnimation(
                "[data-soft-skill-title]",
                "[data-soft-skill-card]"
            );
        } else {
            const cards = document.querySelectorAll("[data-soft-skill-card]");
            softSkillAnimationSmallScreen("[data-soft-skill-title]", cards);
        }
    }, []);

    return (
        <div>
            <h3 className="secondaryTitle" data-soft-skill-title>
                Soft Skills
            </h3>
            <div className={styles.cardGrid}>
                <div
                    className={`${styles.card} ${styles.cardTopLeft}`}
                    data-soft-skill-card>
                    <BookSvg className={styles.icon} />
                    <h4 className={styles.cardTitle}>Self-Learning Ability</h4>
                    <p className={styles.cardDetails}>
                        Being able to acept new technology fast.
                    </p>
                </div>
                <div
                    className={`${styles.card} ${styles.cardTopRight}`}
                    data-soft-skill-card>
                    <ThinkingSvg className={styles.icon} />
                    <h4 className={styles.cardTitle}>
                        Problem Analysing and Solving Ability
                    </h4>
                    <p className={styles.cardDetails}>
                        Good at brainstorming and using available resources to
                        tackle problems.
                    </p>
                </div>
                <div
                    className={`${styles.card} ${styles.cardBottomLeft}`}
                    data-soft-skill-card>
                    <CuriousSvg className={styles.icon} />
                    <h4 className={styles.cardTitle}>Curious</h4>
                    <p className={styles.cardDetails}>
                        Enjoying stepping out of my comfort zone to learn new
                        skills.
                    </p>
                </div>
                <div
                    className={`${styles.card} ${styles.cardBottomRight}`}
                    data-soft-skill-card>
                    <SpeakSvg className={styles.icon} />
                    <h4 className={styles.cardTitle}>Communication</h4>
                    <p className={styles.cardDetails}>
                        Good communication and interpersonal skills.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SoftSkills;
