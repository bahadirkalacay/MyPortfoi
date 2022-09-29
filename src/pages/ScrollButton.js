import React, { useState } from "react";
import { ReactComponent as UpwardArrow } from "../imgs/arrow_upward.svg";
import styles from "../scss/_ScrollButton.module.scss";
import btn from "../scss/_button.module.scss";



const ScrollButton = () => {
    const [visiable, setVisible] = useState(false);

    function toggleVisible() {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    window.addEventListener("scroll", toggleVisible);

    return (
        <button
            className={`${btn.btn} ${styles.scrollBtn} ${
                visiable ? styles.visiable : ""
            }`}
            onClick={scrollToTop}
            >
            <UpwardArrow className={styles.upArrow} />
        </button>
    );
};

export default ScrollButton;
