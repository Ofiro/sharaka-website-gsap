(self.webpackChunkoptimized_js_project=self.webpackChunkoptimized_js_project||[]).push([[645],{2693:()=>{(()=>{"use strict";var e={701:e=>{let t=0;e.exports={incr:()=>++t,decr:()=>--t,curr:()=>t}},941:e=>{e.exports=(e,t,r="")=>{const n=/url\(['"]?#([\w:.-]+)['"]?\)/g,o=/#([\w:.-]+)/g;return t.match(n)&&(t=t.replace(n,(function(t,r){return e[r]?`url(#${e[r]})`:t}))),["href","xlink:href"].includes(r)&&t.match(o)&&(t=t.replace(o,(function(t,r){return e[r]?`#${e[r]}`:t}))),t}},905:e=>{e.exports=(e,t,r)=>{const n=new RegExp("([^\r\n,{}]+)(,(?=[^}]*{)|s*{)","g");return e.replace(n,(function(e,n,o){if(n.match(/^\s*(@media|@.*keyframes|to|from|@font-face|1?[0-9]?[0-9])/))return n+o;const a=n.match(/#(\w+)/);return a&&r[a[1]]&&(n=n.replace(a[0],`#${r[a[1]]}`)),(n=n.replace(/^(\s*)/,"$1"+t+" "))+o}))}},741:(e,t,r)=>{function n(e){return new Promise(((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)}))}function o(e,t){const r=indexedDB.open(e);r.onupgradeneeded=()=>r.result.createObjectStore(t);const o=n(r);return(e,r)=>o.then((n=>r(n.transaction(t,e).objectStore(t))))}let a;function s(){return a||(a=o("keyval-store","keyval")),a}function i(e,t=s()){return t("readonly",(t=>n(t.get(e))))}function c(e,t,r=s()){return r("readwrite",(r=>(r.put(t,e),n(r.transaction))))}function u(e,t=s()){return t("readwrite",(t=>(e.forEach((e=>t.put(e[1],e[0]))),n(t.transaction))))}function l(e,t=s()){return t("readonly",(t=>Promise.all(e.map((e=>n(t.get(e)))))))}function d(e,t,r=s()){return r("readwrite",(r=>new Promise(((o,a)=>{r.get(e).onsuccess=function(){try{r.put(t(this.result),e),o(n(r.transaction))}catch(e){a(e)}}}))))}function f(e,t=s()){return t("readwrite",(t=>(t.delete(e),n(t.transaction))))}function h(e,t=s()){return t("readwrite",(t=>(e.forEach((e=>t.delete(e))),n(t.transaction))))}function b(e=s()){return e("readwrite",(e=>(e.clear(),n(e.transaction))))}function g(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},n(e.transaction)}function p(e=s()){return e("readonly",(e=>{if(e.getAllKeys)return n(e.getAllKeys());const t=[];return g(e,(e=>t.push(e.key))).then((()=>t))}))}function y(e=s()){return e("readonly",(e=>{if(e.getAll)return n(e.getAll());const t=[];return g(e,(e=>t.push(e.value))).then((()=>t))}))}function m(e=s()){return e("readonly",(t=>{if(t.getAll&&t.getAllKeys)return Promise.all([n(t.getAllKeys()),n(t.getAll())]).then((([e,t])=>e.map(((e,r)=>[e,t[r]]))));const r=[];return e("readonly",(e=>g(e,(e=>r.push([e.key,e.value]))).then((()=>r))))}))}r.r(t),r.d(t,{clear:()=>b,createStore:()=>o,del:()=>f,delMany:()=>h,entries:()=>m,get:()=>i,getMany:()=>l,keys:()=>p,promisifyRequest:()=>n,set:()=>c,setMany:()=>u,update:()=>d,values:()=>y})}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{get:e,set:t,del:n,entries:o}=r(741),a=r(905),s=r(941),i=r(701),c=[],u={},l=(e,t,r)=>{const{enableJs:n,disableUniqueIds:o,disableCssScoping:l,spriteIconId:d}=t,f=!!d,h=(new DOMParser).parseFromString(r,"text/html"),b=f?h.getElementById(d):h.querySelector("svg"),g=(()=>{if(c.length)return c;for(const e in document.body)e.startsWith("on")&&c.push(e);return c.push("onbegin","onend","onrepeat"),c.push("onfocusin","onfocusout","onbounce","onfinish","onshow"),c})(),p=u[e.getAttribute("data-id")]||new Set,y=e.getAttribute("data-id")||`svg-loader_${i.incr()}`,m={};if(o||Array.from(b.querySelectorAll("[id]")).forEach((e=>{const t=e.getAttribute("id"),r=`${t}_${i.incr()}`;e.setAttribute("id",r),m[t]=r})),Array.from(b.querySelectorAll("*")).concat(b).forEach((t=>{if("script"===t.tagName){if(t.remove(),!n)return;{const r=document.createElement("script");r.appendChild(t.childNodes[0]),e.appendChild(r)}}const r=[];for(let e=0;e<t.attributes.length;e++){const{name:o,value:a}=t.attributes[e],i=s(m,a,o);a!==i&&t.setAttribute(o,i),!g.includes(o.toLowerCase())||n?["href","xlink:href","values"].includes(o)&&a.startsWith("javascript")&&!n&&r.push(o):r.push(o)}if(r.forEach((e=>t.removeAttribute(e))),"style"===t.tagName&&!l){let e=a(t.innerHTML,`[data-id="${y}"]`,m);e=s(m,e),e!==t.innerHTML&&(t.innerHTML=e)}})),e.innerHTML=d?b.outerHTML:b.innerHTML,!f)for(let t=0;t<b.attributes.length;t++){const{name:r,value:n}=b.attributes[t];e.getAttribute(r)&&!p.has(r)||(p.add(r),e.setAttribute(r,n))}u[y]=p,e.setAttribute("data-id",y);const v=new CustomEvent("iconload",{bubbles:!0});if(e.dispatchEvent(v),e.getAttribute("oniconload")){e.setAttribute("onauxclick",e.getAttribute("oniconload"));const t=new CustomEvent("auxclick",{bubbles:!1,view:window});e.dispatchEvent(t),e.removeAttribute("onauxclick")}},d={},f={},h=async r=>{const o=new URL(r.getAttribute("data-src"),globalThis.location),a=o.toString().replace(o.hash,""),s=o.hash.replace("#",""),i=r.getAttribute("data-cache"),c="enabled"===r.getAttribute("data-js"),u="disabled"===r.getAttribute("data-unique-ids"),b="disabled"===r.getAttribute("data-css-scoping"),g=await(async t=>{let r;try{r=await e(`loader_${t}`)}catch(e){}if(!r)try{r=localStorage.getItem(`loader_${t}`)}catch(e){}if(r)return r=JSON.parse(r),Date.now()<r.expiry?r.data:void n(`loader_${t}`)})(a),p="disabled"!==i,y=l.bind(self,r,{enableJs:c,disableUniqueIds:u,disableCssScoping:b,spriteIconId:s});if(f[a]||p&&g){const e=f[a]||g;y(e)}else{if(d[a])return void setTimeout((()=>h(r)),20);d[a]=!0,fetch(a).then((e=>{if(!e.ok)throw Error(`Request for '${a}' returned ${e.status} (${e.statusText})`);return e.text()})).then((e=>{const r=e.toLowerCase().trim();if(!(r.startsWith("<svg")||r.startsWith("<?xml")||r.startsWith("<!doctype")))throw Error(`Resource '${a}' returned an invalid SVG file`);p&&(async(e,r,n)=>{const o=parseInt(n,10),a=JSON.stringify({data:r,expiry:Date.now()+(Number.isNaN(o)?2592e6:1e3*o)});try{await t(`loader_${e}`,a)}catch(t){try{localStorage.setItem(`loader_${e}`,a)}catch(e){console.warn("Failed to set cache: ",e)}}})(a,e,i),f[a]=e,y(e)})).catch((e=>{console.error(e)})).finally((()=>{delete d[a]}))}};let b;globalThis.IntersectionObserver&&(b=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(h(e.target),b.unobserve(e.target))}))}),{rootMargin:"1200px"}));const g=[];function p(){Array.from(document.querySelectorAll("svg[data-src]:not([data-id])")).forEach((e=>{-1===g.indexOf(e)&&(g.push(e),"lazy"===e.getAttribute("data-loading")?b.observe(e):h(e))}))}let y=!1;if(globalThis.addEventListener){const m=setInterval((()=>{p()}),100);function v(){clearInterval(m),p(),y||(y=!0,new MutationObserver((e=>{e.some((e=>Array.from(e.addedNodes).some((e=>e.nodeType===Node.ELEMENT_NODE&&(e.getAttribute("data-src")&&!e.getAttribute("data-id")||e.querySelector("svg[data-src]:not([data-id])"))))))&&p(),e.forEach((e=>{"attributes"===e.type&&h(e.target)}))})).observe(document.documentElement,{attributeFilter:["data-src"],attributes:!0,childList:!0,subtree:!0}))}"interactive"===document.readyState?v():globalThis.addEventListener("DOMContentLoaded",(()=>{v()}))}globalThis.SVGLoader={},globalThis.SVGLoader.destroyCache=async()=>{try{const e=await o();for(const t of e)t[0].startsWith("loader_")&&await n(t[0])}catch(e){}Object.keys(localStorage).forEach((e=>{e.startsWith("loader_")&&localStorage.removeItem(e)}))}})()})()}}]);