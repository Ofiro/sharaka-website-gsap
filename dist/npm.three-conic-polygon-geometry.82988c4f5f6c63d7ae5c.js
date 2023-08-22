"use strict";(self.webpackChunkoptimized_js_project=self.webpackChunkoptimized_js_project||[]).push([[845],{5124:(t,r,e)=>{e.d(r,{E:()=>I});var n=e(9477),o=e(3556),i=e(4944),u=e(9089),a=e(9187),c=e(667),f=e(6439),l=e(9539),s=e(5201),p=e(6116),v=e(3178),h=e(1617),d=e(4976);function y(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,"symbol"==typeof(i=function(t,r){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(o,"string"))?i:String(i)),n)}var o,i}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}function b(t,r){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},b(t,r)}function g(t,r){if(r&&("object"==typeof r||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function w(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=m(t);if(r){var o=m(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return g(this,e)}}function M(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,u,a=[],c=!0,f=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(a.push(n.value),a.length!==r);c=!0);}catch(t){f=!0,o=t}finally{try{if(!c&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(f)throw o}}return a}}(t,r)||P(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t){return function(t){if(Array.isArray(t))return O(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||P(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(t,r){if(t){if("string"==typeof t)return O(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?O(t,r):void 0}}function O(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function A(t){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).resolution,e=void 0===r?1/0:r,n=function(t,r){return t.map((function(t){var e,n=[];return t.forEach((function(t){if(e){var o=180*(0,s.Z)(t,e)/Math.PI;if(o>r)for(var i=(0,p.Z)(e,t),u=1/Math.ceil(o/r),a=u;a<1;)n.push(i(a)),a+=u}n.push(e=t)})),n}))}(t,e),f=(0,o.Z)(n),v=function(t,r){var e={type:"Polygon",coordinates:t},n=(0,l.Z)(e),o=M(n,2),i=M(o[0],2),u=i[0],a=i[1],c=M(o[1],2),f=c[0],s=c[1];if(Math.min(Math.abs(f-u),Math.abs(s-a))<r)return[];var p=u>f||s>=89||a<=-89;return function(t){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=r.minLng,n=r.maxLng,o=r.minLat,i=r.maxLat,u=Math.round(Math.pow(360/t,2)/Math.PI),a=(1+Math.sqrt(5))/2,c=function(t){return t/a*360%360-180},f=function(t){return Math.acos(2*t/u-1)/Math.PI*180-90},l=function(t){return u*(Math.cos((t+90)*Math.PI/180)+1)/2},s=[void 0!==i?Math.ceil(l(i)):0,void 0!==o?Math.floor(l(o)):u-1],p=void 0===e&&void 0===n?function(){return!0}:void 0===e?function(t){return t<=n}:void 0===n?function(t){return t>=e}:n>=e?function(t){return t>=e&&t<=n}:function(t){return t>=e||t<=n},v=[],h=s[0];h<=s[1];h++){var d=c(h);p(d)&&v.push([d,f(h)])}return v}(r,{minLng:u,maxLng:f,minLat:a,maxLat:s}).filter((function(t){return E(t,e,p)}))}(t,e),y=[].concat(j(f),j(v)),m={type:"Polygon",coordinates:t},b=M((0,l.Z)(m),2),g=M(b[0],2),w=g[0],P=g[1],O=M(b[1],2),A=O[0],Z=O[1],S=w>A||Z>=89||P<=-89,I=[];if(S){var _=(0,h.f)(y).triangles(),B=new Map(y.map((function(t,r){var e=M(t,2),n=e[0],o=e[1];return["".concat(n,"-").concat(o),r]})));_.features.forEach((function(t){var r,e=t.geometry.coordinates[0].slice(0,3).reverse(),n=[];if(e.forEach((function(t){var r=M(t,2),e=r[0],o=r[1],i="".concat(e,"-").concat(o);B.has(i)&&n.push(B.get(i))})),3===n.length){if(n.some((function(t){return t<f.length})))if(!E(t.properties.circumcenter,m,S))return;(r=I).push.apply(r,n)}}))}else if(v.length)for(var x=c.Z.from(y),R=function(t){var r,e=[2,1,0].map((function(r){return x.triangles[t+r]})),n=e.map((function(t){return y[t]}));if(e.some((function(t){return t<f.length}))&&!E([0,1].map((function(t){return(0,i.Z)(n,(function(r){return r[t]}))})),m,S))return"continue";(r=I).push.apply(r,j(e))},T=0,L=x.triangles.length;T<L;T+=3)R(T);else{var G=a.flatten(n),k=G.vertices,C=G.holes;I=a(k,void 0===C?[]:C,2)}var H=(0,d.Z)((0,u.Z)(y,(function(t){return t[0]})),[0,1]),F=(0,d.Z)((0,u.Z)(y,(function(t){return t[1]})),[0,1]),z=y.map((function(t){var r=M(t,2),e=r[0],n=r[1];return[H(e),F(n)]}));return{contour:n,triangles:{points:y,indices:I,uvs:z}}}function E(t,r){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?(0,v.Z)(r,t):(0,f.Z)(t,r)}var Z=window.THREE?window.THREE:{BufferGeometry:n.u9r,Float32BufferAttribute:n.a$l},S=(new Z.BufferGeometry).setAttribute?"setAttribute":"addAttribute",I=function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&b(t,r)}(u,t);var r,e,n,i=w(u);function u(t,r,e,n,c,f,l){var s;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,u),(s=i.call(this)).type="ConicPolygonBufferGeometry",s.parameters={polygonGeoJson:t,startHeight:r,endHeight:e,closedBottom:n,closedTop:c,includeSides:f,curvatureResolution:l},r=r||0,e=e||1,n=void 0===n||n,c=void 0===c||c,f=void 0===f||f;var p=A(t,{resolution:l=l||5}),v=p.contour,h=p.triangles,d=(0,o.Z)(h.uvs),y=[],m=[],b=[],g=0,w=function(t){var r=Math.round(y.length/3),e=b.length;y=y.concat(t.vertices),m=m.concat(t.uvs),b=b.concat(r?t.indices.map((function(t){return t+r})):t.indices),s.addGroup(e,b.length-e,g++)};function j(t,r){var e=t.map((function(t){return t.map((function(t){var e=M(t,2),n=e[0];return function(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=(90-t)*Math.PI/180,o=(90-r)*Math.PI/180;return[e*Math.sin(n)*Math.cos(o),e*Math.cos(n),e*Math.sin(n)*Math.sin(o)]}(e[1],n,r)}))}));return a.flatten(e)}function P(t){return{indices:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?h.indices:h.indices.slice().reverse(),vertices:j([h.points],t).vertices,uvs:d}}return f&&w(function(){for(var t=j(v,r),n=t.vertices,i=t.holes,u=j(v,e).vertices,a=(0,o.Z)([u,n]),c=Math.round(u.length/3),f=new Set(i),l=0,s=[],p=0;p<c;p++){var h=p+1;if(h===c)h=l;else if(f.has(h)){var d=h;h=l,l=d}s.push(p,p+c,h+c),s.push(h+c,h,p)}for(var y=[],m=1;m>=0;m--)for(var b=0;b<c;b+=1)y.push(b/(c-1),m);return{indices:s,vertices:a,uvs:y}}()),n&&w(P(r,!1)),c&&w(P(e,!0)),s.setIndex(b),s[S]("position",new Z.Float32BufferAttribute(y,3)),s[S]("uv",new Z.Float32BufferAttribute(m,2)),s.computeVertexNormals(),s}return r=u,e&&y(r.prototype,e),n&&y(r,n),Object.defineProperty(r,"prototype",{writable:!1}),r}(Z.BufferGeometry)}}]);