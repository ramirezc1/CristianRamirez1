(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(n,e,t){"use strict";var o=t(14);function r(){var n=Object(o.a)(["\n  position: fixed; /* or absolute */\n  top: 50%;\n  left: 50%;\n  width: 1em;\n  height: 1em;\n  border: solid 2px transparent;\n  border-top-color: currentColor;\n  border-left-color: currentColor;\n  border-radius: 50%;\n  animation: ___CSS_0___ 400ms linear infinite;\n"]);return r=function(){return n},n}var i=t(11).c.div(r());e.a=i},43:function(n,e,t){"use strict";t.r(e);var o=t(3),r=t(14),i=t(0),a=t.n(i),c=t(26),s=t.n(c),l=t(16),u=t(11),d=t(4),f=t(21),h=t(27),b=t(28),p=t(31),g=t(30),v=function(n){Object(p.a)(t,n);var e=Object(g.a)(t);function t(n){var o;return Object(h.a)(this,t),(o=e.call(this,n)).state={hasError:!1},o}return Object(b.a)(t,[{key:"render",value:function(){var n=this.state.hasError,e=this.props.children;return n?Object(o.jsx)("h1",{children:"Loading failed! Please reload."}):e}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),t}(a.a.Component),j=t(22),m=Object(i.lazy)((function(){return t.e(7).then(t.bind(null,71))})),w=Object(i.lazy)((function(){return t.e(4).then(t.bind(null,69))})),x=Object(i.lazy)((function(){return Promise.all([t.e(3),t.e(6)]).then(t.bind(null,68))})),O=Object(i.lazy)((function(){return t.e(5).then(t.bind(null,70))})),C=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(f.a,{children:Object(o.jsx)(d.c,{children:Object(o.jsx)(v,{children:Object(o.jsxs)(i.Suspense,{fallback:Object(o.jsx)(j.a,{}),children:[Object(o.jsx)(d.a,{path:"".concat("/CristianRamirez","/"),exact:!0,component:m}),Object(o.jsx)(d.a,{path:"".concat("/CristianRamirez","/about"),component:w}),Object(o.jsx)(d.a,{path:"".concat("/CristianRamirez","/portfolio"),component:x}),Object(o.jsx)(d.a,{path:"".concat("/CristianRamirez","/contact"),component:O})]})})})})})},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}function E(){var n=Object(r.a)(["\n* {\n  box-sizing: border-box;\n}\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;\n    color: #ffffff;\n    background-color: #000000;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23210204' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%23430409' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%2364060d' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%23860911' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23a70b15' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%23c90d1a' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%23ea0f1e' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E\");\n    background-attachment: fixed;\n    background-size: cover;\n    font-size: calc(1em + 1vw);\n    width: 100vw;\n    height: 100vh;\n    user-select: none;\n  } \n \n\n"]);return E=function(){return n},n}var z=Object(u.b)(E());s.a.render(Object(o.jsx)(l.a,{children:Object(o.jsxs)(u.a,{theme:{textColor:"pink",linkColor:"#ea0f1e"},children:[Object(o.jsx)(z,{}),Object(o.jsx)(C,{})]})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/CristianRamirez",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/CristianRamirez","/service-worker.js");k?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):y(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):y(e,n)}))}}()}},[[43,1,2]]]);
//# sourceMappingURL=main.573873d3.chunk.js.map