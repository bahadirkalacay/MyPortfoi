import React, { useEffect } from "react";
import Question from "./Question";
import QuizApp from "./QuizApp";
import MyGithub from "./MyGithub";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OtherProjects = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "[data-other-projects]",
                start: "top center",
            },
        });
        tl.from(
            "[data-other-projects]",
            {
                opacity: 0,
                duration: 1,
            }
         
        );
        tl.from("[data-other-project]", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.5,
        });
    }, []);

    return (
        <div className="container">
            <h2 className="primaryTitle" data-other-projects>
                Other works
            </h2>
            <Question />
            <QuizApp />
            <MyGithub />
        </div>
    );
};

export default OtherProjects;
