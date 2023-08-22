/**
 * Initializes the scene, renderer, and camera for the interactive globe.
 *
 * @param {HTMLElement} worldMapContainer - The container element for the globe.
 * @param {WebGLRenderer} WebGLRenderer - The WebGLRenderer class from the 'three' library.
 * @param {Scene} Scene - The Scene class from the 'three' library.
 * @param {Fog} Fog - The Fog class from the 'three' library.
 * @param {PerspectiveCamera} PerspectiveCamera - The PerspectiveCamera class from the 'three' library.
 * @returns {{renderer: WebGLRenderer, scene: Scene, camera: PerspectiveCamera}} - The initialized renderer, scene, and camera.
 */
export function initializeScene(worldMapContainer, WebGLRenderer, Scene, Fog, PerspectiveCamera) {
  // Calculate container dimensions
  const canvasWidth = () => window.innerWidth / 1.8;
  const aspect = 1.2;
  const containerWidth = canvasWidth();
  const containerHeight = containerWidth / aspect;

  // Initialize the WebGLRenderer with antialiasing and transparent background
  const renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(containerWidth, containerHeight);
  renderer.setClearColor(0x000000, 0); // Set clear color with transparency

  // Create a new scene
  const scene = new Scene();

  // Set up fog effect in the scene
  scene.fog = new Fog(0x535ef3, 400, 2000);
  
  // Create the camera using the new function
  const camera = createCamera(PerspectiveCamera, containerWidth, containerHeight);

  // Update the renderer and camera when the window is resized

  // Return the initialized renderer, scene, and camera
  return { renderer, scene, camera };
}

function createCamera(PerspectiveCamera, containerWidth, containerHeight) {
  const fov = 50;
  const aspect = containerWidth / containerHeight;
  const near = 180;
  const far = 1800;
  const cameraZ = 300;

  const camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, cameraZ);

  return camera;
}
