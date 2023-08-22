/**
 * Module: Animation Helper Functions
 * Description: Provides helper functions for animations and interactions.
 */

import {
    defaultAnimationProperties,
    getDataAttribute
  } from './config.js';
  
  /**
   * Returns configuration for ScrollTrigger.
   * @param {HTMLElement} triggerElement - The trigger element for ScrollTrigger.
   * @param {string} start - The starting point for the trigger.
   * @param {string} end - The ending point for the trigger.
   * @param {string} toggleActions - Toggle actions for the trigger.
   * @returns {object} - ScrollTrigger configuration.
   */
  function getScrollTriggerConfig(
    triggerElement,
    start = "top 80%",
    end = "center center",
    toggleActions = "play none none none"
  ) {
    return {
      trigger: triggerElement,
      start: start,
      end: end,
      toggleActions: toggleActions,
      scrub: true,
    };
  }
  
  /**
   * Returns a random animation direction configuration.
   * @returns {object} - Random animation direction configuration.
   */
  function getRandomAnimationDirection() {
    const directions = [
      { clipPath: "inset(0 100% 0 0)", opacity: 0 }, // Left to Right
      { clipPath: "inset(0 0 0 100%)", opacity: 0 }, // Right to Left
      { clipPath: "inset(100% 0 0 0)", opacity: 0 }, // Bottom to Top
      { clipPath: "inset(0 0 100% 0)", opacity: 0 }, // Top to Bottom
    ];
    return directions[Math.floor(Math.random() * directions.length)];
  }
  
  /**
   * Splits the text content of an element based on data attributes.
   * @param {HTMLElement} element - The element to split text content.
   * @param {string} defaultType - Default split type.
   * @returns {Array} - Array of split text content.
   */
  function splitTextContent(element, defaultType = "words") {
    const type = getDataAttribute(element, "split-type") || defaultType;
    const splitChild = new SplitText(element, {
      type: type,
      linesClass: `${type}Child`,
    });
    return splitChild[type] || splitChild.words;
  }
  
  /**
   * Combines default and specific animation properties.
   * @param {object} specificProperties - Specific animation properties.
   * @returns {object} - Combined animation properties.
   */
  function getAnimationProperties(specificProperties) {
    return { ...defaultAnimationProperties, ...specificProperties };
  }
  
  /**
   * Checks if all elements specified by selectors exist in the DOM.
   * @param {string|string[]} selectors - Selectors for elements.
   * @returns {boolean} - True if all elements exist, otherwise false.
   */
  function elementsExist(selectors) {
    if (Array.isArray(selectors)) {
      return selectors.every(selector => document.querySelector(selector));
    }
    return !!document.querySelector(selectors);
  }
  
  /**
   * Calculates zoom transform for an element.
   * @param {number[][]} bounds - Element bounds.
   * @param {number} containerWidth - Container width.
   * @param {number} containerHeight - Container height.
   * @returns {object} - Zoom transform properties (scale, translate).
   */
  function getZoomTransform(bounds, containerWidth, containerHeight) {
    const dx = bounds[1][0] - bounds[0][0];
    const dy = bounds[1][1] - bounds[0][1];
    const x = (bounds[0][0] + bounds[1][0]) / 2;
    const y = (bounds[0][1] + bounds[1][1]) / 2;
    const scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / containerWidth, dy / containerHeight)));
    const translate = [containerWidth / 2 - scale * x, containerHeight / 2 - scale * y];
    
    return { scale, translate };
  }
  
  /**
   * Displays Makevision banner in console.
   */
  function displayMakevisionBanner() {
    console.log(`
      __  __       _              _     _             
     |  \\/  |     | |            (_)   (_)            
     | \\  / | __ _| | _______   ___ ___ _  ___  _ __  
     | |\\/| |/ _\\\` | |/ / _ \\ \\ / / / __| |/ _ \\| '_ \\ 
     | |  | | (_| |   <  __/\\ V /| \\__ \\ | (_) | | | |
     |_|  |_|\\__,_|_|\\_\\___| \\_/ |_|___/_|\\___/|_| |_|
                                                    
                                                    
    This website was built with love by Makevision
    info@makevision.agency
    `);
  }
  
  export {
    getScrollTriggerConfig,
    getRandomAnimationDirection,
    getAnimationProperties,
    splitTextContent,
    elementsExist,
    getZoomTransform,
    displayMakevisionBanner
  };
  