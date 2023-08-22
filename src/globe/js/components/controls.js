/**
 * Creates and configures the OrbitControls for camera interaction.
 *
 * @param {Camera} camera - The Three.js camera to be controlled.
 * @param {WebGLRenderer} renderer - The Three.js renderer used for interaction.
 * @param {OrbitControls} OrbitControls - The OrbitControls class from 'three/examples/jsm/controls/OrbitControls.js'.
 * @returns {OrbitControls} - The configured OrbitControls instance.
 */
export function createControls(camera, renderer, OrbitControls) {
    // Create an instance of OrbitControls
    let controls = new OrbitControls(camera, renderer.domElement);
  
    // Configure the controls' behavior
    controls.enableDamping = true;
    controls.dynamicDampingFactor = 0.01;
    controls.enablePan = false;
    controls.minDistance = 200;
    controls.maxDistance = 500;
    controls.rotateSpeed = 0.8;
    controls.zoomSpeed = 1;
    controls.autoRotate = true;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = Math.PI - Math.PI / 4;
    controls.enableZoom = false;
  
    return controls;
  }
  