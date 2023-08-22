// Global variables for transition animation
let beginTime, animTime;
let beginPosition, targetPosition;
let needsTransitionAnim = false;
const perf = window.performance;

/**
 * Handles the resizing of the window and updates camera parameters accordingly.
 * @param {HTMLElement} worldMapContainer - The container element for the globe.
 * @param {PerspectiveCamera} camera - The camera used for rendering.
 * @param {WebGLRenderer} renderer - The WebGL renderer.
 */
export function handleWindowResize(worldMapContainer, camera, renderer) {
  const canvasWidth = () => window.innerWidth / 1.8;
  const aspect = 1.2;
  const containerWidth = canvasWidth();
  const containerHeight = containerWidth / aspect;
  camera.fov = 50;
  camera.aspect = containerWidth / containerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(containerWidth, containerHeight);
}

/**
 * Blends between two vectors using linear interpolation.
 * @param {Vector3} a - The starting vector.
 * @param {Vector3} b - The target vector.
 * @param {number} t - The interpolation factor.
 * @returns {Vector3} - The interpolated vector.
 */
export function blendBetweenVectors(a, b, t) {
  return a.clone().lerp(b, t);
}

/**
 * Computes the current camera position during a transition animation.
 * @param {PerspectiveCamera} camera - The camera used for rendering.
 */
export function computeCurrentCameraPos(camera) {
  if (needsTransitionAnim) {
    const t = (perf.now() - beginTime) / animTime;
    if (t > 1) {
      camera.position.copy(targetPosition);
      needsTransitionAnim = false;
    } else {
      camera.position.copy(blendBetweenVectors(beginPosition, targetPosition, t));
    }
  }
}

/**
 * Animates the scene by updating camera position and rendering.
 * @param {PerspectiveCamera} camera - The camera used for rendering.
 * @param {Scene} scene - The scene to be rendered.
 * @param {OrbitControls} controls - The camera controls.
 * @param {WebGLRenderer} renderer - The WebGL renderer.
 */
export function animateScene(camera, scene, controls, renderer) {
  function animate() {
    computeCurrentCameraPos(camera);
    camera.lookAt(scene.position);
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}

/**
 * Initiates a transition animation for camera movement.
 * @param {Vector3} target - The target position for the camera.
 * @param {PerspectiveCamera} camera - The camera used for rendering.
 */
export function initiateTransition(target, camera) {
  beginTime = perf.now();
  animTime = 500; // Animation time in milliseconds.
  beginPosition = camera.position.clone();
  targetPosition = target;
  needsTransitionAnim = true;
}

/**
 * Sets up hover interactions for countries on the globe.
 * @param {OrbitControls} controls - The camera controls.
 * @param {Vector3} Vector3 - The Vector3 class from Three.js.
 * @param {Object} countriesCollection - Collection of country data.
 * @param {ThreeGlobe} Globe - The ThreeGlobe instance representing the globe.
 * @param {PerspectiveCamera} camera - The camera used for rendering.
 * @param {HTMLElement} worldMapContainer - The container element for the globe.
 */
export function setupCountryHover(controls, Vector3, countriesCollection, Globe, camera, worldMapContainer) {
  const defaultPosition = new Vector3(0, 0, calculateSafeDistance(worldMapContainer));
  document.querySelectorAll("[data-iso-code]").forEach(element => {
    element.addEventListener("mouseover", () => {
      controls.autoRotate = false;
      const isoCode = element.getAttribute("data-iso-code");
      zoomToCountry(isoCode, countriesCollection, Globe, camera, Vector3, worldMapContainer);
    });
    element.addEventListener("mouseout", () => {
      controls.autoRotate = true;
      zoomOut(camera, defaultPosition, Globe);
    });
  });
}

function zoomToCountry(isoCode, countriesCollection, Globe, camera, Vector3, worldMapContainer) {
  const countryData = countriesCollection.countries.find(c => c.isoCode === isoCode);

  if (!countryData) {
    console.error(`Country with isoCode ${isoCode} not found in countriesCollection.`);
    return;
  }

  const lat = parseFloat(countryData.lat);
  const lon = parseFloat(countryData.lng);
  const zoomedPos = Globe.getCoords(lat, lon, calculateSafeDistance(worldMapContainer));

  initiateTransition(new Vector3(zoomedPos.x, zoomedPos.y, zoomedPos.z), camera);
}

function zoomOut(camera, defaultPosition, Globe) {
  const defaultLabelSize = 1;
  Globe.labelSize(defaultLabelSize);
  const currentPosition = camera.position.clone().normalize().multiplyScalar(defaultPosition.length());
  initiateTransition(currentPosition, camera);
}

export function calculateSafeDistance(worldMapContainer) {
  const baseDistance = 100;
  const widthScaleFactor = worldMapContainer.offsetWidth / 1000;
  const heightScaleFactor = worldMapContainer.offsetHeight / 500;
  return baseDistance / (widthScaleFactor * heightScaleFactor);
}
export function setLabelsHover(Globe) {
    Globe.onLabelHover((label, prevLabel) => {
        if (label) {
          const countryName = label.text; // Assuming the label's text is the country name
          zoomToCountry(countryName);
        } else if (prevLabel) {
          // Handle hover-out event
          // 'prevLabel' is the label that was previously hovered over
          // For example, you might want to reset the zoom or do other actions
          // when the mouse leaves the label
        }
      });
}