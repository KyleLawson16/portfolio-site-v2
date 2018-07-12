!function(n){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(n,e){!function(n,t){if(!v[n]||!w[n])return;for(var e in w[n]=!1,t)Object.prototype.hasOwnProperty.call(t,e)&&(m[e]=t[e]);0==--x&&0===g&&I()}(n,e),t&&t(n,e)};var e,o=!0,i="3dd82ecf73b5ddb6f693",r=1e4,a={},c=[],s=[];function d(n){var t=O[n];if(!t)return L;var o=function(o){return t.hot.active?(O[o]?-1===O[o].parents.indexOf(n)&&O[o].parents.push(n):(c=[n],e=o),-1===t.children.indexOf(o)&&t.children.push(o)):(console.warn("[HMR] unexpected require("+o+") from disposed module "+n),c=[]),L(o)},i=function(n){return{configurable:!0,enumerable:!0,get:function(){return L[n]},set:function(t){L[n]=t}}};for(var r in L)Object.prototype.hasOwnProperty.call(L,r)&&"e"!==r&&"t"!==r&&Object.defineProperty(o,r,i(r));return o.e=function(n){return"ready"===p&&u("prepare"),g++,L.e(n).then(t,function(n){throw t(),n});function t(){g--,"prepare"===p&&(b[n]||k(n),0===g&&0===x&&I())}},o.t=function(n,t){return 1&t&&(n=o(n)),L.t(n,-2&t)},o}var l=[],p="idle";function u(n){p=n;for(var t=0;t<l.length;t++)l[t].call(null,n)}var f,m,h,x=0,g=0,b={},w={},v={};function y(n){return+n+""===n?+n:n}function j(n){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=n,u("check"),function(n){return n=n||1e4,new Promise(function(t,e){if("undefined"==typeof XMLHttpRequest)return e(new Error("No browser support"));try{var o=new XMLHttpRequest,r=L.p+""+i+".hot-update.json";o.open("GET",r,!0),o.timeout=n,o.send(null)}catch(n){return e(n)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)e(new Error("Manifest request to "+r+" timed out."));else if(404===o.status)t();else if(200!==o.status&&304!==o.status)e(new Error("Manifest request to "+r+" failed."));else{try{var n=JSON.parse(o.responseText)}catch(n){return void e(n)}t(n)}}})}(r).then(function(n){if(!n)return u("idle"),null;w={},b={},v=n.c,h=n.h,u("prepare");var t=new Promise(function(n,t){f={resolve:n,reject:t}});m={};return k(5),"prepare"===p&&0===g&&0===x&&I(),t})}function k(n){v[n]?(w[n]=!0,x++,function(n){var t=document.getElementsByTagName("head")[0],e=document.createElement("script");e.charset="utf-8",e.src=L.p+""+n+"."+i+".hot-update.js",t.appendChild(e)}(n)):b[n]=!0}function I(){u("ready");var n=f;if(f=null,n)if(o)Promise.resolve().then(function(){return E(o)}).then(function(t){n.resolve(t)},function(t){n.reject(t)});else{var t=[];for(var e in m)Object.prototype.hasOwnProperty.call(m,e)&&t.push(y(e));n.resolve(t)}}function E(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var e,o,r,s,d;function l(n){for(var t=[n],e={},o=t.slice().map(function(n){return{chain:[n],id:n}});o.length>0;){var i=o.pop(),r=i.id,a=i.chain;if((s=O[r])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:r};if(s.hot._main)return{type:"unaccepted",chain:a,moduleId:r};for(var c=0;c<s.parents.length;c++){var d=s.parents[c],l=O[d];if(l){if(l.hot._declinedDependencies[r])return{type:"declined",chain:a.concat([d]),moduleId:r,parentId:d};-1===t.indexOf(d)&&(l.hot._acceptedDependencies[r]?(e[d]||(e[d]=[]),f(e[d],[r])):(delete e[d],t.push(d),o.push({chain:a.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:n,outdatedModules:t,outdatedDependencies:e}}function f(n,t){for(var e=0;e<t.length;e++){var o=t[e];-1===n.indexOf(o)&&n.push(o)}}t=t||{};var x={},g=[],b={},w=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var j in m)if(Object.prototype.hasOwnProperty.call(m,j)){var k;d=y(j);var I=!1,E=!1,D=!1,M="";switch((k=m[j]?l(d):{type:"disposed",moduleId:j}).chain&&(M="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(I=new Error("Aborted because of self decline: "+k.moduleId+M));break;case"declined":t.onDeclined&&t.onDeclined(k),t.ignoreDeclined||(I=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+M));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(k),t.ignoreUnaccepted||(I=new Error("Aborted because "+d+" is not accepted"+M));break;case"accepted":t.onAccepted&&t.onAccepted(k),E=!0;break;case"disposed":t.onDisposed&&t.onDisposed(k),D=!0;break;default:throw new Error("Unexception type "+k.type)}if(I)return u("abort"),Promise.reject(I);if(E)for(d in b[d]=m[d],f(g,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,d)&&(x[d]||(x[d]=[]),f(x[d],k.outdatedDependencies[d]));D&&(f(g,[k.moduleId]),b[d]=w)}var _,A=[];for(o=0;o<g.length;o++)d=g[o],O[d]&&O[d].hot._selfAccepted&&A.push({module:d,errorHandler:O[d].hot._selfAccepted});u("dispose"),Object.keys(v).forEach(function(n){!1===v[n]&&function(n){delete installedChunks[n]}(n)});for(var U,P,S=g.slice();S.length>0;)if(d=S.pop(),s=O[d]){var C={},R=s.hot._disposeHandlers;for(r=0;r<R.length;r++)(e=R[r])(C);for(a[d]=C,s.hot.active=!1,delete O[d],delete x[d],r=0;r<s.children.length;r++){var z=O[s.children[r]];z&&((_=z.parents.indexOf(d))>=0&&z.parents.splice(_,1))}}for(d in x)if(Object.prototype.hasOwnProperty.call(x,d)&&(s=O[d]))for(P=x[d],r=0;r<P.length;r++)U=P[r],(_=s.children.indexOf(U))>=0&&s.children.splice(_,1);for(d in u("apply"),i=h,b)Object.prototype.hasOwnProperty.call(b,d)&&(n[d]=b[d]);var B=null;for(d in x)if(Object.prototype.hasOwnProperty.call(x,d)&&(s=O[d])){P=x[d];var H=[];for(o=0;o<P.length;o++)if(U=P[o],e=s.hot._acceptedDependencies[U]){if(-1!==H.indexOf(e))continue;H.push(e)}for(o=0;o<H.length;o++){e=H[o];try{e(P)}catch(n){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:P[o],error:n}),t.ignoreErrored||B||(B=n)}}}for(o=0;o<A.length;o++){var T=A[o];d=T.module,c=[d];try{L(d)}catch(n){if("function"==typeof T.errorHandler)try{T.errorHandler(n)}catch(e){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:e,originalError:n}),t.ignoreErrored||B||(B=e),B||(B=n)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:n}),t.ignoreErrored||B||(B=n)}}return B?(u("fail"),Promise.reject(B)):(u("idle"),new Promise(function(n){n(g)}))}var O={};function L(t){if(O[t])return O[t].exports;var o=O[t]={i:t,l:!1,exports:{},hot:function(n){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:e!==n,active:!0,accept:function(n,e){if(void 0===n)t._selfAccepted=!0;else if("function"==typeof n)t._selfAccepted=n;else if("object"==typeof n)for(var o=0;o<n.length;o++)t._acceptedDependencies[n[o]]=e||function(){};else t._acceptedDependencies[n]=e||function(){}},decline:function(n){if(void 0===n)t._selfDeclined=!0;else if("object"==typeof n)for(var e=0;e<n.length;e++)t._declinedDependencies[n[e]]=!0;else t._declinedDependencies[n]=!0},dispose:function(n){t._disposeHandlers.push(n)},addDisposeHandler:function(n){t._disposeHandlers.push(n)},removeDisposeHandler:function(n){var e=t._disposeHandlers.indexOf(n);e>=0&&t._disposeHandlers.splice(e,1)},check:j,apply:E,status:function(n){if(!n)return p;l.push(n)},addStatusHandler:function(n){l.push(n)},removeStatusHandler:function(n){var t=l.indexOf(n);t>=0&&l.splice(t,1)},data:a[n]};return e=void 0,t}(t),parents:(s=c,c=[],s),children:[]};return n[t].call(o.exports,o,o.exports,d(t)),o.l=!0,o.exports}L.m=n,L.c=O,L.d=function(n,t,e){L.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},L.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},L.t=function(n,t){if(1&t&&(n=L(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(L.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)L.d(e,o,function(t){return n[t]}.bind(null,o));return e},L.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return L.d(t,"a",t),t},L.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},L.p="",L.h=function(){return i},d(22)(L.s=22)}([function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,o=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var i,r=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?n:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?e+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(n,t,e){var o={},i=function(n){var t;return function(){return void 0===t&&(t=n.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),r=function(n){var t={};return function(n){if("function"==typeof n)return n();if(void 0===t[n]){var e=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}}(),a=null,c=0,s=[],d=e(0);function l(n,t){for(var e=0;e<n.length;e++){var i=n[e],r=o[i.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(x(i.parts[a],t))}else{var c=[];for(a=0;a<i.parts.length;a++)c.push(x(i.parts[a],t));o[i.id]={id:i.id,refs:1,parts:c}}}}function p(n,t){for(var e=[],o={},i=0;i<n.length;i++){var r=n[i],a=t.base?r[0]+t.base:r[0],c={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(c):e.push(o[a]={id:a,parts:[c]})}return e}function u(n,t){var e=r(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=s[s.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),s.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=r(n.insertInto+" "+n.insertAt.before);e.insertBefore(t,i)}}function f(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=s.indexOf(n);t>=0&&s.splice(t,1)}function m(n){var t=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),h(t,n.attrs),u(n,t),t}function h(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function x(n,t){var e,o,i,r;if(t.transform&&n.css){if(!(r=t.transform(n.css)))return function(){};n.css=r}if(t.singleton){var s=c++;e=a||(a=m(t)),o=b.bind(null,e,s,!1),i=b.bind(null,e,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",h(t,n.attrs),u(n,t),t}(t),o=function(n,t,e){var o=e.css,i=e.sourceMap,r=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||r)&&(o=d(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,e,t),i=function(){f(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(t),o=function(n,t){var e=t.css,o=t.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),i=function(){f(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else i()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=p(n,t);return l(e,t),function(n){for(var i=[],r=0;r<e.length;r++){var a=e[r];(c=o[a.id]).refs--,i.push(c)}n&&l(p(n,t),t);for(r=0;r<i.length;r++){var c;if(0===(c=i[r]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete o[c.id]}}}};var g=function(){var n=[];return function(t,e){return n[t]=e,n.filter(Boolean).join("\n")}}();function b(n,t,e,o){var i=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=g(t,i);else{var r=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(r,a[t]):n.appendChild(r)}}},function(n,t){n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var i=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(o),r=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[e].concat(r).concat([i]).join("\n")}return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<n.length;i++){var a=n[i];"number"==typeof a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},,,,,,function(n,t,e){(n.exports=e(2)(!1)).push([n.i,"/* Variables */\nbody {\n  background-color: #011132;\n  margin: 0px;\n  top: 0;\n  overflow: hidden;\n  overflow-x: hidden;\n  animation: fadeInOnLoad 3s ease-in; }\n\n@keyframes fadeInOnLoad {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\nh1 {\n  font-family: 'Archivo', serif; }\n\np {\n  font-family: 'Lato', serif;\n  font-weight: 300; }\n\na {\n  font-family: 'Lato', serif;\n  font-weight: 400; }\n\n/* Variables */\n.projects {\n  height: 300vh;\n  width: 100vw;\n  position: absolute;\n  top: 0;\n  left: 0; }\n  .projects .project-container {\n    opacity: 0;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    animation: unactivateProject 0.3s linear;\n    animation-timing-function: ease-in; }\n    .projects .project-container .project-shadow {\n      width: 108vh;\n      height: 45.94vw;\n      max-width: 55vw;\n      max-height: 90.2vh;\n      border-radius: 40vh;\n      margin-left: 50px;\n      margin-top: 12.5vh;\n      margin-bottom: 12.5vh;\n      box-shadow: 0px 0px 200px 20px; }\n      .projects .project-container .project-shadow .project {\n        background-color: #444;\n        position: relative;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        box-shadow: 0px 0px 20px 0px #111;\n        z-index: 99999; }\n        .projects .project-container .project-shadow .project img {\n          width: 99%;\n          padding: 0.5%; }\n    .projects .project-container .project-text {\n      width: 30vw;\n      position: absolute;\n      left: 55vw;\n      margin-left: 50px;\n      padding: 40px; }\n      .projects .project-container .project-text h1 {\n        font-size: 6vw;\n        margin-top: 0px;\n        margin-bottom: 0px; }\n      .projects .project-container .project-text p {\n        color: white; }\n      .projects .project-container .project-text .btn {\n        margin-top: 40px;\n        background-color: transparent;\n        border: 2px solid #999;\n        width: 150px;\n        padding: 20px;\n        font-size: 18px;\n        font-weight: 400;\n        color: #999;\n        text-align: center;\n        text-decoration: none;\n        transition-duration: 0.5s; }\n        .projects .project-container .project-text .btn:hover {\n          color: white;\n          border-color: white;\n          -webkit-animation: slidetounlockhov 0.5s, fadeIn 1s;\n          animation-timing-function: ease-in-out; }\n      .projects .project-container .project-text .content {\n        height: 50vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start; }\n      .projects .project-container .project-text .content-center {\n        justify-content: center; }\n  .projects .active {\n    animation: activateProject 0.3s linear;\n    animation-timing-function: ease-out;\n    opacity: 1; }\n\n@keyframes activateProject {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes unactivateProject {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@-webkit-keyframes slidetounlockhov {\n  from {\n    background: -webkit-gradient(linear, left top, right top, color-stop(0, #999), color-stop(0.45, #999), color-stop(0.5, white), color-stop(0.55, #999), color-stop(1, #999));\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-position: -75px 0; }\n  to {\n    background: -webkit-gradient(linear, left top, right top, color-stop(0, #999), color-stop(0.45, #999), color-stop(0.5, white), color-stop(0.55, #999), color-stop(1, #999));\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-position: 75px 0; } }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    color: #999;\n    border-color: #999; }\n  25% {\n    color: #999;\n    border-color: #777; }\n  50% {\n    color: #999;\n    border-color: #999; }\n  100% {\n    color: white;\n    border-color: white; } }\n\n@-webkit-keyframes fadeOut {\n  0% {\n    color: white;\n    border-color: white; }\n  100% {\n    color: #999;\n    border-color: #999; } }\n\n@media screen and (max-width: 1050px) {\n  .projects .project-container {\n    opacity: 1;\n    animation: none; }\n    .projects .project-container .project-shadow {\n      margin-left: 20px; }\n    .projects .project-container .project-text {\n      width: 35vw;\n      position: absolute;\n      left: 55vw;\n      margin-left: 20px;\n      padding: 20px; }\n      .projects .project-container .project-text h1 {\n        font-size: 6vw;\n        margin-top: 10vh; }\n      .projects .project-container .project-text .content {\n        justify-content: flex-start; }\n  .projects .active {\n    animation: none;\n    opacity: 1; } }\n\n@media screen and (max-width: 650px) {\n  .projects {\n    height: 300vh;\n    width: 100vw;\n    position: absolute;\n    top: 0;\n    left: 0; }\n    .projects .project-container {\n      opacity: 0;\n      height: 100vh;\n      display: flex;\n      align-items: center;\n      flex-direction: column-reverse;\n      justify-content: flex-end;\n      animation: unactivateProject 0.3s linear;\n      animation-timing-function: ease-in; }\n      .projects .project-container .project-shadow {\n        width: 55.2vh;\n        height: 46vh;\n        max-width: 95vw;\n        max-height: calc(95vw / 1.2);\n        border-radius: 40vh;\n        margin-left: 0px;\n        margin-top: 2vh;\n        margin-bottom: 2vh;\n        box-shadow: 0px 0px 200px 20px; }\n        .projects .project-container .project-shadow .project {\n          background-color: #444;\n          position: relative;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          box-shadow: 0px 0px 20px 0px #111;\n          z-index: 99999; }\n          .projects .project-container .project-shadow .project img {\n            width: 99%;\n            padding: 0.5%; }\n      .projects .project-container .project-text {\n        width: 90vw;\n        height: 50vh;\n        position: relative;\n        margin-left: auto;\n        margin-right: auto;\n        padding: 0px;\n        left: 0;\n        text-align: center; }\n        .projects .project-container .project-text h1 {\n          font-size: 6vw;\n          margin-top: 12vh;\n          margin-bottom: 0px; }\n        .projects .project-container .project-text p {\n          color: white; }\n        .projects .project-container .project-text .btn {\n          margin-top: 20px;\n          background-color: transparent;\n          border: 2px solid #999;\n          width: 150px;\n          padding: 20px;\n          font-size: 18px;\n          font-weight: 400;\n          color: #999;\n          text-align: center;\n          text-decoration: none;\n          transition-duration: 0.5s; }\n          .projects .project-container .project-text .btn:hover {\n            color: white;\n            border-color: white;\n            -webkit-animation: slidetounlockhov 0.5s, fadeIn 1s;\n            animation-timing-function: ease-in-out; }\n        .projects .project-container .project-text .content {\n          height: auto;\n          margin-top: 10px;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: flex-start; }\n        .projects .project-container .project-text .content-center {\n          justify-content: flex-start; }\n    .projects .active {\n      animation: activateProject 0.3s linear;\n      animation-timing-function: ease-out;\n      opacity: 1; } }\n\n/* Variables */\n.slider {\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  width: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 9999; }\n  .slider .items .item .item-bar {\n    width: 2px;\n    height: 40px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    transition-duration: 400ms;\n    transition-timing-function: ease-in; }\n    .slider .items .item .item-bar rect {\n      width: 2px;\n      height: 40px;\n      fill: #999;\n      transition-duration: 400ms;\n      transition-timing-function: ease-in; }\n  .slider .items .item .item-box {\n    width: 20px;\n    height: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    transition-duration: 400ms;\n    transition-timing-function: ease-in; }\n    .slider .items .item .item-box rect {\n      width: 20px;\n      height: 20px;\n      stroke-width: 4px;\n      stroke: #999;\n      fill: transparent;\n      transition-duration: 400ms;\n      transition-timing-function: ease-in; }\n  .slider .items .item img {\n    top: 0;\n    width: 0px;\n    height: 0px;\n    border-radius: 50%;\n    margin-top: -10px;\n    margin-bottom: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    transition-duration: 400ms;\n    transition-timing-function: ease-in; }\n  .slider .items .item #home-icon {\n    width: 28px;\n    height: 28px;\n    border-radius: 0px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    stroke: #999;\n    stroke-width: 1.6px;\n    transition-duration: 400ms;\n    transition-timing-function: ease-in; }\n  .slider .items .item.active .item-bar {\n    height: 20px;\n    transition-timing-function: ease-out; }\n    .slider .items .item.active .item-bar rect {\n      height: 20px;\n      transition-timing-function: ease-out; }\n  .slider .items .item.active .item-box {\n    width: 60px;\n    height: 60px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    transition-timing-function: ease-out; }\n    .slider .items .item.active .item-box rect {\n      width: 60px;\n      height: 60px;\n      stroke-width: 4px;\n      stroke: #999;\n      transition-timing-function: ease-out; }\n  .slider .items .item.active img {\n    width: 64px;\n    height: 63px;\n    margin-top: -60px;\n    margin-bottom: 10px;\n    border-radius: 0px;\n    transition-timing-function: ease-out; }\n  .slider .items .item.active #home-icon {\n    width: 50px;\n    height: 50px;\n    border-radius: 0px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    stroke: white;\n    stroke-width: 1.1px;\n    transition-timing-function: ease-out; }\n\n.middle-bar {\n  position: fixed;\n  top: 0;\n  right: 50px;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 0; }\n  .middle-bar .bar-container {\n    height: 2px;\n    width: 100vw;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n    .middle-bar .bar-container .bar {\n      width: 100vw;\n      height: 2px; }\n      .middle-bar .bar-container .bar svg {\n        width: 100vw; }\n        .middle-bar .bar-container .bar svg rect {\n          width: 100vw;\n          height: 2px;\n          fill: #999; }\n    .middle-bar .bar-container .beam {\n      width: 34px;\n      height: 2px;\n      margin-top: -7px;\n      position: absolute;\n      right: 100vw;\n      animation: slideRight 2.5s;\n      animation-timing-function: ease-in-out;\n      animation-iteration-count: infinite;\n      opacity: 0.9; }\n      .middle-bar .bar-container .beam img {\n        height: 12px; }\n    .middle-bar .bar-container #beam2 {\n      animation-delay: 0.5s; }\n\n.middle-bar-full {\n  right: 0px; }\n\n@keyframes slideRight {\n  from {\n    right: 100vw; }\n  to {\n    right: 0px; } }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@media screen and (max-width: 1050px) {\n  .slider {\n    left: 0;\n    top: 0;\n    height: 100px;\n    width: 410px;\n    margin-left: auto;\n    margin-right: auto;\n    z-index: 9999; }\n    .slider .items {\n      width: 410px;\n      display: flex;\n      align-items: center; }\n      .slider .items .item {\n        display: flex;\n        align-self: stretch;\n        align-items: center; }\n        .slider .items .item .item-bar {\n          align-self: stretch;\n          width: 30px;\n          height: 2px;\n          margin-top: 30px;\n          margin-bottom: 10px;\n          margin-left: 10px;\n          margin-right: 10px; }\n          .slider .items .item .item-bar rect {\n            width: 30px;\n            height: 2px; }\n        .slider .items .item .item-box {\n          align-self: stretch;\n          margin-left: auto;\n          margin-right: auto; }\n        .slider .items .item #home-icon {\n          margin-left: auto;\n          margin-right: auto;\n          margin-top: -10px;\n          margin-bottom: 0px; }\n      .slider .items .item.active .item-bar {\n        width: 15px;\n        height: 2px; }\n        .slider .items .item.active .item-bar rect {\n          width: 15px;\n          height: 2px; }\n      .slider .items .item.active .item-box {\n        width: 60px;\n        height: 60px;\n        margin-left: auto;\n        margin-right: auto; }\n        .slider .items .item.active .item-box rect {\n          width: 60px;\n          height: 60px; }\n      .slider .items .item.active #home-icon {\n        padding-bottom: 20px;\n        margin-left: auto;\n        margin-right: auto;\n        margin-top: 0px;\n        margin-bottom: 0px; }\n  .middle-bar {\n    right: 0px; }\n    .middle-bar .bar-container {\n      animation: slideRight 1.5s; } }\n\n.mountains {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0px;\n  right: 0;\n  bottom: 0;\n  z-index: 999; }\n\n.mountains-range .mountain {\n  right: 100px;\n  left: auto; }\n\n.mountains-range .mountain-two {\n  right: 230px;\n  left: auto; }\n\n.mountains-range .mountain-three {\n  right: 50px;\n  left: auto; }\n\n.mountain {\n  position: absolute;\n  bottom: 0;\n  left: 100px;\n  border-left: 180px solid transparent;\n  border-right: 180px solid transparent;\n  border-bottom: 210px solid #629dba;\n  z-index: 99; }\n\n.mountain-two,\n.mountain-three {\n  position: absolute;\n  bottom: 0;\n  border-left: 150px solid transparent;\n  border-right: 150px solid transparent;\n  border-bottom: 180px solid #7ac1e4;\n  z-index: 99; }\n\n.mountain-two {\n  left: 200px;\n  bottom: -20px;\n  border-bottom-color: #305262;\n  z-index: 2; }\n\n.mountain-three {\n  left: 50px;\n  bottom: -10px;\n  border-bottom-color: #1d2f38;\n  z-index: 2; }\n\n.mountain-top {\n  position: absolute;\n  right: -65px;\n  border-left: 65px solid transparent;\n  border-right: 65px solid transparent;\n  border-bottom: 77px solid #ceeaf6;\n  z-index: 2; }\n\n.mountain-top-2 {\n  border-bottom-color: #c2d8e2; }\n  .mountain-top-2 .mountain-cap-1,\n  .mountain-top-2 .mountain-cap-2,\n  .mountain-top-2 .mountain-cap-3,\n  .mountain-top-2 .mountain-cap-4 {\n    border-top-color: #c2d8e2; }\n\n.mountain-top-3 {\n  border-bottom-color: #adbbc2; }\n  .mountain-top-3 .mountain-cap-1,\n  .mountain-top-3 .mountain-cap-2,\n  .mountain-top-3 .mountain-cap-3,\n  .mountain-top-3 .mountain-cap-4 {\n    border-top-color: #adbbc2; }\n\n.mountain-top-big {\n  right: -80px;\n  border-left: 80px solid transparent;\n  border-right: 80px solid transparent;\n  border-bottom: 93px solid #ceeaf6;\n  z-index: 99; }\n  .mountain-top-big .mountain-cap-1 {\n    left: -80px;\n    top: 93px; }\n  .mountain-top-big .mountain-cap-2 {\n    left: -40px;\n    top: 89px; }\n  .mountain-top-big .mountain-cap-3 {\n    left: -10px;\n    top: 85px; }\n  .mountain-top-big .mountain-cap-4 {\n    left: 30px;\n    top: 93px; }\n\n.mountain-cap-1,\n.mountain-cap-2,\n.mountain-cap-3,\n.mountain-cap-4 {\n  position: absolute;\n  top: 70px;\n  border-left: 25px solid transparent;\n  border-right: 25px solid transparent;\n  border-top: 25px solid #ceeaf6; }\n\n.mountain-cap-1 {\n  left: -55px; }\n\n.mountain-cap-2 {\n  left: -25px; }\n\n.mountain-cap-3 {\n  left: 5px; }\n\n.cloud,\n.cloud:before,\n.cloud:after {\n  position: absolute;\n  width: 70px;\n  height: 30px;\n  background: #fff;\n  -webkit-border-radius: 100px / 50px;\n  border-radius: 100px / 50px; }\n\n.cloud {\n  bottom: 100px;\n  -webkit-animation: cloud 50s infinite linear;\n  animation: cloud 50s infinite linear; }\n\n@-webkit-keyframes cloud {\n  0% {\n    left: -100px; }\n  100% {\n    left: 1000px; } }\n\n@keyframes cloud {\n  0% {\n    left: -100px; }\n  100% {\n    left: 110vw; } }\n\n.cloud:before {\n  content: '';\n  left: 50px; }\n\n.cloud:after {\n  content: '';\n  left: 25px;\n  top: -10px; }\n\n@keyframes onPageLoad {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@media screen and (max-width: 1050px) {\n  .mountains-range {\n    display: none; } }\n\n#down-arrow-svg {\n  position: absolute;\n  bottom: 100px;\n  left: 50vw;\n  transform: translateX(-40px);\n  width: 80px;\n  z-index: 9999; }\n  #down-arrow-svg .body {\n    transition-duration: 800ms;\n    fill: #999; }\n  #down-arrow-svg .engine {\n    transition-duration: 800ms;\n    fill: #999; }\n  #down-arrow-svg .cls-1 {\n    isolation: isolate; }\n  #down-arrow-svg .cls-2 {\n    fill: #999; }\n  #down-arrow-svg .cls-3 {\n    opacity: 0; }\n  #down-arrow-svg .cls-3,\n  #down-arrow-svg .cls-6 {\n    mix-blend-mode: screen; }\n  #down-arrow-svg .cls-4 {\n    display: none; }\n  #down-arrow-svg .cls-5 {\n    mask: url(#mask); }\n  #down-arrow-svg .cls-6 {\n    opacity: 0.85; }\n  #down-arrow-svg .cls-7 {\n    display: none; }\n  #down-arrow-svg .cls-8 {\n    mask: url(#mask-2); }\n  #down-arrow-svg .cls-9 {\n    filter: url(#luminosity-invert); }\n\n#down-arrow-svg:hover {\n  cursor: pointer; }\n  #down-arrow-svg:hover .body {\n    transition-duration: 800ms;\n    fill: #fff; }\n  #down-arrow-svg:hover .engine {\n    transition-duration: 800ms;\n    fill: #09c2db; }\n\n.blastoff {\n  animation: blastoff 3s ease-in; }\n  .blastoff .body {\n    transition-duration: 800ms;\n    fill: #fff; }\n  .blastoff .engine {\n    transition-duration: 800ms;\n    fill: #09c2db; }\n  .blastoff .cls-1 {\n    isolation: isolate; }\n  .blastoff .cls-2 {\n    fill: #999; }\n  .blastoff .cls-3 {\n    transition-duration: 800ms;\n    opacity: 0.75 !important; }\n  .blastoff .cls-3,\n  .blastoff .cls-6 {\n    mix-blend-mode: screen; }\n  .blastoff .cls-4 {\n    display: none; }\n  .blastoff .cls-5 {\n    mask: url(#mask); }\n  .blastoff .cls-6 {\n    opacity: 0.85; }\n  .blastoff .cls-7 {\n    display: none; }\n  .blastoff .cls-8 {\n    mask: url(#mask-2); }\n  .blastoff .cls-9 {\n    filter: url(#luminosity-invert); }\n\n@-webkit-keyframes blastoff {\n  0% {\n    bottom: 100px; }\n  100% {\n    bottom: -1500px; } }\n\n@media screen and (max-width: 1050px) {\n  #down-arrow-svg {\n    display: none; } }\n\n.name-container {\n  background-color: #011132;\n  z-index: 1;\n  width: 650px;\n  border-radius: 50%;\n  height: 100vh;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n#personal-title {\n  font-family: 'Lato', sans-serif;\n  font-weight: 100;\n  width: 650px;\n  font-size: 35px;\n  font-weight: 100;\n  color: white;\n  text-align: center;\n  height: 0px;\n  margin-bottom: 70px;\n  margin-top: -70px; }\n\n#name {\n  font-family: 'Lato', sans-serif;\n  font-weight: 100;\n  width: 650px;\n  background-color: #011132;\n  font-size: 120px;\n  font-weight: 100;\n  padding-bottom: 20px;\n  color: #999;\n  background: -webkit-gradient(linear, left top, right top, color-stop(0, #999), color-stop(0.45, #999), color-stop(0.5, white), color-stop(0.55, #999), color-stop(1, #999));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 9999;\n  -webkit-animation: slidetounlock 2.5s infinite;\n  animation-timing-function: ease-in-out; }\n\n@-webkit-keyframes slidetounlock {\n  0% {\n    background-position: -325px 0; }\n  32% {\n    background-position: -325px 0; }\n  70% {\n    background-position: 325px 0; }\n  100% {\n    background-position: 325px 0; } }\n\n@media screen and (max-width: 1050px) {\n  .name-container {\n    width: 70vw; }\n  #personal-title {\n    width: 70vw;\n    font-size: 4vw;\n    margin-top: -30px;\n    margin-bottom: 30px; }\n  #name {\n    width: 70vw;\n    font-size: 12vw;\n    padding-bottom: 1vw; }\n  @-webkit-keyframes slidetounlock {\n    0% {\n      background-position: -35vw 0; }\n    32% {\n      background-position: -35vw 0; }\n    70% {\n      background-position: 35vw 0; }\n    100% {\n      background-position: 35vw 0; } } }\n\n.star {\n  background-color: white;\n  position: absolute;\n  border-radius: 50%;\n  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.34);\n  animation: starFade infinite; }\n\n@keyframes starFade {\n  0% { }\n  50% {\n    opacity: 0.2; }\n  100% {\n    opacity: 1; } }\n",""])},,,,,,,,,,,function(n,t){function e(n,t){return Math.floor(Math.random()*(t-n+1))+n}window.createStarField=function(){var n=1;for(n=1;n<220;n++){var t=e(0,100),o=e(-1,90),i=e(1,4),r=Math.random()/2+.5,a=e(0,10),c=e(0,3),s=Math.random()/2,d=e(4,20),l=e(0,2),p=document.createElement("p"),u="star"+n;p.setAttribute("id",u),p.setAttribute("class","star"),document.body.appendChild(p);var f=document.getElementById(u);f.style.left=t+"vw",f.style.top=o+"vh",f.style.width=i+"px",f.style.height=i+"px",f.style.opacity=r,f.style.boxShadow="0px 0px "+a+"px "+c+"px rgba(255,255,255,"+s+")",f.style.animationDuration=d+"s",f.style.animationDelay=l+"s"}}},function(n,t){const e=[{index:0,id:"homeItem",anchor:"home"},{index:1,id:"louItem",anchor:"lou"},{index:2,id:"shelfieItem",anchor:"shelfie"},{index:3,id:"melilloItem",anchor:"melillo"},{index:4,id:"vidvisionItem",anchor:"vidvision"},{index:5,id:"houseInMotionItem",anchor:"houseInMotion"}];var o,i=e[0],r=!1,a=document.getElementsByClassName("item"),c=document.getElementsByClassName("project-container");function s(n){window.clearTimeout(o),o=setTimeout(function(){d()},30);var t=0;let a;return t="wheelDelta"in n?n.wheelDelta:-40*n.detail,console.log(r,t),t<-50&&!1===r?((a=document.getElementById(e[i.index+1].anchor)).scrollIntoView({behavior:"smooth"}),r=!0,i=e[i.index+1],onItemClick(i.index)):t>50&&!1===r&&((a=document.getElementById(e[i.index-1].anchor)).scrollIntoView({behavior:"smooth"}),r=!0,i=e[i.index-1],onItemClick(i.index)),r}window.onLoad=function(){document.body.requestFullscreen()},window.onItemClick=function(n){0==n&&document.getElementById("down-arrow-svg").classList.remove("blastoff");for(var t=0;t<a.length;t++)a[t].classList.remove("active");for(t=0;t<c.length;t++)c[t].classList.remove("active");return document.getElementById(e[n].id).classList.add("active"),document.getElementById(e[n].anchor).classList.add("active"),document.getElementById(e[n].anchor).scrollIntoView({behavior:"smooth"}),i=e[e[n].index]},document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",function(n){n.preventDefault()})}),window.onbeforeunload=function(){window.scrollTo(0,0)},window.init=function(){var n=document.body;n.addEventListener?(n.addEventListener("mousewheel",s,!1),n.addEventListener("DOMMouseScroll",s,!1)):n.attachEvent&&n.attachEvent("onmousewheel",s)};var d=function(n){return r=!1};window.onDownArrowClick=function(){document.getElementById("down-arrow-svg").classList.add("blastoff"),setTimeout(function(){onItemClick(1)},800)},document.addEventListener("touchstart",function(n){l=n.touches[0].clientX,p=n.touches[0].clientY},!1),document.addEventListener("touchmove",function(n){if(!l||!p)return;var t=n.touches[0].clientX,o=n.touches[0].clientY,r=l-t,a=p-o;let c;Math.abs(r)>Math.abs(a)||(a>0?((c=document.getElementById(e[i.index+1].anchor)).scrollIntoView({behavior:"smooth"}),i=e[i.index+1],onItemClick(i.index)):((c=document.getElementById(e[i.index-1].anchor)).scrollIntoView({behavior:"smooth"}),i=e[i.index-1],onItemClick(i.index)));l=null,p=null},!1);var l=null,p=null},function(n,t,e){var o=e(8);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0},r=e(1)(o,i);o.locals&&(n.exports=o.locals),n.hot.accept(8,function(){var t=e(8);if("string"==typeof t&&(t=[[n.i,t,""]]),!function(n,t){var e,o=0;for(e in n){if(!t||n[e]!==t[e])return!1;o++}for(e in t)o--;return 0===o}(o.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(t)}),n.hot.dispose(function(){r()})},function(n,t,e){"use strict";e.r(t);e(21),e(20),e(19)}]);