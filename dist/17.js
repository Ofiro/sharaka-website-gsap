"use strict";(self.webpackChunkoptimized_js_project=self.webpackChunkoptimized_js_project||[]).push([[17],{17:(e,t,r)=>{r.r(t),r.d(t,{initializeOurWork:()=>a});var n=r(595),o=r(899);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){var e=document.querySelector("#splide-our-work"),t=u(u({},o.zC),{},{perPage:2,focus:"left",padding:{right:"10%",left:0},arrows:!1,pagination:!1,breakpoints:{990:{perPage:1}}}),r=new n.ZP(e,t);if(r){r.mount();var i=document.querySelector("#arrowNext"),c=document.querySelector("#arrowPrev"),l=document.querySelector("#barProgress"),a=document.querySelector("#currentSlideCounter");i&&i.addEventListener("click",(function(){return r.go("+1")})),c&&c.addEventListener("click",(function(){return r.go("-1")})),r.on("move",(function(){var e=r.index+1;l.style.width="".concat(e/r.length*100,"%"),a.textContent="0".concat(e)}))}}}}]);