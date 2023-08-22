import { elementsExist } from "./configs/utils"; 
import { getAnimationProperties } from "./configs/utils";

export function initializeSectionAnimations(gsap) {
  
 if (elementsExist('[animate-section-left]')) {
    gsap
      .timeline()
      .to(
        "[animate-section-left]",
        getAnimationProperties({
          clipPath: "inset(0 0% 0 0)",
          delay: 0,
        })
      )
      .to(
        "[animate-section-left]",
        getAnimationProperties({
          opacity: 1,
          delay: 0,
        })
      );
  }
}