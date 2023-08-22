/**
 * Creates and adds various types of lights to the scene.
 *
 * @param {Scene} scene - The Scene where the lights will be added.
 * @param {DirectionalLight} DirectionalLight - The DirectionalLight class from the 'three' library.
 * @param {AmbientLight} AmbientLight - The AmbientLight class from the 'three' library.
 * @param {PointLight} PointLight - The PointLight class from the 'three' library.
 */
export function createLights(scene, DirectionalLight, AmbientLight, PointLight) {
    // Add an ambient light with low intensity to the scene
    scene.add(new AmbientLight(0xbbbbbb, 0.3));
  
    // Create and add a directional light with a specific position and intensity
    const directionalLight = new DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(-800, 2000, 400);
    scene.add(directionalLight);
  
    // Create and add another directional light with a different color and intensity
    const directionalLight1 = new DirectionalLight(0x7982f6, 1);
    directionalLight1.position.set(-200, 500, 200);
    scene.add(directionalLight1);
  
    // Create and add a point light with a specific color and intensity
    const pointLight = new PointLight(0x8566cc, 0.5);
    pointLight.position.set(-200, 500, 200);
    scene.add(pointLight);
  
    // Add another ambient light with low intensity to the scene
    const ambientLight = new AmbientLight(0xbbbbbb, 0.3);
    scene.add(ambientLight);
  }
  