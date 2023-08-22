/**
 * Module: Our Work Initialization
 * Description: Initializes a Splide carousel for the "Our Work" section with custom options and navigation.
 */

import Splide from '@splidejs/splide';
import { COMMON_OPTIONS } from '../animations/configs/config';

/**
 * Initializes the "Our Work" Splide carousel with custom options and navigation.
 */
export function initializeOurWork() {
  /**
   * Element to be used as the Splide carousel for "Our Work" section.
   * @type {HTMLElement}
   */
  const ourWorkElement = document.querySelector('#splide-our-work');

  /**
   * Custom options for the "Our Work" Splide carousel.
   * Extends common options defined in COMMON_OPTIONS.
   * @type {object}
   */
  const ourWorkOptions = {
    ...COMMON_OPTIONS,
    perPage: 2,
    focus: 'left',
    padding: { right: '10%', left: 0 },
    arrows: false,
    pagination: false,
    breakpoints: { 990: { perPage: 1 } }
  };

  // Create a new Splide instance with the "Our Work" element and options.
  const ourWorkSplide = new Splide(ourWorkElement, ourWorkOptions);

  // Mount the Splide instance if it exists.
  if (ourWorkSplide) {
    ourWorkSplide.mount();

    /**
     * Element for the next arrow button.
     * @type {HTMLElement}
     */
    const arrowNext = document.querySelector('#arrowNext');

    /**
     * Element for the previous arrow button.
     * @type {HTMLElement}
     */
    const arrowPrev = document.querySelector('#arrowPrev');

    /**
     * Element for the progress bar.
     * @type {HTMLElement}
     */
    const barProgress = document.querySelector('#barProgress');

    /**
     * Element for displaying the current slide index.
     * @type {HTMLElement}
     */
    const currentSlideCounter = document.querySelector('#currentSlideCounter');

    // Add event listeners to the arrow buttons.
    if (arrowNext) {
      arrowNext.addEventListener('click', () => ourWorkSplide.go('+1'));
    }

    if (arrowPrev) {
      arrowPrev.addEventListener('click', () => ourWorkSplide.go('-1'));
    }

    // Update progress bar and slide index on slide move.
    ourWorkSplide.on('move', () => {
      const currentIndex = ourWorkSplide.index + 1;
      barProgress.style.width = `${(currentIndex / ourWorkSplide.length) * 100}%`;
      currentSlideCounter.textContent = `0${currentIndex}`;
    });
  }
}
