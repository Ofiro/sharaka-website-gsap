
import { elementsExist } from "./configs/utils";
import { getAnimationProperties, getScrollTriggerConfig } from "./configs/utils";

export function initializeBackgroundAnimations(gsap, ScrollTrigger) {
  if (
    elementsExist(
      ".background-color-blue, .background-color-pink, .background-color-cyan"
    )
  ) {
    document
      .querySelectorAll(
        ".background-color-blue, .background-color-pink, .background-color-cyan"
      )
      .forEach((background) => {
        gsap.from(
          background,
          getAnimationProperties({
            backgroundColor: "#fff",
            scrollTrigger: getScrollTriggerConfig(
              background,
              "top bottom",
              "bottom bottom"
            ),
          })
        );
      });
  }
}
