"use strict";(self.webpackChunkoptimized_js_project=self.webpackChunkoptimized_js_project||[]).push([[561],{7095:(t,n,r)=>{function e(t,n){return null==t||null==n?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function o(t,n){return null==t||null==n?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function l(t){let n,r,l;function i(t,e,o=0,l=t.length){if(o<l){if(0!==n(e,e))return l;do{const n=o+l>>>1;r(t[n],e)<0?o=n+1:l=n}while(o<l)}return o}return 2!==t.length?(n=e,r=(n,r)=>e(t(n),r),l=(n,r)=>t(n)-r):(n=t===e||t===o?t:u,r=t,l=t),{left:i,center:function(t,n,r=0,e=t.length){const o=i(t,n,r,e-1);return o>r&&l(t[o-1],n)>-l(t[o],n)?o-1:o},right:function(t,e,o=0,l=t.length){if(o<l){if(0!==n(e,e))return l;do{const n=o+l>>>1;r(t[n],e)<=0?o=n+1:l=n}while(o<l)}return o}}}function u(){return 0}r.d(n,{ZP:()=>s});const i=l(e),f=i.right,s=(i.left,l((function(t){return null===t?NaN:+t})).center,f)},9089:(t,n,r)=>{function e(t,n){let r,e;if(void 0===n)for(const n of t)null!=n&&(void 0===r?n>=n&&(r=e=n):(r>n&&(r=n),e<n&&(e=n)));else{let o=-1;for(let l of t)null!=(l=n(l,++o,t))&&(void 0===r?l>=l&&(r=e=l):(r>l&&(r=l),e<l&&(e=l)))}return[r,e]}r.d(n,{Z:()=>e})},266:(t,n,r)=>{r.d(n,{dU:()=>e});class e{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const n=this._partials;let r=0;for(let e=0;e<this._n&&e<32;e++){const o=n[e],l=t+o,u=Math.abs(t)<Math.abs(o)?t-(l-o):o-(l-t);u&&(n[r++]=u),t=l}return n[r]=t,this._n=r+1,this}valueOf(){const t=this._partials;let n,r,e,o=this._n,l=0;if(o>0){for(l=t[--o];o>0&&(n=l,r=t[--o],l=n+r,e=r-(l-n),!e););o>0&&(e<0&&t[o-1]<0||e>0&&t[o-1]>0)&&(r=2*e,n=l+r,r==n-l&&(l=n))}return l}}},4944:(t,n,r)=>{function e(t,n){let r=0,e=0;if(void 0===n)for(let n of t)null!=n&&(n=+n)>=n&&(++r,e+=n);else{let o=-1;for(let l of t)null!=(l=n(l,++o,t))&&(l=+l)>=l&&(++r,e+=l)}if(r)return e/r}r.d(n,{Z:()=>e})},3556:(t,n,r)=>{function e(t){return Array.from(function*(t){for(const n of t)yield*n}(t))}r.d(n,{Z:()=>e})},5162:(t,n,r)=>{function e(t,n,r){t=+t,n=+n,r=(o=arguments.length)<2?(n=t,t=0,1):o<3?1:+r;for(var e=-1,o=0|Math.max(0,Math.ceil((n-t)/r)),l=new Array(o);++e<o;)l[e]=t+e*r;return l}r.d(n,{Z:()=>e})},3896:(t,n,r)=>{r.d(n,{G9:()=>f,ZP:()=>i,ly:()=>s});const e=Math.sqrt(50),o=Math.sqrt(10),l=Math.sqrt(2);function u(t,n,r){const i=(n-t)/Math.max(0,r),f=Math.floor(Math.log10(i)),s=i/Math.pow(10,f),a=s>=e?10:s>=o?5:s>=l?2:1;let c,h,d;return f<0?(d=Math.pow(10,-f)/a,c=Math.round(t*d),h=Math.round(n*d),c/d<t&&++c,h/d>n&&--h,d=-d):(d=Math.pow(10,f)*a,c=Math.round(t/d),h=Math.round(n/d),c*d<t&&++c,h*d>n&&--h),h<c&&.5<=r&&r<2?u(t,n,2*r):[c,h,d]}function i(t,n,r){if(!((r=+r)>0))return[];if((t=+t)===(n=+n))return[t];const e=n<t,[o,l,i]=e?u(n,t,r):u(t,n,r);if(!(l>=o))return[];const f=l-o+1,s=new Array(f);if(e)if(i<0)for(let t=0;t<f;++t)s[t]=(l-t)/-i;else for(let t=0;t<f;++t)s[t]=(l-t)*i;else if(i<0)for(let t=0;t<f;++t)s[t]=(o+t)/-i;else for(let t=0;t<f;++t)s[t]=(o+t)*i;return s}function f(t,n,r){return u(t=+t,n=+n,r=+r)[2]}function s(t,n,r){r=+r;const e=(n=+n)<(t=+t),o=e?f(n,t,r):f(t,n,r);return(e?-1:1)*(o<0?1/-o:o)}}}]);