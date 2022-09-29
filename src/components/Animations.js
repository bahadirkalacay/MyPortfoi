import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const titleFadeIn = {
    opacity: 0,
    duration: 1,
    stagger: .3,
};



export const landingPage = () => {
    const tl = gsap.timeline();

    tl.from(".bounceIn", {
        y: -200,
        opacity: 0,
        duration: 1,
        ease: "bounce.out",
    });
    tl.from(
        ".fadeIn",
        {
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            ease: "none",
        },
        "+=.5"
    );

    tl.from(".scaleIn", {
        opacity: 0,
        duration: 1,
        stagger: 0.4,
        ease: "none",
    });

    tl.to("[data-amplify-btn]", {
        scale: 1.1,
        duration: 1,
    });
};


export const eduFadeIn = (titles, items) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: titles,
            start: "bottom center",
        },
    })
        .from(titles, titleFadeIn)
        .from(items, {
            opacity: 0,
            duration: 1,
            stagger: 0.5,
        });
};

export const techSkillAnimation = (titles, card1, card2) => {
    gsap.registerPlugin(ScrollTrigger);

    const cardFlyTime = 1;
    const cardFlyIn = {
        opacity: 0,
        y: 200,
        duration: cardFlyTime,
    };
    const cardMoveTime = 0.5;
    const cardMove = {
        
        duration: cardMoveTime,
        ease: "power4.out",
        delay: 0.5,
    };

    gsap.timeline({
        scrollTrigger: {
            trigger: titles,
            start: "bottom center",
        },
    })
        .from(titles, titleFadeIn)
        .from(card1, cardFlyIn)
        .from(card2, { ...cardFlyIn }, `-=${cardFlyTime}`)
        .add("start")
        .to(card1, cardMove, "start")
        .to(card2, { ...cardMove }, "start");
};

export const techSkillAnimationSmallScreen = (titles, card1, card2) => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: titles,
            start: "bottom center",
        },
    });

    tl.from(titles, titleFadeIn);

    tl.from(card1, {
        xPercent: -100,
        duration: 1.5,
        ease: "bounce.out",
    });

    const tlCard2 = gsap.timeline({
        scrollTrigger: {
            trigger: card2,
            start: "top center",
        },
    });

    tlCard2.from(card2, {
        xPercent: 100,
        duration: 1.5,
        ease: "bounce.out",
    });
};

export const softSkillAnimation = (title, cards) => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: title,
            start: "top center",
        },
    });

    tl.from(title, titleFadeIn);

    tl.from(cards, {
        duration: 1,
        ease: "power3.out",
        opacity: 0,
        stagger: 0.2,
        scale: 0.5,
    });
};

export const softSkillAnimationSmallScreen = (title, cards) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(title, {
        scrollTrigger: {
            start: "top center",
            trigger: title,
        },
        ...titleFadeIn,
    });

    cards.forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                start: "top center",
                trigger: card,
            },
            duration: 1,
            ease: "back.out(1.7)",
            xPercent: -100,
        });
    });
};

export const titleAnimation = (titles) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(titles, {
        scrollTrigger: {
            trigger: titles,
            start: "top center",
        },
        ...titleFadeIn,
    });
}

export const projectsAnimation = (cards, screen) => {
    gsap.registerPlugin(ScrollTrigger);

    
    if (screen.matches) {
        cards.forEach((card) => {
            gsap.fromTo(
                card,
                {
                    xPercent: 100,
                },
                {
                    scrollTrigger: {
                        trigger: card,
                        start: "top center",
                    },
                    duration: 1.5,
                    ease: "bounce.out",
                    xPercent: 10,
                }
            );
        });
    } else {
       
        cards.forEach((card) => {
            gsap.fromTo(
                card,
                {
                    xPercent: 100,
                },
                {
                    scrollTrigger: {
                        trigger: card,
                        start: "top center",
                    },
                    duration: 1.5,
                    ease: "bounce.out",
                    xPercent: 0,
                }
            );
        });
    }
};

export const contactAnimation = (titles, card) => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            start: "bottom bottom",
            trigger: titles,
        },
    });

    tl.from(titles, {
        opacity: 0,
        duration: 1,
        stagger: 0.2,
    });

    tl.from(card, {
        opacity: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        scale: 0.5,
    });
};
