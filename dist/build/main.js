/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(0);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "/* Imports */\n/* Variables */\n.projects {\n  height: 300vh;\n  width: 100vw;\n  position: absolute;\n  top: 0;\n  left: 0; }\n  .projects .project-container {\n    opacity: 0;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    animation: unactivateProject 0.3s linear;\n    animation-timing-function: ease-in; }\n    .projects .project-container .project-shadow {\n      width: 108vh;\n      height: 45.94vw;\n      max-width: 55vw;\n      max-height: 90.2vh;\n      border-radius: 40vh;\n      margin-left: 50px;\n      margin-top: 12.5vh;\n      margin-bottom: 12.5vh;\n      box-shadow: 0px 0px 200px 20px; }\n      .projects .project-container .project-shadow .project {\n        background-color: #444;\n        position: relative;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        box-shadow: 0px 0px 20px 0px #111;\n        z-index: 99999; }\n        .projects .project-container .project-shadow .project img {\n          width: 99%;\n          padding: 0.5%; }\n    .projects .project-container .project-text {\n      width: 30vw;\n      position: absolute;\n      left: 55vw;\n      margin-left: 50px;\n      padding: 40px; }\n      .projects .project-container .project-text h1 {\n        font-size: 6vw;\n        margin-top: 0px;\n        margin-bottom: 0px; }\n      .projects .project-container .project-text p {\n        color: white; }\n      .projects .project-container .project-text .btn {\n        margin-top: 40px;\n        background-color: transparent;\n        border: 2px solid #999;\n        width: 150px;\n        padding: 20px;\n        font-size: 18px;\n        font-weight: 400;\n        color: #999;\n        text-align: center;\n        text-decoration: none;\n        transition-duration: 0.5s; }\n        .projects .project-container .project-text .btn:hover {\n          color: white;\n          border-color: white;\n          -webkit-animation: slidetounlockhov 0.5s, fadeIn 1s;\n          animation-timing-function: ease-in-out; }\n      .projects .project-container .project-text .content {\n        height: 50vh;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start; }\n      .projects .project-container .project-text .content-center {\n        justify-content: center; }\n  .projects .active {\n    animation: activateProject 0.3s linear;\n    animation-timing-function: ease-out;\n    opacity: 1; }\n\n@keyframes activateProject {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes unactivateProject {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@-webkit-keyframes slidetounlockhov {\n  from {\n    background: -webkit-gradient(linear, left top, right top, color-stop(0, #999), color-stop(0.45, #999), color-stop(0.5, white), color-stop(0.55, #999), color-stop(1, #999));\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-position: -75px 0; }\n  to {\n    background: -webkit-gradient(linear, left top, right top, color-stop(0, #999), color-stop(0.45, #999), color-stop(0.5, white), color-stop(0.55, #999), color-stop(1, #999));\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-position: 75px 0; } }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    color: #999;\n    border-color: #999; }\n  25% {\n    color: #999;\n    border-color: #777; }\n  50% {\n    color: #999;\n    border-color: #999; }\n  100% {\n    color: white;\n    border-color: white; } }\n\n@-webkit-keyframes fadeOut {\n  0% {\n    color: white;\n    border-color: white; }\n  100% {\n    color: #999;\n    border-color: #999; } }\n\n/* Variables */\n.slider {\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  width: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 9999; }\n  .slider .items .item .item-bar {\n    width: 2px;\n    height: 60px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    transition-duration: 400ms;\n    transition-timing-function: ease-in; }\n    .slider .items .item .item-bar rect {\n      width: 2px;\n      height: 60px;\n      fill: #999;\n      transition-duration: 400ms;\n      transition-timing-function: ease-in; }\n  .slider .items .item .item-box {\n    width: 20px;\n    height: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    transition-duration: 400ms;\n    transition-timing-function: ease-in; }\n    .slider .items .item .item-box rect {\n      width: 20px;\n      height: 20px;\n      stroke-width: 4px;\n      stroke: #999;\n      fill: transparent;\n      transition-duration: 400ms;\n      transition-timing-function: ease-in; }\n  .slider .items .item img {\n    top: 0;\n    width: 0px;\n    height: 0px;\n    border-radius: 50%;\n    margin-top: -10px;\n    margin-bottom: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    transition-duration: 400ms;\n    transition-timing-function: ease-in; }\n  .slider .items .item #home-icon {\n    width: 28px;\n    height: 28px;\n    border-radius: 0px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    stroke: #999;\n    stroke-width: 1.6px;\n    transition-duration: 400ms;\n    transition-timing-function: ease-in; }\n  .slider .items .item.active .item-bar {\n    height: 40px;\n    transition-timing-function: ease-out; }\n    .slider .items .item.active .item-bar rect {\n      height: 40px;\n      transition-timing-function: ease-out; }\n  .slider .items .item.active .item-box {\n    width: 60px;\n    height: 60px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    transition-timing-function: ease-out; }\n    .slider .items .item.active .item-box rect {\n      width: 60px;\n      height: 60px;\n      stroke-width: 4px;\n      stroke: #999;\n      transition-timing-function: ease-out; }\n  .slider .items .item.active img {\n    width: 64px;\n    height: 63px;\n    margin-top: -60px;\n    margin-bottom: 10px;\n    border-radius: 0px;\n    transition-timing-function: ease-out; }\n  .slider .items .item.active #home-icon {\n    width: 50px;\n    height: 50px;\n    border-radius: 0px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    stroke: white;\n    stroke-width: 1.1px;\n    transition-timing-function: ease-out; }\n\n.middle-bar {\n  position: fixed;\n  top: 0;\n  right: 60px;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 0; }\n  .middle-bar .bar-container {\n    height: 2px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n    .middle-bar .bar-container .bar {\n      width: 50%;\n      height: 2px; }\n      .middle-bar .bar-container .bar svg {\n        width: 100%; }\n        .middle-bar .bar-container .bar svg rect {\n          width: 100%;\n          height: 2px;\n          fill: #999; }\n    .middle-bar .bar-container .beam {\n      width: 34px;\n      height: 2px;\n      margin-top: -7px;\n      position: absolute;\n      right: 100vw;\n      animation: slideRight 2.5s;\n      animation-timing-function: ease-in-out;\n      animation-iteration-count: infinite;\n      opacity: 0.9; }\n      .middle-bar .bar-container .beam img {\n        height: 12px; }\n    .middle-bar .bar-container #beam2 {\n      animation-delay: 0.5s; }\n\n.middle-bar-full {\n  right: 0px; }\n\n@keyframes slideRight {\n  from {\n    right: 100vw; }\n  to {\n    right: 0px; } }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.mountains {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0px;\n  right: 0;\n  bottom: 0;\n  z-index: 999; }\n\n.mountains-range .mountain {\n  right: 100px;\n  left: auto; }\n\n.mountains-range .mountain-two {\n  right: 230px;\n  left: auto; }\n\n.mountains-range .mountain-three {\n  right: 50px;\n  left: auto; }\n\n.mountain {\n  position: absolute;\n  bottom: 0;\n  left: 100px;\n  border-left: 180px solid transparent;\n  border-right: 180px solid transparent;\n  border-bottom: 210px solid #629dba;\n  z-index: 99; }\n\n.mountain-two,\n.mountain-three {\n  position: absolute;\n  bottom: 0;\n  border-left: 150px solid transparent;\n  border-right: 150px solid transparent;\n  border-bottom: 180px solid #7ac1e4;\n  z-index: 99; }\n\n.mountain-two {\n  left: 200px;\n  bottom: -20px;\n  border-bottom-color: #305262;\n  z-index: 2; }\n\n.mountain-three {\n  left: 50px;\n  bottom: -10px;\n  border-bottom-color: #1d2f38;\n  z-index: 2; }\n\n.mountain-top {\n  position: absolute;\n  right: -65px;\n  border-left: 65px solid transparent;\n  border-right: 65px solid transparent;\n  border-bottom: 77px solid #ceeaf6;\n  z-index: 2; }\n\n.mountain-top-2 {\n  border-bottom-color: #c2d8e2; }\n  .mountain-top-2 .mountain-cap-1,\n  .mountain-top-2 .mountain-cap-2,\n  .mountain-top-2 .mountain-cap-3,\n  .mountain-top-2 .mountain-cap-4 {\n    border-top-color: #c2d8e2; }\n\n.mountain-top-3 {\n  border-bottom-color: #adbbc2; }\n  .mountain-top-3 .mountain-cap-1,\n  .mountain-top-3 .mountain-cap-2,\n  .mountain-top-3 .mountain-cap-3,\n  .mountain-top-3 .mountain-cap-4 {\n    border-top-color: #adbbc2; }\n\n.mountain-top-big {\n  right: -80px;\n  border-left: 80px solid transparent;\n  border-right: 80px solid transparent;\n  border-bottom: 93px solid #ceeaf6;\n  z-index: 99; }\n  .mountain-top-big .mountain-cap-1 {\n    left: -80px;\n    top: 93px; }\n  .mountain-top-big .mountain-cap-2 {\n    left: -40px;\n    top: 89px; }\n  .mountain-top-big .mountain-cap-3 {\n    left: -10px;\n    top: 85px; }\n  .mountain-top-big .mountain-cap-4 {\n    left: 30px;\n    top: 93px; }\n\n.mountain-cap-1,\n.mountain-cap-2,\n.mountain-cap-3,\n.mountain-cap-4 {\n  position: absolute;\n  top: 70px;\n  border-left: 25px solid transparent;\n  border-right: 25px solid transparent;\n  border-top: 25px solid #ceeaf6; }\n\n.mountain-cap-1 {\n  left: -55px; }\n\n.mountain-cap-2 {\n  left: -25px; }\n\n.mountain-cap-3 {\n  left: 5px; }\n\n.cloud,\n.cloud:before,\n.cloud:after {\n  position: absolute;\n  width: 70px;\n  height: 30px;\n  background: #fff;\n  -webkit-border-radius: 100px / 50px;\n  border-radius: 100px / 50px; }\n\n.cloud {\n  bottom: 100px;\n  -webkit-animation: cloud 50s infinite linear;\n  animation: cloud 50s infinite linear; }\n\n@-webkit-keyframes cloud {\n  0% {\n    left: -100px; }\n  100% {\n    left: 1000px; } }\n\n@keyframes cloud {\n  0% {\n    left: -100px; }\n  100% {\n    left: 110vw; } }\n\n.cloud:before {\n  content: '';\n  left: 50px; }\n\n.cloud:after {\n  content: '';\n  left: 25px;\n  top: -10px; }\n\n@keyframes onPageLoad {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Variables */\nbody {\n  background-color: #011132;\n  margin: 0px;\n  top: 0;\n  overflow: hidden;\n  animation: fadeInOnLoad 3s ease-in; }\n\n@keyframes fadeInOnLoad {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\nh1 {\n  font-family: 'Archivo', serif; }\n\np {\n  font-family: 'Lato', serif;\n  font-weight: 300; }\n\na {\n  font-family: 'Lato', serif;\n  font-weight: 400; }\n\n.star {\n  background-color: white;\n  position: absolute;\n  border-radius: 50%;\n  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.34);\n  animation: starFade infinite; }\n\n@keyframes starFade {\n  0% { }\n  50% {\n    opacity: 0.2; }\n  100% {\n    opacity: 1; } }\n\ncanvas {\n  width: 100vw;\n  height: 300px;\n  position: absolute;\n  display: block;\n  filter: blur(6px) drop-shadow(0 0 30px #33b4ac);\n  transform-origin: 0 100%;\n  transform: skewX(-20deg);\n  animation: fadein 6s 1; }\n\n@keyframes fadein {\n  0% {\n    opacity: 0; } }\n\n.name-container {\n  background-color: #011132;\n  z-index: 1;\n  width: 650px;\n  border-radius: 50%;\n  height: 100vh;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n#personal-title {\n  font-family: 'Lato', sans-serif;\n  font-weight: 100;\n  width: 650px;\n  font-size: 35px;\n  font-weight: 100;\n  color: white;\n  text-align: center;\n  height: 0px;\n  margin-bottom: 70px;\n  margin-top: -70px; }\n\n#down-arrow-svg {\n  position: absolute;\n  bottom: 100px;\n  left: 50vw;\n  transform: translateX(-40px);\n  width: 80px;\n  z-index: 9999; }\n  #down-arrow-svg .body {\n    transition-duration: 800ms;\n    fill: #999; }\n  #down-arrow-svg .engine {\n    transition-duration: 800ms;\n    fill: #999; }\n  #down-arrow-svg .cls-1 {\n    isolation: isolate; }\n  #down-arrow-svg .cls-2 {\n    fill: #999; }\n  #down-arrow-svg .cls-3 {\n    opacity: 0; }\n  #down-arrow-svg .cls-3,\n  #down-arrow-svg .cls-6 {\n    mix-blend-mode: screen; }\n  #down-arrow-svg .cls-4 {\n    display: none; }\n  #down-arrow-svg .cls-5 {\n    mask: url(#mask); }\n  #down-arrow-svg .cls-6 {\n    opacity: 0.85; }\n  #down-arrow-svg .cls-7 {\n    display: none; }\n  #down-arrow-svg .cls-8 {\n    mask: url(#mask-2); }\n  #down-arrow-svg .cls-9 {\n    filter: url(#luminosity-invert); }\n\n#down-arrow-svg:hover {\n  cursor: pointer; }\n  #down-arrow-svg:hover .body {\n    transition-duration: 800ms;\n    fill: #fff; }\n  #down-arrow-svg:hover .engine {\n    transition-duration: 800ms;\n    fill: #09c2db; }\n\n.blastoff {\n  animation: blastoff 3s ease-in; }\n  .blastoff .body {\n    transition-duration: 800ms;\n    fill: #fff; }\n  .blastoff .engine {\n    transition-duration: 800ms;\n    fill: #09c2db; }\n  .blastoff .cls-1 {\n    isolation: isolate; }\n  .blastoff .cls-2 {\n    fill: #999; }\n  .blastoff .cls-3 {\n    transition-duration: 800ms;\n    opacity: 0.75 !important; }\n  .blastoff .cls-3,\n  .blastoff .cls-6 {\n    mix-blend-mode: screen; }\n  .blastoff .cls-4 {\n    display: none; }\n  .blastoff .cls-5 {\n    mask: url(#mask); }\n  .blastoff .cls-6 {\n    opacity: 0.85; }\n  .blastoff .cls-7 {\n    display: none; }\n  .blastoff .cls-8 {\n    mask: url(#mask-2); }\n  .blastoff .cls-9 {\n    filter: url(#luminosity-invert); }\n\n#name {\n  font-family: 'Lato', sans-serif;\n  font-weight: 100;\n  width: 650px;\n  background-color: #011132;\n  font-size: 120px;\n  font-weight: 100;\n  padding-bottom: 20px;\n  color: #999;\n  background: -webkit-gradient(linear, left top, right top, color-stop(0, #999), color-stop(0.45, #999), color-stop(0.5, white), color-stop(0.55, #999), color-stop(1, #999));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 9999;\n  -webkit-animation: slidetounlock 2.5s infinite;\n  animation-timing-function: ease-in-out; }\n\n@-webkit-keyframes slidetounlock {\n  0% {\n    background-position: -325px 0; }\n  32% {\n    background-position: -325px 0; }\n  70% {\n    background-position: 325px 0; }\n  100% {\n    background-position: 325px 0; } }\n\n@-webkit-keyframes blastoff {\n  0% {\n    bottom: 100px; }\n  100% {\n    bottom: -1500px; } }\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(3);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(1)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);


const projects = [
	{ index: 0, id: 'homeItem', anchor: 'home' },
	{ index: 1, id: 'louItem', anchor: 'lou' },
	{ index: 2, id: 'shelfieItem', anchor: 'shelfie' },
	{ index: 3, id: 'melilloItem', anchor: 'melillo' },
	{ index: 4, id: 'vidvisionItem', anchor: 'vidvision' }
]

var currentProject = projects[0]
var isScrolling
var scrolling = false
var itemElements = document.getElementsByClassName('item')
var projectElements = document.getElementsByClassName('project-container')

window.onItemClick = function(x) {
	if (x == 0) {
		document.getElementById('down-arrow-svg').classList.remove('blastoff')
	}
	for (var i = 0; i < itemElements.length; i++) {
		itemElements[i].classList.remove('active')
	}
	for (var i = 0; i < projectElements.length; i++) {
		projectElements[i].classList.remove('active')
	}
	document.getElementById(projects[x].id).classList.add('active')
	document.getElementById(projects[x].anchor).classList.add('active')
	document.getElementById(projects[x].anchor).scrollIntoView({
		behavior: 'smooth'
	})
	currentProject = projects[projects[x].index]
	return currentProject
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault()
	})
})

window.onbeforeunload = function() {
	window.scrollTo(0, 0)
}

window.init = function() {
	// for mouse scrolling in Firefox
	var elem = document.body
	if (elem.addEventListener) {
		// all browsers except IE before version 9
		// Internet Explorer, Opera, Google Chrome and Safari
		elem.addEventListener('mousewheel', mouseScroll, false)
		// Firefox
		elem.addEventListener('DOMMouseScroll', mouseScroll, false)
	} else {
		if (elem.attachEvent) {
			// IE before version 9
			elem.attachEvent('onmousewheel', mouseScroll)
		}
	}
}

function mouseScroll(event) {
	window.clearTimeout(isScrolling)

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {
		// Run the callback
		scrollStop()
	}, 30)
	var rolled = 0
	if ('wheelDelta' in event) {
		rolled = event.wheelDelta
	} else {
		// Firefox
		// The measurement units of the detail and wheelDelta properties are different.
		rolled = -40 * event.detail
	}

	let project
	console.log(scrolling, rolled)
	if (rolled < -50 && scrolling === false) {
		project = document.getElementById(projects[currentProject.index + 1].anchor)
		project.scrollIntoView({
			behavior: 'smooth'
		})
		scrolling = true
		currentProject = projects[currentProject.index + 1]
		onItemClick(currentProject.index)
	} else if (rolled > 50 && scrolling === false) {
		project = document.getElementById(projects[currentProject.index - 1].anchor)
		project.scrollIntoView({
			behavior: 'smooth'
		})
		scrolling = true
		currentProject = projects[currentProject.index - 1]
		onItemClick(currentProject.index)
	}
	return scrolling
}

var scrollStop = function(callback) {
	scrolling = false
	return scrolling
}

window.onDownArrowClick = function() {
	document.getElementById('down-arrow-svg').classList.add('blastoff')
	setTimeout(function() {
		onItemClick(1)
	}, 800)
}

// number of drops created.
var numStars = 220

// function to generate a random number range.
function randRange(minNum, maxNum) {
	return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
}

// function to generate drops
function createStarField() {
	for (i = 1; i < numStars; i++) {
		var starLeft = randRange(0, 1600)
		var starTop = randRange(-10, 700)
		var starSize = randRange(1, 4)
		var starBrightness = Math.random() / 2 + 0.5
		var starGlowSize = randRange(0, 10)
		var starGlowCircle = randRange(0, 3)
		var starGlowBrightness = Math.random() / 2
		var starAnimationDuration = randRange(4, 20)
		var starAnimationDelay = randRange(0, 2)

		var newStar = document.createElement('p')
		var starId = 'star' + i
		newStar.setAttribute('id', starId)
		newStar.setAttribute('class', 'star')
		document.body.appendChild(newStar)
		var star = document.getElementById(starId)
		star.style.left = starLeft + 'px'
		star.style.top = starTop + 'px'
		star.style.width = starSize + 'px'
		star.style.height = starSize + 'px'
		star.style.opacity = starBrightness
		star.style.boxShadow =
			'0px 0px ' +
			starGlowSize +
			'px ' +
			starGlowCircle +
			'px rgba(255,255,255,' +
			starGlowBrightness +
			')'
		star.style.animationDuration = starAnimationDuration + 's'
		star.style.animationDelay = starAnimationDelay + 's'
	}
}
// Make it rain
createStarField()


/***/ })
/******/ ]);