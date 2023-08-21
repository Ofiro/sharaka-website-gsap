import { elementsExist } from "./configs/utils";
import { getAnimationProperties, getScrollTriggerConfig } from "./configs/utils";

export function initializeFadeInAnimations(gsap, ScrollTrigger) {
if (elementsExist('[animate-fade-in]')) {
    document.querySelectorAll("[animate-fade-in]").forEach((element) => {
      gsap.to(
        element,
        getAnimationProperties({
          opacity: 1,
          scrollTrigger: getScrollTriggerConfig(element),
        })
      );
    });
  }
}