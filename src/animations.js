import {
  checkElementExistence,
  getDataAttribute,
  checkLibrariesAvailability
} from './config.js';
import {
  getScrollTriggerConfig,
  getRandomAnimationDirection,
  getAnimationProperties,
  splitTextContent,
  elementsExist
} from './utils.js';

function initializeAnimations() {
  if (!checkLibrariesAvailability()) return;

  // Navbar Animation
  const $navbar = $("#navbar");
  if ($navbar.length) {
    ScrollTrigger.create({
      trigger: $navbar[0],
      start: "top top",
      endTrigger: "body",
      end: "bottom top",
      pin: true,
      pinSpacing: false
    });
  }

  // Impact Number Animation
  if (elementsExist('.impact_number-wrapper')) {
    gsap.from(
      ".impact_number-wrapper",
      getAnimationProperties({
        opacity: 0,
        y: 100,
        stagger: 0.3,
        scrollTrigger: {
          ...getScrollTriggerConfig(
            ".impact_number-wrapper",
            "top 90%",
            "bottom 60%"
          ),
          scrub: true,
          toggleActions: "play none none reverse",
        },
      })
    );
  }

  // Fade In Animations
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

  // Number Animation
  if (elementsExist('.number_block')) {
    document.querySelectorAll(".number_block").forEach((block) => {
      const target = parseInt(getDataAttribute(block, "target"), 10);
      const plusSign = getDataAttribute(block, "plus-sign") === "true";
      block.textContent = plusSign ? "0+" : "0";
      gsap.to(
        {},
        getAnimationProperties({
          onUpdate: function () {
            block.textContent = plusSign
              ? `${Math.round(this.progress() * target)}+`
              : `${Math.round(this.progress() * target)}`;
          },
          scrollTrigger: {
            ...getScrollTriggerConfig(block, "top 80%", "bottom 20"),
            scrub: false,
            toggleActions: "play none none none",
          },
        })
      );
    });
  }

  // Background Color Animation
  if (elementsExist('.background-color-blue, .background-color-pink, .background-color-cyan')) {
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

  // Animate Sections
  if (elementsExist('[animate-section-left]')) {
    gsap
      .timeline()
      .to(
        "[animate-section-left]",
        getAnimationProperties({
          clipPath: "inset(0 0% 0 0)",
          delay: 0.3,
        })
      )
      .to(
        "[animate-section-left]",
        getAnimationProperties({
          opacity: 1,
          delay: 0.1,
        })
      );
  }

  function clearAnimations() {
    // Reset timeline
    
    // List of selectors for elements you want to clear GSAP styles from
    const elementsToClear = [
        '.news_grid .news_item_wrapper', 
        '.team_members-wrapper .team_member_item', 
        '[random-animation]'
    ];
    
    // Loop through the selectors and clear GSAP styles
    elementsToClear.forEach(selector => {
        gsap.set(selector, { clearProps: "all" });
    });
}

let tl = gsap.timeline();  // Create a global timeline

function animateTabItems() {
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

// Using event delegation
function attachTabListeners() {
  const tabLinks = document.querySelectorAll('.tab-link');
  tabLinks.forEach(link => {
      link.addEventListener('click', function() {
          clearAnimations();
          // We're giving a slight delay to ensure that Webflow has switched the tab before we reinitialize the animations.
          console.log("Tab item clicked and animations reset!");
      });
  });
}

// Call the function to attach the listeners
attachTabListeners();

animateTabItems();
// Button and Form Input Animations
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

// Invoke initialization
if (checkLibrariesAvailability()) {
}

export { initializeAnimations };
