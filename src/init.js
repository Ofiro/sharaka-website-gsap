
import "external-svg-loader";
import './style.scss';
import { checkLibrariesAvailability } from './config.js';
import { initializeAnimations } from './animations.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);
window.SplitText = SplitText;

document.addEventListener("DOMContentLoaded", function() {
    if (checkLibrariesAvailability()) {
        initializeAnimations();
    }

    const bodyData = document.body.getAttribute('data-requires') || "";

    const pageRequiresHoverEffects = bodyData.includes("hover-effects");
    const pageRequiresSVG = bodyData.includes("svg");
    const pageRequiresTeamBio = bodyData.includes("team-bio");
    const pageRequiresWorldMap = bodyData.includes("world-map");
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
        });
    }

    if (pageRequiresTeamBio) {
        import('./teamBioHandler.js').then(({ handleTeamBioPopup }) => {
            handleTeamBioPopup();
        });
    }

    if (pageRequiresWorldMap) {
        import('./worldMap.js').then(({ renderGitHubGlobe, renderWorldMap }) => {
            renderGitHubGlobe();
            renderWorldMap();
        });
    }

    if (pageRequiresGlobe) {
        import('./globe.js').then(({ renderGlobe }) => {
            renderGlobe();
        });
    }
});