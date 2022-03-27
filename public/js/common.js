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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__(7));

// requireAll(require.context('./', true, /\.(js|less|png|jpe?g|gif)$/));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(6);

__webpack_require__(0);

__webpack_require__(11);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
// require("expose-loader?$!expose-loader?jQuery!jquery");

// flexslider
// require("./flexslider2/flexslider.css")
// require("expose-loader?flexslider!./flexslider2");

// parallax
// require("expose-loader?parallax!jquery-parallax.js");

// plax параллакс эффект
// require("plax");

// wow.js
// require("expose-loader?WOW!wow.js");

// animate.css
// require("animate.css/animate.css");

// blueimp gallery https://github.com/blueimp/Gallery
// require("blueimp-gallery/css/blueimp-gallery.min.css");
// require("expose-loader?blueimp.Gallery!blueimp-gallery/js/blueimp-gallery.min.js");


// slick-carousel
// require("slick-carousel/slick/slick.css");
// require("slick-carousel/slick/slick-theme.css");
// require("expose-loader?slick!slick-carousel");

// swiper slider
// require("swiper/dist/css/swiper.css");
// require("expose-loader?Swiper!swiper/dist/js/swiper.js");

// vue.js
// import Vue from 'vue';
// window.Vue = Vue;


// magnific-popup
// require("magnific-popup/dist/magnific-popup.css");
// require("expose-loader?magnificPopup!magnific-popup/dist/jquery.magnific-popup.js");

// jquery ui slider
// require('jquery-ui-css/slider.css');
// require("expose-loader?slider!jquery-ui/slider");

// jquery ui tabs
// require('jquery-ui-css/tabs.css');
// require("expose-loader?slider!jquery-ui/tabs");

// touch support for jquery ui
// require("jquery-ui-touch-punch");

// highslide
// require("expose-loader?hs!./highslide/highslide/highslide-with-gallery.js");
// // let hs = require("./highslide/highslide/highslide-with-gallery.js");
// // window.hs = hs;
// require("./highslide/highslide/highslide.css");

// lightbox
// require("lightbox2");
// require("lightbox2/dist/css/lightbox.css");

// normalize.css
__webpack_require__(5);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./form/form.less": 8,
	"./header/header.less": 9,
	"./index.js": 0,
	"./section/section.less": 10
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 7;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__(12));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./monocolor/logo.svg": 13
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 12;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "logo",
  "use": "logo-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\" id=\"logo\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3 0a3 3 0 0 0-3 3v15.333a3 3 0 0 0 3 3h2.333v-13a3 3 0 0 1 3-3h13V3a3 3 0 0 0-3-3H3zm7.667 29v-2.333h13a3 3 0 0 0 3-3v-13H29a3 3 0 0 1 3 3V29a3 3 0 0 1-3 3H13.667a3 3 0 0 1-3-3zm10.666-10.667v-7.666h-7.666a3 3 0 0 0-3 3v7.666h7.666a3 3 0 0 0 3-3z\" /></symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.BrowserSpriteSymbol = factory();
})(undefined, function () {
    'use strict';

    var SpriteSymbol = function SpriteSymbol(ref) {
        var id = ref.id;
        var viewBox = ref.viewBox;
        var content = ref.content;

        this.id = id;
        this.viewBox = viewBox;
        this.content = content;
    };

    /**
     * @return {string}
     */
    SpriteSymbol.prototype.stringify = function stringify() {
        return this.content;
    };

    /**
     * @return {string}
     */
    SpriteSymbol.prototype.toString = function toString() {
        return this.stringify();
    };

    SpriteSymbol.prototype.destroy = function destroy() {
        var this$1 = this;

        ['id', 'viewBox', 'content'].forEach(function (prop) {
            return delete this$1[prop];
        });
    };

    /**
     * @param {string} content
     * @return {Element}
     */
    var parse = function parse(content) {
        var hasImportNode = !!document.importNode;
        var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

        /**
         * Fix for browser which are throwing WrongDocumentError
         * if you insert an element which is not part of the document
         * @see http://stackoverflow.com/a/7986519/4624403
         */
        if (hasImportNode) {
            return document.importNode(doc, true);
        }

        return doc;
    };

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
        return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var deepmerge = createCommonjsModule(function (module, exports) {
        (function (root, factory) {
            if (false) {
                undefined(factory);
            } else {
                module.exports = factory();
            }
        })(commonjsGlobal, function () {

            function isMergeableObject(val) {
                var nonNullObject = val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';

                return nonNullObject && Object.prototype.toString.call(val) !== '[object RegExp]' && Object.prototype.toString.call(val) !== '[object Date]';
            }

            function emptyTarget(val) {
                return Array.isArray(val) ? [] : {};
            }

            function cloneIfNecessary(value, optionsArgument) {
                var clone = optionsArgument && optionsArgument.clone === true;
                return clone && isMergeableObject(value) ? deepmerge(emptyTarget(value), value, optionsArgument) : value;
            }

            function defaultArrayMerge(target, source, optionsArgument) {
                var destination = target.slice();
                source.forEach(function (e, i) {
                    if (typeof destination[i] === 'undefined') {
                        destination[i] = cloneIfNecessary(e, optionsArgument);
                    } else if (isMergeableObject(e)) {
                        destination[i] = deepmerge(target[i], e, optionsArgument);
                    } else if (target.indexOf(e) === -1) {
                        destination.push(cloneIfNecessary(e, optionsArgument));
                    }
                });
                return destination;
            }

            function mergeObject(target, source, optionsArgument) {
                var destination = {};
                if (isMergeableObject(target)) {
                    Object.keys(target).forEach(function (key) {
                        destination[key] = cloneIfNecessary(target[key], optionsArgument);
                    });
                }
                Object.keys(source).forEach(function (key) {
                    if (!isMergeableObject(source[key]) || !target[key]) {
                        destination[key] = cloneIfNecessary(source[key], optionsArgument);
                    } else {
                        destination[key] = deepmerge(target[key], source[key], optionsArgument);
                    }
                });
                return destination;
            }

            function deepmerge(target, source, optionsArgument) {
                var array = Array.isArray(source);
                var options = optionsArgument || { arrayMerge: defaultArrayMerge };
                var arrayMerge = options.arrayMerge || defaultArrayMerge;

                if (array) {
                    return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument);
                } else {
                    return mergeObject(target, source, optionsArgument);
                }
            }

            deepmerge.all = function deepmergeAll(array, optionsArgument) {
                if (!Array.isArray(array) || array.length < 2) {
                    throw new Error('first argument should be an array with at least two elements');
                }

                // we are sure there are at least 2 values, so it is safe to have no initial value
                return array.reduce(function (prev, next) {
                    return deepmerge(prev, next, optionsArgument);
                });
            };

            return deepmerge;
        });
    });

    var namespaces_1 = createCommonjsModule(function (module, exports) {
        var namespaces = {
            svg: {
                name: 'xmlns',
                uri: 'http://www.w3.org/2000/svg'
            },
            xlink: {
                name: 'xmlns:xlink',
                uri: 'http://www.w3.org/1999/xlink'
            }
        };

        exports.default = namespaces;
        module.exports = exports.default;
    });

    /**
     * @param {Object} attrs
     * @return {string}
     */
    var objectToAttrsString = function objectToAttrsString(attrs) {
        return Object.keys(attrs).map(function (attr) {
            var value = attrs[attr].toString().replace(/"/g, '&quot;');
            return attr + "=\"" + value + "\"";
        }).join(' ');
    };

    var svg = namespaces_1.svg;
    var xlink = namespaces_1.xlink;

    var defaultAttrs = {};
    defaultAttrs[svg.name] = svg.uri;
    defaultAttrs[xlink.name] = xlink.uri;

    /**
     * @param {string} [content]
     * @param {Object} [attributes]
     * @return {string}
     */
    var wrapInSvgString = function wrapInSvgString(content, attributes) {
        if (content === void 0) content = '';

        var attrs = deepmerge(defaultAttrs, attributes || {});
        var attrsRendered = objectToAttrsString(attrs);
        return "<svg " + attrsRendered + ">" + content + "</svg>";
    };

    var BrowserSpriteSymbol = function (SpriteSymbol$$1) {
        function BrowserSpriteSymbol() {
            SpriteSymbol$$1.apply(this, arguments);
        }

        if (SpriteSymbol$$1) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
        BrowserSpriteSymbol.prototype = Object.create(SpriteSymbol$$1 && SpriteSymbol$$1.prototype);
        BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

        var prototypeAccessors = { isMounted: {} };

        prototypeAccessors.isMounted.get = function () {
            return !!this.node;
        };

        /**
         * @param {Element} node
         * @return {BrowserSpriteSymbol}
         */
        BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode(node) {
            return new BrowserSpriteSymbol({
                id: node.getAttribute('id'),
                viewBox: node.getAttribute('viewBox'),
                content: node.outerHTML
            });
        };

        BrowserSpriteSymbol.prototype.destroy = function destroy() {
            if (this.isMounted) {
                this.unmount();
            }
            SpriteSymbol$$1.prototype.destroy.call(this);
        };

        /**
         * @param {Element|string} target
         * @return {Element}
         */
        BrowserSpriteSymbol.prototype.mount = function mount(target) {
            if (this.isMounted) {
                return this.node;
            }

            var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
            var node = this.render();
            this.node = node;

            mountTarget.appendChild(node);

            return node;
        };

        /**
         * @return {Element}
         */
        BrowserSpriteSymbol.prototype.render = function render() {
            var content = this.stringify();
            return parse(wrapInSvgString(content)).childNodes[0];
        };

        BrowserSpriteSymbol.prototype.unmount = function unmount() {
            this.node.parentNode.removeChild(this.node);
        };

        Object.defineProperties(BrowserSpriteSymbol.prototype, prototypeAccessors);

        return BrowserSpriteSymbol;
    }(SpriteSymbol);

    return BrowserSpriteSymbol;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.BrowserSprite = factory();
})(undefined, function () {
  'use strict';

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var deepmerge = createCommonjsModule(function (module, exports) {
    (function (root, factory) {
      if (false) {
        undefined(factory);
      } else {
        module.exports = factory();
      }
    })(commonjsGlobal, function () {

      function isMergeableObject(val) {
        var nonNullObject = val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';

        return nonNullObject && Object.prototype.toString.call(val) !== '[object RegExp]' && Object.prototype.toString.call(val) !== '[object Date]';
      }

      function emptyTarget(val) {
        return Array.isArray(val) ? [] : {};
      }

      function cloneIfNecessary(value, optionsArgument) {
        var clone = optionsArgument && optionsArgument.clone === true;
        return clone && isMergeableObject(value) ? deepmerge(emptyTarget(value), value, optionsArgument) : value;
      }

      function defaultArrayMerge(target, source, optionsArgument) {
        var destination = target.slice();
        source.forEach(function (e, i) {
          if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
          } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
          } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
          }
        });
        return destination;
      }

      function mergeObject(target, source, optionsArgument) {
        var destination = {};
        if (isMergeableObject(target)) {
          Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
          });
        }
        Object.keys(source).forEach(function (key) {
          if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
          } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
          }
        });
        return destination;
      }

      function deepmerge(target, source, optionsArgument) {
        var array = Array.isArray(source);
        var options = optionsArgument || { arrayMerge: defaultArrayMerge };
        var arrayMerge = options.arrayMerge || defaultArrayMerge;

        if (array) {
          return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument);
        } else {
          return mergeObject(target, source, optionsArgument);
        }
      }

      deepmerge.all = function deepmergeAll(array, optionsArgument) {
        if (!Array.isArray(array) || array.length < 2) {
          throw new Error('first argument should be an array with at least two elements');
        }

        // we are sure there are at least 2 values, so it is safe to have no initial value
        return array.reduce(function (prev, next) {
          return deepmerge(prev, next, optionsArgument);
        });
      };

      return deepmerge;
    });
  });

  //      
  // An event handler can take an optional event argument
  // and should not return a value

  // An array of all currently registered event handlers for a type

  // A map of event types and their corresponding event handlers.


  /** Mitt: Tiny (~200b) functional event emitter / pubsub.
   *  @name mitt
   *  @returns {Mitt}
   */
  function mitt(all) {
    all = all || Object.create(null);

    return {
      /**
       * Register an event handler for the given type.
       *
       * @param  {String} type	Type of event to listen for, or `"*"` for all events
       * @param  {Function} handler Function to call in response to given event
       * @memberOf mitt
       */
      on: function on(type, handler) {
        (all[type] || (all[type] = [])).push(handler);
      },

      /**
       * Remove an event handler for the given type.
       *
       * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
       * @param  {Function} handler Handler function to remove
       * @memberOf mitt
       */
      off: function off(type, handler) {
        if (all[type]) {
          all[type].splice(all[type].indexOf(handler) >>> 0, 1);
        }
      },

      /**
       * Invoke all handlers for the given type.
       * If present, `"*"` handlers are invoked after type-matched handlers.
       *
       * @param {String} type  The event type to invoke
       * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
       * @memberof mitt
       */
      emit: function emit(type, evt) {
        (all[type] || []).map(function (handler) {
          handler(evt);
        });
        (all['*'] || []).map(function (handler) {
          handler(type, evt);
        });
      }
    };
  }

  var namespaces_1 = createCommonjsModule(function (module, exports) {
    var namespaces = {
      svg: {
        name: 'xmlns',
        uri: 'http://www.w3.org/2000/svg'
      },
      xlink: {
        name: 'xmlns:xlink',
        uri: 'http://www.w3.org/1999/xlink'
      }
    };

    exports.default = namespaces;
    module.exports = exports.default;
  });

  /**
   * @param {Object} attrs
   * @return {string}
   */
  var objectToAttrsString = function objectToAttrsString(attrs) {
    return Object.keys(attrs).map(function (attr) {
      var value = attrs[attr].toString().replace(/"/g, '&quot;');
      return attr + "=\"" + value + "\"";
    }).join(' ');
  };

  var svg = namespaces_1.svg;
  var xlink = namespaces_1.xlink;

  var defaultAttrs = {};
  defaultAttrs[svg.name] = svg.uri;
  defaultAttrs[xlink.name] = xlink.uri;

  /**
   * @param {string} [content]
   * @param {Object} [attributes]
   * @return {string}
   */
  var wrapInSvgString = function wrapInSvgString(content, attributes) {
    if (content === void 0) content = '';

    var attrs = deepmerge(defaultAttrs, attributes || {});
    var attrsRendered = objectToAttrsString(attrs);
    return "<svg " + attrsRendered + ">" + content + "</svg>";
  };

  var svg$1 = namespaces_1.svg;
  var xlink$1 = namespaces_1.xlink;

  var defaultConfig = {
    attrs: (obj = {
      style: ['position: absolute', 'width: 0', 'height: 0'].join('; ')
    }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj)
  };
  var obj;

  var Sprite = function Sprite(config) {
    this.config = deepmerge(defaultConfig, config || {});
    this.symbols = [];
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * @param {SpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  Sprite.prototype.add = function add(symbol) {
    var ref = this;
    var symbols = ref.symbols;
    var existing = this.find(symbol.id);

    if (existing) {
      symbols[symbols.indexOf(existing)] = symbol;
      return false;
    }

    symbols.push(symbol);
    return true;
  };

  /**
   * Remove symbol & destroy it
   * @param {string} id
   * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
   */
  Sprite.prototype.remove = function remove(id) {
    var ref = this;
    var symbols = ref.symbols;
    var symbol = this.find(id);

    if (symbol) {
      symbols.splice(symbols.indexOf(symbol), 1);
      symbol.destroy();
      return true;
    }

    return false;
  };

  /**
   * @param {string} id
   * @return {SpriteSymbol|null}
   */
  Sprite.prototype.find = function find(id) {
    return this.symbols.filter(function (s) {
      return s.id === id;
    })[0] || null;
  };

  /**
   * @param {string} id
   * @return {boolean}
   */
  Sprite.prototype.has = function has(id) {
    return this.find(id) !== null;
  };

  /**
   * @return {string}
   */
  Sprite.prototype.stringify = function stringify() {
    var ref = this.config;
    var attrs = ref.attrs;
    var stringifiedSymbols = this.symbols.map(function (s) {
      return s.stringify();
    }).join('');
    return wrapInSvgString(stringifiedSymbols, attrs);
  };

  /**
   * @return {string}
   */
  Sprite.prototype.toString = function toString() {
    return this.stringify();
  };

  Sprite.prototype.destroy = function destroy() {
    this.symbols.forEach(function (s) {
      return s.destroy();
    });
  };

  var SpriteSymbol = function SpriteSymbol(ref) {
    var id = ref.id;
    var viewBox = ref.viewBox;
    var content = ref.content;

    this.id = id;
    this.viewBox = viewBox;
    this.content = content;
  };

  /**
   * @return {string}
   */
  SpriteSymbol.prototype.stringify = function stringify() {
    return this.content;
  };

  /**
   * @return {string}
   */
  SpriteSymbol.prototype.toString = function toString() {
    return this.stringify();
  };

  SpriteSymbol.prototype.destroy = function destroy() {
    var this$1 = this;

    ['id', 'viewBox', 'content'].forEach(function (prop) {
      return delete this$1[prop];
    });
  };

  /**
   * @param {string} content
   * @return {Element}
   */
  var parse = function parse(content) {
    var hasImportNode = !!document.importNode;
    var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

    /**
     * Fix for browser which are throwing WrongDocumentError
     * if you insert an element which is not part of the document
     * @see http://stackoverflow.com/a/7986519/4624403
     */
    if (hasImportNode) {
      return document.importNode(doc, true);
    }

    return doc;
  };

  var BrowserSpriteSymbol = function (SpriteSymbol$$1) {
    function BrowserSpriteSymbol() {
      SpriteSymbol$$1.apply(this, arguments);
    }

    if (SpriteSymbol$$1) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
    BrowserSpriteSymbol.prototype = Object.create(SpriteSymbol$$1 && SpriteSymbol$$1.prototype);
    BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

    var prototypeAccessors = { isMounted: {} };

    prototypeAccessors.isMounted.get = function () {
      return !!this.node;
    };

    /**
     * @param {Element} node
     * @return {BrowserSpriteSymbol}
     */
    BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode(node) {
      return new BrowserSpriteSymbol({
        id: node.getAttribute('id'),
        viewBox: node.getAttribute('viewBox'),
        content: node.outerHTML
      });
    };

    BrowserSpriteSymbol.prototype.destroy = function destroy() {
      if (this.isMounted) {
        this.unmount();
      }
      SpriteSymbol$$1.prototype.destroy.call(this);
    };

    /**
     * @param {Element|string} target
     * @return {Element}
     */
    BrowserSpriteSymbol.prototype.mount = function mount(target) {
      if (this.isMounted) {
        return this.node;
      }

      var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
      var node = this.render();
      this.node = node;

      mountTarget.appendChild(node);

      return node;
    };

    /**
     * @return {Element}
     */
    BrowserSpriteSymbol.prototype.render = function render() {
      var content = this.stringify();
      return parse(wrapInSvgString(content)).childNodes[0];
    };

    BrowserSpriteSymbol.prototype.unmount = function unmount() {
      this.node.parentNode.removeChild(this.node);
    };

    Object.defineProperties(BrowserSpriteSymbol.prototype, prototypeAccessors);

    return BrowserSpriteSymbol;
  }(SpriteSymbol);

  var defaultConfig$1 = {
    /**
     * Should following options be automatically configured:
     * - `syncUrlsWithBaseTag`
     * - `locationChangeAngularEmitter`
     * - `moveGradientsOutsideSymbol`
     * @type {boolean}
     */
    autoConfigure: true,

    /**
     * Default mounting selector
     * @type {string}
     */
    mountTo: 'body',

    /**
     * Fix disappearing SVG elements when <base href> exists.
     * Executes when sprite mounted.
     * @see http://stackoverflow.com/a/18265336/796152
     * @see https://github.com/everdimension/angular-svg-base-fix
     * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
     * @type {boolean}
     */
    syncUrlsWithBaseTag: false,

    /**
     * Should sprite listen custom location change event
     * @type {boolean}
     */
    listenLocationChangeEvent: true,

    /**
     * Custom window event name which should be emitted to update sprite urls
     * @type {string}
     */
    locationChangeEvent: 'locationChange',

    /**
     * Emit location change event in Angular automatically
     * @type {boolean}
     */
    locationChangeAngularEmitter: false,

    /**
     * Selector to find symbols usages when updating sprite urls
     * @type {string}
     */
    usagesToUpdate: 'use[*|href]',

    /**
     * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
     * Executes when sprite is rendered, but not mounted.
     * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
     * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
     * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
     * @type {boolean}
     */
    moveGradientsOutsideSymbol: false
  };

  /**
   * @param {*} arrayLike
   * @return {Array}
   */
  var arrayFrom = function arrayFrom(arrayLike) {
    return Array.prototype.slice.call(arrayLike, 0);
  };

  var ua = navigator.userAgent;

  var browser = {
    isChrome: /chrome/i.test(ua),
    isFirefox: /firefox/i.test(ua),

    // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
    isIE: /msie/i.test(ua) || /trident/i.test(ua),
    isEdge: /edge/i.test(ua)
  };

  /**
   * @param {string} name
   * @param {*} data
   */
  var dispatchEvent = function dispatchEvent(name, data) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(name, false, false, data);
    window.dispatchEvent(event);
  };

  /**
   * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
   * This trick will trigger IE to read and use any existing SVG <style> tags.
   * @see https://github.com/iconic/SVGInjector/issues/23
   * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
   *
   * @param {Element} node DOM Element to search <style> tags in
   * @return {Array<HTMLStyleElement>}
   */
  var evalStylesIEWorkaround = function evalStylesIEWorkaround(node) {
    var updatedNodes = [];

    arrayFrom(node.querySelectorAll('style')).forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });

    return updatedNodes;
  };

  /**
   * @param {string} [url] If not provided - current URL will be used
   * @return {string}
   */
  var getUrlWithoutFragment = function getUrlWithoutFragment(url) {
    return (url || window.location.href).split('#')[0];
  };

  /* global angular */
  /**
   * @param {string} eventName
   */
  var locationChangeAngularEmitter = function locationChangeAngularEmitter(eventName) {
    angular.module('ng').run(['$rootScope', function ($rootScope) {
      $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
        dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
      });
    }]);
  };

  var defaultSelector = 'linearGradient, radialGradient, pattern';

  /**
   * @param {Element} svg
   * @param {string} [selector]
   * @return {Element}
   */
  var moveGradientsOutsideSymbol = function moveGradientsOutsideSymbol(svg, selector) {
    if (selector === void 0) selector = defaultSelector;

    arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
      arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
        symbol.parentNode.insertBefore(node, symbol);
      });
    });
    return svg;
  };

  /**
   * @param {NodeList} nodes
   * @param {Function} [matcher]
   * @return {Attr[]}
   */
  function selectAttributes(nodes, matcher) {
    var attrs = arrayFrom(nodes).reduce(function (acc, node) {
      if (!node.attributes) {
        return acc;
      }

      var arrayfied = arrayFrom(node.attributes);
      var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
      return acc.concat(matched);
    }, []);

    return attrs;
  }

  /**
   * @param {NodeList|Node} nodes
   * @param {boolean} [clone=true]
   * @return {string}
   */

  var xLinkNS = namespaces_1.xlink.uri;
  var xLinkAttrName = 'xlink:href';

  // eslint-disable-next-line no-useless-escape
  var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

  function encoder(url) {
    return url.replace(specialUrlCharsPattern, function (match) {
      return "%" + match[0].charCodeAt(0).toString(16).toUpperCase();
    });
  }

  /**
   * @param {NodeList} nodes
   * @param {string} startsWith
   * @param {string} replaceWith
   * @return {NodeList}
   */
  function updateReferences(nodes, startsWith, replaceWith) {
    arrayFrom(nodes).forEach(function (node) {
      var href = node.getAttribute(xLinkAttrName);
      if (href && href.indexOf(startsWith) === 0) {
        var newUrl = href.replace(startsWith, replaceWith);
        node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
      }
    });

    return nodes;
  }

  /**
   * List of SVG attributes to update url() target in them
   */
  var attList = ['clipPath', 'colorProfile', 'src', 'cursor', 'fill', 'filter', 'marker', 'markerStart', 'markerMid', 'markerEnd', 'mask', 'stroke', 'style'];

  var attSelector = attList.map(function (attr) {
    return "[" + attr + "]";
  }).join(',');

  /**
   * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
   * @param {Element} svg
   * @param {NodeList} references
   * @param {string|RegExp} startsWith
   * @param {string} replaceWith
   * @return {void}
   *
   * @example
   * const sprite = document.querySelector('svg.sprite');
   * const usages = document.querySelectorAll('use');
   * updateUrls(sprite, usages, '#', 'prefix#');
   */
  var updateUrls = function updateUrls(svg, references, startsWith, replaceWith) {
    var startsWithEncoded = encoder(startsWith);
    var replaceWithEncoded = encoder(replaceWith);

    var nodes = svg.querySelectorAll(attSelector);
    var attrs = selectAttributes(nodes, function (ref) {
      var localName = ref.localName;
      var value = ref.value;

      return attList.indexOf(localName) !== -1 && value.indexOf("url(" + startsWithEncoded) !== -1;
    });

    attrs.forEach(function (attr) {
      return attr.value = attr.value.replace(startsWithEncoded, replaceWithEncoded);
    });
    updateReferences(references, startsWithEncoded, replaceWithEncoded);
  };

  /**
   * Internal emitter events
   * @enum
   * @private
   */
  var Events = {
    MOUNT: 'mount',
    SYMBOL_MOUNT: 'symbol_mount'
  };

  var BrowserSprite = function (Sprite$$1) {
    function BrowserSprite(cfg) {
      var this$1 = this;
      if (cfg === void 0) cfg = {};

      Sprite$$1.call(this, deepmerge(defaultConfig$1, cfg));

      var emitter = mitt();
      this._emitter = emitter;
      this.node = null;

      var ref = this;
      var config = ref.config;

      if (config.autoConfigure) {
        this._autoConfigure(cfg);
      }

      if (config.syncUrlsWithBaseTag) {
        var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
        emitter.on(Events.MOUNT, function () {
          return this$1.updateUrls('#', baseUrl);
        });
      }

      var handleLocationChange = this._handleLocationChange.bind(this);
      this._handleLocationChange = handleLocationChange;

      // Provide way to update sprite urls externally via dispatching custom window event
      if (config.listenLocationChangeEvent) {
        window.addEventListener(config.locationChangeEvent, handleLocationChange);
      }

      // Emit location change event in Angular automatically
      if (config.locationChangeAngularEmitter) {
        locationChangeAngularEmitter(config.locationChangeEvent);
      }

      // After sprite mounted
      emitter.on(Events.MOUNT, function (spriteNode) {
        if (config.moveGradientsOutsideSymbol) {
          moveGradientsOutsideSymbol(spriteNode);
        }
      });

      // After symbol mounted into sprite
      emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
        if (config.moveGradientsOutsideSymbol) {
          moveGradientsOutsideSymbol(symbolNode.parentNode);
        }

        if (browser.isIE || browser.isEdge) {
          evalStylesIEWorkaround(symbolNode);
        }
      });
    }

    if (Sprite$$1) BrowserSprite.__proto__ = Sprite$$1;
    BrowserSprite.prototype = Object.create(Sprite$$1 && Sprite$$1.prototype);
    BrowserSprite.prototype.constructor = BrowserSprite;

    var prototypeAccessors = { isMounted: {} };

    /**
     * @return {boolean}
     */
    prototypeAccessors.isMounted.get = function () {
      return !!this.node;
    };

    /**
     * Automatically configure following options
     * - `syncUrlsWithBaseTag`
     * - `locationChangeAngularEmitter`
     * - `moveGradientsOutsideSymbol`
     * @param {Object} cfg
     * @private
     */
    BrowserSprite.prototype._autoConfigure = function _autoConfigure(cfg) {
      var ref = this;
      var config = ref.config;

      if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
        config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
      }

      if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
        config.locationChangeAngularEmitter = 'angular' in window;
      }

      if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
        config.moveGradientsOutsideSymbol = browser.isFirefox;
      }
    };

    /**
     * @param {Event} event
     * @param {Object} event.detail
     * @param {string} event.detail.oldUrl
     * @param {string} event.detail.newUrl
     * @private
     */
    BrowserSprite.prototype._handleLocationChange = function _handleLocationChange(event) {
      var ref = event.detail;
      var oldUrl = ref.oldUrl;
      var newUrl = ref.newUrl;
      this.updateUrls(oldUrl, newUrl);
    };

    /**
     * Add new symbol. If symbol with the same id exists it will be replaced.
     * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
     * @fires Events#SYMBOL_MOUNT
     * @param {BrowserSpriteSymbol} symbol
     * @return {boolean} `true` - symbol was added, `false` - replaced
     */
    BrowserSprite.prototype.add = function add(symbol) {
      var sprite = this;
      var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

      if (this.isMounted && isNewSymbol) {
        symbol.mount(sprite.node);
        this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
      }

      return isNewSymbol;
    };

    /**
     * Attach to existing DOM node
     * @param {string|Element} target
     * @return {Element|null} attached DOM Element. null if node to attach not found.
     */
    BrowserSprite.prototype.attach = function attach(target) {
      var this$1 = this;

      var sprite = this;

      if (sprite.isMounted) {
        return sprite.node;
      }

      /** @type Element */
      var node = typeof target === 'string' ? document.querySelector(target) : target;
      sprite.node = node;

      // Already added symbols needs to be mounted
      this.symbols.forEach(function (symbol) {
        symbol.mount(sprite.node);
        this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
      });

      // Create symbols from existing DOM nodes, add and mount them
      arrayFrom(node.querySelectorAll('symbol')).forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
        sprite.add(symbol);
      });

      this._emitter.emit(Events.MOUNT, node);

      return node;
    };

    BrowserSprite.prototype.destroy = function destroy() {
      var ref = this;
      var config = ref.config;
      var symbols = ref.symbols;
      var _emitter = ref._emitter;

      symbols.forEach(function (s) {
        return s.destroy();
      });

      _emitter.off('*');
      window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

      if (this.isMounted) {
        this.unmount();
      }
    };

    /**
     * @fires Events#MOUNT
     * @param {string|Element} [target]
     * @param {boolean} [prepend=false]
     * @return {Element|null} rendered sprite node. null if mount node not found.
     */
    BrowserSprite.prototype.mount = function mount(target, prepend) {
      if (target === void 0) target = this.config.mountTo;
      if (prepend === void 0) prepend = false;

      var sprite = this;

      if (sprite.isMounted) {
        return sprite.node;
      }

      var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
      var node = sprite.render();
      this.node = node;

      if (prepend && mountNode.childNodes[0]) {
        mountNode.insertBefore(node, mountNode.childNodes[0]);
      } else {
        mountNode.appendChild(node);
      }

      this._emitter.emit(Events.MOUNT, node);

      return node;
    };

    /**
     * @return {Element}
     */
    BrowserSprite.prototype.render = function render() {
      return parse(this.stringify());
    };

    /**
     * Detach sprite from the DOM
     */
    BrowserSprite.prototype.unmount = function unmount() {
      this.node.parentNode.removeChild(this.node);
    };

    /**
     * Update URLs in sprite and usage elements
     * @param {string} oldUrl
     * @param {string} newUrl
     * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
     */
    BrowserSprite.prototype.updateUrls = function updateUrls$1(oldUrl, newUrl) {
      if (!this.isMounted) {
        return false;
      }

      var usages = document.querySelectorAll(this.config.usagesToUpdate);

      updateUrls(this.node, usages, getUrlWithoutFragment(oldUrl) + "#", getUrlWithoutFragment(newUrl) + "#");

      return true;
    };

    Object.defineProperties(BrowserSprite.prototype, prototypeAccessors);

    return BrowserSprite;
  }(Sprite);

  var ready$1 = createCommonjsModule(function (module) {
    /*!
      * domready (c) Dustin Diaz 2014 - License MIT
      */
    !function (name, definition) {

      {
        module.exports = definition();
      }
    }('domready', function () {

      var fns = [],
          _listener,
          doc = document,
          hack = doc.documentElement.doScroll,
          domContentLoaded = 'DOMContentLoaded',
          loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);

      if (!loaded) {
        doc.addEventListener(domContentLoaded, _listener = function listener() {
          doc.removeEventListener(domContentLoaded, _listener);
          loaded = 1;
          while (_listener = fns.shift()) {
            _listener();
          }
        });
      }

      return function (fn) {
        loaded ? setTimeout(fn, 0) : fns.push(fn);
      };
    });
  });

  var spriteNodeId = '__SVG_SPRITE_NODE__';
  var spriteGlobalVarName = '__SVG_SPRITE__';
  var isSpriteExists = !!window[spriteGlobalVarName];

  // eslint-disable-next-line import/no-mutable-exports
  var sprite;

  if (isSpriteExists) {
    sprite = window[spriteGlobalVarName];
  } else {
    sprite = new BrowserSprite({ attrs: { id: spriteNodeId } });
    window[spriteGlobalVarName] = sprite;
  }

  var loadSprite = function loadSprite() {
    /**
     * Check for page already contains sprite node
     * If found - attach to and reuse it's content
     * If not - render and mount the new sprite
     */
    var existing = document.getElementById(spriteNodeId);

    if (existing) {
      sprite.attach(existing);
    } else {
      sprite.mount(document.body, true);
    }
  };

  if (document.body) {
    loadSprite();
  } else {
    ready$1(loadSprite);
  }

  var sprite$1 = sprite;

  return sprite$1;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGY1YzIxOGQ3MWU3NjIyMjhjY2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlbmRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovLy8uL3NyYy9sZXNzL3N0eWxlcy5sZXNzPzBmOTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi5ibG9ja3MgXFwuKGpzfGxlc3MpJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLmJsb2Nrcy9mb3JtL2Zvcm0ubGVzcz8wMjZjIiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL2hlYWRlci9oZWFkZXIubGVzcz9jOTY0Iiwid2VicGFjazovLy8uL3NyYy9jb21tb24uYmxvY2tzL3NlY3Rpb24vc2VjdGlvbi5sZXNzP2ZkOTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdmcvc3ZnLXNwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N2ZyBcXC5zdmckIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3ZnL21vbm9jb2xvci9sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanMiXSwibmFtZXMiOlsicmVxdWlyZUFsbCIsInIiLCJrZXlzIiwiZm9yRWFjaCIsInJlcXVpcmUiLCJnIiwiRnVuY3Rpb24iLCJldmFsIiwiZSIsIndpbmRvdyIsIm1vZHVsZSIsImV4cG9ydHMiLCJnbG9iYWwiLCJmYWN0b3J5IiwiZGVmaW5lIiwiQnJvd3NlclNwcml0ZVN5bWJvbCIsIlNwcml0ZVN5bWJvbCIsInJlZiIsImlkIiwidmlld0JveCIsImNvbnRlbnQiLCJwcm90b3R5cGUiLCJzdHJpbmdpZnkiLCJ0b1N0cmluZyIsImRlc3Ryb3kiLCJ0aGlzJDEiLCJwcm9wIiwicGFyc2UiLCJoYXNJbXBvcnROb2RlIiwiZG9jdW1lbnQiLCJpbXBvcnROb2RlIiwiZG9jIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiZG9jdW1lbnRFbGVtZW50IiwiY29tbW9uanNHbG9iYWwiLCJzZWxmIiwiY3JlYXRlQ29tbW9uanNNb2R1bGUiLCJmbiIsImRlZXBtZXJnZSIsInJvb3QiLCJ1bmRlZmluZWQiLCJpc01lcmdlYWJsZU9iamVjdCIsInZhbCIsIm5vbk51bGxPYmplY3QiLCJPYmplY3QiLCJjYWxsIiwiZW1wdHlUYXJnZXQiLCJBcnJheSIsImlzQXJyYXkiLCJjbG9uZUlmTmVjZXNzYXJ5IiwidmFsdWUiLCJvcHRpb25zQXJndW1lbnQiLCJjbG9uZSIsImRlZmF1bHRBcnJheU1lcmdlIiwidGFyZ2V0Iiwic291cmNlIiwiZGVzdGluYXRpb24iLCJzbGljZSIsImkiLCJpbmRleE9mIiwicHVzaCIsIm1lcmdlT2JqZWN0Iiwia2V5IiwiYXJyYXkiLCJvcHRpb25zIiwiYXJyYXlNZXJnZSIsImFsbCIsImRlZXBtZXJnZUFsbCIsImxlbmd0aCIsIkVycm9yIiwicmVkdWNlIiwicHJldiIsIm5leHQiLCJuYW1lc3BhY2VzXzEiLCJuYW1lc3BhY2VzIiwic3ZnIiwibmFtZSIsInVyaSIsInhsaW5rIiwiZGVmYXVsdCIsIm9iamVjdFRvQXR0cnNTdHJpbmciLCJhdHRycyIsIm1hcCIsImF0dHIiLCJyZXBsYWNlIiwiam9pbiIsImRlZmF1bHRBdHRycyIsIndyYXBJblN2Z1N0cmluZyIsImF0dHJpYnV0ZXMiLCJhdHRyc1JlbmRlcmVkIiwiU3ByaXRlU3ltYm9sJCQxIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfX3Byb3RvX18iLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZUFjY2Vzc29ycyIsImlzTW91bnRlZCIsImdldCIsIm5vZGUiLCJjcmVhdGVGcm9tRXhpc3RpbmdOb2RlIiwiZ2V0QXR0cmlidXRlIiwib3V0ZXJIVE1MIiwidW5tb3VudCIsIm1vdW50IiwibW91bnRUYXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwicmVuZGVyIiwiYXBwZW5kQ2hpbGQiLCJjaGlsZE5vZGVzIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZGVmaW5lUHJvcGVydGllcyIsIkJyb3dzZXJTcHJpdGUiLCJtaXR0Iiwib24iLCJ0eXBlIiwiaGFuZGxlciIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnQiLCJzdmckMSIsInhsaW5rJDEiLCJkZWZhdWx0Q29uZmlnIiwib2JqIiwic3R5bGUiLCJTcHJpdGUiLCJjb25maWciLCJzeW1ib2xzIiwiYWRkIiwic3ltYm9sIiwiZXhpc3RpbmciLCJmaW5kIiwicmVtb3ZlIiwiZmlsdGVyIiwicyIsImhhcyIsInN0cmluZ2lmaWVkU3ltYm9scyIsImRlZmF1bHRDb25maWckMSIsImF1dG9Db25maWd1cmUiLCJtb3VudFRvIiwic3luY1VybHNXaXRoQmFzZVRhZyIsImxpc3RlbkxvY2F0aW9uQ2hhbmdlRXZlbnQiLCJsb2NhdGlvbkNoYW5nZUV2ZW50IiwibG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlciIsInVzYWdlc1RvVXBkYXRlIiwibW92ZUdyYWRpZW50c091dHNpZGVTeW1ib2wiLCJhcnJheUZyb20iLCJhcnJheUxpa2UiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImJyb3dzZXIiLCJpc0Nocm9tZSIsInRlc3QiLCJpc0ZpcmVmb3giLCJpc0lFIiwiaXNFZGdlIiwiZGlzcGF0Y2hFdmVudCIsImRhdGEiLCJldmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEN1c3RvbUV2ZW50IiwiZXZhbFN0eWxlc0lFV29ya2Fyb3VuZCIsInVwZGF0ZWROb2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0ZXh0Q29udGVudCIsImdldFVybFdpdGhvdXRGcmFnbWVudCIsInVybCIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwiZXZlbnROYW1lIiwiYW5ndWxhciIsInJ1biIsIiRyb290U2NvcGUiLCIkb24iLCJuZXdVcmwiLCJvbGRVcmwiLCJkZWZhdWx0U2VsZWN0b3IiLCJzZWxlY3RvciIsImluc2VydEJlZm9yZSIsInNlbGVjdEF0dHJpYnV0ZXMiLCJub2RlcyIsIm1hdGNoZXIiLCJhY2MiLCJhcnJheWZpZWQiLCJtYXRjaGVkIiwiY29uY2F0IiwieExpbmtOUyIsInhMaW5rQXR0ck5hbWUiLCJzcGVjaWFsVXJsQ2hhcnNQYXR0ZXJuIiwiZW5jb2RlciIsIm1hdGNoIiwiY2hhckNvZGVBdCIsInRvVXBwZXJDYXNlIiwidXBkYXRlUmVmZXJlbmNlcyIsInN0YXJ0c1dpdGgiLCJyZXBsYWNlV2l0aCIsInNldEF0dHJpYnV0ZU5TIiwiYXR0TGlzdCIsImF0dFNlbGVjdG9yIiwidXBkYXRlVXJscyIsInJlZmVyZW5jZXMiLCJzdGFydHNXaXRoRW5jb2RlZCIsInJlcGxhY2VXaXRoRW5jb2RlZCIsImxvY2FsTmFtZSIsIkV2ZW50cyIsIk1PVU5UIiwiU1lNQk9MX01PVU5UIiwiU3ByaXRlJCQxIiwiY2ZnIiwiZW1pdHRlciIsIl9lbWl0dGVyIiwiX2F1dG9Db25maWd1cmUiLCJiYXNlVXJsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJoYW5kbGVMb2NhdGlvbkNoYW5nZSIsIl9oYW5kbGVMb2NhdGlvbkNoYW5nZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwic3ByaXRlTm9kZSIsInN5bWJvbE5vZGUiLCJkZXRhaWwiLCJzcHJpdGUiLCJpc05ld1N5bWJvbCIsImF0dGFjaCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwcmVwZW5kIiwibW91bnROb2RlIiwidXBkYXRlVXJscyQxIiwidXNhZ2VzIiwicmVhZHkkMSIsImRlZmluaXRpb24iLCJmbnMiLCJsaXN0ZW5lciIsImhhY2siLCJkb1Njcm9sbCIsImRvbUNvbnRlbnRMb2FkZWQiLCJsb2FkZWQiLCJyZWFkeVN0YXRlIiwic2hpZnQiLCJzZXRUaW1lb3V0Iiwic3ByaXRlTm9kZUlkIiwic3ByaXRlR2xvYmFsVmFyTmFtZSIsImlzU3ByaXRlRXhpc3RzIiwibG9hZFNwcml0ZSIsImdldEVsZW1lbnRCeUlkIiwiYm9keSIsInNwcml0ZSQxIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7Ozs7QUM3REEsU0FBU0EsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUI7QUFBRUEsSUFBRUMsSUFBRixHQUFTQyxPQUFULENBQWlCRixDQUFqQjtBQUFzQjs7QUFFL0NELFdBQVdJLHNCQUFYOztBQUVBLHlFOzs7Ozs7Ozs7OztBQ0pBLElBQUlDLENBQUo7O0FBRUE7QUFDQUEsSUFBSyxZQUFXO0FBQ2YsUUFBTyxJQUFQO0FBQ0EsQ0FGRyxFQUFKOztBQUlBLElBQUk7QUFDSDtBQUNBQSxLQUFJQSxLQUFLQyxTQUFTLGFBQVQsR0FBTCxJQUFrQyxDQUFDLEdBQUVDLElBQUgsRUFBUyxNQUFULENBQXRDO0FBQ0EsQ0FIRCxDQUdFLE9BQU1DLENBQU4sRUFBUztBQUNWO0FBQ0EsS0FBRyxRQUFPQyxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQXJCLEVBQ0NK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QUFKLENBQVN2QixFQUFULENBQTdCO0FBQ0QsT0FGRDtBQUlELEtBeEJBLENBQUQ7QUF5QkMsR0E3QmEsQ0FBZDs7QUErQkEsTUFBSStNLGVBQWUscUJBQW5CO0FBQ0EsTUFBSUMsc0JBQXNCLGdCQUExQjtBQUNBLE1BQUlDLGlCQUFpQixDQUFDLENBQUM5TyxPQUFPNk8sbUJBQVAsQ0FBdkI7O0FBRUE7QUFDQSxNQUFJcEIsTUFBSjs7QUFFQSxNQUFJcUIsY0FBSixFQUFvQjtBQUNsQnJCLGFBQVN6TixPQUFPNk8sbUJBQVAsQ0FBVDtBQUNELEdBRkQsTUFFTztBQUNMcEIsYUFBUyxJQUFJaEgsYUFBSixDQUFrQixFQUFFaEMsT0FBTyxFQUFFaEUsSUFBSW1PLFlBQU4sRUFBVCxFQUFsQixDQUFUO0FBQ0E1TyxXQUFPNk8sbUJBQVAsSUFBOEJwQixNQUE5QjtBQUNEOztBQUVELE1BQUlzQixhQUFhLFNBQWJBLFVBQWEsR0FBWTtBQUMzQjs7Ozs7QUFLQSxRQUFJbkgsV0FBV3hHLFNBQVM0TixjQUFULENBQXdCSixZQUF4QixDQUFmOztBQUVBLFFBQUloSCxRQUFKLEVBQWM7QUFDWjZGLGFBQU9FLE1BQVAsQ0FBYy9GLFFBQWQ7QUFDRCxLQUZELE1BRU87QUFDTDZGLGFBQU96SCxLQUFQLENBQWE1RSxTQUFTNk4sSUFBdEIsRUFBNEIsSUFBNUI7QUFDRDtBQUNGLEdBYkQ7O0FBZUEsTUFBSTdOLFNBQVM2TixJQUFiLEVBQW1CO0FBQ2pCRjtBQUNELEdBRkQsTUFFTztBQUNMZCxZQUFRYyxVQUFSO0FBQ0Q7O0FBRUQsTUFBSUcsV0FBV3pCLE1BQWY7O0FBRUEsU0FBT3lCLFFBQVA7QUFFQyxDQXorQkEsQ0FBRCxDIiwiZmlsZSI6ImpzL2NvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkZjVjMjE4ZDcxZTc2MjIyOGNjYyIsImZ1bmN0aW9uIHJlcXVpcmVBbGwocikgeyByLmtleXMoKS5mb3JFYWNoKHIpOyB9XG5cbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCcuLycsIHRydWUsIC9cXC4oanN8bGVzcykkLykpO1xuXG4vLyByZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnLi8nLCB0cnVlLCAvXFwuKGpzfGxlc3N8cG5nfGpwZT9nfGdpZikkLykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi5ibG9ja3MvaW5kZXguanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwiaW1wb3J0ICdAL3ZlbmRvcic7XG5pbXBvcnQgJ0AvbGVzcy9zdHlsZXMubGVzcyc7XG4vLyBpbXBvcnQgJ0AvdnVlL2luZGV4JztcbmltcG9ydCAnQC9jb21tb24uYmxvY2tzL2luZGV4JztcbmltcG9ydCAnQC9hc3NldHMvc3ZnL3N2Zy1zcHJpdGUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIHJlcXVpcmUoXCJleHBvc2UtbG9hZGVyPyQhZXhwb3NlLWxvYWRlcj9qUXVlcnkhanF1ZXJ5XCIpO1xuXG4vLyBmbGV4c2xpZGVyXG4vLyByZXF1aXJlKFwiLi9mbGV4c2xpZGVyMi9mbGV4c2xpZGVyLmNzc1wiKVxuLy8gcmVxdWlyZShcImV4cG9zZS1sb2FkZXI/ZmxleHNsaWRlciEuL2ZsZXhzbGlkZXIyXCIpO1xuXG4vLyBwYXJhbGxheFxuLy8gcmVxdWlyZShcImV4cG9zZS1sb2FkZXI/cGFyYWxsYXghanF1ZXJ5LXBhcmFsbGF4LmpzXCIpO1xuXG4vLyBwbGF4INC/0LDRgNCw0LvQu9Cw0LrRgSDRjdGE0YTQtdC60YJcbi8vIHJlcXVpcmUoXCJwbGF4XCIpO1xuXG4vLyB3b3cuanNcbi8vIHJlcXVpcmUoXCJleHBvc2UtbG9hZGVyP1dPVyF3b3cuanNcIik7XG5cbi8vIGFuaW1hdGUuY3NzXG4vLyByZXF1aXJlKFwiYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3NcIik7XG5cbi8vIGJsdWVpbXAgZ2FsbGVyeSBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9HYWxsZXJ5XG4vLyByZXF1aXJlKFwiYmx1ZWltcC1nYWxsZXJ5L2Nzcy9ibHVlaW1wLWdhbGxlcnkubWluLmNzc1wiKTtcbi8vIHJlcXVpcmUoXCJleHBvc2UtbG9hZGVyP2JsdWVpbXAuR2FsbGVyeSFibHVlaW1wLWdhbGxlcnkvanMvYmx1ZWltcC1nYWxsZXJ5Lm1pbi5qc1wiKTtcblxuXG4vLyBzbGljay1jYXJvdXNlbFxuLy8gcmVxdWlyZShcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiKTtcbi8vIHJlcXVpcmUoXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIik7XG4vLyByZXF1aXJlKFwiZXhwb3NlLWxvYWRlcj9zbGljayFzbGljay1jYXJvdXNlbFwiKTtcblxuLy8gc3dpcGVyIHNsaWRlclxuLy8gcmVxdWlyZShcInN3aXBlci9kaXN0L2Nzcy9zd2lwZXIuY3NzXCIpO1xuLy8gcmVxdWlyZShcImV4cG9zZS1sb2FkZXI/U3dpcGVyIXN3aXBlci9kaXN0L2pzL3N3aXBlci5qc1wiKTtcblxuLy8gdnVlLmpzXG4vLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG4vLyB3aW5kb3cuVnVlID0gVnVlO1xuXG5cbi8vIG1hZ25pZmljLXBvcHVwXG4vLyByZXF1aXJlKFwibWFnbmlmaWMtcG9wdXAvZGlzdC9tYWduaWZpYy1wb3B1cC5jc3NcIik7XG4vLyByZXF1aXJlKFwiZXhwb3NlLWxvYWRlcj9tYWduaWZpY1BvcHVwIW1hZ25pZmljLXBvcHVwL2Rpc3QvanF1ZXJ5Lm1hZ25pZmljLXBvcHVwLmpzXCIpO1xuXG4vLyBqcXVlcnkgdWkgc2xpZGVyXG4vLyByZXF1aXJlKCdqcXVlcnktdWktY3NzL3NsaWRlci5jc3MnKTtcbi8vIHJlcXVpcmUoXCJleHBvc2UtbG9hZGVyP3NsaWRlciFqcXVlcnktdWkvc2xpZGVyXCIpO1xuXG4vLyBqcXVlcnkgdWkgdGFic1xuLy8gcmVxdWlyZSgnanF1ZXJ5LXVpLWNzcy90YWJzLmNzcycpO1xuLy8gcmVxdWlyZShcImV4cG9zZS1sb2FkZXI/c2xpZGVyIWpxdWVyeS11aS90YWJzXCIpO1xuXG4vLyB0b3VjaCBzdXBwb3J0IGZvciBqcXVlcnkgdWlcbi8vIHJlcXVpcmUoXCJqcXVlcnktdWktdG91Y2gtcHVuY2hcIik7XG5cbi8vIGhpZ2hzbGlkZVxuLy8gcmVxdWlyZShcImV4cG9zZS1sb2FkZXI/aHMhLi9oaWdoc2xpZGUvaGlnaHNsaWRlL2hpZ2hzbGlkZS13aXRoLWdhbGxlcnkuanNcIik7XG4vLyAvLyBsZXQgaHMgPSByZXF1aXJlKFwiLi9oaWdoc2xpZGUvaGlnaHNsaWRlL2hpZ2hzbGlkZS13aXRoLWdhbGxlcnkuanNcIik7XG4vLyAvLyB3aW5kb3cuaHMgPSBocztcbi8vIHJlcXVpcmUoXCIuL2hpZ2hzbGlkZS9oaWdoc2xpZGUvaGlnaHNsaWRlLmNzc1wiKTtcblxuLy8gbGlnaHRib3hcbi8vIHJlcXVpcmUoXCJsaWdodGJveDJcIik7XG4vLyByZXF1aXJlKFwibGlnaHRib3gyL2Rpc3QvY3NzL2xpZ2h0Ym94LmNzc1wiKTtcblxuLy8gbm9ybWFsaXplLmNzc1xucmVxdWlyZSgnbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmVuZG9yL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9sZXNzL3N0eWxlcy5sZXNzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXAgPSB7XG5cdFwiLi9mb3JtL2Zvcm0ubGVzc1wiOiA4LFxuXHRcIi4vaGVhZGVyL2hlYWRlci5sZXNzXCI6IDksXG5cdFwiLi9pbmRleC5qc1wiOiAwLFxuXHRcIi4vc2VjdGlvbi9zZWN0aW9uLmxlc3NcIjogMTBcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA3O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbW1vbi5ibG9ja3MgXFwuKGpzfGxlc3MpJFxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbW1vbi5ibG9ja3MvZm9ybS9mb3JtLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21tb24uYmxvY2tzL2hlYWRlci9oZWFkZXIubGVzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbW1vbi5ibG9ja3Mvc2VjdGlvbi9zZWN0aW9uLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHJlcXVpcmVBbGwocikgeyByLmtleXMoKS5mb3JFYWNoKHIpOyB9XG5cbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCcuLycsIHRydWUsIC9cXC5zdmckLykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zdmcvc3ZnLXNwcml0ZS5qcyIsInZhciBtYXAgPSB7XG5cdFwiLi9tb25vY29sb3IvbG9nby5zdmdcIjogMTNcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAxMjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3ZnIFxcLnN2ZyRcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcInN2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCJzdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJsb2dvXCIsXG4gIFwidXNlXCI6IFwibG9nby11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMzIgMzJcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMzIgMzJcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgaWQ9XFxcImxvZ29cXFwiPjxwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMyAwYTMgMyAwIDAgMC0zIDN2MTUuMzMzYTMgMyAwIDAgMCAzIDNoMi4zMzN2LTEzYTMgMyAwIDAgMSAzLTNoMTNWM2EzIDMgMCAwIDAtMy0zSDN6bTcuNjY3IDI5di0yLjMzM2gxM2EzIDMgMCAwIDAgMy0zdi0xM0gyOWEzIDMgMCAwIDEgMyAzVjI5YTMgMyAwIDAgMS0zIDNIMTMuNjY3YTMgMyAwIDAgMS0zLTN6bTEwLjY2Ni0xMC42Njd2LTcuNjY2aC03LjY2NmEzIDMgMCAwIDAtMyAzdjcuNjY2aDcuNjY2YTMgMyAwIDAgMCAzLTN6XFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2xcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvc3ZnL21vbm9jb2xvci9sb2dvLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLkJyb3dzZXJTcHJpdGVTeW1ib2wgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBTcHJpdGVTeW1ib2wgPSBmdW5jdGlvbiBTcHJpdGVTeW1ib2wocmVmKSB7XG4gIHZhciBpZCA9IHJlZi5pZDtcbiAgdmFyIHZpZXdCb3ggPSByZWYudmlld0JveDtcbiAgdmFyIGNvbnRlbnQgPSByZWYuY29udGVudDtcblxuICB0aGlzLmlkID0gaWQ7XG4gIHRoaXMudmlld0JveCA9IHZpZXdCb3g7XG4gIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkgKCkge1xuICByZXR1cm4gdGhpcy5jb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xufTtcblxuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgWydpZCcsICd2aWV3Qm94JywgJ2NvbnRlbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiBkZWxldGUgdGhpcyQxW3Byb3BdOyB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbnZhciBwYXJzZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHZhciBoYXNJbXBvcnROb2RlID0gISFkb2N1bWVudC5pbXBvcnROb2RlO1xuICB2YXIgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhjb250ZW50LCAnaW1hZ2Uvc3ZnK3htbCcpLmRvY3VtZW50RWxlbWVudDtcblxuICAvKipcbiAgICogRml4IGZvciBicm93c2VyIHdoaWNoIGFyZSB0aHJvd2luZyBXcm9uZ0RvY3VtZW50RXJyb3JcbiAgICogaWYgeW91IGluc2VydCBhbiBlbGVtZW50IHdoaWNoIGlzIG5vdCBwYXJ0IG9mIHRoZSBkb2N1bWVudFxuICAgKiBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc5ODY1MTkvNDYyNDQwM1xuICAgKi9cbiAgaWYgKGhhc0ltcG9ydE5vZGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuaW1wb3J0Tm9kZShkb2MsIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIGRvYztcbn07XG5cbnZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG5cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBkZWVwbWVyZ2UgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIHVuZGVmaW5lZCA9PT0gJ2Z1bmN0aW9uJyAmJiB1bmRlZmluZWQuYW1kKSB7XG4gICAgICAgIHVuZGVmaW5lZChmYWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9XG59KGNvbW1vbmpzR2xvYmFsLCBmdW5jdGlvbiAoKSB7XG5cbmZ1bmN0aW9uIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbCkge1xuICAgIHZhciBub25OdWxsT2JqZWN0ID0gdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xuXG4gICAgcmV0dXJuIG5vbk51bGxPYmplY3RcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IFJlZ0V4cF0nXG4gICAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBEYXRlXSdcbn1cblxuZnVuY3Rpb24gZW1wdHlUYXJnZXQodmFsKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVJZk5lY2Vzc2FyeSh2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgdmFyIGNsb25lID0gb3B0aW9uc0FyZ3VtZW50ICYmIG9wdGlvbnNBcmd1bWVudC5jbG9uZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gKGNsb25lICYmIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSkgPyBkZWVwbWVyZ2UoZW1wdHlUYXJnZXQodmFsdWUpLCB2YWx1ZSwgb3B0aW9uc0FyZ3VtZW50KSA6IHZhbHVlXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB0YXJnZXQuc2xpY2UoKTtcbiAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbihlLCBpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVzdGluYXRpb25baV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChpc01lcmdlYWJsZU9iamVjdChlKSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2ldLCBlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5pbmRleE9mKGUpID09PSAtMSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb24ucHVzaChjbG9uZUlmTmVjZXNzYXJ5KGUsIG9wdGlvbnNBcmd1bWVudCkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB7fTtcbiAgICBpZiAoaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICBPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3NhcnkodGFyZ2V0W2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIWlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSB8fCAhdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZVtrZXldLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGRlZXBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgYXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRpb25zQXJndW1lbnQgfHwgeyBhcnJheU1lcmdlOiBkZWZhdWx0QXJyYXlNZXJnZSB9O1xuICAgIHZhciBhcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuXG4gICAgaWYgKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRhcmdldCkgPyBhcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zQXJndW1lbnQpIDogY2xvbmVJZk5lY2Vzc2FyeShzb3VyY2UsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9XG59XG5cbmRlZXBtZXJnZS5hbGwgPSBmdW5jdGlvbiBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkgfHwgYXJyYXkubGVuZ3RoIDwgMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheSB3aXRoIGF0IGxlYXN0IHR3byBlbGVtZW50cycpXG4gICAgfVxuXG4gICAgLy8gd2UgYXJlIHN1cmUgdGhlcmUgYXJlIGF0IGxlYXN0IDIgdmFsdWVzLCBzbyBpdCBpcyBzYWZlIHRvIGhhdmUgbm8gaW5pdGlhbCB2YWx1ZVxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgbmV4dCkge1xuICAgICAgICByZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnNBcmd1bWVudClcbiAgICB9KVxufTtcblxucmV0dXJuIGRlZXBtZXJnZVxuXG59KSk7XG59KTtcblxudmFyIG5hbWVzcGFjZXNfMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbnZhciBuYW1lc3BhY2VzID0ge1xuICBzdmc6IHtcbiAgICBuYW1lOiAneG1sbnMnLFxuICAgIHVyaTogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICB9LFxuICB4bGluazoge1xuICAgIG5hbWU6ICd4bWxuczp4bGluaycsXG4gICAgdXJpOiAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaydcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbmFtZXNwYWNlcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufSk7XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBvYmplY3RUb0F0dHJzU3RyaW5nID0gZnVuY3Rpb24gKGF0dHJzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhhdHRycykubWFwKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgdmFyIHZhbHVlID0gYXR0cnNbYXR0cl0udG9TdHJpbmcoKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG4gICAgcmV0dXJuIChhdHRyICsgXCI9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIik7XG4gIH0pLmpvaW4oJyAnKTtcbn07XG5cbnZhciBzdmcgPSBuYW1lc3BhY2VzXzEuc3ZnO1xudmFyIHhsaW5rID0gbmFtZXNwYWNlc18xLnhsaW5rO1xuXG52YXIgZGVmYXVsdEF0dHJzID0ge307XG5kZWZhdWx0QXR0cnNbc3ZnLm5hbWVdID0gc3ZnLnVyaTtcbmRlZmF1bHRBdHRyc1t4bGluay5uYW1lXSA9IHhsaW5rLnVyaTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbnRlbnRdXG4gKiBAcGFyYW0ge09iamVjdH0gW2F0dHJpYnV0ZXNdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciB3cmFwSW5TdmdTdHJpbmcgPSBmdW5jdGlvbiAoY29udGVudCwgYXR0cmlidXRlcykge1xuICBpZiAoIGNvbnRlbnQgPT09IHZvaWQgMCApIGNvbnRlbnQgPSAnJztcblxuICB2YXIgYXR0cnMgPSBkZWVwbWVyZ2UoZGVmYXVsdEF0dHJzLCBhdHRyaWJ1dGVzIHx8IHt9KTtcbiAgdmFyIGF0dHJzUmVuZGVyZWQgPSBvYmplY3RUb0F0dHJzU3RyaW5nKGF0dHJzKTtcbiAgcmV0dXJuIChcIjxzdmcgXCIgKyBhdHRyc1JlbmRlcmVkICsgXCI+XCIgKyBjb250ZW50ICsgXCI8L3N2Zz5cIik7XG59O1xuXG52YXIgQnJvd3NlclNwcml0ZVN5bWJvbCA9IChmdW5jdGlvbiAoU3ByaXRlU3ltYm9sJCQxKSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJTcHJpdGVTeW1ib2wgKCkge1xuICAgIFNwcml0ZVN5bWJvbCQkMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgaWYgKCBTcHJpdGVTeW1ib2wkJDEgKSBCcm93c2VyU3ByaXRlU3ltYm9sLl9fcHJvdG9fXyA9IFNwcml0ZVN5bWJvbCQkMTtcbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGVTeW1ib2wkJDEgJiYgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gICAqIEByZXR1cm4ge0Jyb3dzZXJTcHJpdGVTeW1ib2x9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLmNyZWF0ZUZyb21FeGlzdGluZ05vZGUgPSBmdW5jdGlvbiBjcmVhdGVGcm9tRXhpc3RpbmdOb2RlIChub2RlKSB7XG4gICAgcmV0dXJuIG5ldyBCcm93c2VyU3ByaXRlU3ltYm9sKHtcbiAgICAgIGlkOiBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSxcbiAgICAgIHZpZXdCb3g6IG5vZGUuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JyksXG4gICAgICBjb250ZW50OiBub2RlLm91dGVySFRNTFxuICAgIH0pO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMudW5tb3VudCgpO1xuICAgIH1cbiAgICBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50VGFyZ2V0ID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG5cbiAgICBtb3VudFRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuc3RyaW5naWZ5KCk7XG4gICAgcmV0dXJuIHBhcnNlKHdyYXBJblN2Z1N0cmluZyhjb250ZW50KSkuY2hpbGROb2Rlc1swXTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCAoKSB7XG4gICAgdGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlU3ltYm9sO1xufShTcHJpdGVTeW1ib2wpKTtcblxucmV0dXJuIEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbn0pKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanMiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuQnJvd3NlclNwcml0ZSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGRlZXBtZXJnZSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgdW5kZWZpbmVkID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZC5hbWQpIHtcbiAgICAgICAgdW5kZWZpbmVkKGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH1cbn0oY29tbW9uanNHbG9iYWwsIGZ1bmN0aW9uICgpIHtcblxuZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsKSB7XG4gICAgdmFyIG5vbk51bGxPYmplY3QgPSB2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gbm9uTnVsbE9iamVjdFxuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgUmVnRXhwXSdcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IERhdGVdJ1xufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZUlmTmVjZXNzYXJ5KHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgY2xvbmUgPSBvcHRpb25zQXJndW1lbnQgJiYgb3B0aW9uc0FyZ3VtZW50LmNsb25lID09PSB0cnVlO1xuICAgIHJldHVybiAoY2xvbmUgJiYgaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKSA/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHRhcmdldC5zbGljZSgpO1xuICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KGUpKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGRlZXBtZXJnZSh0YXJnZXRbaV0sIGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmluZGV4T2YoZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5wdXNoKGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuICAgIGlmIChpc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeSh0YXJnZXRba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdGlvbnNBcmd1bWVudCB8fCB7IGFycmF5TWVyZ2U6IGRlZmF1bHRBcnJheU1lcmdlIH07XG4gICAgdmFyIGFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG5cbiAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KSA/IGFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkgOiBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSB8fCBhcnJheS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5IHdpdGggYXQgbGVhc3QgdHdvIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICAvLyB3ZSBhcmUgc3VyZSB0aGVyZSBhcmUgYXQgbGVhc3QgMiB2YWx1ZXMsIHNvIGl0IGlzIHNhZmUgdG8gaGF2ZSBubyBpbml0aWFsIHZhbHVlXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG4gICAgICAgIHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0pXG59O1xuXG5yZXR1cm4gZGVlcG1lcmdlXG5cbn0pKTtcbn0pO1xuXG4vLyAgICAgIFxuLy8gQW4gZXZlbnQgaGFuZGxlciBjYW4gdGFrZSBhbiBvcHRpb25hbCBldmVudCBhcmd1bWVudFxuLy8gYW5kIHNob3VsZCBub3QgcmV0dXJuIGEgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gQW4gYXJyYXkgb2YgYWxsIGN1cnJlbnRseSByZWdpc3RlcmVkIGV2ZW50IGhhbmRsZXJzIGZvciBhIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBIG1hcCBvZiBldmVudCB0eXBlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgXG5cbi8qKiBNaXR0OiBUaW55ICh+MjAwYikgZnVuY3Rpb25hbCBldmVudCBlbWl0dGVyIC8gcHVic3ViLlxuICogIEBuYW1lIG1pdHRcbiAqICBAcmV0dXJucyB7TWl0dH1cbiAqL1xuZnVuY3Rpb24gbWl0dChhbGwgICAgICAgICAgICAgICAgICkge1xuXHRhbGwgPSBhbGwgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRyZXR1cm4ge1xuXHRcdC8qKlxuXHRcdCAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIGxpc3RlbiBmb3IsIG9yIGBcIipcImAgZm9yIGFsbCBldmVudHNcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBGdW5jdGlvbiB0byBjYWxsIGluIHJlc3BvbnNlIHRvIGdpdmVuIGV2ZW50XG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvbjogZnVuY3Rpb24gb24odHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIHVucmVnaXN0ZXIgYGhhbmRsZXJgIGZyb20sIG9yIGBcIipcImBcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBIYW5kbGVyIGZ1bmN0aW9uIHRvIHJlbW92ZVxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b2ZmOiBmdW5jdGlvbiBvZmYodHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdGlmIChhbGxbdHlwZV0pIHtcblx0XHRcdFx0YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEludm9rZSBhbGwgaGFuZGxlcnMgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqIElmIHByZXNlbnQsIGBcIipcImAgaGFuZGxlcnMgYXJlIGludm9rZWQgYWZ0ZXIgdHlwZS1tYXRjaGVkIGhhbmRsZXJzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgIFRoZSBldmVudCB0eXBlIHRvIGludm9rZVxuXHRcdCAqIEBwYXJhbSB7QW55fSBbZXZ0XSAgQW55IHZhbHVlIChvYmplY3QgaXMgcmVjb21tZW5kZWQgYW5kIHBvd2VyZnVsKSwgcGFzc2VkIHRvIGVhY2ggaGFuZGxlclxuXHRcdCAqIEBtZW1iZXJvZiBtaXR0XG5cdFx0ICovXG5cdFx0ZW1pdDogZnVuY3Rpb24gZW1pdCh0eXBlICAgICAgICAsIGV2dCAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcihldnQpOyB9KTtcblx0XHRcdChhbGxbJyonXSB8fCBbXSkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIodHlwZSwgZXZ0KTsgfSk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgbmFtZXNwYWNlc18xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xudmFyIG5hbWVzcGFjZXMgPSB7XG4gIHN2Zzoge1xuICAgIG5hbWU6ICd4bWxucycsXG4gICAgdXJpOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gIH0sXG4gIHhsaW5rOiB7XG4gICAgbmFtZTogJ3htbG5zOnhsaW5rJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJ1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuYW1lc3BhY2VzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59KTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIG9iamVjdFRvQXR0cnNTdHJpbmcgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJzKS5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICB2YXIgdmFsdWUgPSBhdHRyc1thdHRyXS50b1N0cmluZygpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICByZXR1cm4gKGF0dHIgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKTtcbiAgfSkuam9pbignICcpO1xufTtcblxudmFyIHN2ZyA9IG5hbWVzcGFjZXNfMS5zdmc7XG52YXIgeGxpbmsgPSBuYW1lc3BhY2VzXzEueGxpbms7XG5cbnZhciBkZWZhdWx0QXR0cnMgPSB7fTtcbmRlZmF1bHRBdHRyc1tzdmcubmFtZV0gPSBzdmcudXJpO1xuZGVmYXVsdEF0dHJzW3hsaW5rLm5hbWVdID0geGxpbmsudXJpO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29udGVudF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIHdyYXBJblN2Z1N0cmluZyA9IGZ1bmN0aW9uIChjb250ZW50LCBhdHRyaWJ1dGVzKSB7XG4gIGlmICggY29udGVudCA9PT0gdm9pZCAwICkgY29udGVudCA9ICcnO1xuXG4gIHZhciBhdHRycyA9IGRlZXBtZXJnZShkZWZhdWx0QXR0cnMsIGF0dHJpYnV0ZXMgfHwge30pO1xuICB2YXIgYXR0cnNSZW5kZXJlZCA9IG9iamVjdFRvQXR0cnNTdHJpbmcoYXR0cnMpO1xuICByZXR1cm4gKFwiPHN2ZyBcIiArIGF0dHJzUmVuZGVyZWQgKyBcIj5cIiArIGNvbnRlbnQgKyBcIjwvc3ZnPlwiKTtcbn07XG5cbnZhciBzdmckMSA9IG5hbWVzcGFjZXNfMS5zdmc7XG52YXIgeGxpbmskMSA9IG5hbWVzcGFjZXNfMS54bGluaztcblxudmFyIGRlZmF1bHRDb25maWcgPSB7XG4gIGF0dHJzOiAoIG9iaiA9IHtcbiAgICBzdHlsZTogWydwb3NpdGlvbjogYWJzb2x1dGUnLCAnd2lkdGg6IDAnLCAnaGVpZ2h0OiAwJ10uam9pbignOyAnKVxuICB9LCBvYmpbc3ZnJDEubmFtZV0gPSBzdmckMS51cmksIG9ialt4bGluayQxLm5hbWVdID0geGxpbmskMS51cmksIG9iaiApXG59O1xudmFyIG9iajtcblxudmFyIFNwcml0ZSA9IGZ1bmN0aW9uIFNwcml0ZShjb25maWcpIHtcbiAgdGhpcy5jb25maWcgPSBkZWVwbWVyZ2UoZGVmYXVsdENvbmZpZywgY29uZmlnIHx8IHt9KTtcbiAgdGhpcy5zeW1ib2xzID0gW107XG59O1xuXG4vKipcbiAqIEFkZCBuZXcgc3ltYm9sLiBJZiBzeW1ib2wgd2l0aCB0aGUgc2FtZSBpZCBleGlzdHMgaXQgd2lsbCBiZSByZXBsYWNlZC5cbiAqIEBwYXJhbSB7U3ByaXRlU3ltYm9sfSBzeW1ib2xcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgYWRkZWQsIGBmYWxzZWAgLSByZXBsYWNlZFxuICovXG5TcHJpdGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAoc3ltYm9sKSB7XG4gIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBzeW1ib2xzID0gcmVmLnN5bWJvbHM7XG4gIHZhciBleGlzdGluZyA9IHRoaXMuZmluZChzeW1ib2wuaWQpO1xuXG4gIGlmIChleGlzdGluZykge1xuICAgIHN5bWJvbHNbc3ltYm9scy5pbmRleE9mKGV4aXN0aW5nKV0gPSBzeW1ib2w7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3ltYm9scy5wdXNoKHN5bWJvbCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3ltYm9sICYgZGVzdHJveSBpdFxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBzeW1ib2wgd2FzIGZvdW5kICYgc3VjY2Vzc2Z1bGx5IGRlc3Ryb3llZCwgYGZhbHNlYCAtIG90aGVyd2lzZVxuICovXG5TcHJpdGUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAoaWQpIHtcbiAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHN5bWJvbHMgPSByZWYuc3ltYm9scztcbiAgdmFyIHN5bWJvbCA9IHRoaXMuZmluZChpZCk7XG5cbiAgaWYgKHN5bWJvbCkge1xuICAgIHN5bWJvbHMuc3BsaWNlKHN5bWJvbHMuaW5kZXhPZihzeW1ib2wpLCAxKTtcbiAgICBzeW1ib2wuZGVzdHJveSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge1Nwcml0ZVN5bWJvbHxudWxsfVxuICovXG5TcHJpdGUucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiBmaW5kIChpZCkge1xuICByZXR1cm4gdGhpcy5zeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAocykgeyByZXR1cm4gcy5pZCA9PT0gaWQ7IH0pWzBdIHx8IG51bGw7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGlkKSB7XG4gIHJldHVybiB0aGlzLmZpbmQoaWQpICE9PSBudWxsO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5ICgpIHtcbiAgdmFyIHJlZiA9IHRoaXMuY29uZmlnO1xuICAgIHZhciBhdHRycyA9IHJlZi5hdHRycztcbiAgdmFyIHN0cmluZ2lmaWVkU3ltYm9scyA9IHRoaXMuc3ltYm9scy5tYXAoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuc3RyaW5naWZ5KCk7IH0pLmpvaW4oJycpO1xuICByZXR1cm4gd3JhcEluU3ZnU3RyaW5nKHN0cmluZ2lmaWVkU3ltYm9scywgYXR0cnMpO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xufTtcblxuU3ByaXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHRoaXMuc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmRlc3Ryb3koKTsgfSk7XG59O1xuXG52YXIgU3ByaXRlU3ltYm9sID0gZnVuY3Rpb24gU3ByaXRlU3ltYm9sKHJlZikge1xuICB2YXIgaWQgPSByZWYuaWQ7XG4gIHZhciB2aWV3Qm94ID0gcmVmLnZpZXdCb3g7XG4gIHZhciBjb250ZW50ID0gcmVmLmNvbnRlbnQ7XG5cbiAgdGhpcy5pZCA9IGlkO1xuICB0aGlzLnZpZXdCb3ggPSB2aWV3Qm94O1xuICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5ICgpIHtcbiAgcmV0dXJuIHRoaXMuY29udGVudDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGVTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKTtcbn07XG5cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIFsnaWQnLCAndmlld0JveCcsICdjb250ZW50J10uZm9yRWFjaChmdW5jdGlvbiAocHJvcCkgeyByZXR1cm4gZGVsZXRlIHRoaXMkMVtwcm9wXTsgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG52YXIgcGFyc2UgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICB2YXIgaGFzSW1wb3J0Tm9kZSA9ICEhZG9jdW1lbnQuaW1wb3J0Tm9kZTtcbiAgdmFyIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoY29udGVudCwgJ2ltYWdlL3N2Zyt4bWwnKS5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEZpeCBmb3IgYnJvd3NlciB3aGljaCBhcmUgdGhyb3dpbmcgV3JvbmdEb2N1bWVudEVycm9yXG4gICAqIGlmIHlvdSBpbnNlcnQgYW4gZWxlbWVudCB3aGljaCBpcyBub3QgcGFydCBvZiB0aGUgZG9jdW1lbnRcbiAgICogQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83OTg2NTE5LzQ2MjQ0MDNcbiAgICovXG4gIGlmIChoYXNJbXBvcnROb2RlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmltcG9ydE5vZGUoZG9jLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBkb2M7XG59O1xuXG52YXIgQnJvd3NlclNwcml0ZVN5bWJvbCA9IChmdW5jdGlvbiAoU3ByaXRlU3ltYm9sJCQxKSB7XG4gIGZ1bmN0aW9uIEJyb3dzZXJTcHJpdGVTeW1ib2wgKCkge1xuICAgIFNwcml0ZVN5bWJvbCQkMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgaWYgKCBTcHJpdGVTeW1ib2wkJDEgKSBCcm93c2VyU3ByaXRlU3ltYm9sLl9fcHJvdG9fXyA9IFNwcml0ZVN5bWJvbCQkMTtcbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTcHJpdGVTeW1ib2wkJDEgJiYgU3ByaXRlU3ltYm9sJCQxLnByb3RvdHlwZSApO1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJyb3dzZXJTcHJpdGVTeW1ib2w7XG5cbiAgdmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNNb3VudGVkOiB7fSB9O1xuXG4gIHByb3RvdHlwZUFjY2Vzc29ycy5pc01vdW50ZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIXRoaXMubm9kZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBub2RlXG4gICAqIEByZXR1cm4ge0Jyb3dzZXJTcHJpdGVTeW1ib2x9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLmNyZWF0ZUZyb21FeGlzdGluZ05vZGUgPSBmdW5jdGlvbiBjcmVhdGVGcm9tRXhpc3RpbmdOb2RlIChub2RlKSB7XG4gICAgcmV0dXJuIG5ldyBCcm93c2VyU3ByaXRlU3ltYm9sKHtcbiAgICAgIGlkOiBub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSxcbiAgICAgIHZpZXdCb3g6IG5vZGUuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JyksXG4gICAgICBjb250ZW50OiBub2RlLm91dGVySFRNTFxuICAgIH0pO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGVTeW1ib2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHRoaXMudW5tb3VudCgpO1xuICAgIH1cbiAgICBTcHJpdGVTeW1ib2wkJDEucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fHN0cmluZ30gdGFyZ2V0XG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50VGFyZ2V0ID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG5cbiAgICBtb3VudFRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgY29udGVudCA9IHRoaXMuc3RyaW5naWZ5KCk7XG4gICAgcmV0dXJuIHBhcnNlKHdyYXBJblN2Z1N0cmluZyhjb250ZW50KSkuY2hpbGROb2Rlc1swXTtcbiAgfTtcblxuICBCcm93c2VyU3ByaXRlU3ltYm9sLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gdW5tb3VudCAoKSB7XG4gICAgdGhpcy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZVN5bWJvbC5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlU3ltYm9sO1xufShTcHJpdGVTeW1ib2wpKTtcblxudmFyIGRlZmF1bHRDb25maWckMSA9IHtcbiAgLyoqXG4gICAqIFNob3VsZCBmb2xsb3dpbmcgb3B0aW9ucyBiZSBhdXRvbWF0aWNhbGx5IGNvbmZpZ3VyZWQ6XG4gICAqIC0gYHN5bmNVcmxzV2l0aEJhc2VUYWdgXG4gICAqIC0gYGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXJgXG4gICAqIC0gYG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sYFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGF1dG9Db25maWd1cmU6IHRydWUsXG5cbiAgLyoqXG4gICAqIERlZmF1bHQgbW91bnRpbmcgc2VsZWN0b3JcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIG1vdW50VG86ICdib2R5JyxcblxuICAvKipcbiAgICogRml4IGRpc2FwcGVhcmluZyBTVkcgZWxlbWVudHMgd2hlbiA8YmFzZSBocmVmPiBleGlzdHMuXG4gICAqIEV4ZWN1dGVzIHdoZW4gc3ByaXRlIG1vdW50ZWQuXG4gICAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTgyNjUzMzYvNzk2MTUyXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2V2ZXJkaW1lbnNpb24vYW5ndWxhci1zdmctYmFzZS1maXhcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2lzc3Vlcy84OTM0I2lzc3VlY29tbWVudC01NjU2ODQ2NlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHN5bmNVcmxzV2l0aEJhc2VUYWc6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTaG91bGQgc3ByaXRlIGxpc3RlbiBjdXN0b20gbG9jYXRpb24gY2hhbmdlIGV2ZW50XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbGlzdGVuTG9jYXRpb25DaGFuZ2VFdmVudDogdHJ1ZSxcblxuICAvKipcbiAgICogQ3VzdG9tIHdpbmRvdyBldmVudCBuYW1lIHdoaWNoIHNob3VsZCBiZSBlbWl0dGVkIHRvIHVwZGF0ZSBzcHJpdGUgdXJsc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbG9jYXRpb25DaGFuZ2VFdmVudDogJ2xvY2F0aW9uQ2hhbmdlJyxcblxuICAvKipcbiAgICogRW1pdCBsb2NhdGlvbiBjaGFuZ2UgZXZlbnQgaW4gQW5ndWxhciBhdXRvbWF0aWNhbGx5XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlcjogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNlbGVjdG9yIHRvIGZpbmQgc3ltYm9scyB1c2FnZXMgd2hlbiB1cGRhdGluZyBzcHJpdGUgdXJsc1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdXNhZ2VzVG9VcGRhdGU6ICd1c2VbKnxocmVmXScsXG5cbiAgLyoqXG4gICAqIEZpeCBGaXJlZm94IGJ1ZyB3aGVuIGdyYWRpZW50cyBhbmQgcGF0dGVybnMgZG9uJ3Qgd29yayBpZiB0aGV5IGFyZSB3aXRoaW4gYSBzeW1ib2wuXG4gICAqIEV4ZWN1dGVzIHdoZW4gc3ByaXRlIGlzIHJlbmRlcmVkLCBidXQgbm90IG1vdW50ZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzA2Njc0XG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzUzNTc1XG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTIzNTM2NFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sOiBmYWxzZVxufTtcblxuLyoqXG4gKiBAcGFyYW0geyp9IGFycmF5TGlrZVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbnZhciBhcnJheUZyb20gPSBmdW5jdGlvbiAoYXJyYXlMaWtlKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UsIDApO1xufTtcblxudmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxudmFyIGJyb3dzZXIgPSB7XG4gIGlzQ2hyb21lOiAvY2hyb21lL2kudGVzdCh1YSksXG4gIGlzRmlyZWZveDogL2ZpcmVmb3gvaS50ZXN0KHVhKSxcblxuICAvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM3NTAzKHY9dnMuODUpLmFzcHhcbiAgaXNJRTogL21zaWUvaS50ZXN0KHVhKSB8fCAvdHJpZGVudC9pLnRlc3QodWEpLFxuICBpc0VkZ2U6IC9lZGdlL2kudGVzdCh1YSlcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gZGF0YVxuICovXG52YXIgZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhKSB7XG4gIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICBldmVudC5pbml0Q3VzdG9tRXZlbnQobmFtZSwgZmFsc2UsIGZhbHNlLCBkYXRhKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcblxuLyoqXG4gKiBJRSBkb2Vzbid0IGV2YWx1YXRlIDxzdHlsZT4gdGFncyBpbiBTVkdzIHRoYXQgYXJlIGR5bmFtaWNhbGx5IGFkZGVkIHRvIHRoZSBwYWdlLlxuICogVGhpcyB0cmljayB3aWxsIHRyaWdnZXIgSUUgdG8gcmVhZCBhbmQgdXNlIGFueSBleGlzdGluZyBTVkcgPHN0eWxlPiB0YWdzLlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vaWNvbmljL1NWR0luamVjdG9yL2lzc3Vlcy8yM1xuICogQHNlZSBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMDg5ODQ2OS9cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGUgRE9NIEVsZW1lbnQgdG8gc2VhcmNoIDxzdHlsZT4gdGFncyBpblxuICogQHJldHVybiB7QXJyYXk8SFRNTFN0eWxlRWxlbWVudD59XG4gKi9cbnZhciBldmFsU3R5bGVzSUVXb3JrYXJvdW5kID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIHVwZGF0ZWROb2RlcyA9IFtdO1xuXG4gIGFycmF5RnJvbShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJykpXG4gICAgLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCArPSAnJztcbiAgICAgIHVwZGF0ZWROb2Rlcy5wdXNoKHN0eWxlKTtcbiAgICB9KTtcblxuICByZXR1cm4gdXBkYXRlZE5vZGVzO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF0gSWYgbm90IHByb3ZpZGVkIC0gY3VycmVudCBVUkwgd2lsbCBiZSB1c2VkXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBnZXRVcmxXaXRob3V0RnJhZ21lbnQgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiAodXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zcGxpdCgnIycpWzBdO1xufTtcblxuLyogZ2xvYmFsIGFuZ3VsYXIgKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICovXG52YXIgbG9jYXRpb25DaGFuZ2VBbmd1bGFyRW1pdHRlciA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHJvb3RTY29wZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlKSB7XG4gICAgJHJvb3RTY29wZS4kb24oJyRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3MnLCBmdW5jdGlvbiAoZSwgbmV3VXJsLCBvbGRVcmwpIHtcbiAgICAgIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCB7IG9sZFVybDogb2xkVXJsLCBuZXdVcmw6IG5ld1VybCB9KTtcbiAgICB9KTtcbiAgfV0pO1xufTtcblxudmFyIGRlZmF1bHRTZWxlY3RvciA9ICdsaW5lYXJHcmFkaWVudCwgcmFkaWFsR3JhZGllbnQsIHBhdHRlcm4nO1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlbWVudH0gc3ZnXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yXVxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xudmFyIG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID0gZnVuY3Rpb24gKHN2Zywgc2VsZWN0b3IpIHtcbiAgaWYgKCBzZWxlY3RvciA9PT0gdm9pZCAwICkgc2VsZWN0b3IgPSBkZWZhdWx0U2VsZWN0b3I7XG5cbiAgYXJyYXlGcm9tKHN2Zy5xdWVyeVNlbGVjdG9yQWxsKCdzeW1ib2wnKSkuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgYXJyYXlGcm9tKHN5bWJvbC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgc3ltYm9sLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHN5bWJvbCk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gc3ZnO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2Rlc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW21hdGNoZXJdXG4gKiBAcmV0dXJuIHtBdHRyW119XG4gKi9cbmZ1bmN0aW9uIHNlbGVjdEF0dHJpYnV0ZXMobm9kZXMsIG1hdGNoZXIpIHtcbiAgdmFyIGF0dHJzID0gYXJyYXlGcm9tKG5vZGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbm9kZSkge1xuICAgIGlmICghbm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cblxuICAgIHZhciBhcnJheWZpZWQgPSBhcnJheUZyb20obm9kZS5hdHRyaWJ1dGVzKTtcbiAgICB2YXIgbWF0Y2hlZCA9IG1hdGNoZXIgPyBhcnJheWZpZWQuZmlsdGVyKG1hdGNoZXIpIDogYXJyYXlmaWVkO1xuICAgIHJldHVybiBhY2MuY29uY2F0KG1hdGNoZWQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGF0dHJzO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZUxpc3R8Tm9kZX0gbm9kZXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Nsb25lPXRydWVdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxudmFyIHhMaW5rTlMgPSBuYW1lc3BhY2VzXzEueGxpbmsudXJpO1xudmFyIHhMaW5rQXR0ck5hbWUgPSAneGxpbms6aHJlZic7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxudmFyIHNwZWNpYWxVcmxDaGFyc1BhdHRlcm4gPSAvW3t9fFxcXFxcXF5cXFtcXF1gXCI8Pl0vZztcblxuZnVuY3Rpb24gZW5jb2Rlcih1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKHNwZWNpYWxVcmxDaGFyc1BhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiAoXCIlXCIgKyAobWF0Y2hbMF0uY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2Rlc1xuICogQHBhcmFtIHtzdHJpbmd9IHN0YXJ0c1dpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlV2l0aFxuICogQHJldHVybiB7Tm9kZUxpc3R9XG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVJlZmVyZW5jZXMobm9kZXMsIHN0YXJ0c1dpdGgsIHJlcGxhY2VXaXRoKSB7XG4gIGFycmF5RnJvbShub2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBocmVmID0gbm9kZS5nZXRBdHRyaWJ1dGUoeExpbmtBdHRyTmFtZSk7XG4gICAgaWYgKGhyZWYgJiYgaHJlZi5pbmRleE9mKHN0YXJ0c1dpdGgpID09PSAwKSB7XG4gICAgICB2YXIgbmV3VXJsID0gaHJlZi5yZXBsYWNlKHN0YXJ0c1dpdGgsIHJlcGxhY2VXaXRoKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoeExpbmtOUywgeExpbmtBdHRyTmFtZSwgbmV3VXJsKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBub2Rlcztcbn1cblxuLyoqXG4gKiBMaXN0IG9mIFNWRyBhdHRyaWJ1dGVzIHRvIHVwZGF0ZSB1cmwoKSB0YXJnZXQgaW4gdGhlbVxuICovXG52YXIgYXR0TGlzdCA9IFtcbiAgJ2NsaXBQYXRoJyxcbiAgJ2NvbG9yUHJvZmlsZScsXG4gICdzcmMnLFxuICAnY3Vyc29yJyxcbiAgJ2ZpbGwnLFxuICAnZmlsdGVyJyxcbiAgJ21hcmtlcicsXG4gICdtYXJrZXJTdGFydCcsXG4gICdtYXJrZXJNaWQnLFxuICAnbWFya2VyRW5kJyxcbiAgJ21hc2snLFxuICAnc3Ryb2tlJyxcbiAgJ3N0eWxlJ1xuXTtcblxudmFyIGF0dFNlbGVjdG9yID0gYXR0TGlzdC5tYXAoZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIChcIltcIiArIGF0dHIgKyBcIl1cIik7IH0pLmpvaW4oJywnKTtcblxuLyoqXG4gKiBVcGRhdGUgVVJMcyBpbiBzdmcgaW1hZ2UgKGxpa2UgYGZpbGw9XCJ1cmwoLi4uKVwiYCkgYW5kIHVwZGF0ZSByZWZlcmVuY2luZyBlbGVtZW50c1xuICogQHBhcmFtIHtFbGVtZW50fSBzdmdcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IHJlZmVyZW5jZXNcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gc3RhcnRzV2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VXaXRoXG4gKiBAcmV0dXJuIHt2b2lkfVxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBzcHJpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcuc3ByaXRlJyk7XG4gKiBjb25zdCB1c2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1c2UnKTtcbiAqIHVwZGF0ZVVybHMoc3ByaXRlLCB1c2FnZXMsICcjJywgJ3ByZWZpeCMnKTtcbiAqL1xudmFyIHVwZGF0ZVVybHMgPSBmdW5jdGlvbiAoc3ZnLCByZWZlcmVuY2VzLCBzdGFydHNXaXRoLCByZXBsYWNlV2l0aCkge1xuICB2YXIgc3RhcnRzV2l0aEVuY29kZWQgPSBlbmNvZGVyKHN0YXJ0c1dpdGgpO1xuICB2YXIgcmVwbGFjZVdpdGhFbmNvZGVkID0gZW5jb2RlcihyZXBsYWNlV2l0aCk7XG5cbiAgdmFyIG5vZGVzID0gc3ZnLnF1ZXJ5U2VsZWN0b3JBbGwoYXR0U2VsZWN0b3IpO1xuICB2YXIgYXR0cnMgPSBzZWxlY3RBdHRyaWJ1dGVzKG5vZGVzLCBmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGxvY2FsTmFtZSA9IHJlZi5sb2NhbE5hbWU7XG4gICAgdmFyIHZhbHVlID0gcmVmLnZhbHVlO1xuXG4gICAgcmV0dXJuIGF0dExpc3QuaW5kZXhPZihsb2NhbE5hbWUpICE9PSAtMSAmJiB2YWx1ZS5pbmRleE9mKChcInVybChcIiArIHN0YXJ0c1dpdGhFbmNvZGVkKSkgIT09IC0xO1xuICB9KTtcblxuICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiBhdHRyLnZhbHVlID0gYXR0ci52YWx1ZS5yZXBsYWNlKHN0YXJ0c1dpdGhFbmNvZGVkLCByZXBsYWNlV2l0aEVuY29kZWQpOyB9KTtcbiAgdXBkYXRlUmVmZXJlbmNlcyhyZWZlcmVuY2VzLCBzdGFydHNXaXRoRW5jb2RlZCwgcmVwbGFjZVdpdGhFbmNvZGVkKTtcbn07XG5cbi8qKlxuICogSW50ZXJuYWwgZW1pdHRlciBldmVudHNcbiAqIEBlbnVtXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgRXZlbnRzID0ge1xuICBNT1VOVDogJ21vdW50JyxcbiAgU1lNQk9MX01PVU5UOiAnc3ltYm9sX21vdW50J1xufTtcblxudmFyIEJyb3dzZXJTcHJpdGUgPSAoZnVuY3Rpb24gKFNwcml0ZSQkMSkge1xuICBmdW5jdGlvbiBCcm93c2VyU3ByaXRlKGNmZykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuICAgIGlmICggY2ZnID09PSB2b2lkIDAgKSBjZmcgPSB7fTtcblxuICAgIFNwcml0ZSQkMS5jYWxsKHRoaXMsIGRlZXBtZXJnZShkZWZhdWx0Q29uZmlnJDEsIGNmZykpO1xuXG4gICAgdmFyIGVtaXR0ZXIgPSBtaXR0KCk7XG4gICAgdGhpcy5fZW1pdHRlciA9IGVtaXR0ZXI7XG4gICAgdGhpcy5ub2RlID0gbnVsbDtcblxuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBjb25maWcgPSByZWYuY29uZmlnO1xuXG4gICAgaWYgKGNvbmZpZy5hdXRvQ29uZmlndXJlKSB7XG4gICAgICB0aGlzLl9hdXRvQ29uZmlndXJlKGNmZyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5zeW5jVXJsc1dpdGhCYXNlVGFnKSB7XG4gICAgICB2YXIgYmFzZVVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICBlbWl0dGVyLm9uKEV2ZW50cy5NT1VOVCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcyQxLnVwZGF0ZVVybHMoJyMnLCBiYXNlVXJsKTsgfSk7XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZUxvY2F0aW9uQ2hhbmdlID0gdGhpcy5faGFuZGxlTG9jYXRpb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVMb2NhdGlvbkNoYW5nZSA9IGhhbmRsZUxvY2F0aW9uQ2hhbmdlO1xuXG4gICAgLy8gUHJvdmlkZSB3YXkgdG8gdXBkYXRlIHNwcml0ZSB1cmxzIGV4dGVybmFsbHkgdmlhIGRpc3BhdGNoaW5nIGN1c3RvbSB3aW5kb3cgZXZlbnRcbiAgICBpZiAoY29uZmlnLmxpc3RlbkxvY2F0aW9uQ2hhbmdlRXZlbnQpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUV2ZW50LCBoYW5kbGVMb2NhdGlvbkNoYW5nZSk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBsb2NhdGlvbiBjaGFuZ2UgZXZlbnQgaW4gQW5ndWxhciBhdXRvbWF0aWNhbGx5XG4gICAgaWYgKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyKSB7XG4gICAgICBsb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyKGNvbmZpZy5sb2NhdGlvbkNoYW5nZUV2ZW50KTtcbiAgICB9XG5cbiAgICAvLyBBZnRlciBzcHJpdGUgbW91bnRlZFxuICAgIGVtaXR0ZXIub24oRXZlbnRzLk1PVU5ULCBmdW5jdGlvbiAoc3ByaXRlTm9kZSkge1xuICAgICAgaWYgKGNvbmZpZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCkge1xuICAgICAgICBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbChzcHJpdGVOb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFmdGVyIHN5bWJvbCBtb3VudGVkIGludG8gc3ByaXRlXG4gICAgZW1pdHRlci5vbihFdmVudHMuU1lNQk9MX01PVU5ULCBmdW5jdGlvbiAoc3ltYm9sTm9kZSkge1xuICAgICAgaWYgKGNvbmZpZy5tb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbCkge1xuICAgICAgICBtb3ZlR3JhZGllbnRzT3V0c2lkZVN5bWJvbChzeW1ib2xOb2RlLnBhcmVudE5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYnJvd3Nlci5pc0lFIHx8IGJyb3dzZXIuaXNFZGdlKSB7XG4gICAgICAgIGV2YWxTdHlsZXNJRVdvcmthcm91bmQoc3ltYm9sTm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoIFNwcml0ZSQkMSApIEJyb3dzZXJTcHJpdGUuX19wcm90b19fID0gU3ByaXRlJCQxO1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNwcml0ZSQkMSAmJiBTcHJpdGUkJDEucHJvdG90eXBlICk7XG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnJvd3NlclNwcml0ZTtcblxuICB2YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBpc01vdW50ZWQ6IHt9IH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBwcm90b3R5cGVBY2Nlc3NvcnMuaXNNb3VudGVkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISF0aGlzLm5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEF1dG9tYXRpY2FsbHkgY29uZmlndXJlIGZvbGxvd2luZyBvcHRpb25zXG4gICAqIC0gYHN5bmNVcmxzV2l0aEJhc2VUYWdgXG4gICAqIC0gYGxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXJgXG4gICAqIC0gYG1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sYFxuICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5fYXV0b0NvbmZpZ3VyZSA9IGZ1bmN0aW9uIF9hdXRvQ29uZmlndXJlIChjZmcpIHtcbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgY29uZmlnID0gcmVmLmNvbmZpZztcblxuICAgIGlmICh0eXBlb2YgY2ZnLnN5bmNVcmxzV2l0aEJhc2VUYWcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcuc3luY1VybHNXaXRoQmFzZVRhZyA9IHR5cGVvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNmZy5sb2NhdGlvbkNoYW5nZUFuZ3VsYXJFbWl0dGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLmxvY2F0aW9uQ2hhbmdlQW5ndWxhckVtaXR0ZXIgPSAnYW5ndWxhcicgaW4gd2luZG93O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2ZnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLm1vdmVHcmFkaWVudHNPdXRzaWRlU3ltYm9sID0gYnJvd3Nlci5pc0ZpcmVmb3g7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQuZGV0YWlsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5kZXRhaWwub2xkVXJsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5kZXRhaWwubmV3VXJsXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5faGFuZGxlTG9jYXRpb25DaGFuZ2UgPSBmdW5jdGlvbiBfaGFuZGxlTG9jYXRpb25DaGFuZ2UgKGV2ZW50KSB7XG4gICAgdmFyIHJlZiA9IGV2ZW50LmRldGFpbDtcbiAgICB2YXIgb2xkVXJsID0gcmVmLm9sZFVybDtcbiAgICB2YXIgbmV3VXJsID0gcmVmLm5ld1VybDtcbiAgICB0aGlzLnVwZGF0ZVVybHMob2xkVXJsLCBuZXdVcmwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgbmV3IHN5bWJvbC4gSWYgc3ltYm9sIHdpdGggdGhlIHNhbWUgaWQgZXhpc3RzIGl0IHdpbGwgYmUgcmVwbGFjZWQuXG4gICAqIElmIHNwcml0ZSBhbHJlYWR5IG1vdW50ZWQgLSBgc3ltYm9sLm1vdW50KHNwcml0ZS5ub2RlKWAgd2lsbCBiZSBjYWxsZWQuXG4gICAqIEBmaXJlcyBFdmVudHMjU1lNQk9MX01PVU5UXG4gICAqIEBwYXJhbSB7QnJvd3NlclNwcml0ZVN5bWJvbH0gc3ltYm9sXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCAtIHN5bWJvbCB3YXMgYWRkZWQsIGBmYWxzZWAgLSByZXBsYWNlZFxuICAgKi9cbiAgQnJvd3NlclNwcml0ZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChzeW1ib2wpIHtcbiAgICB2YXIgc3ByaXRlID0gdGhpcztcbiAgICB2YXIgaXNOZXdTeW1ib2wgPSBTcHJpdGUkJDEucHJvdG90eXBlLmFkZC5jYWxsKHRoaXMsIHN5bWJvbCk7XG5cbiAgICBpZiAodGhpcy5pc01vdW50ZWQgJiYgaXNOZXdTeW1ib2wpIHtcbiAgICAgIHN5bWJvbC5tb3VudChzcHJpdGUubm9kZSk7XG4gICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoRXZlbnRzLlNZTUJPTF9NT1VOVCwgc3ltYm9sLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBpc05ld1N5bWJvbDtcbiAgfTtcblxuICAvKipcbiAgICogQXR0YWNoIHRvIGV4aXN0aW5nIERPTSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfEVsZW1lbnR9IHRhcmdldFxuICAgKiBAcmV0dXJuIHtFbGVtZW50fG51bGx9IGF0dGFjaGVkIERPTSBFbGVtZW50LiBudWxsIGlmIG5vZGUgdG8gYXR0YWNoIG5vdCBmb3VuZC5cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIGF0dGFjaCAodGFyZ2V0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgc3ByaXRlID0gdGhpcztcblxuICAgIGlmIChzcHJpdGUuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm4gc3ByaXRlLm5vZGU7XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIEVsZW1lbnQgKi9cbiAgICB2YXIgbm9kZSA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0O1xuICAgIHNwcml0ZS5ub2RlID0gbm9kZTtcblxuICAgIC8vIEFscmVhZHkgYWRkZWQgc3ltYm9scyBuZWVkcyB0byBiZSBtb3VudGVkXG4gICAgdGhpcy5zeW1ib2xzLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgICAgc3ltYm9sLm1vdW50KHNwcml0ZS5ub2RlKTtcbiAgICAgIHRoaXMkMS5fZW1pdHRlci5lbWl0KEV2ZW50cy5TWU1CT0xfTU9VTlQsIHN5bWJvbC5ub2RlKTtcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBzeW1ib2xzIGZyb20gZXhpc3RpbmcgRE9NIG5vZGVzLCBhZGQgYW5kIG1vdW50IHRoZW1cbiAgICBhcnJheUZyb20obm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdzeW1ib2wnKSlcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChzeW1ib2xOb2RlKSB7XG4gICAgICAgIHZhciBzeW1ib2wgPSBCcm93c2VyU3ByaXRlU3ltYm9sLmNyZWF0ZUZyb21FeGlzdGluZ05vZGUoc3ltYm9sTm9kZSk7XG4gICAgICAgIHN5bWJvbC5ub2RlID0gc3ltYm9sTm9kZTsgLy8gaGFjayB0byBwcmV2ZW50IHN5bWJvbCBtb3VudGluZyB0byBzcHJpdGUgd2hlbiBhZGRpbmdcbiAgICAgICAgc3ByaXRlLmFkZChzeW1ib2wpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLl9lbWl0dGVyLmVtaXQoRXZlbnRzLk1PVU5ULCBub2RlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgY29uZmlnID0gcmVmLmNvbmZpZztcbiAgICB2YXIgc3ltYm9scyA9IHJlZi5zeW1ib2xzO1xuICAgIHZhciBfZW1pdHRlciA9IHJlZi5fZW1pdHRlcjtcblxuICAgIHN5bWJvbHMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5kZXN0cm95KCk7IH0pO1xuXG4gICAgX2VtaXR0ZXIub2ZmKCcqJyk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoY29uZmlnLmxvY2F0aW9uQ2hhbmdlRXZlbnQsIHRoaXMuX2hhbmRsZUxvY2F0aW9uQ2hhbmdlKTtcblxuICAgIGlmICh0aGlzLmlzTW91bnRlZCkge1xuICAgICAgdGhpcy51bm1vdW50KCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAZmlyZXMgRXZlbnRzI01PVU5UXG4gICAqIEBwYXJhbSB7c3RyaW5nfEVsZW1lbnR9IFt0YXJnZXRdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXBlbmQ9ZmFsc2VdXG4gICAqIEByZXR1cm4ge0VsZW1lbnR8bnVsbH0gcmVuZGVyZWQgc3ByaXRlIG5vZGUuIG51bGwgaWYgbW91bnQgbm9kZSBub3QgZm91bmQuXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIG1vdW50ICh0YXJnZXQsIHByZXBlbmQpIHtcbiAgICBpZiAoIHRhcmdldCA9PT0gdm9pZCAwICkgdGFyZ2V0ID0gdGhpcy5jb25maWcubW91bnRUbztcbiAgICBpZiAoIHByZXBlbmQgPT09IHZvaWQgMCApIHByZXBlbmQgPSBmYWxzZTtcblxuICAgIHZhciBzcHJpdGUgPSB0aGlzO1xuXG4gICAgaWYgKHNwcml0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBzcHJpdGUubm9kZTtcbiAgICB9XG5cbiAgICB2YXIgbW91bnROb2RlID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgdmFyIG5vZGUgPSBzcHJpdGUucmVuZGVyKCk7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcblxuICAgIGlmIChwcmVwZW5kICYmIG1vdW50Tm9kZS5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICBtb3VudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG1vdW50Tm9kZS5jaGlsZE5vZGVzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW91bnROb2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cblxuICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFdmVudHMuTU9VTlQsIG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHJldHVybiBwYXJzZSh0aGlzLnN0cmluZ2lmeSgpKTtcbiAgfTtcblxuICAvKipcbiAgICogRGV0YWNoIHNwcml0ZSBmcm9tIHRoZSBET01cbiAgICovXG4gIEJyb3dzZXJTcHJpdGUucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiB1bm1vdW50ICgpIHtcbiAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgVVJMcyBpbiBzcHJpdGUgYW5kIHVzYWdlIGVsZW1lbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvbGRVcmxcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1VybFxuICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBVUkxzIHdhcyB1cGRhdGVkLCBgZmFsc2VgIC0gc3ByaXRlIGlzIG5vdCBtb3VudGVkXG4gICAqL1xuICBCcm93c2VyU3ByaXRlLnByb3RvdHlwZS51cGRhdGVVcmxzID0gZnVuY3Rpb24gdXBkYXRlVXJscyQxIChvbGRVcmwsIG5ld1VybCkge1xuICAgIGlmICghdGhpcy5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdXNhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbmZpZy51c2FnZXNUb1VwZGF0ZSk7XG5cbiAgICB1cGRhdGVVcmxzKFxuICAgICAgdGhpcy5ub2RlLFxuICAgICAgdXNhZ2VzLFxuICAgICAgKChnZXRVcmxXaXRob3V0RnJhZ21lbnQob2xkVXJsKSkgKyBcIiNcIiksXG4gICAgICAoKGdldFVybFdpdGhvdXRGcmFnbWVudChuZXdVcmwpKSArIFwiI1wiKVxuICAgICk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyggQnJvd3NlclNwcml0ZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG4gIHJldHVybiBCcm93c2VyU3ByaXRlO1xufShTcHJpdGUpKTtcblxudmFyIHJlYWR5JDEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4vKiFcbiAgKiBkb21yZWFkeSAoYykgRHVzdGluIERpYXogMjAxNCAtIExpY2Vuc2UgTUlUXG4gICovXG4hZnVuY3Rpb24gKG5hbWUsIGRlZmluaXRpb24pIHtcblxuICB7IG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpOyB9XG5cbn0oJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xuXG4gIHZhciBmbnMgPSBbXSwgbGlzdGVuZXJcbiAgICAsIGRvYyA9IGRvY3VtZW50XG4gICAgLCBoYWNrID0gZG9jLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbFxuICAgICwgZG9tQ29udGVudExvYWRlZCA9ICdET01Db250ZW50TG9hZGVkJ1xuICAgICwgbG9hZGVkID0gKGhhY2sgPyAvXmxvYWRlZHxeYy8gOiAvXmxvYWRlZHxeaXxeYy8pLnRlc3QoZG9jLnJlYWR5U3RhdGUpO1xuXG5cbiAgaWYgKCFsb2FkZWQpXG4gIHsgZG9jLmFkZEV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIpO1xuICAgIGxvYWRlZCA9IDE7XG4gICAgd2hpbGUgKGxpc3RlbmVyID0gZm5zLnNoaWZ0KCkpIHsgbGlzdGVuZXIoKTsgfVxuICB9KTsgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICBsb2FkZWQgPyBzZXRUaW1lb3V0KGZuLCAwKSA6IGZucy5wdXNoKGZuKTtcbiAgfVxuXG59KTtcbn0pO1xuXG52YXIgc3ByaXRlTm9kZUlkID0gJ19fU1ZHX1NQUklURV9OT0RFX18nO1xudmFyIHNwcml0ZUdsb2JhbFZhck5hbWUgPSAnX19TVkdfU1BSSVRFX18nO1xudmFyIGlzU3ByaXRlRXhpc3RzID0gISF3aW5kb3dbc3ByaXRlR2xvYmFsVmFyTmFtZV07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG52YXIgc3ByaXRlO1xuXG5pZiAoaXNTcHJpdGVFeGlzdHMpIHtcbiAgc3ByaXRlID0gd2luZG93W3Nwcml0ZUdsb2JhbFZhck5hbWVdO1xufSBlbHNlIHtcbiAgc3ByaXRlID0gbmV3IEJyb3dzZXJTcHJpdGUoeyBhdHRyczogeyBpZDogc3ByaXRlTm9kZUlkIH0gfSk7XG4gIHdpbmRvd1tzcHJpdGVHbG9iYWxWYXJOYW1lXSA9IHNwcml0ZTtcbn1cblxudmFyIGxvYWRTcHJpdGUgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBDaGVjayBmb3IgcGFnZSBhbHJlYWR5IGNvbnRhaW5zIHNwcml0ZSBub2RlXG4gICAqIElmIGZvdW5kIC0gYXR0YWNoIHRvIGFuZCByZXVzZSBpdCdzIGNvbnRlbnRcbiAgICogSWYgbm90IC0gcmVuZGVyIGFuZCBtb3VudCB0aGUgbmV3IHNwcml0ZVxuICAgKi9cbiAgdmFyIGV4aXN0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3ByaXRlTm9kZUlkKTtcblxuICBpZiAoZXhpc3RpbmcpIHtcbiAgICBzcHJpdGUuYXR0YWNoKGV4aXN0aW5nKTtcbiAgfSBlbHNlIHtcbiAgICBzcHJpdGUubW91bnQoZG9jdW1lbnQuYm9keSwgdHJ1ZSk7XG4gIH1cbn07XG5cbmlmIChkb2N1bWVudC5ib2R5KSB7XG4gIGxvYWRTcHJpdGUoKTtcbn0gZWxzZSB7XG4gIHJlYWR5JDEobG9hZFNwcml0ZSk7XG59XG5cbnZhciBzcHJpdGUkMSA9IHNwcml0ZTtcblxucmV0dXJuIHNwcml0ZSQxO1xuXG59KSkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanMiXSwic291cmNlUm9vdCI6IiJ9