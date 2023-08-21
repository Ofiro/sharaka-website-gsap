
import { elementsExist } from "./configs/utils";
import { getAnimationProperties, getScrollTriggerConfig } from "./configs/utils";

export function initializeFormAnimations(gsap, ScrollTrigger) {
if (elementsExist('.form_input_wrap')) {
    document.querySelectorAll('.form_input_wrap').forEach((element) => {
        gsap.fromTo(
            element,
            { clipPath: "inset(0 100% 0 0)", opacity: 0.1 },
            getAnimationProperties({
                clipPath: "inset(0 0% 0 0)",
                opacity: 1,
                scrollTrigger: {
                    ...getScrollTriggerConfig(element),
                    scrub: false,
                    toggleActions: "play none none none",
                },
            })
        );
    });
  }
}