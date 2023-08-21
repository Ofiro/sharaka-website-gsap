  import { elementsExist } from "./configs/utils";
  import { getAnimationProperties, getScrollTriggerConfig } from "./configs/utils";
  import { getDataAttribute } from "./configs/config";
  
  export function initializeImpactNumberAnimation(gsap, ScrollTrigger) {
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
    }