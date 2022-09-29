import React, { useState } from "react";

import modal from "../scss/_modal.module.scss";
import btn from "../scss/_button.module.scss";
import styles from "../scss/_Education.module.scss";

const EducationItem = ({ eduItem, last }) => {
    const [showModal, setShowModal] = useState(false);
    const eduModal = document.querySelector("[data-modal]");
    window.onclick = (e) => {
        if (e.target === eduModal) {
            setShowModal(false);
        }
    };

    return (
        <li className={`${styles.eduListItem} edu-li-anim`}>
            <div className={styles.eduItemGrid}>
                <button
                    type="button"
                    className={`${btn.btn} ${styles.eduButton}`}
                    onClick={() => setShowModal(true)}>
                    {eduItem.title}
                </button>
                <div className={styles.eduTime}>{eduItem.time}</div>

                <ul
                    className={`${styles.eduDescriptionList} ${
                        last ? styles.lastItem : ""
                    }`}>
                    {eduItem.descriptions.map((des, index) => (
                        <li key={index}>{des}</li>
                    ))}
                </ul>
            </div>

            {/* -------------------------modal-------------------------- */}
            <div
                data-modal
                className={`${modal.modalSlide} ${
                    showModal ? modal.modalSlideActive : ""
                } ${styles.breakControl}`}>
                <div className={`${modal.modalSlideContent} `}>
                    <div className={`${modal.modalSlideContentBody}`}>
                        <button
                            className={`${modal.closeButton}`}
                            onClick={() => setShowModal(false)}>
                            &times;
                        </button>
                        <ul>
                            {eduItem.descriptions.map((des, index) => (
                                <li key={index} className={modal.descriptionList}>{des}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default EducationItem;
