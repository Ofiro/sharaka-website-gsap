
import {
    defaultAnimationProperties,
    checkLibrariesAvailability,
    getDataAttribute
  } from './config.js';
  
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
  
  function getRandomAnimationDirection() {
    const directions = [
      { clipPath: "inset(0 100% 0 0)", opacity: 0 }, // Left to Right
      { clipPath: "inset(0 0 0 100%)", opacity: 0 }, // Right to Left
      { clipPath: "inset(100% 0 0 0)", opacity: 0 }, // Bottom to Top
      { clipPath: "inset(0 0 100% 0)", opacity: 0 }, // Top to Bottom
    ];
    return directions[Math.floor(Math.random() * directions.length)];
  }
  function splitTextContent(element, defaultType = "words") {
    const type = getDataAttribute(element, "split-type") || defaultType;
    const splitChild = new SplitText(element, {
      type: type,
      linesClass: `${type}Child`,
    });
    return splitChild[type] || splitChild.words;
  }
  
  
  function getAnimationProperties(specificProperties) {
    return { ...defaultAnimationProperties, ...specificProperties };
  }
  
  export {
    getScrollTriggerConfig,
    getRandomAnimationDirection,
    getAnimationProperties,
    splitTextContent
  };
  
  export function elementsExist(selectors) {
    if (Array.isArray(selectors)) {
        return selectors.every(selector => document.querySelector(selector));
    }
    return !!document.querySelector(selectors);
  }
  export function getZoomTransform(bounds, containerWidth, containerHeight) {
    const dx = bounds[1][0] - bounds[0][0];
    const dy = bounds[1][1] - bounds[0][1];
    const x = (bounds[0][0] + bounds[1][0]) / 2;
    const y = (bounds[0][1] + bounds[1][1]) / 2;
    const scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / containerWidth, dy / containerHeight)));
    const translate = [containerWidth / 2 - scale * x, containerHeight / 2 - scale * y];
    
    return { scale, translate };
  }
  export function displayMakevisionBanner() {
    console.log(`
      __  __       _              _     _             
     |  \/  |     | |            (_)   (_)            
     | \  / | __ _| | _______   ___ ___ _  ___  _ __  
     | |\/| |/ _\` | |/ / _ \\ \\ / / / __| |/ _ \\| '_ \\ 
     | |  | | (_| |   <  __/\\ V /| \\__ \\ | (_) | | | |
     |_|  |_|\__,_|_|\\_\\___| \\_/ |_|___/_|\\___/|_| |_|
                                                      
                                                      
    This was website was built with love by Makevision
    info@makevision.agency
    `);
  }
  