/**
 * Initializes and configures the Three.js globe with various settings and attributes.
 *
 * @param {HTMLElement} worldMapContainer - The container element for the globe.
 * @param {Scene} scene - The Three.js scene where the globe will be added.
 * @param {Object} countries - GeoJSON data of countries' features.
 * @param {Object} arcsData - Data about connections between countries.
 * @param {Object} countriesCollection - Collection of countries' data.
 * @param {Color} Color - The Color class from the 'three' library.
 * @param {ThreeGlobe} ThreeGlobe - The ThreeGlobe class from the 'three-globe' library.
 * @returns {ThreeGlobe} - The configured ThreeGlobe instance.
 */
export function initializeGlobe(worldMapContainer, scene, countries, arcsData, countriesCollection, Color, ThreeGlobe) {
    // Create a ThreeGlobe instance with specified settings
    let Globe = new ThreeGlobe({ waitForGlobeReady: true})
      .showAtmosphere(true)
      .atmosphereColor("#3a228a")
      .atmosphereAltitude(0.25)
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .hexPolygonColor(() => "rgba(255,255,255, 0.7)");
      
    // Using requestAnimationFrame for better performance
    requestAnimationFrame(() => setGlobeAttributes(Globe, arcsData, countriesCollection));

    // Configure globe material properties
    configureGlobeMaterial(Globe, Color);

    // Add the configured Globe to the scene and return it
    scene.add(Globe);

    return Globe;
  }

  /**
   * Configures attributes of the ThreeGlobe instance.
   *
   * @param {ThreeGlobe} Globe - The ThreeGlobe instance to configure.
   * @param {Object} arcsData - Data about connections between countries.
   * @param {Object} countriesCollection - Collection of countries' data.
   */
  function setGlobeAttributes(Globe, arcsData, countriesCollection) {
    // Extract original labels data
    const originalLabelsData = countriesCollection.countries;

    // Configure attributes of the ThreeGlobe instance
    configureGlobeArcs(Globe, arcsData, originalLabelsData);
    configureGlobeLabels(Globe, originalLabelsData);
    configureGlobePoints(Globe, originalLabelsData);
  }

  function configureGlobeMaterial(Globe, Color) {
    let globeMaterial = Globe.globeMaterial();
    globeMaterial.color = new Color(0x3a228a);
    globeMaterial.emissive = new Color(0x220038);
    globeMaterial.emissiveIntensity = 0.1;
    globeMaterial.shininess = 0.7;
  }

  function configureGlobeArcs(Globe, arcsData, originalLabelsData) {
    Globe.arcsData(arcsData.connections)
      .arcColor(arc => {
        const sourceCountry = originalLabelsData.find(country => country.text === arc.from);
        return sourceCountry ? sourceCountry.color : "#FFF";
      })
      .arcsTransitionDuration(1000)
      .arcStroke(1)
      .arcAltitude(0.25)
      .arcDashLength(0.9)
      .arcDashGap(4)
      .arcDashAnimateTime(5000)
      .arcDashInitialGap(e => e.order);
  }

  function configureGlobeLabels(Globe, originalLabelsData) {
    Globe.labelsData(originalLabelsData)
      .labelColor(() => 'rgba(255, 165, 0, 0.75)')
      .labelDotOrientation(() => "right")
      .labelDotRadius(1)
      .labelSize(e => e.size)
      .labelText("text")
      .labelResolution(2)
      .labelsTransitionDuration(1000);
  }

  function configureGlobePoints(Globe, originalLabelsData) {
    Globe.pointsData(originalLabelsData)
      .pointColor(country => country.color)
      .pointsMerge(true)
      .pointAltitude(0.07)
      .pointRadius(0.05);
  }
