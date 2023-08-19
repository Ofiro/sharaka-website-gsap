import ThreeGlobe from "three-globe";
import { WebGLRenderer, Scene, Color, Fog, PerspectiveCamera, DirectionalLight } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

var renderer, camera, scene, controls;
let mouseX = 0;
let mouseY = 0;
var Globe;

export function renderGlobe() {
  init();
  initGlobe();
  onWindowResize();
  animate();
}

function init() {
  const container = document.getElementById("world-map-container");
  container.style.position = "relative"; // Ensure relative positioning for the WebGL canvas
  container.style.width = "100%"; // Set explicit width
  container.style.height = "100%"; // Set explicit height

  // Initialize renderer
  renderer = new WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.offsetWidth, container.offsetHeight);

  // Initialize scene, light
  scene = new Scene();
  scene.add(new DirectionalLight(0xbbbbbb, 0.3));

  scene.background = new Color(0x040d21);

  // Initialize camera, light
  camera = new PerspectiveCamera();
  camera.aspect = container.offsetWidth / container.offsetHeight;
  camera.updateProjectionMatrix();

  var dLight = new DirectionalLight(0xffffff, 0.8);
  dLight.position.set(-800, 2000, 400);
  camera.add(dLight);

  camera.position.z = 400;
  camera.position.x = 0;
  camera.position.y = 0;

  scene.add(camera);

  // Additional effects
  scene.fog = new Fog(0x535ef3, 400, 2000);

  // Initialize controls
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
}

// The rest of the functions remain the same...



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

function onMouseMove(event) {
  mouseX = event.clientX - containerWidth / 2;
  mouseY = event.clientY - containerHeight / 2;
}

function onWindowResize() {
  containerWidth = window.innerWidth;
  containerHeight = window.innerHeight;
  camera.aspect = containerWidth / containerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(containerWidth, containerHeight);
}

function animate() {
  camera.position.x +=
    Math.abs(mouseX) <= containerWidth / 4
      ? (mouseX / 4 - camera.position.x) * 0.005
      : 0;
  camera.position.y += (-mouseY / 4 - camera.position.y) * 0.005;
  camera.lookAt(scene.position);
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
