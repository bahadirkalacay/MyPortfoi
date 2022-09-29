import React from "react";
import styles from "../scss/_Navbar.module.scss";
import { ReactComponent as Logo } from "../imgs/logo.svg";


const Navbar = () => {



    return (
        <div className={`container-fluid ${styles.navBg}`}>
            <nav className={`container ${styles.navContainer}`}>
                <a href="/" className={styles.logo}>
                    <Logo />
                </a>
                <ul className={styles.navbarList}>
                    <li>
                        <a href="#aboutMe" className="scaleIn">About Me</a>
                    </li>
                    <li>
                        <a href="#projects" className="scaleIn">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="scaleIn">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
