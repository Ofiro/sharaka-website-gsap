"use strict";(self.webpackChunkoptimized_js_project=self.webpackChunkoptimized_js_project||[]).push([[724],{6439:(r,e,o)=>{o.d(e,{Z:()=>t});function t(r,e,o){if(void 0===o&&(o={}),!r)throw new Error("point is required");if(!e)throw new Error("polygon is required");var t,i=function(r){if(!r)throw new Error("coord is required");if(!Array.isArray(r)){if("Feature"===r.type&&null!==r.geometry&&"Point"===r.geometry.type)return r.geometry.coordinates;if("Point"===r.type)return r.coordinates}if(Array.isArray(r)&&r.length>=2&&!Array.isArray(r[0])&&!Array.isArray(r[1]))return r;throw new Error("coord must be GeoJSON Point or an Array of numbers")}(r),u="Feature"===(t=e).type?t.geometry:t,a=u.type,y=e.bbox,f=u.coordinates;if(y&&!1===function(r,e){return e[0]<=r[0]&&e[1]<=r[1]&&e[2]>=r[0]&&e[3]>=r[1]}(i,y))return!1;"Polygon"===a&&(f=[f]);for(var s=!1,g=0;g<f.length&&!s;g++)if(n(i,f[g][0],o.ignoreBoundary)){for(var c=!1,h=1;h<f[g].length&&!c;)n(i,f[g][h],!o.ignoreBoundary)&&(c=!0),h++;c||(s=!0)}return s}function n(r,e,o){var t=!1;e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&(e=e.slice(0,e.length-1));for(var n=0,i=e.length-1;n<e.length;i=n++){var u=e[n][0],a=e[n][1],y=e[i][0],f=e[i][1];if(r[1]*(u-y)+a*(y-r[0])+f*(r[0]-u)==0&&(u-r[0])*(y-r[0])<=0&&(a-r[1])*(f-r[1])<=0)return!o;a>r[1]!=f>r[1]&&r[0]<(y-u)*(r[1]-a)/(f-a)+u&&(t=!t)}return t}}}]);