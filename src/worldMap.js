import Globe from 'globe.gl';

export function renderWorldMap() {
    const container = document.getElementById('world-map-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const myGlobe = Globe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .backgroundColor('rgba(255,255,255,0)')
      .width(containerWidth)
      .height(containerHeight)
      .polygonsData([bahrainGeoJSON])
      .polygonGeoJsonGeometry(d => d.geometry)
      .polygonCapColor(() => 'red');

    myGlobe(container);

    function setGlobeView(countryCode) {
        const coords = countryCenters[countryCode];
        if (coords) {
            myGlobe.pointOfView({
                lat: coords.lat,
                lng: coords.lng,
                altitude: 0.3 // Adjust this value to zoom in closer or further away
            }, 1000); // Animation duration in ms
        }
    }
    
    const countryCenters = {
        'US': { lat: 37.0902, lng: -95.7129 },
        'PK': { lat: 30.3753, lng: 69.3451 },
        'AE': { lat: 23.4241, lng: 53.8478 },
        'MA': { lat: 31.7917, lng: -7.0926 },
        'BH': { lat: 25.9304, lng: 50.6378 },
        'IL': { lat: 31.0461, lng: 34.8516 }
        // ... add other countries with their centers here
    };
    
    // For your hover action:
    $('.region_item_wrapper').hover(function() {
        const isoCode = $(this).attr('data-iso-code');
        setGlobeView(isoCode);
    }, function() {
        // You can reset the globe's view here when the hover action ends.
        myGlobe.pointOfView({ lat: 0, lng: 0, altitude: 2 }, 1000);
    });
    
}
