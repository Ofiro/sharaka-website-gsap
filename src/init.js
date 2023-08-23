import "external-svg-loader";
import "./styles/style.scss";
import { initializeAnimations } from "./animations/initializeAnimations.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { displayMakevisionBanner } from "./animations/configs/utils";
import { checkLibrariesAvailability } from "./animations/configs/config";

// Expose GSAP plugins globally
window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;
window.SplitText = SplitText;

/**
 * Initialize animations, plugins, and resource loading when the DOM content is loaded.
 */
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM content loaded");
  // Display Makevision banner
  displayMakevisionBanner();

  // Register SplitText and ScrollTrigger plugins
  gsap.registerPlugin(SplitText, ScrollTrigger);

  // Check if the required libraries are available and initialize animations
  if (checkLibrariesAvailability()) {
    initializeAnimations(gsap, ScrollTrigger);
  }

  // Extract requirements from body's data attribute
  const bodyData = document.body.getAttribute("data-requires") || "";
  const pageRequiresHoverEffects = bodyData.includes("hover-effects");
  const pageRequiresSVG = bodyData.includes("svg");
  const pageRequiresTeamBio = bodyData.includes("team-bio");
  const pageRequiresGlobe = bodyData.includes("globe");

  // Load resources based on the specified requirements
  if (pageRequiresHoverEffects) {
    import("./utils/effects.js").then(({ 
      applyHoverEffectToSplideWork,
      applyProjectCardHoverEffect,
      applyRegionCardHoverEffects,
      applyRegionItemHoverEffects 
    }) => {
      applyHoverEffectToSplideWork();
      applyProjectCardHoverEffect();
      applyRegionCardHoverEffects();
      applyRegionItemHoverEffects();
    });
  }

  if (pageRequiresSVG) {
    import("./utils/svgHandler.js").then(({ createSVGElements }) => {
      createSVGElements();
      console.log("SVG elements created");
    });
  }

  if (pageRequiresTeamBio) {
    import("./utils/teamBioHandler.js").then(({ handleTeamBioPopup }) => {
      handleTeamBioPopup();
    });
  }

  if (pageRequiresGlobe) {
    const worldMapContainer = document.getElementById("world-map-container");
    import("./globe/js/main.js").then(({ renderGlobe }) => {
      renderGlobe(worldMapContainer);
    });
  }
});
