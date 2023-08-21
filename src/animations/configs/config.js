import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export const COMMON_OPTIONS = {
  focus: 0,
  type: "loop",
  gap: "1rem",
  autoplay: true,
  speed: 1000,
  dragAngleThreshold: 30,
  autoWidth: false,
  rewind: false,
  rewindSpeed: 400,
  waitForTransition: false,
  updateOnMove: true,
  trimSpace: false,
};

// Helper Functions and Configuration
const defaultAnimationProperties = {
  duration: 1,
  ease: "power4.inOut",
};

const dataAttributeConfig = {
  "split-type": "words",
  target: "0",
  "plus-sign": "false",
};

function checkElementExistence(element) {
  return element !== null;
}

function checkLibrariesAvailability() {
    const gsapAvailable = gsap ? true : false;
    const scrollTriggerAvailable = ScrollTrigger ? true : false;
    const splitTextAvailable = SplitText ? true : false;

    if (!gsapAvailable) console.log("GSAP is not available");
    if (!scrollTriggerAvailable) console.log("ScrollTrigger is not available");
    if (!splitTextAvailable) console.log("SplitText is not available");

    return gsapAvailable && scrollTriggerAvailable && splitTextAvailable;
}


function getDataAttribute(element, attributeName) {
  return (
    element.getAttribute(`data-${attributeName}`) ||
    dataAttributeConfig[attributeName]
  );
}

export {
  defaultAnimationProperties,
  dataAttributeConfig,
  checkElementExistence,
  checkLibrariesAvailability,
  getDataAttribute,
};
