"use strict";(self.webpackChunkxendke_io=self.webpackChunkxendke_io||[]).push([[50],{89:(e,n,t)=>{t.r(n),t.d(n,{WEBGL:()=>r.$z,default:()=>c});var i=t(212),r=t(218),o=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=new i.nls({color:n}),a=[],s=[],u=[],c=(0,r.xT)(-3,3),d=10*t/2,h=0;h<t;h++){var f=10*h-d+c,w=(0,r.xT)(-5,5),l=Math.abs(w)+2;s.push(l),u.push((0,r.xT)(-.03,.03)),a.push(new i.Pa4(f,w,0))}var v=(new i.u9r).setFromPoints(a),g=new i.x12(v,o);this.line=g,this.velocities=u,this.boundaries=s}var n=e.prototype;return n.getLine=function(){return this.line},n.getVelocity=function(e){return this.velocities[e]},n.flipVelocity=function(e){this.velocities[e]=-1*this.velocities[e]},n.isOutOfRange=function(e,n){var t=-1*this.boundaries[n],i=this.boundaries[n];return e<t||e>i},e}(),a=function(e,n){return e.map((function(e){return new o(e,n)}))},s={lines:a([15750228,39167,42042],window.outerWidth/28)},u=window.innerWidth;const c=function(e){var n=e.getBoundingClientRect().height,t=window.outerWidth/n,o=new i.cPb(75,t,.1,1e3);o.position.setZ(40);var c=new i.CP7({canvas:e,antialias:!0});c.setPixelRatio(window.devicePixelRatio),c.setSize(window.outerWidth,n);var d=new i.Ilk(2238513),h=new i.xsS;h.background=d,h.fog=new i.ybr(d,10,80),s.lines.forEach((function(e){return h.add(e.getLine())})),function(e){var n=e.canvas,t=e.scene,i=e.camera,o=e.renderer;window.addEventListener("resize",(0,r.Ds)((function(){var e=n.getBoundingClientRect().height;if(!(Math.abs(window.innerWidth-u)<20)){u=window.outerWidth,i.aspect=window.outerWidth/e,i.updateProjectionMatrix(),o.setSize(window.outerWidth,e),s.lines.forEach((function(e){return t.remove(e.getLine())}));var r=window.outerWidth/28;s.lines=a([15750228,39167,42042],r),s.lines.forEach((function(e){return t.add(e.getLine())}))}}),500),!1)}({canvas:e,scene:h,camera:o,renderer:c});var f=function(){requestAnimationFrame(f),s.lines.forEach((function(e){for(var n=e.getLine(),t=n.geometry.attributes.position.array,i=1;i<=t.length;i+=3){var r=Math.floor(i/3),o=e.getVelocity(r);t[i]=t[i]+o,e.isOutOfRange(t[i],r)&&e.flipVelocity(r)}n.geometry.attributes.position.needsUpdate=!0})),c.render(h,o)};f()}}}]);