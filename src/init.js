
import "external-svg-loader";
import "./styles/style.scss"
import { checkLibrariesAvailability } from './config.js';
import { initializeAnimations } from './animations/initializeAnimations.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
  
window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;
window.SplitText = SplitText;
// Listener
document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(SplitText, ScrollTrigger);

  
    if (checkLibrariesAvailability()) {
        initializeAnimations(gsap, ScrollTrigger);
    }

    const bodyData = document.body.getAttribute('data-requires') || "";
    const pageRequiresHoverEffects = bodyData.includes("hover-effects");
    const pageRequiresSVG = bodyData.includes("svg");
    const pageRequiresTeamBio = bodyData.includes("team-bio");
    const pageRequiresGlobe = bodyData.includes("globe");

    // For pages requiring Splide Gallery and Our Work initializers
    if (bodyData.includes("splide")) {
        import('@splidejs/splide/dist/css/splide.min.css').then(() => {
            import('./splideInitializers.js').then(({ initializeGallery, initializeOurWork }) => {
                initializeGallery();
                initializeOurWork();
            });
        });
    }

    // Load resources based on the requirements specified in body's data attribute
    if (pageRequiresHoverEffects) {
        import('./effects.js').then(({ 
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
        import('./svgHandler.js').then(({ createSVGElements }) => {
            createSVGElements();
            console.log("SVG elements created");
        });
    }

    if (pageRequiresTeamBio) {
        import('./teamBioHandler.js').then(({ handleTeamBioPopup }) => {
            handleTeamBioPopup();
        });
    }

    if (pageRequiresGlobe) {
        import('./globe.js').then(({ renderGlobe }) => {
            renderGlobe();
        });
    }
});