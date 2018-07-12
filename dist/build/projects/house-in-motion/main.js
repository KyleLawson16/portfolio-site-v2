!function(n){var e=window.webpackHotUpdate;window.webpackHotUpdate=function(n,t){!function(n,e){if(!y[n]||!x[n])return;for(var t in x[n]=!1,e)Object.prototype.hasOwnProperty.call(e,t)&&(h[t]=e[t]);0==--g&&0===b&&j()}(n,t),e&&e(n,t)};var t,i=!0,r="1f3bedf7f61af6bdb2ec",o=1e4,a={},s=[],c=[];function d(n){var e=_[n];if(!e)return D;var i=function(i){return e.hot.active?(_[i]?-1===_[i].parents.indexOf(n)&&_[i].parents.push(n):(s=[n],t=i),-1===e.children.indexOf(i)&&e.children.push(i)):(console.warn("[HMR] unexpected require("+i+") from disposed module "+n),s=[]),D(i)},r=function(n){return{configurable:!0,enumerable:!0,get:function(){return D[n]},set:function(e){D[n]=e}}};for(var o in D)Object.prototype.hasOwnProperty.call(D,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(i,o,r(o));return i.e=function(n){return"ready"===p&&u("prepare"),b++,D.e(n).then(e,function(n){throw e(),n});function e(){b--,"prepare"===p&&(v[n]||O(n),0===b&&0===g&&j())}},i.t=function(n,e){return 1&e&&(n=i(n)),D.t(n,-2&e)},i}var l=[],p="idle";function u(n){p=n;for(var e=0;e<l.length;e++)l[e].call(null,n)}var f,h,m,g=0,b=0,v={},x={},y={};function w(n){return+n+""===n?+n:n}function k(n){if("idle"!==p)throw new Error("check() is only allowed in idle status");return i=n,u("check"),function(n){return n=n||1e4,new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var i=new XMLHttpRequest,o=D.p+""+r+".hot-update.json";i.open("GET",o,!0),i.timeout=n,i.send(null)}catch(n){return t(n)}i.onreadystatechange=function(){if(4===i.readyState)if(0===i.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===i.status)e();else if(200!==i.status&&304!==i.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(i.responseText)}catch(n){return void t(n)}e(n)}}})}(o).then(function(n){if(!n)return u("idle"),null;x={},v={},y=n.c,m=n.h,u("prepare");var e=new Promise(function(n,e){f={resolve:n,reject:e}});h={};return O(0),"prepare"===p&&0===b&&0===g&&j(),e})}function O(n){y[n]?(x[n]=!0,g++,function(n){var e=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=D.p+""+n+"."+r+".hot-update.js",e.appendChild(t)}(n)):v[n]=!0}function j(){u("ready");var n=f;if(f=null,n)if(i)Promise.resolve().then(function(){return E(i)}).then(function(e){n.resolve(e)},function(e){n.reject(e)});else{var e=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&e.push(w(t));n.resolve(e)}}function E(e){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var t,i,o,c,d;function l(n){for(var e=[n],t={},i=e.slice().map(function(n){return{chain:[n],id:n}});i.length>0;){var r=i.pop(),o=r.id,a=r.chain;if((c=_[o])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:o};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:o};for(var s=0;s<c.parents.length;s++){var d=c.parents[s],l=_[d];if(l){if(l.hot._declinedDependencies[o])return{type:"declined",chain:a.concat([d]),moduleId:o,parentId:d};-1===e.indexOf(d)&&(l.hot._acceptedDependencies[o]?(t[d]||(t[d]=[]),f(t[d],[o])):(delete t[d],e.push(d),i.push({chain:a.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:n,outdatedModules:e,outdatedDependencies:t}}function f(n,e){for(var t=0;t<e.length;t++){var i=e[t];-1===n.indexOf(i)&&n.push(i)}}e=e||{};var g={},b=[],v={},x=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var k in h)if(Object.prototype.hasOwnProperty.call(h,k)){var O;d=w(k);var j=!1,E=!1,I=!1,U="";switch((O=h[k]?l(d):{type:"disposed",moduleId:k}).chain&&(U="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":e.onDeclined&&e.onDeclined(O),e.ignoreDeclined||(j=new Error("Aborted because of self decline: "+O.moduleId+U));break;case"declined":e.onDeclined&&e.onDeclined(O),e.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+U));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(O),e.ignoreUnaccepted||(j=new Error("Aborted because "+d+" is not accepted"+U));break;case"accepted":e.onAccepted&&e.onAccepted(O),E=!0;break;case"disposed":e.onDisposed&&e.onDisposed(O),I=!0;break;default:throw new Error("Unexception type "+O.type)}if(j)return u("abort"),Promise.reject(j);if(E)for(d in v[d]=h[d],f(b,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,d)&&(g[d]||(g[d]=[]),f(g[d],O.outdatedDependencies[d]));I&&(f(b,[O.moduleId]),v[d]=x)}var A,L=[];for(i=0;i<b.length;i++)d=b[i],_[d]&&_[d].hot._selfAccepted&&L.push({module:d,errorHandler:_[d].hot._selfAccepted});u("dispose"),Object.keys(y).forEach(function(n){!1===y[n]&&function(n){delete installedChunks[n]}(n)});for(var R,M,S=b.slice();S.length>0;)if(d=S.pop(),c=_[d]){var H={},P=c.hot._disposeHandlers;for(o=0;o<P.length;o++)(t=P[o])(H);for(a[d]=H,c.hot.active=!1,delete _[d],delete g[d],o=0;o<c.children.length;o++){var C=_[c.children[o]];C&&((A=C.parents.indexOf(d))>=0&&C.parents.splice(A,1))}}for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)&&(c=_[d]))for(M=g[d],o=0;o<M.length;o++)R=M[o],(A=c.children.indexOf(R))>=0&&c.children.splice(A,1);for(d in u("apply"),r=m,v)Object.prototype.hasOwnProperty.call(v,d)&&(n[d]=v[d]);var T=null;for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)&&(c=_[d])){M=g[d];var N=[];for(i=0;i<M.length;i++)if(R=M[i],t=c.hot._acceptedDependencies[R]){if(-1!==N.indexOf(t))continue;N.push(t)}for(i=0;i<N.length;i++){t=N[i];try{t(M)}catch(n){e.onErrored&&e.onErrored({type:"accept-errored",moduleId:d,dependencyId:M[i],error:n}),e.ignoreErrored||T||(T=n)}}}for(i=0;i<L.length;i++){var B=L[i];d=B.module,s=[d];try{D(d)}catch(n){if("function"==typeof B.errorHandler)try{B.errorHandler(n)}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:n}),e.ignoreErrored||T||(T=t),T||(T=n)}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:d,error:n}),e.ignoreErrored||T||(T=n)}}return T?(u("fail"),Promise.reject(T)):(u("idle"),new Promise(function(n){n(b)}))}var _={};function D(e){if(_[e])return _[e].exports;var i=_[e]={i:e,l:!1,exports:{},hot:function(n){var e={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==n,active:!0,accept:function(n,t){if(void 0===n)e._selfAccepted=!0;else if("function"==typeof n)e._selfAccepted=n;else if("object"==typeof n)for(var i=0;i<n.length;i++)e._acceptedDependencies[n[i]]=t||function(){};else e._acceptedDependencies[n]=t||function(){}},decline:function(n){if(void 0===n)e._selfDeclined=!0;else if("object"==typeof n)for(var t=0;t<n.length;t++)e._declinedDependencies[n[t]]=!0;else e._declinedDependencies[n]=!0},dispose:function(n){e._disposeHandlers.push(n)},addDisposeHandler:function(n){e._disposeHandlers.push(n)},removeDisposeHandler:function(n){var t=e._disposeHandlers.indexOf(n);t>=0&&e._disposeHandlers.splice(t,1)},check:k,apply:E,status:function(n){if(!n)return p;l.push(n)},addStatusHandler:function(n){l.push(n)},removeStatusHandler:function(n){var e=l.indexOf(n);e>=0&&l.splice(e,1)},data:a[n]};return t=void 0,e}(e),parents:(c=s,s=[],c),children:[]};return n[e].call(i.exports,i,i.exports,d(e)),i.l=!0,i.exports}D.m=n,D.c=_,D.d=function(n,e,t){D.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},D.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},D.t=function(n,e){if(1&e&&(n=D(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(D.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)D.d(t,i,function(e){return n[e]}.bind(null,i));return t},D.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return D.d(e,"a",e),e},D.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},D.p="",D.h=function(){return r},d(10)(D.s=10)}([function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,i=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r,o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,e,t){var i={},r=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(n){var e={};return function(n){if("function"==typeof n)return n();if(void 0===e[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),a=null,s=0,c=[],d=t(0);function l(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(n,e){for(var t=[],i={},r=0;r<n.length;r++){var o=n[r],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):t.push(i[a]={id:a,parts:[s]})}return t}function u(n,e){var t=o(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=c[c.length-1];if("top"===n.insertAt)i?i.nextSibling?t.insertBefore(e,i.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),c.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=o(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,r)}}function f(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=c.indexOf(n);e>=0&&c.splice(e,1)}function h(n){var e=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),m(e,n.attrs),u(n,e),e}function m(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function g(n,e){var t,i,r,o;if(e.transform&&n.css){if(!(o=e.transform(n.css)))return function(){};n.css=o}if(e.singleton){var c=s++;t=a||(a=h(e)),i=v.bind(null,t,c,!1),r=v.bind(null,t,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",m(e,n.attrs),u(n,e),e}(e),i=function(n,e,t){var i=t.css,r=t.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=d(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),r=function(){f(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(e),i=function(n,e){var t=e.css,i=e.media;i&&n.setAttribute("media",i);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),r=function(){f(t)});return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else r()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=p(n,e);return l(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}n&&l(p(n,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var b=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}();function v(n,e,t,i){var r=t?"":i.css;if(n.styleSheet)n.styleSheet.cssText=b(e,r);else{var o=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var r=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(i),o=i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"});return[t].concat(o).concat([r]).join("\n")}return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&i[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){(n.exports=t(2)(!1)).push([n.i,"/* Variables */\nbody {\n  background-color: #011132;\n  margin: 0px;\n  top: 0;\n  overflow: hidden;\n  overflow-x: hidden;\n  animation: fadeInOnLoad 3s ease-in; }\n\n@keyframes fadeInOnLoad {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\nh1 {\n  font-family: 'Archivo', serif; }\n\np {\n  font-family: 'Lato', serif;\n  font-weight: 300; }\n\na {\n  font-family: 'Lato', serif;\n  font-weight: 400; }\n\n/* Variables */\n.slider {\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  width: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 9999; }\n  .slider .items .item .item-bar {\n    width: 2px;\n    height: 40px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    transition-duration: 400ms;\n    transition-timing-function: ease-in; }\n    .slider .items .item .item-bar rect {\n      width: 2px;\n      height: 40px;\n      fill: #999;\n      transition-duration: 400ms;\n      transition-timing-function: ease-in; }\n  .slider .items .item .item-box {\n    width: 20px;\n    height: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    transition-duration: 400ms;\n    transition-timing-function: ease-in; }\n    .slider .items .item .item-box rect {\n      width: 20px;\n      height: 20px;\n      stroke-width: 4px;\n      stroke: #999;\n      fill: transparent;\n      transition-duration: 400ms;\n      transition-timing-function: ease-in; }\n  .slider .items .item img {\n    top: 0;\n    width: 0px;\n    height: 0px;\n    border-radius: 50%;\n    margin-top: -10px;\n    margin-bottom: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    transition-duration: 400ms;\n    transition-timing-function: ease-in; }\n  .slider .items .item #home-icon {\n    width: 28px;\n    height: 28px;\n    border-radius: 0px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    stroke: #999;\n    stroke-width: 1.6px;\n    transition-duration: 400ms;\n    transition-timing-function: ease-in; }\n  .slider .items .item.active .item-bar {\n    height: 20px;\n    transition-timing-function: ease-out; }\n    .slider .items .item.active .item-bar rect {\n      height: 20px;\n      transition-timing-function: ease-out; }\n  .slider .items .item.active .item-box {\n    width: 60px;\n    height: 60px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    transition-timing-function: ease-out; }\n    .slider .items .item.active .item-box rect {\n      width: 60px;\n      height: 60px;\n      stroke-width: 4px;\n      stroke: #999;\n      transition-timing-function: ease-out; }\n  .slider .items .item.active img {\n    width: 64px;\n    height: 63px;\n    margin-top: -60px;\n    margin-bottom: 10px;\n    border-radius: 0px;\n    transition-timing-function: ease-out; }\n  .slider .items .item.active #home-icon {\n    width: 50px;\n    height: 50px;\n    border-radius: 0px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    stroke: white;\n    stroke-width: 1.1px;\n    transition-timing-function: ease-out; }\n\n.middle-bar {\n  position: fixed;\n  top: 0;\n  right: 50px;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 0; }\n  .middle-bar .bar-container {\n    height: 2px;\n    width: 100vw;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n    .middle-bar .bar-container .bar {\n      width: 100vw;\n      height: 2px; }\n      .middle-bar .bar-container .bar svg {\n        width: 100vw; }\n        .middle-bar .bar-container .bar svg rect {\n          width: 100vw;\n          height: 2px;\n          fill: #999; }\n    .middle-bar .bar-container .beam {\n      width: 34px;\n      height: 2px;\n      margin-top: -7px;\n      position: absolute;\n      right: 100vw;\n      animation: slideRight 2.5s;\n      animation-timing-function: ease-in-out;\n      animation-iteration-count: infinite;\n      opacity: 0.9; }\n      .middle-bar .bar-container .beam img {\n        height: 12px; }\n    .middle-bar .bar-container #beam2 {\n      animation-delay: 0.5s; }\n\n.middle-bar-full {\n  right: 0px; }\n\n@keyframes slideRight {\n  from {\n    right: 100vw; }\n  to {\n    right: 0px; } }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@media screen and (max-width: 1050px) {\n  .slider {\n    left: 0;\n    top: 0;\n    height: 100px;\n    width: 410px;\n    margin-left: auto;\n    margin-right: auto;\n    z-index: 9999; }\n    .slider .items {\n      width: 410px;\n      display: flex;\n      align-items: center; }\n      .slider .items .item {\n        display: flex;\n        align-self: stretch;\n        align-items: center; }\n        .slider .items .item .item-bar {\n          align-self: stretch;\n          width: 30px;\n          height: 2px;\n          margin-top: 30px;\n          margin-bottom: 10px;\n          margin-left: 10px;\n          margin-right: 10px; }\n          .slider .items .item .item-bar rect {\n            width: 30px;\n            height: 2px; }\n        .slider .items .item .item-box {\n          align-self: stretch;\n          margin-left: auto;\n          margin-right: auto; }\n        .slider .items .item #home-icon {\n          margin-left: auto;\n          margin-right: auto;\n          margin-top: -10px;\n          margin-bottom: 0px; }\n      .slider .items .item.active .item-bar {\n        width: 15px;\n        height: 2px; }\n        .slider .items .item.active .item-bar rect {\n          width: 15px;\n          height: 2px; }\n      .slider .items .item.active .item-box {\n        width: 60px;\n        height: 60px;\n        margin-left: auto;\n        margin-right: auto; }\n        .slider .items .item.active .item-box rect {\n          width: 60px;\n          height: 60px; }\n      .slider .items .item.active #home-icon {\n        padding-bottom: 20px;\n        margin-left: auto;\n        margin-right: auto;\n        margin-top: 0px;\n        margin-bottom: 0px; }\n  .middle-bar {\n    right: 0px; }\n    .middle-bar .bar-container {\n      animation: slideRight 1.5s; } }\n\n.name-container {\n  background-color: #011132;\n  z-index: 1;\n  width: 650px;\n  border-radius: 50%;\n  height: 100vh;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n#personal-title {\n  font-family: 'Lato', sans-serif;\n  font-weight: 100;\n  width: 650px;\n  font-size: 35px;\n  font-weight: 100;\n  color: white;\n  text-align: center;\n  height: 0px;\n  margin-bottom: 70px;\n  margin-top: -70px; }\n\n#name {\n  font-family: 'Lato', sans-serif;\n  font-weight: 100;\n  width: 650px;\n  background-color: #011132;\n  font-size: 120px;\n  font-weight: 100;\n  padding-bottom: 20px;\n  color: #999;\n  background: -webkit-gradient(linear, left top, right top, color-stop(0, #999), color-stop(0.45, #999), color-stop(0.5, white), color-stop(0.55, #999), color-stop(1, #999));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 9999;\n  -webkit-animation: slidetounlock 2.5s infinite;\n  animation-timing-function: ease-in-out; }\n\n@-webkit-keyframes slidetounlock {\n  0% {\n    background-position: -325px 0; }\n  32% {\n    background-position: -325px 0; }\n  70% {\n    background-position: 325px 0; }\n  100% {\n    background-position: 325px 0; } }\n\n@media screen and (max-width: 1050px) {\n  .name-container {\n    width: 70vw; }\n  #personal-title {\n    width: 70vw;\n    font-size: 4vw;\n    margin-top: -30px;\n    margin-bottom: 30px; }\n  #name {\n    width: 70vw;\n    font-size: 12vw;\n    padding-bottom: 1vw; }\n  @-webkit-keyframes slidetounlock {\n    0% {\n      background-position: -35vw 0; }\n    32% {\n      background-position: -35vw 0; }\n    70% {\n      background-position: 35vw 0; }\n    100% {\n      background-position: 35vw 0; } } }\n",""])},,,,,,function(n,e,t){var i=t(3);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=t(1)(i,r);i.locals&&(n.exports=i.locals),n.hot.accept(3,function(){var e=t(3);if("string"==typeof e&&(e=[[n.i,e,""]]),!function(n,e){var t,i=0;for(t in n){if(!e||n[t]!==e[t])return!1;i++}for(t in e)i--;return 0===i}(i.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(e)}),n.hot.dispose(function(){o()})},function(n,e,t){"use strict";t.r(e);t(9)}]);