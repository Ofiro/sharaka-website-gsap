"use strict";(self.webpackChunkoptimized_js_project=self.webpackChunkoptimized_js_project||[]).push([[267],{9539:(n,t,r)=>{r.d(t,{Z:()=>Y});var i,o,e,u,f,a=r(266),l=r(5432),c=r(6957),p=new a.dU,v=new a.dU,s={point:c.Z,lineStart:c.Z,lineEnd:c.Z,polygonStart:function(){p=new a.dU,s.lineStart=h,s.lineEnd=d},polygonEnd:function(){var n=+p;v.add(n<0?l.BZ+n:n),this.lineStart=this.lineEnd=this.point=c.Z},sphere:function(){v.add(l.BZ)}};function h(){s.point=g}function d(){m(i,o)}function g(n,t){s.point=m,i=n,o=t,n*=l.uR,t*=l.uR,e=n,u=(0,l.mC)(t=t/2+l.pu),f=(0,l.O$)(t)}function m(n,t){n*=l.uR,t=(t*=l.uR)/2+l.pu;var r=n-e,i=r>=0?1:-1,o=i*r,a=(0,l.mC)(t),c=(0,l.O$)(t),v=f*c,s=u*a+v*(0,l.mC)(o),h=v*i*(0,l.O$)(o);p.add((0,l.fv)(h,s)),e=n,u=a,f=c}var R,S,Z,y,E,O,W,C,M,$,H,x=r(5713),w=r(9378),N={point:_,lineStart:B,lineEnd:P,polygonStart:function(){N.point=b,N.lineStart=T,N.lineEnd=z,M=new a.dU,s.polygonStart()},polygonEnd:function(){s.polygonEnd(),N.point=_,N.lineStart=B,N.lineEnd=P,p<0?(R=-(Z=180),S=-(y=90)):M>l.Ho?y=90:M<-l.Ho&&(S=-90),H[0]=R,H[1]=Z},sphere:function(){R=-(Z=180),S=-(y=90)}};function _(n,t){$.push(H=[R=n,Z=n]),t<S&&(S=t),t>y&&(y=t)}function j(n,t){var r=(0,x.Og)([n*l.uR,t*l.uR]);if(C){var i=(0,x.T5)(C,r),o=[i[1],-i[0],0],e=(0,x.T5)(o,i);(0,x.iJ)(e),e=(0,x.Y1)(e);var u,f=n-E,a=f>0?1:-1,c=e[0]*l.RW*a,p=(0,l.Wn)(f)>180;p^(a*E<c&&c<a*n)?(u=e[1]*l.RW)>y&&(y=u):p^(a*E<(c=(c+360)%360-180)&&c<a*n)?(u=-e[1]*l.RW)<S&&(S=u):(t<S&&(S=t),t>y&&(y=t)),p?n<E?U(R,n)>U(R,Z)&&(Z=n):U(n,Z)>U(R,Z)&&(R=n):Z>=R?(n<R&&(R=n),n>Z&&(Z=n)):n>E?U(R,n)>U(R,Z)&&(Z=n):U(n,Z)>U(R,Z)&&(R=n)}else $.push(H=[R=n,Z=n]);t<S&&(S=t),t>y&&(y=t),C=r,E=n}function B(){N.point=j}function P(){H[0]=R,H[1]=Z,N.point=_,C=null}function b(n,t){if(C){var r=n-E;M.add((0,l.Wn)(r)>180?r+(r>0?360:-360):r)}else O=n,W=t;s.point(n,t),j(n,t)}function T(){s.lineStart()}function z(){b(O,W),s.lineEnd(),(0,l.Wn)(M)>l.Ho&&(R=-(Z=180)),H[0]=R,H[1]=Z,C=null}function U(n,t){return(t-=n)<0?t+360:t}function J(n,t){return n[0]-t[0]}function L(n,t){return n[0]<=n[1]?n[0]<=t&&t<=n[1]:t<n[0]||n[1]<t}function Y(n){var t,r,i,o,e,u,f;if(y=Z=-(R=S=1/0),$=[],(0,w.Z)(n,N),r=$.length){for($.sort(J),t=1,e=[i=$[0]];t<r;++t)L(i,(o=$[t])[0])||L(i,o[1])?(U(i[0],o[1])>U(i[0],i[1])&&(i[1]=o[1]),U(o[0],i[1])>U(i[0],i[1])&&(i[0]=o[0])):e.push(i=o);for(u=-1/0,t=0,i=e[r=e.length-1];t<=r;i=o,++t)o=e[t],(f=U(i[1],o[0]))>u&&(u=f,R=o[0],Z=i[1])}return $=H=null,R===1/0||S===1/0?[[NaN,NaN],[NaN,NaN]]:[[R,S],[Z,y]]}},5713:(n,t,r)=>{r.d(t,{Og:()=>e,T:()=>l,T5:()=>f,Y1:()=>o,iJ:()=>c,j9:()=>u,s0:()=>a});var i=r(5432);function o(n){return[(0,i.fv)(n[1],n[0]),(0,i.ZR)(n[2])]}function e(n){var t=n[0],r=n[1],o=(0,i.mC)(r);return[o*(0,i.mC)(t),o*(0,i.O$)(t),(0,i.O$)(r)]}function u(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function f(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function a(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function l(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function c(n){var t=(0,i._b)(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}},4815:(n,t,r)=>{r.d(t,{Z:()=>B});var i,o,e,u,f,a,l,c,p,v,s,h,d,g,m,R,S=r(266),Z=r(5432),y=r(6957),E=r(9378),O={sphere:y.Z,point:W,lineStart:M,lineEnd:x,polygonStart:function(){O.lineStart=w,O.lineEnd=N},polygonEnd:function(){O.lineStart=M,O.lineEnd=x}};function W(n,t){n*=Z.uR,t*=Z.uR;var r=(0,Z.mC)(t);C(r*(0,Z.mC)(n),r*(0,Z.O$)(n),(0,Z.O$)(t))}function C(n,t,r){++i,e+=(n-e)/i,u+=(t-u)/i,f+=(r-f)/i}function M(){O.point=$}function $(n,t){n*=Z.uR,t*=Z.uR;var r=(0,Z.mC)(t);g=r*(0,Z.mC)(n),m=r*(0,Z.O$)(n),R=(0,Z.O$)(t),O.point=H,C(g,m,R)}function H(n,t){n*=Z.uR,t*=Z.uR;var r=(0,Z.mC)(t),i=r*(0,Z.mC)(n),e=r*(0,Z.O$)(n),u=(0,Z.O$)(t),f=(0,Z.fv)((0,Z._b)((f=m*u-R*e)*f+(f=R*i-g*u)*f+(f=g*e-m*i)*f),g*i+m*e+R*u);o+=f,a+=f*(g+(g=i)),l+=f*(m+(m=e)),c+=f*(R+(R=u)),C(g,m,R)}function x(){O.point=W}function w(){O.point=_}function N(){j(h,d),O.point=W}function _(n,t){h=n,d=t,n*=Z.uR,t*=Z.uR,O.point=j;var r=(0,Z.mC)(t);g=r*(0,Z.mC)(n),m=r*(0,Z.O$)(n),R=(0,Z.O$)(t),C(g,m,R)}function j(n,t){n*=Z.uR,t*=Z.uR;var r=(0,Z.mC)(t),i=r*(0,Z.mC)(n),e=r*(0,Z.O$)(n),u=(0,Z.O$)(t),f=m*u-R*e,h=R*i-g*u,d=g*e-m*i,S=(0,Z._m)(f,h,d),y=(0,Z.ZR)(S),E=S&&-y/S;p.add(E*f),v.add(E*h),s.add(E*d),o+=y,a+=y*(g+(g=i)),l+=y*(m+(m=e)),c+=y*(R+(R=u)),C(g,m,R)}function B(n){i=o=e=u=f=a=l=c=0,p=new S.dU,v=new S.dU,s=new S.dU,(0,E.Z)(n,O);var t=+p,r=+v,h=+s,d=(0,Z._m)(t,r,h);return d<Z.aW&&(t=a,r=l,h=c,o<Z.Ho&&(t=e,r=u,h=f),(d=(0,Z._m)(t,r,h))<Z.aW)?[NaN,NaN]:[(0,Z.fv)(r,t)*Z.RW,(0,Z.ZR)(h/d)*Z.RW]}},3563:(n,t,r)=>{function i(n,t){function r(r,i){return r=n(r,i),t(r[0],r[1])}return n.invert&&t.invert&&(r.invert=function(r,i){return(r=t.invert(r,i))&&n.invert(r[0],r[1])}),r}r.d(t,{Z:()=>i})},3178:(n,t,r)=>{r.d(t,{Z:()=>h});var i=r(3957),o=r(5201),e=r(5432),u={Feature:function(n,t){return a(n.geometry,t)},FeatureCollection:function(n,t){for(var r=n.features,i=-1,o=r.length;++i<o;)if(a(r[i].geometry,t))return!0;return!1}},f={Sphere:function(){return!0},Point:function(n,t){return l(n.coordinates,t)},MultiPoint:function(n,t){for(var r=n.coordinates,i=-1,o=r.length;++i<o;)if(l(r[i],t))return!0;return!1},LineString:function(n,t){return c(n.coordinates,t)},MultiLineString:function(n,t){for(var r=n.coordinates,i=-1,o=r.length;++i<o;)if(c(r[i],t))return!0;return!1},Polygon:function(n,t){return p(n.coordinates,t)},MultiPolygon:function(n,t){for(var r=n.coordinates,i=-1,o=r.length;++i<o;)if(p(r[i],t))return!0;return!1},GeometryCollection:function(n,t){for(var r=n.geometries,i=-1,o=r.length;++i<o;)if(a(r[i],t))return!0;return!1}};function a(n,t){return!(!n||!f.hasOwnProperty(n.type))&&f[n.type](n,t)}function l(n,t){return 0===(0,o.Z)(n,t)}function c(n,t){for(var r,i,u,f=0,a=n.length;f<a;f++){if(0===(i=(0,o.Z)(n[f],t)))return!0;if(f>0&&(u=(0,o.Z)(n[f],n[f-1]))>0&&r<=u&&i<=u&&(r+i-u)*(1-Math.pow((r-i)/u,2))<e.aW*u)return!0;r=i}return!1}function p(n,t){return!!(0,i.Z)(n.map(v),s(t))}function v(n){return(n=n.map(s)).pop(),n}function s(n){return[n[0]*e.uR,n[1]*e.uR]}function h(n,t){return(n&&u.hasOwnProperty(n.type)?u[n.type]:a)(n,t)}},5201:(n,t,r)=>{r.d(t,{Z:()=>m});var i,o,e,u,f=r(266),a=r(5432),l=r(6957),c=r(9378),p={sphere:l.Z,point:l.Z,lineStart:function(){p.point=s,p.lineEnd=v},lineEnd:l.Z,polygonStart:l.Z,polygonEnd:l.Z};function v(){p.point=p.lineEnd=l.Z}function s(n,t){n*=a.uR,t*=a.uR,o=n,e=(0,a.O$)(t),u=(0,a.mC)(t),p.point=h}function h(n,t){n*=a.uR,t*=a.uR;var r=(0,a.O$)(t),f=(0,a.mC)(t),l=(0,a.Wn)(n-o),c=(0,a.mC)(l),p=f*(0,a.O$)(l),v=u*r-e*f*c,s=e*r+u*f*c;i.add((0,a.fv)((0,a._b)(p*p+v*v),s)),o=n,e=r,u=f}var d=[null,null],g={type:"LineString",coordinates:d};function m(n,t){return d[0]=n,d[1]=t,function(n){return i=new f.dU,(0,c.Z)(n,p),+i}(g)}},3378:(n,t,r)=>{r.d(t,{e:()=>f});var i=r(5162),o=r(5432);function e(n,t,r){var e=(0,i.Z)(n,t-o.Ho,r).concat(t);return function(n){return e.map((function(t){return[n,t]}))}}function u(n,t,r){var e=(0,i.Z)(n,t-o.Ho,r).concat(t);return function(n){return e.map((function(t){return[t,n]}))}}function f(){return function(){var n,t,r,f,a,l,c,p,v,s,h,d,g=10,m=g,R=90,S=360,Z=2.5;function y(){return{type:"MultiLineString",coordinates:E()}}function E(){return(0,i.Z)((0,o.mD)(f/R)*R,r,R).map(h).concat((0,i.Z)((0,o.mD)(p/S)*S,c,S).map(d)).concat((0,i.Z)((0,o.mD)(t/g)*g,n,g).filter((function(n){return(0,o.Wn)(n%R)>o.Ho})).map(v)).concat((0,i.Z)((0,o.mD)(l/m)*m,a,m).filter((function(n){return(0,o.Wn)(n%S)>o.Ho})).map(s))}return y.lines=function(){return E().map((function(n){return{type:"LineString",coordinates:n}}))},y.outline=function(){return{type:"Polygon",coordinates:[h(f).concat(d(c).slice(1),h(r).reverse().slice(1),d(p).reverse().slice(1))]}},y.extent=function(n){return arguments.length?y.extentMajor(n).extentMinor(n):y.extentMinor()},y.extentMajor=function(n){return arguments.length?(f=+n[0][0],r=+n[1][0],p=+n[0][1],c=+n[1][1],f>r&&(n=f,f=r,r=n),p>c&&(n=p,p=c,c=n),y.precision(Z)):[[f,p],[r,c]]},y.extentMinor=function(r){return arguments.length?(t=+r[0][0],n=+r[1][0],l=+r[0][1],a=+r[1][1],t>n&&(r=t,t=n,n=r),l>a&&(r=l,l=a,a=r),y.precision(Z)):[[t,l],[n,a]]},y.step=function(n){return arguments.length?y.stepMajor(n).stepMinor(n):y.stepMinor()},y.stepMajor=function(n){return arguments.length?(R=+n[0],S=+n[1],y):[R,S]},y.stepMinor=function(n){return arguments.length?(g=+n[0],m=+n[1],y):[g,m]},y.precision=function(i){return arguments.length?(Z=+i,v=e(l,a,90),s=u(t,n,Z),h=e(p,c,90),d=u(f,r,Z),y):Z},y.extentMajor([[-180,-90+o.Ho],[180,90-o.Ho]]).extentMinor([[-180,-80-o.Ho],[180,80+o.Ho]])}()()}},6116:(n,t,r)=>{r.d(t,{Z:()=>o});var i=r(5432);function o(n,t){var r=n[0]*i.uR,o=n[1]*i.uR,e=t[0]*i.uR,u=t[1]*i.uR,f=(0,i.mC)(o),a=(0,i.O$)(o),l=(0,i.mC)(u),c=(0,i.O$)(u),p=f*(0,i.mC)(r),v=f*(0,i.O$)(r),s=l*(0,i.mC)(e),h=l*(0,i.O$)(e),d=2*(0,i.ZR)((0,i._b)((0,i.Jy)(u-o)+f*l*(0,i.Jy)(e-r))),g=(0,i.O$)(d),m=d?function(n){var t=(0,i.O$)(n*=d)/g,r=(0,i.O$)(d-n)/g,o=r*p+t*s,e=r*v+t*h,u=r*a+t*c;return[(0,i.fv)(e,o)*i.RW,(0,i.fv)(u,(0,i._b)(o*o+e*e))*i.RW]}:function(){return[r*i.RW,o*i.RW]};return m.distance=d,m}},5432:(n,t,r)=>{r.d(t,{BZ:()=>a,Ho:()=>i,Jy:()=>E,Kh:()=>Z,O$:()=>m,RW:()=>l,Wn:()=>p,Xx:()=>R,ZR:()=>y,_b:()=>S,_m:()=>g,aW:()=>o,fv:()=>s,mC:()=>h,mD:()=>d,ou:()=>u,pi:()=>e,pu:()=>f,uR:()=>c,z4:()=>v});var i=1e-6,o=1e-12,e=Math.PI,u=e/2,f=e/4,a=2*e,l=180/e,c=e/180,p=Math.abs,v=Math.atan,s=Math.atan2,h=Math.cos,d=Math.ceil,g=(Math.exp,Math.floor,Math.hypot),m=(Math.log,Math.pow,Math.sin),R=Math.sign||function(n){return n>0?1:n<0?-1:0},S=Math.sqrt;Math.tan;function Z(n){return n>1?0:n<-1?e:Math.acos(n)}function y(n){return n>1?u:n<-1?-u:Math.asin(n)}function E(n){return(n=m(n/2))*n}},6957:(n,t,r)=>{function i(){}r.d(t,{Z:()=>i})},3957:(n,t,r)=>{r.d(t,{Z:()=>f});var i=r(266),o=r(5713),e=r(5432);function u(n){return(0,e.Wn)(n[0])<=e.pi?n[0]:(0,e.Xx)(n[0])*(((0,e.Wn)(n[0])+e.pi)%e.BZ-e.pi)}function f(n,t){var r=u(t),f=t[1],a=(0,e.O$)(f),l=[(0,e.O$)(r),-(0,e.mC)(r),0],c=0,p=0,v=new i.dU;1===a?f=e.ou+e.Ho:-1===a&&(f=-e.ou-e.Ho);for(var s=0,h=n.length;s<h;++s)if(g=(d=n[s]).length)for(var d,g,m=d[g-1],R=u(m),S=m[1]/2+e.pu,Z=(0,e.O$)(S),y=(0,e.mC)(S),E=0;E<g;++E,R=W,Z=M,y=$,m=O){var O=d[E],W=u(O),C=O[1]/2+e.pu,M=(0,e.O$)(C),$=(0,e.mC)(C),H=W-R,x=H>=0?1:-1,w=x*H,N=w>e.pi,_=Z*M;if(v.add((0,e.fv)(_*x*(0,e.O$)(w),y*$+_*(0,e.mC)(w))),c+=N?H+x*e.BZ:H,N^R>=r^W>=r){var j=(0,o.T5)((0,o.Og)(m),(0,o.Og)(O));(0,o.iJ)(j);var B=(0,o.T5)(l,j);(0,o.iJ)(B);var P=(N^H>=0?-1:1)*(0,e.ZR)(B[2]);(f>P||f===P&&(j[0]||j[1]))&&(p+=N^H>=0?1:-1)}}return(c<-e.Ho||c<e.Ho&&v<-e.aW)^1&p}},9627:(n,t,r)=>{r.d(t,{Z:()=>k});var i=r(5432);var o=r(6957);function e(){var n,t=[];return{point:function(t,r,i){n.push([t,r,i])},lineStart:function(){t.push(n=[])},lineEnd:o.Z,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var r=t;return t=[],n=null,r}}}function u(n,t){return(0,i.Wn)(n[0]-t[0])<i.Ho&&(0,i.Wn)(n[1]-t[1])<i.Ho}function f(n,t,r,i){this.x=n,this.z=t,this.o=r,this.e=i,this.v=!1,this.n=this.p=null}function a(n,t,r,o,e){var a,c,p=[],v=[];if(n.forEach((function(n){if(!((t=n.length-1)<=0)){var t,r,o=n[0],l=n[t];if(u(o,l)){if(!o[2]&&!l[2]){for(e.lineStart(),a=0;a<t;++a)e.point((o=n[a])[0],o[1]);return void e.lineEnd()}l[0]+=2*i.Ho}p.push(r=new f(o,n,null,!0)),v.push(r.o=new f(o,null,r,!1)),p.push(r=new f(l,n,null,!1)),v.push(r.o=new f(l,null,r,!0))}})),p.length){for(v.sort(t),l(p),l(v),a=0,c=v.length;a<c;++a)v[a].e=r=!r;for(var s,h,d=p[0];;){for(var g=d,m=!0;g.v;)if((g=g.n)===d)return;s=g.z,e.lineStart();do{if(g.v=g.o.v=!0,g.e){if(m)for(a=0,c=s.length;a<c;++a)e.point((h=s[a])[0],h[1]);else o(g.x,g.n.x,1,e);g=g.n}else{if(m)for(s=g.p.z,a=s.length-1;a>=0;--a)e.point((h=s[a])[0],h[1]);else o(g.x,g.p.x,-1,e);g=g.p}s=(g=g.o).z,m=!m}while(!g.v);e.lineEnd()}}}function l(n){if(t=n.length){for(var t,r,i=0,o=n[0];++i<t;)o.n=r=n[i],r.p=o,o=r;o.n=r=n[0],r.p=o}}var c=r(3957),p=r(3556);function v(n,t,r,i){return function(o){var u,f,l,v=t(o),d=e(),g=t(d),m=!1,R={point:S,lineStart:y,lineEnd:E,polygonStart:function(){R.point=O,R.lineStart=W,R.lineEnd=C,f=[],u=[]},polygonEnd:function(){R.point=S,R.lineStart=y,R.lineEnd=E,f=(0,p.Z)(f);var n=(0,c.Z)(u,i);f.length?(m||(o.polygonStart(),m=!0),a(f,h,n,r,o)):n&&(m||(o.polygonStart(),m=!0),o.lineStart(),r(null,null,1,o),o.lineEnd()),m&&(o.polygonEnd(),m=!1),f=u=null},sphere:function(){o.polygonStart(),o.lineStart(),r(null,null,1,o),o.lineEnd(),o.polygonEnd()}};function S(t,r){n(t,r)&&o.point(t,r)}function Z(n,t){v.point(n,t)}function y(){R.point=Z,v.lineStart()}function E(){R.point=S,v.lineEnd()}function O(n,t){l.push([n,t]),g.point(n,t)}function W(){g.lineStart(),l=[]}function C(){O(l[0][0],l[0][1]),g.lineEnd();var n,t,r,i,e=g.clean(),a=d.result(),c=a.length;if(l.pop(),u.push(l),l=null,c)if(1&e){if((t=(r=a[0]).length-1)>0){for(m||(o.polygonStart(),m=!0),o.lineStart(),n=0;n<t;++n)o.point((i=r[n])[0],i[1]);o.lineEnd()}}else c>1&&2&e&&a.push(a.pop().concat(a.shift())),f.push(a.filter(s))}return R}}function s(n){return n.length>1}function h(n,t){return((n=n.x)[0]<0?n[1]-i.ou-i.Ho:i.ou-n[1])-((t=t.x)[0]<0?t[1]-i.ou-i.Ho:i.ou-t[1])}const d=v((function(){return!0}),(function(n){var t,r=NaN,o=NaN,e=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(u,f){var a=u>0?i.pi:-i.pi,l=(0,i.Wn)(u-r);(0,i.Wn)(l-i.pi)<i.Ho?(n.point(r,o=(o+f)/2>0?i.ou:-i.ou),n.point(e,o),n.lineEnd(),n.lineStart(),n.point(a,o),n.point(u,o),t=0):e!==a&&l>=i.pi&&((0,i.Wn)(r-e)<i.Ho&&(r-=e*i.Ho),(0,i.Wn)(u-a)<i.Ho&&(u-=a*i.Ho),o=function(n,t,r,o){var e,u,f=(0,i.O$)(n-r);return(0,i.Wn)(f)>i.Ho?(0,i.z4)(((0,i.O$)(t)*(u=(0,i.mC)(o))*(0,i.O$)(r)-(0,i.O$)(o)*(e=(0,i.mC)(t))*(0,i.O$)(n))/(e*u*f)):(t+o)/2}(r,o,u,f),n.point(e,o),n.lineEnd(),n.lineStart(),n.point(a,o),t=0),n.point(r=u,o=f),e=a},lineEnd:function(){n.lineEnd(),r=o=NaN},clean:function(){return 2-t}}}),(function(n,t,r,o){var e;if(null==n)e=r*i.ou,o.point(-i.pi,e),o.point(0,e),o.point(i.pi,e),o.point(i.pi,0),o.point(i.pi,-e),o.point(0,-e),o.point(-i.pi,-e),o.point(-i.pi,0),o.point(-i.pi,e);else if((0,i.Wn)(n[0]-t[0])>i.Ho){var u=n[0]<t[0]?i.pi:-i.pi;e=r*u/2,o.point(-u,e),o.point(0,e),o.point(u,e)}else o.point(t[0],t[1])}),[-i.pi,-i.ou]);var g=r(5713);function m(n,t,r,o,e,u){if(r){var f=(0,i.mC)(t),a=(0,i.O$)(t),l=o*r;null==e?(e=t+o*i.BZ,u=t-l/2):(e=R(f,e),u=R(f,u),(o>0?e<u:e>u)&&(e+=o*i.BZ));for(var c,p=e;o>0?p>u:p<u;p-=l)c=(0,g.Y1)([f,-a*(0,i.mC)(p),-a*(0,i.O$)(p)]),n.point(c[0],c[1])}}function R(n,t){(t=(0,g.Og)(t))[0]-=n,(0,g.iJ)(t);var r=(0,i.Kh)(-t[1]);return((-t[2]<0?-r:r)+i.BZ-i.Ho)%i.BZ}var S=1e9,Z=-S;function y(n,t,r,o){function u(i,e){return n<=i&&i<=r&&t<=e&&e<=o}function f(i,e,u,f){var a=0,c=0;if(null==i||(a=l(i,u))!==(c=l(e,u))||v(i,e)<0^u>0)do{f.point(0===a||3===a?n:r,a>1?o:t)}while((a=(a+u+4)%4)!==c);else f.point(e[0],e[1])}function l(o,e){return(0,i.Wn)(o[0]-n)<i.Ho?e>0?0:3:(0,i.Wn)(o[0]-r)<i.Ho?e>0?2:1:(0,i.Wn)(o[1]-t)<i.Ho?e>0?1:0:e>0?3:2}function c(n,t){return v(n.x,t.x)}function v(n,t){var r=l(n,1),i=l(t,1);return r!==i?r-i:0===r?t[1]-n[1]:1===r?n[0]-t[0]:2===r?n[1]-t[1]:t[0]-n[0]}return function(i){var l,v,s,h,d,g,m,R,y,E,O,W=i,C=e(),M={point:$,lineStart:function(){M.point=H,v&&v.push(s=[]);E=!0,y=!1,m=R=NaN},lineEnd:function(){l&&(H(h,d),g&&y&&C.rejoin(),l.push(C.result()));M.point=$,y&&W.lineEnd()},polygonStart:function(){W=C,l=[],v=[],O=!0},polygonEnd:function(){var t=function(){for(var t=0,r=0,i=v.length;r<i;++r)for(var e,u,f=v[r],a=1,l=f.length,c=f[0],p=c[0],s=c[1];a<l;++a)e=p,u=s,p=(c=f[a])[0],s=c[1],u<=o?s>o&&(p-e)*(o-u)>(s-u)*(n-e)&&++t:s<=o&&(p-e)*(o-u)<(s-u)*(n-e)&&--t;return t}(),r=O&&t,e=(l=(0,p.Z)(l)).length;(r||e)&&(i.polygonStart(),r&&(i.lineStart(),f(null,null,1,i),i.lineEnd()),e&&a(l,c,t,f,i),i.polygonEnd());W=i,l=v=s=null}};function $(n,t){u(n,t)&&W.point(n,t)}function H(i,e){var f=u(i,e);if(v&&s.push([i,e]),E)h=i,d=e,g=f,E=!1,f&&(W.lineStart(),W.point(i,e));else if(f&&y)W.point(i,e);else{var a=[m=Math.max(Z,Math.min(S,m)),R=Math.max(Z,Math.min(S,R))],l=[i=Math.max(Z,Math.min(S,i)),e=Math.max(Z,Math.min(S,e))];!function(n,t,r,i,o,e){var u,f=n[0],a=n[1],l=0,c=1,p=t[0]-f,v=t[1]-a;if(u=r-f,p||!(u>0)){if(u/=p,p<0){if(u<l)return;u<c&&(c=u)}else if(p>0){if(u>c)return;u>l&&(l=u)}if(u=o-f,p||!(u<0)){if(u/=p,p<0){if(u>c)return;u>l&&(l=u)}else if(p>0){if(u<l)return;u<c&&(c=u)}if(u=i-a,v||!(u>0)){if(u/=v,v<0){if(u<l)return;u<c&&(c=u)}else if(v>0){if(u>c)return;u>l&&(l=u)}if(u=e-a,v||!(u<0)){if(u/=v,v<0){if(u>c)return;u>l&&(l=u)}else if(v>0){if(u<l)return;u<c&&(c=u)}return l>0&&(n[0]=f+l*p,n[1]=a+l*v),c<1&&(t[0]=f+c*p,t[1]=a+c*v),!0}}}}}(a,l,n,t,r,o)?f&&(W.lineStart(),W.point(i,e),O=!1):(y||(W.lineStart(),W.point(a[0],a[1])),W.point(l[0],l[1]),f||W.lineEnd(),O=!1)}m=i,R=e,y=f}return M}}var E=r(3563);const O=n=>n;var W=r(635);function C(n){return function(t){var r=new M;for(var i in n)r[i]=n[i];return r.stream=t,r}}function M(){}M.prototype={constructor:M,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var $=r(9378),H=1/0,x=H,w=-H,N=w,_={point:function(n,t){n<H&&(H=n);n>w&&(w=n);t<x&&(x=t);t>N&&(N=t)},lineStart:o.Z,lineEnd:o.Z,polygonStart:o.Z,polygonEnd:o.Z,result:function(){var n=[[H,x],[w,N]];return w=N=-(x=H=1/0),n}};const j=_;function B(n,t,r){var i=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),null!=i&&n.clipExtent(null),(0,$.Z)(r,n.stream(j)),t(j.result()),null!=i&&n.clipExtent(i),n}function P(n,t,r){return B(n,(function(r){var i=t[1][0]-t[0][0],o=t[1][1]-t[0][1],e=Math.min(i/(r[1][0]-r[0][0]),o/(r[1][1]-r[0][1])),u=+t[0][0]+(i-e*(r[1][0]+r[0][0]))/2,f=+t[0][1]+(o-e*(r[1][1]+r[0][1]))/2;n.scale(150*e).translate([u,f])}),r)}var b=16,T=(0,i.mC)(30*i.uR);function z(n,t){return+t?function(n,t){function r(o,e,u,f,a,l,c,p,v,s,h,d,g,m){var R=c-o,S=p-e,Z=R*R+S*S;if(Z>4*t&&g--){var y=f+s,E=a+h,O=l+d,W=(0,i._b)(y*y+E*E+O*O),C=(0,i.ZR)(O/=W),M=(0,i.Wn)((0,i.Wn)(O)-1)<i.Ho||(0,i.Wn)(u-v)<i.Ho?(u+v)/2:(0,i.fv)(E,y),$=n(M,C),H=$[0],x=$[1],w=H-o,N=x-e,_=S*w-R*N;(_*_/Z>t||(0,i.Wn)((R*w+S*N)/Z-.5)>.3||f*s+a*h+l*d<T)&&(r(o,e,u,f,a,l,H,x,M,y/=W,E/=W,O,g,m),m.point(H,x),r(H,x,M,y,E,O,c,p,v,s,h,d,g,m))}}return function(t){var i,o,e,u,f,a,l,c,p,v,s,h,d={point:m,lineStart:R,lineEnd:Z,polygonStart:function(){t.polygonStart(),d.lineStart=y},polygonEnd:function(){t.polygonEnd(),d.lineStart=R}};function m(r,i){r=n(r,i),t.point(r[0],r[1])}function R(){c=NaN,d.point=S,t.lineStart()}function S(i,o){var e=(0,g.Og)([i,o]),u=n(i,o);r(c,p,l,v,s,h,c=u[0],p=u[1],l=i,v=e[0],s=e[1],h=e[2],b,t),t.point(c,p)}function Z(){d.point=m,t.lineEnd()}function y(){R(),d.point=E,d.lineEnd=O}function E(n,t){S(i=n,t),o=c,e=p,u=v,f=s,a=h,d.point=S}function O(){r(c,p,l,v,s,h,o,e,i,u,f,a,b,t),d.lineEnd=Z,Z()}return d}}(n,t):function(n){return C({point:function(t,r){t=n(t,r),this.stream.point(t[0],t[1])}})}(n)}var U,J=C({point:function(n,t){this.stream.point(n*i.uR,t*i.uR)}});function L(n,t,r,o,e,u){if(!u)return function(n,t,r,i,o){function e(e,u){return[t+n*(e*=i),r-n*(u*=o)]}return e.invert=function(e,u){return[(e-t)/n*i,(r-u)/n*o]},e}(n,t,r,o,e);var f=(0,i.mC)(u),a=(0,i.O$)(u),l=f*n,c=a*n,p=f/n,v=a/n,s=(a*r-f*t)/n,h=(a*t+f*r)/n;function d(n,i){return[l*(n*=o)-c*(i*=e)+t,r-c*n-l*i]}return d.invert=function(n,t){return[o*(p*n-v*t+s),e*(h-v*n-p*t)]},d}function Y(n){return function(n){var t,r,o,e,f,a,l,c,p,s,h=150,R=480,S=250,Z=0,M=0,$=0,H=0,x=0,w=0,N=1,_=1,j=null,b=d,T=null,U=O,Y=.5;function D(n){return c(n[0]*i.uR,n[1]*i.uR)}function k(n){return(n=c.invert(n[0],n[1]))&&[n[0]*i.RW,n[1]*i.RW]}function F(){var n=L(h,0,0,N,_,w).apply(null,t(Z,M)),i=L(h,R-n[0],S-n[1],N,_,w);return r=(0,W.I)($,H,x),l=(0,E.Z)(t,i),c=(0,E.Z)(r,l),a=z(l,Y),I()}function I(){return p=s=null,D}return D.stream=function(n){return p&&s===n?p:p=J(function(n){return C({point:function(t,r){var i=n(t,r);return this.stream.point(i[0],i[1])}})}(r)(b(a(U(s=n)))))},D.preclip=function(n){return arguments.length?(b=n,j=void 0,I()):b},D.postclip=function(n){return arguments.length?(U=n,T=o=e=f=null,I()):U},D.clipAngle=function(n){return arguments.length?(b=+n?function(n){var t=(0,i.mC)(n),r=6*i.uR,o=t>0,e=(0,i.Wn)(t)>i.Ho;function f(n,r){return(0,i.mC)(n)*(0,i.mC)(r)>t}function a(n,r,o){var e=(0,g.Og)(n),u=(0,g.Og)(r),f=[1,0,0],a=(0,g.T5)(e,u),l=(0,g.j9)(a,a),c=a[0],p=l-c*c;if(!p)return!o&&n;var v=t*l/p,s=-t*c/p,h=(0,g.T5)(f,a),d=(0,g.T)(f,v),m=(0,g.T)(a,s);(0,g.s0)(d,m);var R=h,S=(0,g.j9)(d,R),Z=(0,g.j9)(R,R),y=S*S-Z*((0,g.j9)(d,d)-1);if(!(y<0)){var E=(0,i._b)(y),O=(0,g.T)(R,(-S-E)/Z);if((0,g.s0)(O,d),O=(0,g.Y1)(O),!o)return O;var W,C=n[0],M=r[0],$=n[1],H=r[1];M<C&&(W=C,C=M,M=W);var x=M-C,w=(0,i.Wn)(x-i.pi)<i.Ho;if(!w&&H<$&&(W=$,$=H,H=W),w||x<i.Ho?w?$+H>0^O[1]<((0,i.Wn)(O[0]-C)<i.Ho?$:H):$<=O[1]&&O[1]<=H:x>i.pi^(C<=O[0]&&O[0]<=M)){var N=(0,g.T)(R,(-S+E)/Z);return(0,g.s0)(N,d),[O,(0,g.Y1)(N)]}}}function l(t,r){var e=o?n:i.pi-n,u=0;return t<-e?u|=1:t>e&&(u|=2),r<-e?u|=4:r>e&&(u|=8),u}return v(f,(function(n){var t,r,c,p,v;return{lineStart:function(){p=c=!1,v=1},point:function(s,h){var d,g=[s,h],m=f(s,h),R=o?m?0:l(s,h):m?l(s+(s<0?i.pi:-i.pi),h):0;if(!t&&(p=c=m)&&n.lineStart(),m!==c&&(!(d=a(t,g))||u(t,d)||u(g,d))&&(g[2]=1),m!==c)v=0,m?(n.lineStart(),d=a(g,t),n.point(d[0],d[1])):(d=a(t,g),n.point(d[0],d[1],2),n.lineEnd()),t=d;else if(e&&t&&o^m){var S;R&r||!(S=a(g,t,!0))||(v=0,o?(n.lineStart(),n.point(S[0][0],S[0][1]),n.point(S[1][0],S[1][1]),n.lineEnd()):(n.point(S[1][0],S[1][1]),n.lineEnd(),n.lineStart(),n.point(S[0][0],S[0][1],3)))}!m||t&&u(t,g)||n.point(g[0],g[1]),t=g,c=m,r=R},lineEnd:function(){c&&n.lineEnd(),t=null},clean:function(){return v|(p&&c)<<1}}}),(function(t,i,o,e){m(e,n,r,o,t,i)}),o?[0,-n]:[-i.pi,n-i.pi])}(j=n*i.uR):(j=null,d),I()):j*i.RW},D.clipExtent=function(n){return arguments.length?(U=null==n?(T=o=e=f=null,O):y(T=+n[0][0],o=+n[0][1],e=+n[1][0],f=+n[1][1]),I()):null==T?null:[[T,o],[e,f]]},D.scale=function(n){return arguments.length?(h=+n,F()):h},D.translate=function(n){return arguments.length?(R=+n[0],S=+n[1],F()):[R,S]},D.center=function(n){return arguments.length?(Z=n[0]%360*i.uR,M=n[1]%360*i.uR,F()):[Z*i.RW,M*i.RW]},D.rotate=function(n){return arguments.length?($=n[0]%360*i.uR,H=n[1]%360*i.uR,x=n.length>2?n[2]%360*i.uR:0,F()):[$*i.RW,H*i.RW,x*i.RW]},D.angle=function(n){return arguments.length?(w=n%360*i.uR,F()):w*i.RW},D.reflectX=function(n){return arguments.length?(N=n?-1:1,F()):N<0},D.reflectY=function(n){return arguments.length?(_=n?-1:1,F()):_<0},D.precision=function(n){return arguments.length?(a=z(l,Y=n*n),I()):(0,i._b)(Y)},D.fitExtent=function(n,t){return P(D,n,t)},D.fitSize=function(n,t){return function(n,t,r){return P(n,[[0,0],t],r)}(D,n,t)},D.fitWidth=function(n,t){return function(n,t,r){return B(n,(function(r){var i=+t,o=i/(r[1][0]-r[0][0]),e=(i-o*(r[1][0]+r[0][0]))/2,u=-o*r[0][1];n.scale(150*o).translate([e,u])}),r)}(D,n,t)},D.fitHeight=function(n,t){return function(n,t,r){return B(n,(function(r){var i=+t,o=i/(r[1][1]-r[0][1]),e=-o*r[0][0],u=(i-o*(r[1][1]+r[0][1]))/2;n.scale(150*o).translate([e,u])}),r)}(D,n,t)},function(){return t=n.apply(this,arguments),D.invert=t.invert&&k,F()}}((function(){return n}))()}function D(n,t){var r=(0,i.mC)(t),o=1+(0,i.mC)(n)*r;return[r*(0,i.O$)(n)/o,(0,i.O$)(t)/o]}function k(){return Y(D).scale(250).clipAngle(142)}D.invert=(U=function(n){return 2*(0,i.z4)(n)},function(n,t){var r=(0,i._b)(n*n+t*t),o=U(r),e=(0,i.O$)(o),u=(0,i.mC)(o);return[(0,i.fv)(n*e,r*u),(0,i.ZR)(r&&t*e/r)]})},635:(n,t,r)=>{r.d(t,{I:()=>u,Z:()=>c});var i=r(3563),o=r(5432);function e(n,t){return(0,o.Wn)(n)>o.pi&&(n-=Math.round(n/o.BZ)*o.BZ),[n,t]}function u(n,t,r){return(n%=o.BZ)?t||r?(0,i.Z)(a(n),l(t,r)):a(n):t||r?l(t,r):e}function f(n){return function(t,r){return t+=n,(0,o.Wn)(t)>o.pi&&(t-=Math.round(t/o.BZ)*o.BZ),[t,r]}}function a(n){var t=f(n);return t.invert=f(-n),t}function l(n,t){var r=(0,o.mC)(n),i=(0,o.O$)(n),e=(0,o.mC)(t),u=(0,o.O$)(t);function f(n,t){var f=(0,o.mC)(t),a=(0,o.mC)(n)*f,l=(0,o.O$)(n)*f,c=(0,o.O$)(t),p=c*r+a*i;return[(0,o.fv)(l*e-p*u,a*r-c*i),(0,o.ZR)(p*e+l*u)]}return f.invert=function(n,t){var f=(0,o.mC)(t),a=(0,o.mC)(n)*f,l=(0,o.O$)(n)*f,c=(0,o.O$)(t),p=c*e-l*u;return[(0,o.fv)(l*e+c*u,a*r+p*i),(0,o.ZR)(p*r-a*i)]},f}function c(n){function t(t){return(t=n(t[0]*o.uR,t[1]*o.uR))[0]*=o.RW,t[1]*=o.RW,t}return n=u(n[0]*o.uR,n[1]*o.uR,n.length>2?n[2]*o.uR:0),t.invert=function(t){return(t=n.invert(t[0]*o.uR,t[1]*o.uR))[0]*=o.RW,t[1]*=o.RW,t},t}e.invert=e},9378:(n,t,r)=>{function i(n,t){n&&e.hasOwnProperty(n.type)&&e[n.type](n,t)}r.d(t,{Z:()=>a});var o={Feature:function(n,t){i(n.geometry,t)},FeatureCollection:function(n,t){for(var r=n.features,o=-1,e=r.length;++o<e;)i(r[o].geometry,t)}},e={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var r=n.coordinates,i=-1,o=r.length;++i<o;)n=r[i],t.point(n[0],n[1],n[2])},LineString:function(n,t){u(n.coordinates,t,0)},MultiLineString:function(n,t){for(var r=n.coordinates,i=-1,o=r.length;++i<o;)u(r[i],t,0)},Polygon:function(n,t){f(n.coordinates,t)},MultiPolygon:function(n,t){for(var r=n.coordinates,i=-1,o=r.length;++i<o;)f(r[i],t)},GeometryCollection:function(n,t){for(var r=n.geometries,o=-1,e=r.length;++o<e;)i(r[o],t)}};function u(n,t,r){var i,o=-1,e=n.length-r;for(t.lineStart();++o<e;)i=n[o],t.point(i[0],i[1],i[2]);t.lineEnd()}function f(n,t){var r=-1,i=n.length;for(t.polygonStart();++r<i;)u(n[r],t,1);t.polygonEnd()}function a(n,t){n&&o.hasOwnProperty(n.type)?o[n.type](n,t):i(n,t)}}}]);