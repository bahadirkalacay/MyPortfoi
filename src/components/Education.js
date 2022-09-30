import React, {useEffect} from "react";
import styles from "../scss/_Education.module.scss";
import { education } from "../variables/education.js";
import EducationItem from "./EducationItem";
import {eduFadeIn} from './Animations';

const Education = () => {

    useEffect(() => {
        eduFadeIn('.edu-title', '.edu-li-anim');
    }, []);

    return (
        <div className={styles.eduContainer}>
            <h2 className="primaryTitle edu-title">My Resume</h2>
            <ul className={styles.eduList}>
                {education.map((item, index) => (
                    <EducationItem
                        key={index}
                        eduItem={item}
                        last={index === education.length - 1 ? true : false}
                    />
                ))}
                <div className={`${styles.arrow} edu-li-anim`}></div>
            </ul>
        </div>
    );
};

export default Education;
