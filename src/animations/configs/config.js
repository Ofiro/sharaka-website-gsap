/**
 * Module: Common Animation Configurations and Helper Functions
 * Description: Provides common animation options and helper functions.
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

/**
 * Default options for common animations.
 * @type {object}
 */
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

/**
 * Default properties for animations.
 * @type {object}
 */
export const defaultAnimationProperties = {
  duration: 1,
  ease: "power4.inOut",
};

/**
 * Configuration for data attributes.
 * @type {object}
 */
const dataAttributeConfig = {
  "split-type": "words",
  target: "0",
  "plus-sign": "false",
};

/**
 * Checks if an element exists in the DOM.
 * @param {HTMLElement} element - The element to check.
 * @returns {boolean} - True if the element exists, otherwise false.
 */
function checkElementExistence(element) {
  return element !== null;
}

/**
 * Checks the availability of required libraries (GSAP, ScrollTrigger, SplitText).
 * Logs availability status for each library.
 * @returns {boolean} - True if all libraries are available, otherwise false.
 */
function checkLibrariesAvailability() {
  const gsapAvailable = gsap ? true : false;
  const scrollTriggerAvailable = ScrollTrigger ? true : false;
  const splitTextAvailable = SplitText ? true : false;
  return gsapAvailable && scrollTriggerAvailable && splitTextAvailable;
}

/**
 * Gets the value of a data attribute from an element or uses the default value.
 * @param {HTMLElement} element - The element to retrieve the attribute from.
 * @param {string} attributeName - The name of the data attribute.
 * @returns {string} - The value of the data attribute or the default value.
 */
function getDataAttribute(element, attributeName) {
  return (
    element.getAttribute(`data-${attributeName}`) ||
    dataAttributeConfig[attributeName]
  );
}

export {
  dataAttributeConfig,
  checkElementExistence,
  checkLibrariesAvailability,
  getDataAttribute,
};
