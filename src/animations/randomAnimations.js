import { elementsExist } from "./configs/utils";
import { getAnimationProperties, getScrollTriggerConfig } from "./configs/utils";
import { getRandomAnimationDirection } from "./configs/utils";

export function initializeRandomAnimations(gsap, ScrollTrigger) {
    let tl = gsap.timeline(); 
    const randomAnimationSelectors = '.news_grid .news_item_wrapper, .team_members-wrapper .team_member_item, [random-animation]';
    if (elementsExist(randomAnimationSelectors)) {
      document.querySelectorAll(randomAnimationSelectors).forEach((item) => {
        const animationProperties = getRandomAnimationDirection();
        tl.from(
          item,
          getAnimationProperties({
            ...animationProperties,
            scrollTrigger: getScrollTriggerConfig(
              item,
              "top 85%",
              "center center"
            ),
          })
        );
      });
    }
}