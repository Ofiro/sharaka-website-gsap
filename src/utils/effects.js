/**
 * Apply hover effect to elements with class 'splide-work'.
 * Adds and removes 'ishovered' class on mouse enter and leave.
 */
export function applyHoverEffectToSplideWork() {
    // Check if the window width is less than or equal to 991 pixels
    if (window.innerWidth <= 991) return;
  
    $('.splide-work')
      .on('mouseenter', function() {
        $(this).addClass('ishovered');
        $(this).find('.card-overlay-blue, .card-overlay-row, .circle-arrow, .card-overlay-gradient, .project-card_desc_wrap').addClass('ishovered');
      })
      .on('mouseleave', function() {
        $(this).removeClass('ishovered');
        $(this).find('.card-overlay-blue, .card-overlay-row, .circle-arrow, .card-overlay-gradient, .project-card_desc_wrap').removeClass('ishovered');
      });
  }
  
  /**
   * Apply hover effect to elements with class 'project_card'.
   * Adds and removes 'ishovered' class on mouse enter and leave.
   */
  export function applyProjectCardHoverEffect() {
    if (window.innerWidth <= 991) return;
  
    $('.project_card')
      .on('mouseenter', function() {
        $(this).addClass('ishovered');
        $(this).find('.card-overlay-blue, .card-overlay-row, .circle-arrow, .card-overlay-gradient, .project-card_desc_wrap').addClass('ishovered');
      })
      .on('mouseleave', function() {
        $(this).removeClass('ishovered');
        $(this).find('.card-overlay-blue, .card-overlay-row, .circle-arrow, .card-overlay-gradient, .project-card_desc_wrap').removeClass('ishovered');
      });
  }
  
  /**
   * Apply hover effects to elements with class 'region_item_wrapper'.
   * Adds and removes 'active-region' class on mouse enter and leave.
   */
  export function applyRegionItemHoverEffects() {
    if (window.innerWidth <= 991) return;
  
    $('.region_item_wrapper')
      .on('mouseenter', function() {
        const mapCode = $(this).attr('data-map-code');
        $('.world_map_modded .' + mapCode).addClass('active-region');
      })
      .on('mouseleave', function() {
        const mapCode = $(this).attr('data-map-code');
        $('.world_map_modded .' + mapCode).removeClass('active-region');
      });
  }
  
  /**
   * Apply hover effect to elements with class 'region_card'.
   * Adds and removes 'ishovered' class on mouse enter and leave.
   */
  export function applyRegionCardHoverEffects() {
    if (window.innerWidth <= 991) return;
  
    $('.region_card')
      .on('mouseenter', function() {
        $(this).addClass('ishovered');
        $(this).find('.region_card_map_svg, .region_card_name, .region_card_arrow').addClass('ishovered');
      })
      .on('mouseleave', function() {
        $(this).removeClass('ishovered');
        $(this).find('.region_card_map_svg, .region_card_name, .region_card_arrow').removeClass('ishovered');
      });
  }
  