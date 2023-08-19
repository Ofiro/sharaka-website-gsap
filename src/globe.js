// globe.js

import ThreeGlobe from "three-globe";
import { WebGLRenderer, Scene, Color, Fog, PerspectiveCamera, DirectionalLight } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

var renderer, camera, scene, controls;
let mouseX = 0;
let mouseY = 0;
let containerWidth, containerHeight;
var Globe;

function initGlobe() {
  // Initialize the Globe
  Globe = new ThreeGlobe({
    waitForGlobeReady: true,
    animateIn: true,
  });

  // Other Globe configurations here...

  Globe.rotateY(-Math.PI * (5 / 9));
  Globe.rotateZ(-Math.PI / 6);
  const globeMaterial = Globe.globeMaterial();
  globeMaterial.color = new Color(0x3a228a);
  globeMaterial.emissive = new Color(0x220038);
  globeMaterial.emissiveIntensity = 0.1;
  globeMaterial.shininess = 0.7;

  scene.add(Globe);
}

function init(container) {
  containerWidth = container.offsetWidth;
  containerHeight = container.offsetHeight;

  renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(containerWidth, containerHeight);

  scene = new Scene();
  scene.background = null;
  scene.add(new DirectionalLight(0xbbbbbb, 0.3));

  camera = new PerspectiveCamera();
  camera.aspect = containerWidth / containerHeight;
  camera.updateProjectionMatrix();

  var dLight = new DirectionalLight(0xffffff, 0.8);
  dLight.position.set(-800, 2000, 400);
  camera.add(dLight);

  camera.position.z = 400;
  camera.position.x = 0;
  camera.position.y = 0;

  scene.add(camera);

  scene.fog = new Fog(0x535ef3, 400, 2000);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dynamicDampingFactor = 0.01;
  controls.enablePan = false;
  controls.minDistance = 200;
  controls.maxDistance = 500;
  controls.rotateSpeed = 0.8;
  controls.zoomSpeed = 1;
  controls.autoRotate = false;

  controls.minPolarAngle = Math.PI / 3.5;
  controls.maxPolarAngle = Math.PI - Math.PI / 3;

  window.addEventListener("resize", onWindowResize, false);
  document.addEventListener("mousemove", onMouseMove);

  container.appendChild(renderer.domElement);
  console.log("Globe initialized");
}

// The rest of the functions remain the same...

function onMouseMove(event) {
  mouseX = event.clientX - containerWidth / 2;
  mouseY = event.clientY - containerHeight / 2;
}

function onWindowResize() {
  containerWidth = document.getElementById("world-map-container").offsetWidth;
  containerHeight = document.getElementById("world-map-container").offsetHeight;
  camera.aspect = containerWidth / containerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(containerWidth, containerHeight);
}

function animate() {
  const maxX = containerWidth / 4;
  const maxY = containerHeight / 4;

  camera.position.x +=
    Math.abs(mouseX) <= maxX ? (mouseX / 4 - camera.position.x) * 0.005 : 0;
  camera.position.y +=
    Math.abs(mouseY) <= maxY ? (-mouseY / 4 - camera.position.y) * 0.005 : 0;

  camera.lookAt(scene.position);
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

export function renderGlobe() {
  const container = document.getElementById("world-map-container");
  init(container);
  initGlobe();
  onWindowResize();
  animate();
}
