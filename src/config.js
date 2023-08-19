import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export const COMMON_OPTIONS = {
  focus: 0,
  type: "loop",
  gap: "1rem",
  autoplay: true,
  speed: 1000,
  dragAngleThreshold: 30,
  autoWidth: false,
  rewind: false,
  rewindSpeed: 400,
  waitForTransition: false,
  updateOnMove: true,
  trimSpace: false,
};
export const europeCountries = [
  "AL", // Albania
  "AD", // Andorra
  "AM", // Armenia (sometimes considered part of Europe)
  "AT", // Austria
  "AZ", // Azerbaijan (often considered part of Europe)
  "BY", // Belarus
  "BE", // Belgium
  "BA", // Bosnia and Herzegovina
  "BG", // Bulgaria
  "HR", // Croatia
  "CY", // Cyprus
  "CZ", // Czech Republic
  "DK", // Denmark
  "EE", // Estonia
  "FI", // Finland
  "FR", // France
  "GE", // Georgia (often considered part of Europe)
  "DE", // Germany
  "GR", // Greece
  "HU", // Hungary
  "IS", // Iceland
  "IE", // Ireland
  "IT", // Italy
  "KZ", // Kazakhstan (parts are in Europe)
  "XK", // Kosovo
  "LV", // Latvia
  "LI", // Liechtenstein
  "LT", // Lithuania
  "LU", // Luxembourg
  "MK", // North Macedonia
  "MT", // Malta
  "MD", // Moldova
  "MC", // Monaco
  "ME", // Montenegro
  "NL", // Netherlands
  "NO", // Norway
  "PL", // Poland
  "PT", // Portugal
  "RO", // Romania
  "RU", // Russia
  "SM", // San Marino
  "RS", // Serbia
  "SK", // Slovakia
  "SI", // Slovenia
  "ES", // Spain
  "SE", // Sweden
  "CH", // Switzerland
  "TR", // Turkey (parts are in Europe)
  "UA", // Ukraine
  "GB", // United Kingdom
  "VA", // Vatican City
];
export const bahrainGeoJSON = {
  "type":"Feature",
  "properties":{"name":"Bahrain","woeid":"23424753"},
  "geometry":{
      "type":"Polygon",
      "coordinates":[[[50.441498315672,26.079486759594],[50.444990826448,26.155368387131],[50.494398435257,26.240297244012],[50.565645056344,26.252673936522],[50.58600454793,26.247660903832],[50.628002395199,25.943018578555],[50.610418895937,25.857704991003],[50.5840692813,25.815491188858],[50.508839915777,25.868375997347],[50.459210656002,25.954651764437],[50.441498315672,26.079486759594]]]
  }
};

// Helper Functions and Configuration
const defaultAnimationProperties = {
  duration: 1,
  ease: "power4.inOut",
};

const dataAttributeConfig = {
  "split-type": "words",
  target: "0",
  "plus-sign": "false",
};

function checkElementExistence(element) {
  return element !== null;
}

function checkLibrariesAvailability() {
    const gsapAvailable = gsap ? true : false;
    const scrollTriggerAvailable = ScrollTrigger ? true : false;
    const splitTextAvailable = SplitText ? true : false;

    if (!gsapAvailable) console.log("GSAP is not available");
    if (!scrollTriggerAvailable) console.log("ScrollTrigger is not available");
    if (!splitTextAvailable) console.log("SplitText is not available");

    return gsapAvailable && scrollTriggerAvailable && splitTextAvailable;
}


function getDataAttribute(element, attributeName) {
  return (
    element.getAttribute(`data-${attributeName}`) ||
    dataAttributeConfig[attributeName]
  );
}

export {
  defaultAnimationProperties,
  dataAttributeConfig,
  checkElementExistence,
  checkLibrariesAvailability,
  getDataAttribute,
};
