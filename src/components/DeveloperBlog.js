import React from "react";
import styles from "../scss/_FullStackProjects.module.scss";
import { ReactComponent as GoArrow } from "../imgs/go.svg";
import developerblog from "../imgs/developer-blog.png"

const DeveloperBlog = () => {
    const GIT_URL = "https://github.com/bahadirkalacay/DeveloperBlog";
    const WEB_URL = "https://developer-blog-615yojyd9-bahadirkalacay.vercel.app/";

    return (
        <div className={`${styles.card} ${styles.card1}`} data-project-card>
            <div className={`${styles.cardLayout}`}>
                <div className={styles.cardText}>
                    <h4 className={styles.title}>MERN Stack Developer Blog</h4>
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
                        A <strong>Full stack</strong> shopping list API using MongoDB, Express,
                        React, Node (MERN).
                        <ul>
                            <li>Front-end states management: React Hooks + Redux.</li>
                            <li>Framework for UI styling: TailwindCSS.</li>
                            <li>Back-end: Node.js and Express.</li>
                            <li>
                                RESTful API: using HTTP requests to communicate
                                with the database (GET, POST, PUT, DELETE).
                            </li>
                            <li>User Authentication: JSON Web Token (JWT).</li>
                            <li>Full stack development + deployment.</li>
                        </ul>
                    </div>
                </div>

                <a href={WEB_URL} className={styles.projectLink}>
                    <img
                        src={developerblog}
                        alt="Developer Blog App"
                        className={styles.projectImg}
                    />
                </a>
            </div>
        </div>
    );
};

export default DeveloperBlog;
