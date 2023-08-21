// Navbar Animation
export function initializeNavbarAnimation() {
    const $navbar = $("#navbar");
    if ($navbar.length) {
      ScrollTrigger.create({
        trigger: $navbar[0],
        start: "top top",
        endTrigger: "body",
        end: "bottom top",
        pin: true,
        pinSpacing: false
      });
    }
  }