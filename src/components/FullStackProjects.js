import React, { useEffect } from "react";
import { breakLarge } from "../variables/variables";
import { projectsAnimation } from "./Animations";
import DeveloperBlog from "./DeveloperBlog";
import AppleShop from "./AppleShop";
import Instaverse from './Instaverse';

const FullStackProjects = () => {
    useEffect(() => {
        let screenWidth = window.matchMedia(
            `(min-width: ${breakLarge.toString()}px)`
        );
        const projectCards = document.querySelectorAll("[data-project-card]");

        projectsAnimation(projectCards, screenWidth);
        screenWidth.addEventListener("change", () => {
            projectsAnimation(projectCards, screenWidth);
        });
    }, []);

    return (
        <>
            <DeveloperBlog />
            <AppleShop /> 
            <Instaverse />
        </>
    );
};

export default FullStackProjects;
