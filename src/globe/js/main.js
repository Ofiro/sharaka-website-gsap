// Import necessary dependencies
import ThreeGlobe from "three-globe";
import {
  WebGLRenderer,
  Scene,
  Fog,
  Color,
  PerspectiveCamera,
  DirectionalLight,
  AmbientLight,
  PointLight,
  Vector3,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { initializeScene } from "./components/scene";
import { createLights } from "./components/lights";
import { createControls } from "./components/controls";
import { initializeGlobe } from "./components/globe";
import { handleWindowResize, setupCountryHover } from "./utils/interactionsUtil.js";
import countries from "../data/globe-data-min.json";
import arcsData from "../data/arcs_data.json";
import countriesCollection from "../data/countriesCollection.json";
import { animateScene } from "./utils/interactionsUtil.js";

/**
 * Renders the interactive globe in the specified container.
 * @param {HTMLElement} worldMapContainer - The container element for the globe.
 */
export function renderGlobe(worldMapContainer) {
  // Initialize scene configuration
  const config = initializeScene(
    worldMapContainer,
    WebGLRenderer,
    Scene,
    Fog,
    PerspectiveCamera
  );

  // Extract configuration values
  const { renderer, scene, camera } = config;

  // Create and position lights
  createLights(scene, DirectionalLight, AmbientLight, PointLight);

  // Create controls for interacting with the scene
  const controls = createControls(camera, renderer, OrbitControls);

  // Initialize the interactive globe
  const Globe = initializeGlobe(
    worldMapContainer,
    scene,
    countries,
    arcsData,
    countriesCollection,
    Color,
    ThreeGlobe
  );

  // Listen for window resize events
  window.addEventListener(
    "resize",
    () => handleWindowResize(worldMapContainer, camera, renderer),
    false
  );

  // Append the renderer's canvas to the container
  worldMapContainer.appendChild(renderer.domElement);

  // Start animating the scene
  animateScene(camera, scene, controls, renderer);

  // Set up country hover interactions
  setupCountryHover(controls, Vector3, countriesCollection, Globe, camera, worldMapContainer);
}
