// init.js

// Import core GSAP library and plugins
import gsap from 'gsap/gsap.min.js';
import SplitText from 'gsap/SplitText.min.js';
import ScrollTrigger from 'gsap/ScrollTrigger.min.js';
import ScrollSmoother from 'gsap/ScrollSmoother.min.js';
import "external-svg-loader";

// Import custom styles
import './style.scss';

// Import Splide styles
import '@splidejs/splide/dist/css/splide.min.css';

// Import utility functions and initializers
import { checkLibrariesAvailability } from './config.js';
import { initializeAnimations } from './animations.js';
import { initializeGallery, initializeOurWork } from './splideInitializers.js';
import { createSVGElements } from './svgHandler';
import { handleTeamBioPopup } from './teamBioHandler';
import { applyHoverEffectToSplideWork, applyProjectCardHoverEffect, applyRegionCardHoverEffects, applyRegionItemHoverEffects } from './effects';
import { displayMakevisionBanner } from './utils';
import { renderGitHubGlobe, renderWorldMap } from './worldMap';
import { renderGlobe } from './globe';
document.addEventListener("DOMContentLoaded", function() {

// Register GSAP Plugins
gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);
console.log("Direct SplitText check:", SplitText);
window.SplitText = SplitText;
// Initialization
if (checkLibrariesAvailability()) {
  initializeAnimations();
}

const isHomePage = window.location.pathname === '/';
if (isHomePage) {
  initializeGallery();
  initializeOurWork();
}
displayMakevisionBanner();
// Apply hover effect to Splide work on all pages
applyHoverEffectToSplideWork();
createSVGElements();
handleTeamBioPopup();
applyProjectCardHoverEffect();
applyRegionCardHoverEffects();
applyRegionItemHoverEffects();
renderGlobe();
});
