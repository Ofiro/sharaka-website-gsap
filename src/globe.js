import ThreeGlobe from "three-globe";
import {
  WebGLRenderer,
  Scene,
  Color,
  Fog,
  PerspectiveCamera,
  DirectionalLight,
  AmbientLight,
  PointLight,
  Vector3
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import countries from "./globe-data-min.json";
import arcsData from "./arcs_data.json";
import countriesCollection from "./countriesCollection.json";

const worldMapContainer = document.getElementById("world-map-container");
const perf = window.performance;

let renderer, camera, scene, controls;
let beginTime, animTime;
let beginPosition, targetPosition;
let needsTransitionAnim = false;
var Globe;

export function renderGlobe() {
  initializeScene();
  initializeGlobe();
  handleWindowResize();
  animateScene();
  setupCountryHover();
}

function initializeScene() {
  const containerWidth = worldMapContainer.offsetWidth;
  const containerHeight = worldMapContainer.offsetHeight;

  renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(containerWidth, containerHeight);
  renderer.setClearColor(0x000000, 0);

  scene = new Scene();
  scene.add(new AmbientLight(0xbbbbbb, 0.3));
  scene.fog = new Fog(0x535ef3, 400, 2000);
  camera = new PerspectiveCamera(75, containerWidth / containerHeight);
  camera.aspect = containerWidth / containerHeight;
  camera.updateProjectionMatrix();
  camera.position.set(0, 0, 250);

  createLights();

  controls = new OrbitControls(camera, renderer.domElement);
  configureControls();

  window.addEventListener("resize", handleWindowResize, false);
  worldMapContainer.appendChild(renderer.domElement);
}

function createLights() {
  const directionalLight = new DirectionalLight(0xffffff, 0.8); // Adjusted color and intensity
  directionalLight.position.set(-800, 2000, 400);// Adjusted position
  scene.add(directionalLight);

  const directionalLight1 = new DirectionalLight(0x7982f6, 1);  // Kept the same
  directionalLight1.position.set(-200, 500, 200);  // Adjusted position
  scene.add(directionalLight1);

  const pointLight = new PointLight(0x8566cc, 0.5);  // Kept the same
  pointLight.position.set(-200, 500, 200);  // Kept the same
  scene.add(pointLight);
}


function configureControls() {
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
}

function initializeGlobe() {
  Globe = new ThreeGlobe({ waitForGlobeReady: true, animateIn: true })
    .showAtmosphere(true)
    .atmosphereColor("#3a228a")
    .atmosphereAltitude(0.25)
    .hexPolygonsData(countries.features)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.7)
    .hexPolygonColor((e) => {
      return "rgba(255,255,255, 0.7)";
    });

  // Using requestAnimationFrame for better performance
  requestAnimationFrame(() => {
    setGlobeAttributes();
  });

  const globeMaterial = Globe.globeMaterial();
  globeMaterial.color = new Color(0x3a228a);
  globeMaterial.emissive = new Color(0x220038);
  globeMaterial.emissiveIntensity = 0.1;
  globeMaterial.shininess = 0.7;
  
  
  scene.add(Globe);
}

function setGlobeAttributes() {
  const originalLabelsData = countriesCollection.countries;
  Globe.arcsData(arcsData.connections)
    .arcColor(arc => {
      const sourceCountry = originalLabelsData.find(country => country.text === arc.from);
      return sourceCountry ? sourceCountry.color : "#FFF";
    })
    .arcStroke(1)
    .arcAltitude(0.25)
    .arcDashLength(0.9)
    .arcDashGap(4)
    .arcDashAnimateTime(1000)
    .arcsTransitionDuration(1000)
    .arcDashInitialGap(e => e.order)
    .labelsData(originalLabelsData)
    .labelColor(() => 'rgba(255, 165, 0, 0.75)')
    .labelDotOrientation(() => "right")
    .labelsTransitionDuration(500)
    .labelDotRadius(1)
    .labelSize(e => e.size)
    .labelText("text")
    .labelResolution(2)
    .pointsData(originalLabelsData)
    .pointColor(country => country.color)
    .pointsMerge(true)
    .pointAltitude(0.07)
    .pointRadius(0.05);
}

function handleWindowResize() {
  const containerWidth = worldMapContainer.offsetWidth;
  const containerHeight = worldMapContainer.offsetHeight;
  camera.fov = 75 * (containerHeight / 1000);
  camera.aspect = containerWidth / containerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(containerWidth, containerHeight);
}

function animateScene() {
  computeCurrentCameraPos();
  camera.lookAt(scene.position);
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animateScene);
}

function setupCountryHover() {
  document.querySelectorAll("[data-iso-code]").forEach(element => {
    element.addEventListener("mouseover", () => {
      controls.autoRotate = false;
      zoomToCountry(element.getAttribute("data-iso-code"));
    });
    element.addEventListener("mouseout", () => {
      controls.autoRotate = true;
      zoomOut();
    });
  });
}
const defaultPosition = new Vector3(0, 0, 250);

function zoomToCountry(isoCode) {
    const countryData = countriesCollection.countries.find(c => c.isoCode === isoCode);
    
    if (!countryData) {
        console.error(`Country with isoCode ${isoCode} not found in countriesCollection.`);
        return;
    }

    const lat = parseFloat(countryData.lat);
    const lon = parseFloat(countryData.lng);
    const zoomedPos = Globe.getCoords(lat, lon, 0.6);
    const safeDistance = calculateSafeDistance(countryData);
    const desiredDistance = camera.position.distanceTo(new Vector3(zoomedPos.x, zoomedPos.y, zoomedPos.z));

    if (desiredDistance < safeDistance) {
        const direction = new Vector3(zoomedPos.x, zoomedPos.y, zoomedPos.z).sub(camera.position).normalize();
        const adjustedTargetPos = camera.position.clone().add(direction.multiplyScalar(safeDistance));
        initiateTransition(adjustedTargetPos);
    } else {
        initiateTransition(new Vector3(zoomedPos.x, zoomedPos.y, zoomedPos.z));
    }
}

function calculateSafeDistance(countryData) {
    const baseDistance = 100;
    const widthScaleFactor = worldMapContainer.offsetWidth / 1000;
    const heightScaleFactor = worldMapContainer.offsetHeight / 500;
    return baseDistance / (widthScaleFactor * heightScaleFactor);
}

function zoomOut() {
    const currentPosition = camera.position.clone().normalize().multiplyScalar(defaultPosition.length());
    initiateTransition(currentPosition);
}

function initiateTransition(target) {
    beginTime = perf.now();
    animTime = 500; // Animation time in milliseconds.
    beginPosition = camera.position.clone();
    targetPosition = target;
    needsTransitionAnim = true;
}

function computeCurrentCameraPos() {
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

function blendBetweenVectors(a, b, t) {
    return a.clone().lerp(b, t);
}