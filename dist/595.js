/*! For license information please see 595.js.LICENSE.txt */
"use strict";(self.webpackChunkoptimized_js_project=self.webpackChunkoptimized_js_project||[]).push([[595],{595:(n,t,e)=>{function i(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}e.d(t,{ZP:()=>se});var r="(prefers-reduced-motion: reduce)",o=4,u=5,a={CREATED:1,MOUNTED:2,IDLE:3,MOVING:o,SCROLLING:u,DRAGGING:6,DESTROYED:7};function c(n){n.length=0}function s(n,t,e){return Array.prototype.slice.call(n,t,e)}function f(n){return n.bind.apply(n,[null].concat(s(arguments,1)))}var l=setTimeout,d=function(){};function v(n){return requestAnimationFrame(n)}function p(n,t){return typeof t===n}function h(n){return!w(n)&&p("object",n)}var g=Array.isArray,m=f(p,"function"),y=f(p,"string"),b=f(p,"undefined");function w(n){return null===n}function E(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch(n){return!1}}function S(n){return g(n)?n:[n]}function x(n,t){S(n).forEach(t)}function C(n,t){return n.indexOf(t)>-1}function P(n,t){return n.push.apply(n,S(t)),n}function k(n,t,e){n&&x(t,(function(t){t&&n.classList[e?"add":"remove"](t)}))}function _(n,t){k(n,y(t)?t.split(" "):t,!0)}function L(n,t){x(t,n.appendChild.bind(n))}function A(n,t){x(n,(function(n){var e=(t||n).parentNode;e&&e.insertBefore(n,t)}))}function D(n,t){return E(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function M(n,t){var e=n?s(n.children):[];return t?e.filter((function(n){return D(n,t)})):e}function z(n,t){return t?M(n,t)[0]:n.firstElementChild}var N=Object.keys;function O(n,t,e){return n&&(e?N(n).reverse():N(n)).forEach((function(e){"__proto__"!==e&&t(n[e],e)})),n}function I(n){return s(arguments,1).forEach((function(t){O(t,(function(e,i){n[i]=t[i]}))})),n}function T(n){return s(arguments,1).forEach((function(t){O(t,(function(t,e){g(t)?n[e]=t.slice():h(t)?n[e]=T({},h(n[e])?n[e]:{},t):n[e]=t}))})),n}function j(n,t){x(t||N(n),(function(t){delete n[t]}))}function F(n,t){x(n,(function(n){x(t,(function(t){n&&n.removeAttribute(t)}))}))}function R(n,t,e){h(t)?O(t,(function(t,e){R(n,e,t)})):x(n,(function(n){w(e)||""===e?F(n,t):n.setAttribute(t,String(e))}))}function W(n,t,e){var i=document.createElement(n);return t&&(y(t)?_(i,t):R(i,t)),e&&L(e,i),i}function X(n,t,e){if(b(e))return getComputedStyle(n)[t];w(e)||(n.style[t]=""+e)}function G(n,t){X(n,"display",t)}function B(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function H(n,t){return n.getAttribute(t)}function Y(n,t){return n&&n.classList.contains(t)}function q(n){return n.getBoundingClientRect()}function U(n){x(n,(function(n){n&&n.parentNode&&n.parentNode.removeChild(n)}))}function K(n){return z((new DOMParser).parseFromString(n,"text/html").body)}function J(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function V(n,t){return n&&n.querySelector(t)}function Q(n,t){return t?s(n.querySelectorAll(t)):[]}function Z(n,t){k(n,t,!1)}function $(n){return n.timeStamp}function nn(n){return y(n)?n:n?n+"px":""}var tn="splide",en="data-"+tn;function rn(n,t){if(!n)throw new Error("["+tn+"] "+(t||""))}var on=Math.min,un=Math.max,an=Math.floor,cn=Math.ceil,sn=Math.abs;function fn(n,t,e){return sn(n-t)<e}function ln(n,t,e,i){var r=on(t,e),o=un(t,e);return i?r<n&&n<o:r<=n&&n<=o}function dn(n,t,e){var i=on(t,e),r=un(t,e);return on(un(i,n),r)}function vn(n){return+(n>0)-+(n<0)}function pn(n,t){return x(t,(function(t){n=n.replace("%s",""+t)})),n}function hn(n){return n<10?"0"+n:""+n}var gn={};function mn(n){return""+n+hn(gn[n]=(gn[n]||0)+1)}function yn(){var n=[];function t(n,t,e){x(n,(function(n){n&&x(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");e(n,i[0],i[1])}))}))}))}return{bind:function(e,i,r,o){t(e,i,(function(t,e,i){var u="addEventListener"in t,a=u?t.removeEventListener.bind(t,e,r,o):t.removeListener.bind(t,r);u?t.addEventListener(e,r,o):t.addListener(r),n.push([t,e,i,r,a])}))},unbind:function(e,i,r){t(e,i,(function(t,e,i){n=n.filter((function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||r&&n[3]!==r)||(n[4](),!1)}))}))},dispatch:function(n,t,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:true,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,true,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach((function(n){n[4]()})),c(n)}}}var bn="mounted",wn="ready",En="move",Sn="moved",xn="click",Cn="active",Pn="inactive",kn="visible",_n="hidden",Ln="refresh",An="updated",Dn="resize",Mn="resized",zn="scroll",Nn="scrolled",On="destroy",In="arrows:mounted",Tn="navigation:mounted",jn="autoplay:play",Fn="autoplay:pause",Rn="lazyload:loaded",Wn="sk",Xn="sh",Gn="ei";function Bn(n){var t=n?n.event.bus:document.createDocumentFragment(),e=yn();return n&&n.event.on(On,e.destroy),I(e,{bus:t,on:function(n,i){e.bind(t,S(n).join(" "),(function(n){i.apply(i,g(n.detail)?n.detail:[])}))},off:f(e.unbind,t),emit:function(n){e.dispatch(t,n,s(arguments,1))}})}function Hn(n,t,e,i){var r,o,u=Date.now,a=0,c=!0,s=0;function f(){if(!c){if(a=n?on((u()-r)/n,1):1,e&&e(a),a>=1&&(t(),r=u(),i&&++s>=i))return l();o=v(f)}}function l(){c=!0}function d(){o&&cancelAnimationFrame(o),a=0,o=0,c=!0}return{start:function(t){t||d(),r=u()-(t?a*n:0),c=!1,o=v(f)},rewind:function(){r=u(),a=0,e&&e(a)},pause:l,cancel:d,set:function(t){n=t},isPaused:function(){return c}}}var Yn="Arrow",qn=Yn+"Left",Un=Yn+"Right",Kn=Yn+"Up",Jn=Yn+"Down",Vn="ttb",Qn={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Kn,Un],ArrowRight:[Jn,qn]};function Zn(n,t,e){return{resolve:function(n,t,i){var r="rtl"!==(i=i||e.direction)||t?i===Vn?0:-1:1;return Qn[n]&&Qn[n][r]||n.replace(/width|left|right/i,(function(n,t){var e=Qn[n.toLowerCase()][r]||n;return t>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(n){return n*("rtl"===e.direction?1:-1)}}}var $n="role",nt="tabindex",tt="aria-",et=tt+"controls",it=tt+"current",rt=tt+"selected",ot=tt+"label",ut=tt+"labelledby",at=tt+"hidden",ct=tt+"orientation",st=tt+"roledescription",ft=tt+"live",lt=tt+"busy",dt=tt+"atomic",vt=[$n,nt,"disabled",et,it,ot,ut,at,ct,st],pt=tn+"__",ht="is-",gt=tn,mt=pt+"track",yt=pt+"list",bt=pt+"slide",wt=bt+"--clone",Et=bt+"__container",St=pt+"arrows",xt=pt+"arrow",Ct=xt+"--prev",Pt=xt+"--next",kt=pt+"pagination",_t=kt+"__page",Lt=pt+"progress"+"__bar",At=pt+"toggle",Dt=pt+"sr",Mt=ht+"initialized",zt=ht+"active",Nt=ht+"prev",Ot=ht+"next",It=ht+"visible",Tt=ht+"loading",jt=ht+"focus-in",Ft=ht+"overflow",Rt=[zt,It,Nt,Ot,Tt,jt,Ft],Wt={slide:bt,clone:wt,arrows:St,arrow:xt,prev:Ct,next:Pt,pagination:kt,page:_t,spinner:pt+"spinner"};var Xt="touchstart mousedown",Gt="touchmove mousemove",Bt="touchend touchcancel mouseup click";var Ht="slide",Yt="loop",qt="fade";function Ut(n,t,e,i){var r,a=Bn(n),c=a.on,s=a.emit,l=a.bind,d=n.Components,v=n.root,p=n.options,h=p.isNavigation,g=p.updateOnMove,m=p.i18n,y=p.pagination,b=p.slideFocus,w=d.Direction.resolve,E=H(i,"style"),S=H(i,ot),x=e>-1,C=z(i,"."+Et);function P(){var r=n.splides.map((function(n){var e=n.splide.Components.Slides.getAt(t);return e?e.slide.id:""})).join(" ");R(i,ot,pn(m.slideX,(x?e:t)+1)),R(i,et,r),R(i,$n,b?"button":""),b&&F(i,st)}function _(){r||L()}function L(){if(!r){var e=n.index;(a=A())!==Y(i,zt)&&(k(i,zt,a),R(i,it,h&&a||""),s(a?Cn:Pn,D)),function(){var t=function(){if(n.is(qt))return A();var t=q(d.Elements.track),e=q(i),r=w("left",!0),o=w("right",!0);return an(t[r])<=cn(e[r])&&an(e[o])<=cn(t[o])}(),e=!t&&(!A()||x);n.state.is([o,u])||R(i,at,e||"");R(Q(i,p.focusableNodes||""),nt,e?-1:""),b&&R(i,nt,e?-1:0);t!==Y(i,It)&&(k(i,It,t),s(t?kn:_n,D));if(!t&&document.activeElement===i){var r=d.Slides.getAt(n.index);r&&B(r.slide)}}(),k(i,Nt,t===e-1),k(i,Ot,t===e+1)}var a}function A(){var i=n.index;return i===t||p.cloneStatus&&i===e}var D={index:t,slideIndex:e,slide:i,container:C,isClone:x,mount:function(){x||(i.id=v.id+"-slide"+hn(t+1),R(i,$n,y?"tabpanel":"group"),R(i,st,m.slide),R(i,ot,S||pn(m.slideLabel,[t+1,n.length]))),l(i,"click",f(s,xn,D)),l(i,"keydown",f(s,Wn,D)),c([Sn,Xn,Nn],L),c(Tn,P),g&&c(En,_)},destroy:function(){r=!0,a.destroy(),Z(i,Rt),F(i,vt),R(i,"style",E),R(i,ot,S||"")},update:L,style:function(n,t,e){X(e&&C||i,n,t)},isWithin:function(e,i){var r=sn(e-t);return x||!p.rewind&&!n.is(Yt)||(r=on(r,n.length-r)),r<=i}};return D}var Kt="http://www.w3.org/2000/svg",Jt="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";var Vt=en+"-interval";var Qt={passive:!1,capture:!0};var Zt={Spacebar:" ",Right:Un,Left:qn,Up:Kn,Down:Jn};function $t(n){return n=y(n)?n:n.key,Zt[n]||n}var ne="keydown";var te=en+"-lazy",ee=te+"-srcset",ie="["+te+"], ["+ee+"]";var re=[" ","Enter"];var oe=Object.freeze({__proto__:null,Media:function(n,t,e){var i=n.state,o=e.breakpoints||{},u=e.reducedMotion||{},a=yn(),c=[];function s(n){n&&a.destroy()}function f(n,t){var e=matchMedia(t);a.bind(e,"change",l),c.push([n,e])}function l(){var t=i.is(7),r=e.direction,o=c.reduce((function(n,t){return T(n,t[1].matches?t[0]:{})}),{});j(e),d(o),e.destroy?n.destroy("completely"===e.destroy):t?(s(!0),n.mount()):r!==e.direction&&n.refresh()}function d(t,r,o){T(e,t),r&&T(Object.getPrototypeOf(e),t),!o&&i.is(1)||n.emit(An,e)}return{setup:function(){var n="min"===e.mediaQuery;N(o).sort((function(t,e){return n?+t-+e:+e-+t})).forEach((function(t){f(o[t],"("+(n?"min":"max")+"-width:"+t+"px)")})),f(u,r),l()},destroy:s,reduce:function(n){matchMedia(r).matches&&(n?T(e,u):j(e,N(u)))},set:d}},Direction:Zn,Elements:function(n,t,e){var i,r,o,u=Bn(n),a=u.on,s=u.bind,f=n.root,l=e.i18n,d={},v=[],p=[],h=[];function g(){i=w("."+mt),r=z(i,"."+yt),rn(i&&r,"A track/list element is missing."),P(v,M(r,"."+bt+":not(."+wt+")")),O({arrows:St,pagination:kt,prev:Ct,next:Pt,bar:Lt,toggle:At},(function(n,t){d[t]=w("."+n)})),I(d,{root:f,track:i,list:r,slides:v}),function(){var n=f.id||mn(tn),t=e.role;f.id=n,i.id=i.id||n+"-track",r.id=r.id||n+"-list",!H(f,$n)&&"SECTION"!==f.tagName&&t&&R(f,$n,t);R(f,st,l.carousel),R(r,$n,"presentation")}(),b()}function y(n){var t=vt.concat("style");c(v),Z(f,p),Z(i,h),F([i,r],t),F(f,n?t:["style",st])}function b(){Z(f,p),Z(i,h),p=E(gt),h=E(mt),_(f,p),_(i,h),R(f,ot,e.label),R(f,ut,e.labelledby)}function w(n){var t=V(f,n);return t&&function(n,t){if(m(n.closest))return n.closest(t);for(var e=n;e&&1===e.nodeType&&!D(e,t);)e=e.parentElement;return e}(t,"."+gt)===f?t:void 0}function E(n){return[n+"--"+e.type,n+"--"+e.direction,e.drag&&n+"--draggable",e.isNavigation&&n+"--nav",n===gt&&zt]}return I(d,{setup:g,mount:function(){a(Ln,y),a(Ln,g),a(An,b),s(document,Xt+" keydown",(function(n){o="keydown"===n.type}),{capture:!0}),s(f,"focusin",(function(){k(f,jt,!!o)}))},destroy:y})},Slides:function(n,t,e){var i=Bn(n),r=i.on,o=i.emit,u=i.bind,a=t.Elements,s=a.slides,l=a.list,d=[];function v(){s.forEach((function(n,t){h(n,t,-1)}))}function p(){b((function(n){n.destroy()})),c(d)}function h(t,e,i){var r=Ut(n,e,i,t);r.mount(),d.push(r),d.sort((function(n,t){return n.index-t.index}))}function g(n){return n?w((function(n){return!n.isClone})):d}function b(n,t){g(t).forEach(n)}function w(n){return d.filter(m(n)?n:function(t){return y(n)?D(t.slide,n):C(S(n),t.index)})}return{mount:function(){v(),r(Ln,p),r(Ln,v)},destroy:p,update:function(){b((function(n){n.update()}))},register:h,get:g,getIn:function(n){var i=t.Controller,r=i.toIndex(n),o=i.hasFocus()?1:e.perPage;return w((function(n){return ln(n.index,r,r+o-1)}))},getAt:function(n){return w(n)[0]},add:function(n,t){x(n,(function(n){if(y(n)&&(n=K(n)),E(n)){var i=s[t];i?A(n,i):L(l,n),_(n,e.classes.slide),r=n,a=f(o,Dn),c=Q(r,"img"),(d=c.length)?c.forEach((function(n){u(n,"load error",(function(){--d||a()}))})):a()}var r,a,c,d})),o(Ln)},remove:function(n){U(w(n).map((function(n){return n.slide}))),o(Ln)},forEach:b,filter:w,style:function(n,t,e){b((function(i){i.style(n,t,e)}))},getLength:function(n){return n?s.length:d.length},isEnough:function(){return d.length>e.perPage}}},Layout:function(n,t,e){var i,r,o,u=Bn(n),a=u.on,c=u.bind,s=u.emit,l=t.Slides,d=t.Direction.resolve,v=t.Elements,p=v.root,g=v.track,m=v.list,y=l.getAt,b=l.style;function w(){i=e.direction===Vn,X(p,"maxWidth",nn(e.width)),X(g,d("paddingLeft"),S(!1)),X(g,d("paddingRight"),S(!0)),E(!0)}function E(n){var t=q(p);(n||r.width!==t.width||r.height!==t.height)&&(X(g,"height",function(){var n="";i&&(rn(n=x(),"height or heightRatio is missing."),n="calc("+n+" - "+S(!1)+" - "+S(!0)+")");return n}()),b(d("marginRight"),nn(e.gap)),b("width",e.autoWidth?null:nn(e.fixedWidth)||(i?"":C())),b("height",nn(e.fixedHeight)||(i?e.autoHeight?null:C():x()),!0),r=t,s(Mn),o!==(o=M())&&(k(p,Ft,o),s("overflow",o)))}function S(n){var t=e.padding,i=d(n?"right":"left");return t&&nn(t[i]||(h(t)?0:t))||"0px"}function x(){return nn(e.height||q(m).width*e.heightRatio)}function C(){var n=nn(e.gap);return"calc((100%"+(n&&" + "+n)+")/"+(e.perPage||1)+(n&&" - "+n)+")"}function P(){return q(m)[d("width")]}function _(n,t){var e=y(n||0);return e?q(e.slide)[d("width")]+(t?0:D()):0}function L(n,t){var e=y(n);if(e){var i=q(e.slide)[d("right")],r=q(m)[d("left")];return sn(i-r)+(t?0:D())}return 0}function A(t){return L(n.length-1)-L(0)+_(0,t)}function D(){var n=y(0);return n&&parseFloat(X(n.slide,d("marginRight")))||0}function M(){return n.is(qt)||A(!0)>P()}return{mount:function(){var n,t,e;w(),c(window,"resize load",(n=f(s,Dn),e=Hn(t||0,n,null,1),function(){e.isPaused()&&e.start()})),a([An,Ln],w),a(Dn,E)},resize:E,listSize:P,slideSize:_,sliderSize:A,totalSize:L,getPadding:function(n){return parseFloat(X(g,d("padding"+(n?"Right":"Left"))))||0},isOverflow:M}},Clones:function(n,t,e){var i,r=Bn(n),o=r.on,u=t.Elements,a=t.Slides,s=t.Direction.resolve,f=[];function l(){o(Ln,d),o([An,Dn],p),(i=h())&&(!function(t){var i=a.get().slice(),r=i.length;if(r){for(;i.length<t;)P(i,i);P(i.slice(-t),i.slice(0,t)).forEach((function(o,c){var s=c<t,l=function(t,i){var r=t.cloneNode(!0);return _(r,e.classes.clone),r.id=n.root.id+"-clone"+hn(i+1),r}(o.slide,c);s?A(l,i[0].slide):L(u.list,l),P(f,l),a.register(l,c-t+(s?0:r),o.index)}))}}(i),t.Layout.resize(!0))}function d(){v(),l()}function v(){U(f),c(f),r.destroy()}function p(){var n=h();i!==n&&(i<n||!n)&&r.emit(Ln)}function h(){var i=e.clones;if(n.is(Yt)){if(b(i)){var r=e[s("fixedWidth")]&&t.Layout.slideSize(0);i=r&&cn(q(u.track)[s("width")]/r)||e[s("autoWidth")]&&n.length||2*e.perPage}}else i=0;return i}return{mount:l,destroy:v}},Move:function(n,t,e){var i,r=Bn(n),u=r.on,a=r.emit,c=n.state.set,s=t.Layout,f=s.slideSize,l=s.getPadding,d=s.totalSize,v=s.listSize,p=s.sliderSize,h=t.Direction,g=h.resolve,m=h.orient,y=t.Elements,w=y.list,E=y.track;function S(){t.Controller.isBusy()||(t.Scroll.cancel(),x(n.index),t.Slides.update())}function x(n){C(L(n,!0))}function C(e,i){if(!n.is(qt)){var r=i?e:function(e){if(n.is(Yt)){var i=_(e),r=i>t.Controller.getEnd();(i<0||r)&&(e=P(e,r))}return e}(e);X(w,"transform","translate"+g("X")+"("+r+"px)"),e!==r&&a(Xn)}}function P(n,t){var e=n-D(t),i=p();return n-=m(i*(cn(sn(e)/i)||1))*(t?1:-1)}function k(){C(A(),!0),i.cancel()}function _(n){for(var e=t.Slides.get(),i=0,r=1/0,o=0;o<e.length;o++){var u=e[o].index,a=sn(L(u,!0)-n);if(!(a<=r))break;r=a,i=u}return i}function L(t,i){var r=m(d(t-1)-function(n){var t=e.focus;return"center"===t?(v()-f(n,!0))/2:+t*f(n)||0}(t));return i?function(t){e.trimSpace&&n.is(Ht)&&(t=dn(t,0,m(p(!0)-v())));return t}(r):r}function A(){var n=g("left");return q(w)[n]-q(E)[n]+m(l(!1))}function D(n){return L(n?t.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=t.Transition,u([bn,Mn,An,Ln],S)},move:function(n,t,e,r){var u,s;n!==t&&(u=n>e,s=m(P(A(),u)),u?s>=0:s<=w[g("scrollWidth")]-q(E)[g("width")])&&(k(),C(P(A(),n>e),!0)),c(o),a(En,t,e,n),i.start(t,(function(){c(3),a(Sn,t,e,n),r&&r()}))},jump:x,translate:C,shift:P,cancel:k,toIndex:_,toPosition:L,getPosition:A,getLimit:D,exceededLimit:function(n,t){t=b(t)?A():t;var e=!0!==n&&m(t)<m(D(!1)),i=!1!==n&&m(t)>m(D(!0));return e||i},reposition:S}},Controller:function(n,t,e){var i,r,a,c,s=Bn(n),l=s.on,d=s.emit,v=t.Move,p=v.getPosition,h=v.getLimit,g=v.toPosition,m=t.Slides,w=m.isEnough,E=m.getLength,S=e.omitEnd,x=n.is(Yt),C=n.is(Ht),P=f(M,!1),k=f(M,!0),_=e.start||0,L=_;function A(){r=E(!0),a=e.perMove,c=e.perPage,i=O();var n=dn(_,0,S?i:r-1);n!==_&&(_=n,v.reposition())}function D(){i!==O()&&d(Gn)}function M(n,t){var e=a||(F()?1:c),r=z(_+e*(n?-1:1),_,!(a||F()));return-1===r&&C&&!fn(p(),h(!n),1)?n?0:i:t?r:N(r)}function z(t,o,u){if(w()||F()){var s=function(t){if(C&&"move"===e.trimSpace&&t!==_)for(var i=p();i===g(t,!0)&&ln(t,0,n.length-1,!e.rewind);)t<_?--t:++t;return t}(t);s!==t&&(o=t,t=s,u=!1),t<0||t>i?t=a||!ln(0,t,o,!0)&&!ln(i,o,t,!0)?x?u?t<0?-(r%c||c):r:t:e.rewind?t<0?i:0:-1:I(T(t)):u&&t!==o&&(t=I(T(o)+(t<o?-1:1)))}else t=-1;return t}function N(n){return x?(n+r)%r||0:n}function O(){for(var n=r-(F()||x&&a?1:c);S&&n-- >0;)if(g(r-1,!0)!==g(n,!0)){n++;break}return dn(n,0,r-1)}function I(n){return dn(F()?n:c*n,0,i)}function T(n){return F()?on(n,i):an((n>=i?r-1:n)/c)}function j(n){n!==_&&(L=_,_=n)}function F(){return!b(e.focus)||e.isNavigation}function R(){return n.state.is([o,u])&&!!e.waitForTransition}return{mount:function(){A(),l([An,Ln,Gn],A),l(Mn,D)},go:function(n,t,e){if(!R()){var r=function(n){var t=_;if(y(n)){var e=n.match(/([+\-<>])(\d+)?/)||[],r=e[1],o=e[2];"+"===r||"-"===r?t=z(_+ +(""+r+(+o||1)),_):">"===r?t=o?I(+o):P(!0):"<"===r&&(t=k(!0))}else t=x?n:dn(n,0,i);return t}(n),o=N(r);o>-1&&(t||o!==_)&&(j(o),v.move(r,o,L,e))}},scroll:function(n,e,r,o){t.Scroll.scroll(n,e,r,(function(){var n=N(v.toIndex(p()));j(S?on(n,i):n),o&&o()}))},getNext:P,getPrev:k,getAdjacent:M,getEnd:O,setIndex:j,getIndex:function(n){return n?L:_},toIndex:I,toPage:T,toDest:function(n){var t=v.toIndex(n);return C?dn(t,0,i):t},hasFocus:F,isBusy:R}},Arrows:function(n,t,e){var i,r,o=Bn(n),u=o.on,a=o.bind,c=o.emit,s=e.classes,l=e.i18n,d=t.Elements,v=t.Controller,p=d.arrows,h=d.track,g=p,m=d.prev,y=d.next,b={};function w(){!function(){var n=e.arrows;!n||m&&y||(g=p||W("div",s.arrows),m=C(!0),y=C(!1),i=!0,L(g,[m,y]),!p&&A(g,h));m&&y&&(I(b,{prev:m,next:y}),G(g,n?"":"none"),_(g,r=St+"--"+e.direction),n&&(u([bn,Sn,Ln,Nn,Gn],P),a(y,"click",f(x,">")),a(m,"click",f(x,"<")),P(),R([m,y],et,h.id),c(In,m,y)))}(),u(An,E)}function E(){S(),w()}function S(){o.destroy(),Z(g,r),i?(U(p?[m,y]:g),m=y=null):F([m,y],vt)}function x(n){v.go(n,!0)}function C(n){return K('<button class="'+s.arrow+" "+(n?s.prev:s.next)+'" type="button"><svg xmlns="'+Kt+'" viewBox="0 0 '+"40 "+'40" width="'+'40" height="'+'40" focusable="false"><path d="'+(e.arrowPath||Jt)+'" />')}function P(){if(m&&y){var t=n.index,e=v.getPrev(),i=v.getNext(),r=e>-1&&t<e?l.last:l.prev,o=i>-1&&t>i?l.first:l.next;m.disabled=e<0,y.disabled=i<0,R(m,ot,r),R(y,ot,o),c("arrows:updated",m,y,e,i)}}return{arrows:b,mount:w,destroy:S,update:P}},Autoplay:function(n,t,e){var i,r,o=Bn(n),u=o.on,a=o.bind,c=o.emit,s=Hn(e.interval,n.go.bind(n,">"),(function(n){var t=l.bar;t&&X(t,"width",100*n+"%"),c("autoplay:playing",n)})),f=s.isPaused,l=t.Elements,d=t.Elements,v=d.root,p=d.toggle,h=e.autoplay,g="pause"===h;function m(){f()&&t.Slides.isEnough()&&(s.start(!e.resetProgress),r=i=g=!1,w(),c(jn))}function y(n){void 0===n&&(n=!0),g=!!n,w(),f()||(s.pause(),c(Fn))}function b(){g||(i||r?y(!1):m())}function w(){p&&(k(p,zt,!g),R(p,ot,e.i18n[g?"play":"pause"]))}function E(n){var i=t.Slides.getAt(n);s.set(i&&+H(i.slide,Vt)||e.interval)}return{mount:function(){h&&(!function(){e.pauseOnHover&&a(v,"mouseenter mouseleave",(function(n){i="mouseenter"===n.type,b()}));e.pauseOnFocus&&a(v,"focusin focusout",(function(n){r="focusin"===n.type,b()}));p&&a(p,"click",(function(){g?m():y(!0)}));u([En,zn,Ln],s.rewind),u(En,E)}(),p&&R(p,et,l.track.id),g||m(),w())},destroy:s.cancel,play:m,pause:y,isPaused:f}},Cover:function(n,t,e){var i=Bn(n).on;function r(n){t.Slides.forEach((function(t){var e=z(t.container||t.slide,"img");e&&e.src&&o(n,e,t)}))}function o(n,t,e){e.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),G(t,n?"none":"")}return{mount:function(){e.cover&&(i(Rn,f(o,!0)),i([bn,An,Ln],f(r,!0)))},destroy:f(r,!1)}},Scroll:function(n,t,e){var i,r,o=Bn(n),a=o.on,c=o.emit,s=n.state.set,l=t.Move,d=l.getPosition,v=l.getLimit,p=l.exceededLimit,h=l.translate,g=n.is(Ht),m=1;function y(n,e,o,a,v){var h=d();if(E(),o&&(!g||!p())){var y=t.Layout.sliderSize(),S=vn(n)*y*an(sn(n)/y)||0;n=l.toPosition(t.Controller.toDest(n%y))+S}var x=fn(h,n,1);m=1,e=x?0:e||un(sn(n-h)/1.5,800),r=a,i=Hn(e,b,f(w,h,n,v),1),s(u),c(zn),i.start()}function b(){s(3),r&&r(),c(Nn)}function w(n,t,i,o){var u,a,c=d(),s=(n+(t-n)*(u=o,(a=e.easingFunc)?a(u):1-Math.pow(1-u,4))-c)*m;h(c+s),g&&!i&&p()&&(m*=.6,sn(s)<10&&y(v(p(!0)),600,!1,r,!0))}function E(){i&&i.cancel()}function S(){i&&!i.isPaused()&&(E(),b())}return{mount:function(){a(En,E),a([An,Ln],S)},destroy:E,scroll:y,cancel:S}},Drag:function(n,t,e){var i,r,a,c,s,f,l,v,p=Bn(n),g=p.on,m=p.emit,y=p.bind,b=p.unbind,w=n.state,E=t.Move,S=t.Scroll,x=t.Controller,C=t.Elements.track,P=t.Media.reduce,k=t.Direction,_=k.resolve,L=k.orient,A=E.getPosition,M=E.exceededLimit,z=!1;function N(){var n=e.drag;H(!n),c="free"===n}function O(n){if(f=!1,!l){var t=B(n);i=n.target,r=e.noDrag,D(i,"."+_t+", ."+xt)||r&&D(i,r)||!t&&n.button||(x.isBusy()?J(n,!0):(v=t?C:window,s=w.is([o,u]),a=null,y(v,Gt,I,Qt),y(v,Bt,T,Qt),E.cancel(),S.cancel(),F(n)))}var i,r}function I(t){if(w.is(6)||(w.set(6),m("drag")),t.cancelable)if(s){E.translate(i+R(t)/(z&&n.is(Ht)?5:1));var r=W(t)>200,o=z!==(z=M());(r||o)&&F(t),f=!0,m("dragging"),J(t)}else(function(n){return sn(R(n))>sn(R(n,!0))})(t)&&(s=function(n){var t=e.dragMinThreshold,i=h(t),r=i&&t.mouse||0,o=(i?t.touch:+t)||10;return sn(R(n))>(B(n)?o:r)}(t),J(t))}function T(i){w.is(6)&&(w.set(3),m("dragged")),s&&(!function(i){var r=function(t){if(n.is(Yt)||!z){var e=W(t);if(e&&e<200)return R(t)/e}return 0}(i),o=function(n){return A()+vn(n)*on(sn(n)*(e.flickPower||600),c?1/0:t.Layout.listSize()*(e.flickMaxPages||1))}(r),u=e.rewind&&e.rewindByDrag;P(!1),c?x.scroll(o,0,e.snap):n.is(qt)?x.go(L(vn(r))<0?u?"<":"-":u?">":"+"):n.is(Ht)&&z&&u?x.go(M(!0)?">":"<"):x.go(x.toDest(o),!0);P(!0)}(i),J(i)),b(v,Gt,I),b(v,Bt,T),s=!1}function j(n){!l&&f&&J(n,!0)}function F(n){a=r,r=n,i=A()}function R(n,t){return G(n,t)-G(X(n),t)}function W(n){return $(n)-$(X(n))}function X(n){return r===n&&a||r}function G(n,t){return(B(n)?n.changedTouches[0]:n)["page"+_(t?"Y":"X")]}function B(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function H(n){l=n}return{mount:function(){y(C,Gt,d,Qt),y(C,Bt,d,Qt),y(C,Xt,O,Qt),y(C,"click",j,{capture:!0}),y(C,"dragstart",J),g([bn,An],N)},disable:H,isDragging:function(){return s}}},Keyboard:function(n,t,e){var i,r,o=Bn(n),u=o.on,a=o.bind,c=o.unbind,s=n.root,f=t.Direction.resolve;function d(){var n=e.keyboard;n&&(i="global"===n?window:s,a(i,ne,h))}function v(){c(i,ne)}function p(){var n=r;r=!0,l((function(){r=n}))}function h(t){if(!r){var e=$t(t);e===f(qn)?n.go("<"):e===f(Un)&&n.go(">")}}return{mount:function(){d(),u(An,v),u(An,d),u(En,p)},destroy:v,disable:function(n){r=n}}},LazyLoad:function(n,t,e){var i=Bn(n),r=i.on,o=i.off,u=i.bind,a=i.emit,s="sequential"===e.lazyLoad,l=[Sn,Nn],d=[];function v(){c(d),t.Slides.forEach((function(n){Q(n.slide,ie).forEach((function(t){var i=H(t,te),r=H(t,ee);if(i!==t.src||r!==t.srcset){var o=e.classes.spinner,u=t.parentElement,a=z(u,"."+o)||W("span",o,u);d.push([t,n,a]),t.src||G(t,"none")}}))})),s?m():(o(l),r(l,p),p())}function p(){(d=d.filter((function(t){var i=e.perPage*((e.preloadPages||1)+1)-1;return!t[1].isWithin(n.index,i)||h(t)}))).length||o(l)}function h(n){var t=n[0];_(n[1].slide,Tt),u(t,"load error",f(g,n)),R(t,"src",H(t,te)),R(t,"srcset",H(t,ee)),F(t,te),F(t,ee)}function g(n,t){var e=n[0],i=n[1];Z(i.slide,Tt),"error"!==t.type&&(U(n[2]),G(e,""),a(Rn,e,i),a(Dn)),s&&m()}function m(){d.length&&h(d.shift())}return{mount:function(){e.lazyLoad&&(v(),r(Ln,v))},destroy:f(c,d),check:p}},Pagination:function(n,t,e){var i,r,o=Bn(n),u=o.on,a=o.emit,l=o.bind,d=t.Slides,v=t.Elements,p=t.Controller,h=p.hasFocus,g=p.getIndex,m=p.go,y=t.Direction.resolve,b=v.pagination,w=[];function E(){i&&(U(b?s(i.children):i),Z(i,r),c(w),i=null),o.destroy()}function S(n){m(">"+n,!0)}function x(n,t){var e=w.length,i=$t(t),r=C(),o=-1;i===y(Un,!1,r)?o=++n%e:i===y(qn,!1,r)?o=(--n+e)%e:"Home"===i?o=0:"End"===i&&(o=e-1);var u=w[o];u&&(B(u.button),m(">"+o),J(t,!0))}function C(){return e.paginationDirection||e.direction}function P(n){return w[p.toPage(n)]}function k(){var n=P(g(!0)),t=P(g());if(n){var e=n.button;Z(e,zt),F(e,rt),R(e,nt,-1)}if(t){var r=t.button;_(r,zt),R(r,rt,!0),R(r,nt,"")}a("pagination:updated",{list:i,items:w},n,t)}return{items:w,mount:function t(){E(),u([An,Ln,Gn],t);var o=e.pagination;b&&G(b,o?"":"none"),o&&(u([En,zn,Nn],k),function(){var t=n.length,o=e.classes,u=e.i18n,a=e.perPage,c=h()?p.getEnd()+1:cn(t/a);_(i=b||W("ul",o.pagination,v.track.parentElement),r=kt+"--"+C()),R(i,$n,"tablist"),R(i,ot,u.select),R(i,ct,C()===Vn?"vertical":"");for(var s=0;s<c;s++){var g=W("li",null,i),m=W("button",{class:o.page,type:"button"},g),y=d.getIn(s).map((function(n){return n.slide.id})),E=!h()&&a>1?u.pageX:u.slideX;l(m,"click",f(S,s)),e.paginationKeyboard&&l(m,"keydown",f(x,s)),R(g,$n,"presentation"),R(m,$n,"tab"),R(m,et,y.join(" ")),R(m,ot,pn(E,s+1)),R(m,nt,-1),w.push({li:g,button:m,page:s})}}(),k(),a("pagination:mounted",{list:i,items:w},P(n.index)))},destroy:E,getAt:P,update:k}},Sync:function(n,t,e){var i=e.isNavigation,r=e.slideFocus,o=[];function u(){var t,e;n.splides.forEach((function(t){t.isParent||(s(n,t.splide),s(t.splide,n))})),i&&(t=Bn(n),(e=t.on)(xn,d),e(Wn,v),e([bn,An],l),o.push(t),t.emit(Tn,n.splides))}function a(){o.forEach((function(n){n.destroy()})),c(o)}function s(n,t){var e=Bn(n);e.on(En,(function(n,e,i){t.go(t.is(Yt)?i:n)})),o.push(e)}function l(){R(t.Elements.list,ct,e.direction===Vn?"vertical":"")}function d(t){n.go(t.index)}function v(n,t){C(re,$t(t))&&(d(n),J(t))}return{setup:f(t.Media.set,{slideFocus:b(r)?i:r},!0),mount:u,destroy:a,remount:function(){a(),u()}}},Wheel:function(n,t,e){var i=Bn(n).bind,r=0;function u(i){if(i.cancelable){var u=i.deltaY,a=u<0,c=$(i),s=e.wheelMinThreshold||0,f=e.wheelSleep||0;sn(u)>s&&c-r>f&&(n.go(a?"<":">"),r=c),function(i){return!e.releaseWheel||n.state.is(o)||-1!==t.Controller.getAdjacent(i)}(a)&&J(i)}}return{mount:function(){e.wheel&&i(t.Elements.track,"wheel",u,Qt)}}},Live:function(n,t,e){var i=Bn(n).on,r=t.Elements.track,o=e.live&&!e.isNavigation,u=W("span",Dt),a=Hn(90,f(c,!1));function c(n){R(r,lt,n),n?(L(r,u),a.start()):(U(u),a.cancel())}function s(n){o&&R(r,ft,n?"off":"polite")}return{mount:function(){o&&(s(!t.Autoplay.isPaused()),R(r,dt,!0),u.textContent="…",i(jn,f(s,!0)),i(Fn,f(s,!1)),i([Sn,Nn],f(c,!0)))},disable:s,destroy:function(){F(r,[ft,dt,lt]),U(u)}}}}),ue={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Wt,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ae(n,t,e){var i=t.Slides;function r(){i.forEach((function(n){n.style("transform","translateX(-"+100*n.index+"%)")}))}return{mount:function(){Bn(n).on([bn,Ln],r)},start:function(n,t){i.style("transition","opacity "+e.speed+"ms "+e.easing),l(t)},cancel:d}}function ce(n,t,e){var i,r=t.Move,o=t.Controller,u=t.Scroll,a=t.Elements.list,c=f(X,a,"transition");function s(){c(""),u.cancel()}return{mount:function(){Bn(n).bind(a,"transitionend",(function(n){n.target===a&&i&&(s(),i())}))},start:function(t,a){var s=r.toPosition(t,!0),f=r.getPosition(),l=function(t){var i=e.rewindSpeed;if(n.is(Ht)&&i){var r=o.getIndex(!0),u=o.getEnd();if(0===r&&t>=u||r>=u&&0===t)return i}return e.speed}(t);sn(s-f)>=1&&l>=1?e.useScroll?u.scroll(s,l,!1,a):(c("transform "+l+"ms "+e.easing),r.translate(s,!0),i=a):(r.jump(t),a())},cancel:s}}var se=function(){function n(t,e){var i;this.event=Bn(),this.Components={},this.state=(i=1,{set:function(n){i=n},is:function(n){return C(S(n),i)}}),this.splides=[],this._o={},this._E={};var r=y(t)?V(document,t):t;rn(r,r+" is invalid."),this.root=r,e=T({label:H(r,ot)||"",labelledby:H(r,ut)||""},ue,n.defaults,e||{});try{T(e,JSON.parse(H(r,en)))}catch(n){rn(!1,"Invalid JSON")}this._o=Object.create(T({},e))}var t,e,r,o=n.prototype;return o.mount=function(n,t){var e=this,i=this.state,r=this.Components;return rn(i.is([1,7]),"Already mounted!"),i.set(1),this._C=r,this._T=t||this._T||(this.is(qt)?ae:ce),this._E=n||this._E,O(I({},oe,this._E,{Transition:this._T}),(function(n,t){var i=n(e,r,e._o);r[t]=i,i.setup&&i.setup()})),O(r,(function(n){n.mount&&n.mount()})),this.emit(bn),_(this.root,Mt),i.set(3),this.emit(wn),this},o.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},o.go=function(n){return this._C.Controller.go(n),this},o.on=function(n,t){return this.event.on(n,t),this},o.off=function(n){return this.event.off(n),this},o.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(s(arguments,1))),this},o.add=function(n,t){return this._C.Slides.add(n,t),this},o.remove=function(n){return this._C.Slides.remove(n),this},o.is=function(n){return this._o.type===n},o.refresh=function(){return this.emit(Ln),this},o.destroy=function(n){void 0===n&&(n=!0);var t=this.event,e=this.state;return e.is(1)?Bn(this).on(wn,this.destroy.bind(this,n)):(O(this._C,(function(t){t.destroy&&t.destroy(n)}),!0),t.emit(On),t.destroy(),n&&c(this.splides),e.set(7)),this},t=n,(e=[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&i(t.prototype,e),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();se.defaults={},se.STATES=a}}]);