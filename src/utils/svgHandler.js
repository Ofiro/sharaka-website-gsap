/**
 * Creates SVG elements based on data attributes.
 */
export function createSVGElements() {
    /**
     * Retrieve all elements with the 'svg-code' class.
     */
    const svgElements = document.querySelectorAll('.svg-code');
  
    /**
     * Iterate over each SVG element and populate with SVG code.
     * 
     * @param {HTMLElement} el - The SVG element.
     */
    svgElements.forEach(el => {
      const svgCode = el.getAttribute('data-svg');
      el.innerHTML = svgCode;
    });
  }
  