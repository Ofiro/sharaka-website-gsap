import { elementsExist } from "./configs/utils";
import { getAnimationProperties, getScrollTriggerConfig } from "./configs/utils";
import { splitTextContent } from "./configs/utils";

export function initializeTextAnimations(gsap, ScrollTrigger) {
const animateText = (selectors, properties = {}) => {
    if (elementsExist(selectors)) {
        $(selectors).each((_, element) => {
            const splitElements = splitTextContent(element);
            gsap.from(
                splitElements,
                getAnimationProperties({
                    ...properties,
                    stagger: 0.25,
                    scrollTrigger: getScrollTriggerConfig(
                        element,
                        "top 90%",
                        "bottom center"
                    ),
                })
            );
        });
    }
};


  animateText("[animate-lines-up]", { y: 50, opacity: 0 });
  animateText("[animate-words-up]", { opacity: 0, stagger: 0.15 });
  animateText("[scrub-words]", { opacity: 0.1, stagger: 0.15 });
}