import { elementsExist } from "./configs/utils";
import { getAnimationProperties, getScrollTriggerConfig } from "./configs/utils";

export function initializeButtonAnimations(gsap, ScrollTrigger) {
  if (elementsExist('.button')) {
    document.querySelectorAll('.button').forEach((element) => {
      gsap.fromTo(
        element,
        { clipPath: "inset(0 100% 0 0)" },
        getAnimationProperties({
          clipPath: "inset(0 0% 0 0)",
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
