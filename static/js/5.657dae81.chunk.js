(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[5],{44:function(n,t,e){"use strict";var r=e(3),i=e(14),c=(e(0),e(11)),o=e(16),a=e(21),u=e.p+"static/media/logo.22eff46a.svg";function l(){var n=Object(i.a)(["\n  height: 100%;\n"]);return l=function(){return n},n}function f(){var n=Object(i.a)(["\n  position: fixed;\n  top: 40px;\n  left: 85vw;\n  height: 10vw;\n  z-index: 3;\n"]);return f=function(){return n},n}var s=c.c.div(f()),v=Object(c.c)(a.b.img)(l());t.a=function(){return Object(r.jsx)(s,{children:Object(r.jsx)(o.b,{to:"".concat("/CristianRamirez","/"),children:Object(r.jsx)(v,{alt:"logo",whileHover:{scale:1.1},src:u})})})}},45:function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return l})),e.d(t,"c",(function(){return f}));var r=e(14),i=e(11);function c(){var n=Object(r.a)(["\n  font-size: 0.9rem;\n  line-height: 170%;\n  font-weight: 300;\n  margin-bottom: 3vh;\n"]);return c=function(){return n},n}function o(){var n=Object(r.a)(["\n  font-size: 1.7rem;\n  font-weight: 600;\n"]);return o=function(){return n},n}function a(){var n=Object(r.a)(["\n  font-size: 3.5rem;\n"]);return a=function(){return n},n}var u=i.c.h1(a()),l=i.c.h1(o()),f=i.c.p(c())},46:function(n,t,e){"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}e.d(t,"a",(function(){return c}))},47:function(n,t,e){"use strict";var r=e(3),i=e(14),c=(e(0),e(21)),o=e(11);function a(){var n=Object(i.a)(["\n  /* position: relative;\n  margin: 20px; */\n  width: fit-content;\n  height: fit-content;\n\n  /* background: rgba(255, 255, 255, 0.2); */\n"]);return a=function(){return n},n}var u=Object(o.c)(c.b.div)(a());t.a=function(n){var t=n.children;return Object(r.jsx)(u,{animate:{y:-50},transition:{ease:"easeOut",duration:.2},children:t})}},49:function(n,t,e){"use strict";var r=e(46),i=e(3);function c(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},c=Object.keys(n);for(r=0;r<c.length;r++)e=c[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)e=c[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var o=e(14),a=e(21),u=(e(0),e(11));function l(){var n=Object(o.a)(["\n  width: fit-content;\n  height: fit-content;\n  /* background: rgba(255, 255, 255, 0.2); */\n"]);return l=function(){return n},n}var f=Object(u.c)(a.b.div)(l());t.a=function(n){return function(t){var e=t.variant,o=c(t,["variant"]);return Object(i.jsx)(f,{variants:e,whileHover:"hover",initial:"initial",children:Object(i.jsx)(n,Object(r.a)({},o))})}}},70:function(n,t,e){"use strict";e.r(t);var r=e(3),i=e(0),c=e.n(i),o=e(10),a=e.n(o);function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var l=Object(i.forwardRef)((function(n,t){var e=n.color,r=void 0===e?"currentColor":e,i=n.size,o=void 0===i?24:i,a=n.title,l=void 0===a?"Gmail":a,f=function(n,t){if(null==n)return{};var e,r,i={},c=Object.keys(n);for(r=0;r<c.length;r++)e=c[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["color","size","title"]);return c.a.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,fill:r,viewBox:"0 0 24 24",ref:t},f),c.a.createElement("title",null,l),c.a.createElement("path",{d:"M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"}))}));l.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number]),title:a.a.string};var f=l;function s(){return(s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var v=Object(i.forwardRef)((function(n,t){var e=n.color,r=void 0===e?"currentColor":e,i=n.size,o=void 0===i?24:i,a=n.title,u=void 0===a?"LinkedIn":a,l=function(n,t){if(null==n)return{};var e,r,i={},c=Object.keys(n);for(r=0;r<c.length;r++)e=c[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["color","size","title"]);return c.a.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,fill:r,viewBox:"0 0 24 24",ref:t},l),c.a.createElement("title",null,u),c.a.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}))}));v.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number]),title:a.a.string};var h=v,b=e(45),d=e(47),j=e(49),O=e(44),p=e(14),g=e(11);function m(){var n=Object(p.a)(["\n  text-decoration: none;\n  color: black;\n  font-size: 0.95rem;\n  font-weight: 700;\n"]);return m=function(){return n},n}function w(){var n=Object(p.a)(["\n  margin-top: 4rem;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 70%;\n  @media only screen and (max-width: 600px) {\n    max-width: 100%;\n    margin: auto;\n    padding-top: 2rem;\n  }\n"]);return w=function(){return n},n}function x(){var n=Object(p.a)(["\n  margin: 0 auto;\n  max-width: 70%;\n  @media only screen and (max-width: 600px) {\n    max-width: 95%;\n    margin: auto;\n  }\n"]);return x=function(){return n},n}function y(){var n=Object(p.a)(["\n  margin-top: 5rem;\n  width: 100vw;\n  margin: 0 auto;\n  max-width: 95%;\n  overflow-y: hidden;\n  @media only screen and (max-width: 600px) {\n    margin: auto;\n    max-width: 80%;\n  }\n"]);return y=function(){return n},n}var z=g.c.div(y()),k=g.c.section(x()),P=g.c.section(w()),C=g.c.a(m()),E={hover:{x:20}},H=Object(j.a)(C);t.default=function(){return Object(r.jsxs)(z,{children:[Object(r.jsx)(O.a,{}),Object(r.jsx)(P,{children:Object(r.jsx)(d.a,{children:Object(r.jsx)(b.a,{children:"Let\u2019s Connect"})})}),Object(r.jsxs)(k,{children:[Object(r.jsx)(b.b,{children:"Contact"}),Object(r.jsx)(b.c,{children:"Please don't hesitate to reach out if you have any questions. I look forward to connecting and gaining new experiences."}),Object(r.jsxs)(H,{variant:E,href:"mailto:ramirezcristian81@live.com",children:[Object(r.jsx)(f,{color:"#D14836"}),"\xa0 ramirezcristian81@live.com"]}),Object(r.jsxs)(H,{variant:E,target:"_blank",href:"https://www.linkedin.com/in/ramirezc1/",children:[Object(r.jsx)(h,{color:"#0077B5"})," \xa0 LinkedIn"]})]})]})}}}]);
//# sourceMappingURL=5.657dae81.chunk.js.map