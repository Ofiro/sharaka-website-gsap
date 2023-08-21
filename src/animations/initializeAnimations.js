import { elementsExist } from "./configs/utils.js";
import { checkLibrariesAvailability } from "./configs/config.js";

function initializeAnimations(gsap, ScrollTrigger) {
  if (!checkLibrariesAvailability()) return;

  if (elementsExist("#navbar")) {
    import("./navbarAnimation.js").then(({ initializeNavbarAnimation }) => {
      initializeNavbarAnimation(gsap, ScrollTrigger);
    });
  }

  
  if (elementsExist(".impact_number-wrapper")) {
    import("./impactNumberAnimation.js").then(({ initializeImpactNumberAnimation }) => {
        initializeImpactNumberAnimation(gsap, ScrollTrigger);
    });
  }
  
  if (
    elementsExist(
      ".background-color-blue, .background-color-pink, .background-color-cyan"
    )
  ) {
    import("./backgroundAnimations.js").then(({ initializeBackgroundAnimations }) => {
      initializeBackgroundAnimations(gsap, ScrollTrigger);
    });
  }

  if (elementsExist("[animate-lines-up], [animate-words-up], [scrub-words]")) {
    import("./textAnimations.js").then(({ initializeTextAnimations }) => {
      initializeTextAnimations(gsap, ScrollTrigger);
    });
  }

  // Dynamic import for Fade In animations if required elements exist
  if (elementsExist("[animate-fade-in]")) {
    import("./fadeInAnimations.js").then(({ initializeFadeInAnimations }) => {
      initializeFadeInAnimations(gsap, ScrollTrigger);
    });
  }

  // Dynamic import for Section animations if required elements exist
  if (elementsExist("[animate-section-left]")) {
    import("./sectionAnimations.js").then(({ initializeSectionAnimations }) => {
      initializeSectionAnimations(gsap);
    });
  }

  // Dynamic import for Random animations if required elements exist
  if (
    elementsExist(
      ".news_grid .news_item_wrapper, .team_members-wrapper .team_member_item, [random-animation]"
    )
  ) {
    import("./randomAnimations.js").then(({ initializeRandomAnimations }) => {
      initializeRandomAnimations(gsap, ScrollTrigger);
    });
  }

  // Dynamic import for Button animations if required elements exist
  if (elementsExist(".button")) {
    import("./buttonAnimations.js").then(({ initializeButtonAnimations }) => {
      initializeButtonAnimations(gsap, ScrollTrigger);
    });
  }
  
  if (elementsExist(".form_input_wrap")) {
    import("./formAnimations.js").then(({ initializeFormAnimations }) => {
      initializeFormAnimations(gsap, ScrollTrigger);
    });
  }
}

export { initializeAnimations };
