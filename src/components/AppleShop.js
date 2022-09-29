import React from "react";
import styles from "../scss/_FullStackProjects.module.scss";
import { ReactComponent as GoArrow } from "../imgs/go.svg";
import appleShop from "../imgs/AppleShop.png"

const AppleShop = () => {
    const GIT_URL = "https://github.com/bahadirkalacay/AppleShop";
    const WEB_URL = "https://apple-shop1.vercel.app/shopping-cart";

    return (
        <div className={`${styles.card} ${styles.card1}`} data-project-card>
            <div className={`${styles.cardLayout}`}>
                <div className={styles.cardText}>
                    <h4 className={styles.title}>Apple Shop</h4>
                    <div className={styles.links}>
                        <a href={GIT_URL}>GitHub</a>
                        <span className={styles.linkSeparator}>|</span>
                        <a href={WEB_URL}>Web</a>
                    </div>
                    <a
                        href={WEB_URL}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.goButton}>
                        <div className={styles.goCircle}>
                            <GoArrow className={styles.arrow} />
                        </div>
                    </a>
                    <div className={styles.projectDescription}>
                        An Online Apple Shop.
                        <ul>
                            <li>Front-end states management: React + React Hooks</li>
                            <li>Front-End App.</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>

                <a href={WEB_URL} className={styles.projectLink}>
                    <img
                        src={appleShop}
                        alt="Apple Shop page"
                        className={styles.projectImg}
                    />
                </a>
            </div>
        </div>
    );
};

export default AppleShop;
