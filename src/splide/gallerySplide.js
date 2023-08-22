/**
 * Module: Gallery Initialization
 * Description: Initializes a Splide gallery with custom options and navigation.
 */

import Splide from '@splidejs/splide';
import { COMMON_OPTIONS } from '../animations/configs/config';

/**
 * Initializes the gallery with custom options and navigation.
 */
export function initializeGallery() {
  /**
   * Element to be used as the Splide gallery.
   * @type {HTMLElement}
   */
  const galleryElement = document.querySelector('#gallery-splide');

  /**
   * Custom options for the Splide gallery.
   * Extends common options defined in COMMON_OPTIONS.
   * @type {object}
   */
  const galleryOptions = {
    ...COMMON_OPTIONS,
    perPage: 1,
    padding: '10%',
    arrows: false,
    pagination: false,
    cloneStatus: false
  };

  // Create a new Splide instance with the gallery element and options.
  const gallerySplide = new Splide(galleryElement, galleryOptions);

  // Mount the Splide instance if it exists.
  if (gallerySplide) {
    gallerySplide.mount();

    /**
     * Element for the next custom arrow.
     * @type {HTMLElement}
     */
    const galleryArrowNext = document.querySelector('.custom_arrow_next');

    /**
     * Element for the previous custom arrow.
     * @type {HTMLElement}
     */
    const galleryArrowPrev = document.querySelector('.custom_arrow_prev');
    galleryArrowNext.addEventListener('click', () => gallerySplide.go('+1'));
    galleryArrowPrev.addEventListener('click', () => gallerySplide.go('-1'));
  }
}
