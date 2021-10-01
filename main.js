/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Poppins/Poppins-Regular.ttf */ "./src/Poppins/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./kabob.jpg */ "./src/kabob.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"Poppins\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\n    /* font-weight: 600; */\n    font-style: normal;\n}\n\nhtml {\n    box-sizing: border-box;\n    font-family: \"Poppins\", sans-serif;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\nbody {\n    margin: 0;\n    padding: 0;\n}\nfooter {\n    position: fixed;\n    color: white;\n    bottom: 0;\n    background-color: rgb(0, 0, 0);\n    width: 100vw;\n}\n\nfooter p {\n    padding: 10px;\n    text-align: center;\n}\n\nh1,\nh2,\nh3,\nh4,\np {\n    margin: 0;\n}\n\nh1 {\n    font-size: 4rem;\n}\n\nimg {\n    display: block;\n    max-width: 100%;\n}\n\n/* css for nav */\n.home-nav {\n    font-size: 3rem;\n}\n.navContainer {\n    display: flex;\n    position: sticky;\n    background-color: #e9ca7c;\n    /* min-height: 7vh; */\n    z-index: 100;\n    top: 0;\n    bottom: 0;\n    justify-content: center;\n    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);\n}\n.div-nav-list {\n    display: flex;\n    justify-content: center;\n}\n\n.nav-list {\n    display: flex;\n    align-items: end;\n    color: black;\n    font-size: 1.5rem;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n    list-style-type: none;\n}\n\n.nav-list > li {\n    margin-left: 20px;\n    margin-right: 20px;\n    padding-top: 8px;\n}\n\nli {\n    cursor: pointer;\n}\n\n/* Adding CSS for Main */\n/* .image-container {\n    background-image: url(\"./kabob.jpg\");\n    background-blend-mode: multiply;\n} */\n\n.hero-home {\n    background-color: rgba(51, 51, 51, 0.407);\n    color: white;\n    text-align: center;\n    /* background-color: rgb(196, 11, 11); */\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-blend-mode: multiply;\n    padding: 10vh 0;\n    background-size: cover;\n}\n\n.home-description {\n    margin-top: 50px;\n    text-align: center;\n    font-size: 1.8rem;\n}\n\n.item-container {\n    margin-top: 40px;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n}\n\n.attention-item {\n    border-radius: 25px;\n    /* border: 2px solid #73ad21; */\n    background-color: rgb(230, 147, 117);\n    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);\n    padding: 20px;\n    max-width: 350px;\n    min-width: 200px;\n    margin: 20px;\n}\n\n.attention-item p {\n    padding: 10px;\n    font-size: 1.25rem;\n}\n\n.attention-item h3 {\n    font-size: 1.5rem;\n}\n\n@media all and (max-width: 767px) {\n    .item-container {\n        flex-direction: column;\n        align-items: center;\n    }\n}\n\n/* About Css */\n\n.contact-headline,\n.motive-headline {\n    margin-top: 20px;\n    text-align: center;\n    font-size: 2.6rem;\n    font-weight: 200;\n}\n\n.motive-div-p {\n    padding: 10px;\n    margin: 0 auto;\n    max-width: 855px;\n}\n\n.motive-div-p p {\n    font-size: 1.125rem;\n}\n/* .motive-p {\n    font-size: 1.125rem;\n} */\n\n.about-info {\n    padding: 20px;\n    text-align: center;\n}\n\n.pdiv {\n    display: inline-block;\n    text-align: left;\n}\n.pdiv p {\n    font-size: 1.125rem;\n}\n\n/* Menu CSS */\n\n.menu-headline {\n    margin-top: 20px;\n    text-align: center;\n    font-size: 2.6rem;\n    font-weight: 200;\n}\n\n.menu-item-div {\n    display: flex;\n    padding: 10px;\n}\n\n.nd-div {\n    max-width: 400px;\n    padding: 10px;\n}\n\n.nd-div p {\n    padding: 10px;\n}\n\n.menu-item-div img {\n    width: 80px;\n}\n\n.menu-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,0DAAuD;IACvD,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,kCAAkC;IAClC,iBAAiB;IACjB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,eAAe;IACf,YAAY;IACZ,SAAS;IACT,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;;;;;IAKI,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA,gBAAgB;AAChB;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,yBAAyB;IACzB,qBAAqB;IACrB,YAAY;IACZ,MAAM;IACN,SAAS;IACT,uBAAuB;IACvB,gDAAgD;AACpD;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,UAAU;IACV,SAAS;IACT,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA,wBAAwB;AACxB;;;GAGG;;AAEH;IACI,yCAAyC;IACzC,YAAY;IACZ,kBAAkB;IAClB,wCAAwC;IACxC,yDAAoC;IACpC,+BAA+B;IAC/B,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,+BAA+B;IAC/B,oCAAoC;IACpC,gDAAgD;IAChD,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI;QACI,sBAAsB;QACtB,mBAAmB;IACvB;AACJ;;AAEA,cAAc;;AAEd;;IAEI,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;AACA;;GAEG;;AAEH;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;AACpB;AACA;IACI,mBAAmB;AACvB;;AAEA,aAAa;;AAEb;IACI,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB","sourcesContent":["@font-face {\n    font-family: \"Poppins\";\n    src: url(\"./Poppins/Poppins-Regular.ttf\") format(\"ttf\");\n    /* font-weight: 600; */\n    font-style: normal;\n}\n\nhtml {\n    box-sizing: border-box;\n    font-family: \"Poppins\", sans-serif;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\nbody {\n    margin: 0;\n    padding: 0;\n}\nfooter {\n    position: fixed;\n    color: white;\n    bottom: 0;\n    background-color: rgb(0, 0, 0);\n    width: 100vw;\n}\n\nfooter p {\n    padding: 10px;\n    text-align: center;\n}\n\nh1,\nh2,\nh3,\nh4,\np {\n    margin: 0;\n}\n\nh1 {\n    font-size: 4rem;\n}\n\nimg {\n    display: block;\n    max-width: 100%;\n}\n\n/* css for nav */\n.home-nav {\n    font-size: 3rem;\n}\n.navContainer {\n    display: flex;\n    position: sticky;\n    background-color: #e9ca7c;\n    /* min-height: 7vh; */\n    z-index: 100;\n    top: 0;\n    bottom: 0;\n    justify-content: center;\n    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);\n}\n.div-nav-list {\n    display: flex;\n    justify-content: center;\n}\n\n.nav-list {\n    display: flex;\n    align-items: end;\n    color: black;\n    font-size: 1.5rem;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n    list-style-type: none;\n}\n\n.nav-list > li {\n    margin-left: 20px;\n    margin-right: 20px;\n    padding-top: 8px;\n}\n\nli {\n    cursor: pointer;\n}\n\n/* Adding CSS for Main */\n/* .image-container {\n    background-image: url(\"./kabob.jpg\");\n    background-blend-mode: multiply;\n} */\n\n.hero-home {\n    background-color: rgba(51, 51, 51, 0.407);\n    color: white;\n    text-align: center;\n    /* background-color: rgb(196, 11, 11); */\n    background-image: url(\"./kabob.jpg\");\n    background-blend-mode: multiply;\n    padding: 10vh 0;\n    background-size: cover;\n}\n\n.home-description {\n    margin-top: 50px;\n    text-align: center;\n    font-size: 1.8rem;\n}\n\n.item-container {\n    margin-top: 40px;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n}\n\n.attention-item {\n    border-radius: 25px;\n    /* border: 2px solid #73ad21; */\n    background-color: rgb(230, 147, 117);\n    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);\n    padding: 20px;\n    max-width: 350px;\n    min-width: 200px;\n    margin: 20px;\n}\n\n.attention-item p {\n    padding: 10px;\n    font-size: 1.25rem;\n}\n\n.attention-item h3 {\n    font-size: 1.5rem;\n}\n\n@media all and (max-width: 767px) {\n    .item-container {\n        flex-direction: column;\n        align-items: center;\n    }\n}\n\n/* About Css */\n\n.contact-headline,\n.motive-headline {\n    margin-top: 20px;\n    text-align: center;\n    font-size: 2.6rem;\n    font-weight: 200;\n}\n\n.motive-div-p {\n    padding: 10px;\n    margin: 0 auto;\n    max-width: 855px;\n}\n\n.motive-div-p p {\n    font-size: 1.125rem;\n}\n/* .motive-p {\n    font-size: 1.125rem;\n} */\n\n.about-info {\n    padding: 20px;\n    text-align: center;\n}\n\n.pdiv {\n    display: inline-block;\n    text-align: left;\n}\n.pdiv p {\n    font-size: 1.125rem;\n}\n\n/* Menu CSS */\n\n.menu-headline {\n    margin-top: 20px;\n    text-align: center;\n    font-size: 2.6rem;\n    font-weight: 200;\n}\n\n.menu-item-div {\n    display: flex;\n    padding: 10px;\n}\n\n.nd-div {\n    max-width: 400px;\n    padding: 10px;\n}\n\n.nd-div p {\n    padding: 10px;\n}\n\n.menu-item-div img {\n    width: 80px;\n}\n\n.menu-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
function about() {
    const divEl = document.createElement("div");
    const motiveH2 = document.createElement("h2");
    motiveH2.className = "motive-headline";
    const motiveDivP = document.createElement("div");
    motiveDivP.className = "motive-div-p";
    const motiveP = document.createElement("p");
    // motiveP.className = "motive-p";

    motiveH2.innerHTML = "Our Story";
    motiveP.innerHTML =
        "Fusce semper, libero vel sollicitudin faucibus, purus felis convallis ante, quis dignissim nibh tortor id odio. Integer augue lacus, euismod in quam id, dignissim sollicitudin orci. Donec mollis congue mi, fringilla imperdiet mauris vehicula ultricies. Nam at accumsan mauris, nec bibendum est. Pellentesque sed tellus mauris. Nunc eros mauris, vehicula a ornare eget, tincidunt et elit. Pellentesque efficitur bibendum fermentum. Mauris at eleifend sem. In dignissim fringilla mauris ac commodo. Nam non purus magna. Cras nisi diam, rutrum non placerat vitae, facilisis at mi. Etiam aliquam massa vitae lectus blandit, quis imperdiet enim fringilla. Etiam congue quam lectus, a laoreet tellus faucibus sed. Nam ornare non ante non accumsan. Pellentesque eget neque odio.";

    const contactH2 = document.createElement("h2");
    contactH2.className = "contact-headline";
    const infoDiv = document.createElement("div");
    infoDiv.className = "about-info";
    const pDiv = document.createElement("div");
    pDiv.className = "pdiv";

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    contactH2.innerHTML = "Contact Information";
    p1.innerHTML = "Phone: 123-456-789";
    p2.innerHTML = "Email: admin@kabobhut.com";
    p3.innerHTML = "Address: 123 Mary Dr, Nowhere, SO";

    pDiv.appendChild(p1);
    pDiv.appendChild(p2);
    pDiv.appendChild(p3);
    infoDiv.appendChild(pDiv);
    motiveDivP.appendChild(motiveP);

    divEl.appendChild(motiveH2);
    divEl.appendChild(motiveDivP);
    divEl.appendChild(contactH2);
    divEl.appendChild(infoDiv);

    console.log("adding about");

    return divEl;
}


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footer)
/* harmony export */ });
function footer() {
    const footerEl = document.createElement("footer");
    const pEl = document.createElement("p");
    pEl.innerHTML = "Copyright &copy; hassan-anees";

    footerEl.appendChild(pEl);

    return footerEl;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _kabob_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kabob.jpg */ "./src/kabob.jpg");


function home() {
    const divEl = document.createElement("div");
    const hero = document.createElement("section");
    const headLine = document.createElement("h1");
    const description = document.createElement("h2");

    divEl.className = "home-section";
    hero.className = "hero-home";

    headLine.innerHTML = "Welcome to Kabob hut";
    description.innerHTML = "Customize your own kabab into whatever you like!";
    description.className = "home-description";

    const listDiv = document.createElement("div");
    const listDiv1 = document.createElement("div");
    const freshH3 = document.createElement("h3");
    const freshP = document.createElement("p");
    freshH3.innerHTML = "Fresh Ingredients";
    freshP.innerHTML = "We represent out local farmers to get high-quality organic indredients";
    listDiv1.appendChild(freshH3);
    listDiv1.appendChild(freshP);

    const listDiv2 = document.createElement("div");
    const handH3 = document.createElement("h3");
    const handP = document.createElement("p");
    handH3.innerHTML = "Hand Made";
    handP.innerHTML =
        "Our greek culture lets us stay true to the art of kabob making. Ensuring that everything is done by hand!";
    listDiv2.appendChild(handH3);
    listDiv2.appendChild(handP);

    const listDiv3 = document.createElement("div");
    const tasteH3 = document.createElement("h3");
    const tasteP = document.createElement("p");
    tasteH3.innerHTML = "Authentic Taste";
    tasteP.innerHTML =
        "Discover the rich and deep flavors of Greek cuisine we bring forward! Be warned, you'll get hooked!";
    listDiv3.appendChild(tasteH3);
    listDiv3.appendChild(tasteP);

    listDiv.appendChild(listDiv1);
    listDiv.appendChild(listDiv2);
    listDiv.appendChild(listDiv3);
    listDiv.className = "item-container";

    listDiv1.className = "attention-item";
    listDiv2.className = "attention-item";
    listDiv3.className = "attention-item";

    divEl.appendChild(hero);
    hero.appendChild(headLine);
    divEl.appendChild(description);
    divEl.appendChild(listDiv);

    console.log("adding home");

    return divEl;
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _veggie_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./veggie.jpg */ "./src/veggie.jpg");
/* harmony import */ var _chicken_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chicken.jpg */ "./src/chicken.jpg");
/* harmony import */ var _beef_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beef.jpg */ "./src/beef.jpg");




// returns a div of a menu item
const createMenuItem = (imgSrc, dishName, description, price) => {
    const menuItemDivEl = document.createElement("div");
    menuItemDivEl.className = "menu-item-div";
    const imgEl = document.createElement("img");
    const dishNameEl = document.createElement("h4");
    const dishDescriptionEl = document.createElement("p");
    const priceEl = document.createElement("p");
    const nameDescriptionDivEl = document.createElement("div");
    nameDescriptionDivEl.className = "nd-div";

    imgEl.src = imgSrc;
    dishNameEl.innerHTML = dishName;
    dishDescriptionEl.innerHTML = description;
    priceEl.innerHTML = price;

    nameDescriptionDivEl.appendChild(dishNameEl);
    nameDescriptionDivEl.appendChild(dishDescriptionEl);

    menuItemDivEl.appendChild(imgEl);
    menuItemDivEl.appendChild(nameDescriptionDivEl);
    menuItemDivEl.appendChild(priceEl);

    return menuItemDivEl;
};

function menu() {
    const divEl = document.createElement("div");
    divEl.className = "menu-section";

    const menuHeadline = document.createElement("h2");
    menuHeadline.className = "menu-headline";
    menuHeadline.innerHTML = "Today's Specials";

    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";

    menuContainer.appendChild(
        createMenuItem(
            _veggie_jpg__WEBPACK_IMPORTED_MODULE_0__,
            "Veggie Kabob",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in quam quis sodales.",
            "$11.99"
        )
    );

    menuContainer.appendChild(
        createMenuItem(
            _chicken_jpg__WEBPACK_IMPORTED_MODULE_1__,
            "Chicken Kabob",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in quam quis sodales.",
            "$11.99"
        )
    );

    menuContainer.appendChild(
        createMenuItem(
            _beef_jpg__WEBPACK_IMPORTED_MODULE_2__,
            "Beef Kabob",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor in quam quis sodales.",
            "$11.99"
        )
    );

    // Main items to the div
    divEl.appendChild(menuHeadline);
    divEl.appendChild(document.createElement("br"));
    divEl.appendChild(menuContainer);

    console.log("addinsg menu");

    return divEl;
}


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navbar)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



function navbar() {
    const navContainer = document.createElement("div");
    const navListDiv = document.createElement("div");
    const navList = document.createElement("ul");
    const homeLink = document.createElement("li");
    const menuLink = document.createElement("li");
    const aboutLink = document.createElement("li");

    navContainer.className = "navContainer";
    navListDiv.className = "div-nav-list";
    navList.classList = "nav-list";

    homeLink.className = "home-nav";
    homeLink.innerHTML = "Kabob Hut";

    aboutLink.className = "about-nav";
    aboutLink.innerHTML = "About";

    menuLink.className = "menu-nav";
    menuLink.innerHTML = "Menu";

    navContainer.appendChild(navListDiv);
    navListDiv.appendChild(navList);
    navList.appendChild(menuLink);
    navList.appendChild(homeLink);
    navList.appendChild(aboutLink);

    return navContainer;
}


/***/ }),

/***/ "./src/Poppins/Poppins-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/Poppins/Poppins-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8081832fc5cfbf634aa6.ttf";

/***/ }),

/***/ "./src/beef.jpg":
/*!**********************!*\
  !*** ./src/beef.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e1144b93c9286f74828.jpg";

/***/ }),

/***/ "./src/chicken.jpg":
/*!*************************!*\
  !*** ./src/chicken.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6feb78b85ac6fee27445.jpg";

/***/ }),

/***/ "./src/kabob.jpg":
/*!***********************!*\
  !*** ./src/kabob.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fafb335326fc528f760d.jpg";

/***/ }),

/***/ "./src/veggie.jpg":
/*!************************!*\
  !*** ./src/veggie.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c447612394fab2b3043a.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.js */ "./src/navbar.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");







console.log("Loading up page");

// Tab logic goes within here actually
// wipes the current div and replaces it with the module div

const homeRender = (e) => {
    e.preventDefault();
    console.log("You clicked on HOME");
};

const aboutRender = (e) => {
    e.preventDefault();
    console.log("You clicked on ABOUT");
};

const menuRender = (e) => {
    e.preventDefault();
    console.log("You clicked on MENUUU");
};

const clearContent = () => {};

window.onload = () => {
    const content = document.querySelector(".content");

    // have three links here
    // here we add event listener to the list grouping

    content.appendChild((0,_navbar_js__WEBPACK_IMPORTED_MODULE_4__["default"])());

    const containerEl = document.createElement("div");
    containerEl.className = "container";
    content.appendChild(containerEl);

    containerEl.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    const homeEl = document.querySelector(".home-nav");
    const menuEl = document.querySelector(".menu-nav");
    const aboutEl = document.querySelector(".about-nav");

    homeEl.addEventListener("click", function () {
        containerEl.innerHTML = "";
        containerEl.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    });
    aboutEl.addEventListener("click", function () {
        containerEl.innerHTML = "";
        containerEl.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
    });

    menuEl.addEventListener("click", function () {
        containerEl.innerHTML = "";
        containerEl.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
    });

    content.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_5__["default"])());
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjs7QUFFUTtBQUNBO0FBQ0U7QUFDRTtBQUNBO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixzREFBTTs7QUFFOUI7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixvREFBSTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxvREFBSTtBQUNwQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdDQUFnQyxxREFBSztBQUNyQyxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQ0FBZ0Msb0RBQUk7QUFDcEMsS0FBSzs7QUFFTCx3QkFBd0Isc0RBQU07QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8zLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8zLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8zLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8zLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8zLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly8zLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8zLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1BvcHBpbnMvUG9wcGlucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4va2Fib2IuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG4gICAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbmltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIGNzcyBmb3IgbmF2ICovXFxuLmhvbWUtbmF2IHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4ubmF2Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5Y2E3YztcXG4gICAgLyogbWluLWhlaWdodDogN3ZoOyAqL1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA4cHggLTlweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG4uZGl2LW5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5uYXYtbGlzdCA+IGxpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDhweDtcXG59XFxuXFxubGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEFkZGluZyBDU1MgZm9yIE1haW4gKi9cXG4vKiAuaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2thYm9iLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcbn0gKi9cXG5cXG4uaGVyby1ob21lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAwLjQwNyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAxMSwgMTEpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcbiAgICBwYWRkaW5nOiAxMHZoIDA7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5ob21lLWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmF0dGVudGlvbi1pdGVtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgIzczYWQyMTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMTQ3LCAxMTcpO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDhweCAtOXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmF0dGVudGlvbi1pdGVtIHAge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5hdHRlbnRpb24taXRlbSBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAuaXRlbS1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLyogQWJvdXQgQ3NzICovXFxuXFxuLmNvbnRhY3QtaGVhZGxpbmUsXFxuLm1vdGl2ZS1oZWFkbGluZSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5tb3RpdmUtZGl2LXAge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA4NTVweDtcXG59XFxuXFxuLm1vdGl2ZS1kaXYtcCBwIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuLyogLm1vdGl2ZS1wIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59ICovXFxuXFxuLmFib3V0LWluZm8ge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wZGl2IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ucGRpdiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuLyogTWVudSBDU1MgKi9cXG5cXG4ubWVudS1oZWFkbGluZSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5tZW51LWl0ZW0tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm5kLWRpdiB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5uZC1kaXYgcCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0tZGl2IGltZyB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBEQUF1RDtJQUN2RCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBOzs7OztJQUtJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLE1BQU07SUFDTixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGdEQUFnRDtBQUNwRDtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsd0JBQXdCO0FBQ3hCOzs7R0FHRzs7QUFFSDtJQUNJLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4Qyx5REFBb0M7SUFDcEMsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0Isb0NBQW9DO0lBQ3BDLGdEQUFnRDtJQUNoRCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBLGNBQWM7O0FBRWQ7O0lBRUksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTs7R0FFRzs7QUFFSDtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUEsYUFBYTs7QUFFYjtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuL1BvcHBpbnMvUG9wcGlucy1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICAgIC8qIGZvbnQtd2VpZ2h0OiA2MDA7ICovXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG5pbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBjc3MgZm9yIG5hdiAqL1xcbi5ob21lLW5hdiB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuLm5hdkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWNhN2M7XFxuICAgIC8qIG1pbi1oZWlnaHQ6IDd2aDsgKi9cXG4gICAgei1pbmRleDogMTAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggOHB4IC05cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuLmRpdi1uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ubmF2LWxpc3QgPiBsaSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA4cHg7XFxufVxcblxcbmxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBBZGRpbmcgQ1NTIGZvciBNYWluICovXFxuLyogLmltYWdlLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9rYWJvYi5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG59ICovXFxuXFxuLmhlcm8taG9tZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMC40MDcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMTEsIDExKTsgKi9cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2thYm9iLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcbiAgICBwYWRkaW5nOiAxMHZoIDA7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5ob21lLWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmF0dGVudGlvbi1pdGVtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgIzczYWQyMTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMTQ3LCAxMTcpO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDhweCAtOXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmF0dGVudGlvbi1pdGVtIHAge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5hdHRlbnRpb24taXRlbSBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAuaXRlbS1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLyogQWJvdXQgQ3NzICovXFxuXFxuLmNvbnRhY3QtaGVhZGxpbmUsXFxuLm1vdGl2ZS1oZWFkbGluZSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5tb3RpdmUtZGl2LXAge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA4NTVweDtcXG59XFxuXFxuLm1vdGl2ZS1kaXYtcCBwIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuLyogLm1vdGl2ZS1wIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59ICovXFxuXFxuLmFib3V0LWluZm8ge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wZGl2IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ucGRpdiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuLyogTWVudSBDU1MgKi9cXG5cXG4ubWVudS1oZWFkbGluZSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5tZW51LWl0ZW0tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm5kLWRpdiB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5uZC1kaXYgcCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0tZGl2IGltZyB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dCgpIHtcbiAgICBjb25zdCBkaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbW90aXZlSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbW90aXZlSDIuY2xhc3NOYW1lID0gXCJtb3RpdmUtaGVhZGxpbmVcIjtcbiAgICBjb25zdCBtb3RpdmVEaXZQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb3RpdmVEaXZQLmNsYXNzTmFtZSA9IFwibW90aXZlLWRpdi1wXCI7XG4gICAgY29uc3QgbW90aXZlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIC8vIG1vdGl2ZVAuY2xhc3NOYW1lID0gXCJtb3RpdmUtcFwiO1xuXG4gICAgbW90aXZlSDIuaW5uZXJIVE1MID0gXCJPdXIgU3RvcnlcIjtcbiAgICBtb3RpdmVQLmlubmVySFRNTCA9XG4gICAgICAgIFwiRnVzY2Ugc2VtcGVyLCBsaWJlcm8gdmVsIHNvbGxpY2l0dWRpbiBmYXVjaWJ1cywgcHVydXMgZmVsaXMgY29udmFsbGlzIGFudGUsIHF1aXMgZGlnbmlzc2ltIG5pYmggdG9ydG9yIGlkIG9kaW8uIEludGVnZXIgYXVndWUgbGFjdXMsIGV1aXNtb2QgaW4gcXVhbSBpZCwgZGlnbmlzc2ltIHNvbGxpY2l0dWRpbiBvcmNpLiBEb25lYyBtb2xsaXMgY29uZ3VlIG1pLCBmcmluZ2lsbGEgaW1wZXJkaWV0IG1hdXJpcyB2ZWhpY3VsYSB1bHRyaWNpZXMuIE5hbSBhdCBhY2N1bXNhbiBtYXVyaXMsIG5lYyBiaWJlbmR1bSBlc3QuIFBlbGxlbnRlc3F1ZSBzZWQgdGVsbHVzIG1hdXJpcy4gTnVuYyBlcm9zIG1hdXJpcywgdmVoaWN1bGEgYSBvcm5hcmUgZWdldCwgdGluY2lkdW50IGV0IGVsaXQuIFBlbGxlbnRlc3F1ZSBlZmZpY2l0dXIgYmliZW5kdW0gZmVybWVudHVtLiBNYXVyaXMgYXQgZWxlaWZlbmQgc2VtLiBJbiBkaWduaXNzaW0gZnJpbmdpbGxhIG1hdXJpcyBhYyBjb21tb2RvLiBOYW0gbm9uIHB1cnVzIG1hZ25hLiBDcmFzIG5pc2kgZGlhbSwgcnV0cnVtIG5vbiBwbGFjZXJhdCB2aXRhZSwgZmFjaWxpc2lzIGF0IG1pLiBFdGlhbSBhbGlxdWFtIG1hc3NhIHZpdGFlIGxlY3R1cyBibGFuZGl0LCBxdWlzIGltcGVyZGlldCBlbmltIGZyaW5naWxsYS4gRXRpYW0gY29uZ3VlIHF1YW0gbGVjdHVzLCBhIGxhb3JlZXQgdGVsbHVzIGZhdWNpYnVzIHNlZC4gTmFtIG9ybmFyZSBub24gYW50ZSBub24gYWNjdW1zYW4uIFBlbGxlbnRlc3F1ZSBlZ2V0IG5lcXVlIG9kaW8uXCI7XG5cbiAgICBjb25zdCBjb250YWN0SDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29udGFjdEgyLmNsYXNzTmFtZSA9IFwiY29udGFjdC1oZWFkbGluZVwiO1xuICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluZm9EaXYuY2xhc3NOYW1lID0gXCJhYm91dC1pbmZvXCI7XG4gICAgY29uc3QgcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcERpdi5jbGFzc05hbWUgPSBcInBkaXZcIjtcblxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgY29udGFjdEgyLmlubmVySFRNTCA9IFwiQ29udGFjdCBJbmZvcm1hdGlvblwiO1xuICAgIHAxLmlubmVySFRNTCA9IFwiUGhvbmU6IDEyMy00NTYtNzg5XCI7XG4gICAgcDIuaW5uZXJIVE1MID0gXCJFbWFpbDogYWRtaW5Aa2Fib2JodXQuY29tXCI7XG4gICAgcDMuaW5uZXJIVE1MID0gXCJBZGRyZXNzOiAxMjMgTWFyeSBEciwgTm93aGVyZSwgU09cIjtcblxuICAgIHBEaXYuYXBwZW5kQ2hpbGQocDEpO1xuICAgIHBEaXYuYXBwZW5kQ2hpbGQocDIpO1xuICAgIHBEaXYuYXBwZW5kQ2hpbGQocDMpO1xuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocERpdik7XG4gICAgbW90aXZlRGl2UC5hcHBlbmRDaGlsZChtb3RpdmVQKTtcblxuICAgIGRpdkVsLmFwcGVuZENoaWxkKG1vdGl2ZUgyKTtcbiAgICBkaXZFbC5hcHBlbmRDaGlsZChtb3RpdmVEaXZQKTtcbiAgICBkaXZFbC5hcHBlbmRDaGlsZChjb250YWN0SDIpO1xuICAgIGRpdkVsLmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gICAgY29uc29sZS5sb2coXCJhZGRpbmcgYWJvdXRcIik7XG5cbiAgICByZXR1cm4gZGl2RWw7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGNvbnN0IHBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBFbC5pbm5lckhUTUwgPSBcIkNvcHlyaWdodCAmY29weTsgaGFzc2FuLWFuZWVzXCI7XG5cbiAgICBmb290ZXJFbC5hcHBlbmRDaGlsZChwRWwpO1xuXG4gICAgcmV0dXJuIGZvb3RlckVsO1xufVxuIiwiaW1wb3J0IEthYm9iQmFubmVyIGZyb20gXCIuL2thYm9iLmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnN0IGRpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgY29uc3QgaGVhZExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cbiAgICBkaXZFbC5jbGFzc05hbWUgPSBcImhvbWUtc2VjdGlvblwiO1xuICAgIGhlcm8uY2xhc3NOYW1lID0gXCJoZXJvLWhvbWVcIjtcblxuICAgIGhlYWRMaW5lLmlubmVySFRNTCA9IFwiV2VsY29tZSB0byBLYWJvYiBodXRcIjtcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIkN1c3RvbWl6ZSB5b3VyIG93biBrYWJhYiBpbnRvIHdoYXRldmVyIHlvdSBsaWtlIVwiO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiaG9tZS1kZXNjcmlwdGlvblwiO1xuXG4gICAgY29uc3QgbGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbGlzdERpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGZyZXNoSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgZnJlc2hQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZnJlc2hIMy5pbm5lckhUTUwgPSBcIkZyZXNoIEluZ3JlZGllbnRzXCI7XG4gICAgZnJlc2hQLmlubmVySFRNTCA9IFwiV2UgcmVwcmVzZW50IG91dCBsb2NhbCBmYXJtZXJzIHRvIGdldCBoaWdoLXF1YWxpdHkgb3JnYW5pYyBpbmRyZWRpZW50c1wiO1xuICAgIGxpc3REaXYxLmFwcGVuZENoaWxkKGZyZXNoSDMpO1xuICAgIGxpc3REaXYxLmFwcGVuZENoaWxkKGZyZXNoUCk7XG5cbiAgICBjb25zdCBsaXN0RGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaGFuZEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IGhhbmRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaGFuZEgzLmlubmVySFRNTCA9IFwiSGFuZCBNYWRlXCI7XG4gICAgaGFuZFAuaW5uZXJIVE1MID1cbiAgICAgICAgXCJPdXIgZ3JlZWsgY3VsdHVyZSBsZXRzIHVzIHN0YXkgdHJ1ZSB0byB0aGUgYXJ0IG9mIGthYm9iIG1ha2luZy4gRW5zdXJpbmcgdGhhdCBldmVyeXRoaW5nIGlzIGRvbmUgYnkgaGFuZCFcIjtcbiAgICBsaXN0RGl2Mi5hcHBlbmRDaGlsZChoYW5kSDMpO1xuICAgIGxpc3REaXYyLmFwcGVuZENoaWxkKGhhbmRQKTtcblxuICAgIGNvbnN0IGxpc3REaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YXN0ZUgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IHRhc3RlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc3RlSDMuaW5uZXJIVE1MID0gXCJBdXRoZW50aWMgVGFzdGVcIjtcbiAgICB0YXN0ZVAuaW5uZXJIVE1MID1cbiAgICAgICAgXCJEaXNjb3ZlciB0aGUgcmljaCBhbmQgZGVlcCBmbGF2b3JzIG9mIEdyZWVrIGN1aXNpbmUgd2UgYnJpbmcgZm9yd2FyZCEgQmUgd2FybmVkLCB5b3UnbGwgZ2V0IGhvb2tlZCFcIjtcbiAgICBsaXN0RGl2My5hcHBlbmRDaGlsZCh0YXN0ZUgzKTtcbiAgICBsaXN0RGl2My5hcHBlbmRDaGlsZCh0YXN0ZVApO1xuXG4gICAgbGlzdERpdi5hcHBlbmRDaGlsZChsaXN0RGl2MSk7XG4gICAgbGlzdERpdi5hcHBlbmRDaGlsZChsaXN0RGl2Mik7XG4gICAgbGlzdERpdi5hcHBlbmRDaGlsZChsaXN0RGl2Myk7XG4gICAgbGlzdERpdi5jbGFzc05hbWUgPSBcIml0ZW0tY29udGFpbmVyXCI7XG5cbiAgICBsaXN0RGl2MS5jbGFzc05hbWUgPSBcImF0dGVudGlvbi1pdGVtXCI7XG4gICAgbGlzdERpdjIuY2xhc3NOYW1lID0gXCJhdHRlbnRpb24taXRlbVwiO1xuICAgIGxpc3REaXYzLmNsYXNzTmFtZSA9IFwiYXR0ZW50aW9uLWl0ZW1cIjtcblxuICAgIGRpdkVsLmFwcGVuZENoaWxkKGhlcm8pO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVhZExpbmUpO1xuICAgIGRpdkVsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBkaXZFbC5hcHBlbmRDaGlsZChsaXN0RGl2KTtcblxuICAgIGNvbnNvbGUubG9nKFwiYWRkaW5nIGhvbWVcIik7XG5cbiAgICByZXR1cm4gZGl2RWw7XG59XG4iLCJpbXBvcnQgVmVnZ2llIGZyb20gXCIuL3ZlZ2dpZS5qcGdcIjtcbmltcG9ydCBDaGlja2VuIGZyb20gXCIuL2NoaWNrZW4uanBnXCI7XG5pbXBvcnQgQmVlZiBmcm9tIFwiLi9iZWVmLmpwZ1wiO1xuXG4vLyByZXR1cm5zIGEgZGl2IG9mIGEgbWVudSBpdGVtXG5jb25zdCBjcmVhdGVNZW51SXRlbSA9IChpbWdTcmMsIGRpc2hOYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UpID0+IHtcbiAgICBjb25zdCBtZW51SXRlbURpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbURpdkVsLmNsYXNzTmFtZSA9IFwibWVudS1pdGVtLWRpdlwiO1xuICAgIGNvbnN0IGltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCBkaXNoTmFtZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGNvbnN0IGRpc2hEZXNjcmlwdGlvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgcHJpY2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IG5hbWVEZXNjcmlwdGlvbkRpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYW1lRGVzY3JpcHRpb25EaXZFbC5jbGFzc05hbWUgPSBcIm5kLWRpdlwiO1xuXG4gICAgaW1nRWwuc3JjID0gaW1nU3JjO1xuICAgIGRpc2hOYW1lRWwuaW5uZXJIVE1MID0gZGlzaE5hbWU7XG4gICAgZGlzaERlc2NyaXB0aW9uRWwuaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XG4gICAgcHJpY2VFbC5pbm5lckhUTUwgPSBwcmljZTtcblxuICAgIG5hbWVEZXNjcmlwdGlvbkRpdkVsLmFwcGVuZENoaWxkKGRpc2hOYW1lRWwpO1xuICAgIG5hbWVEZXNjcmlwdGlvbkRpdkVsLmFwcGVuZENoaWxkKGRpc2hEZXNjcmlwdGlvbkVsKTtcblxuICAgIG1lbnVJdGVtRGl2RWwuYXBwZW5kQ2hpbGQoaW1nRWwpO1xuICAgIG1lbnVJdGVtRGl2RWwuYXBwZW5kQ2hpbGQobmFtZURlc2NyaXB0aW9uRGl2RWwpO1xuICAgIG1lbnVJdGVtRGl2RWwuYXBwZW5kQ2hpbGQocHJpY2VFbCk7XG5cbiAgICByZXR1cm4gbWVudUl0ZW1EaXZFbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gICAgY29uc3QgZGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkVsLmNsYXNzTmFtZSA9IFwibWVudS1zZWN0aW9uXCI7XG5cbiAgICBjb25zdCBtZW51SGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbWVudUhlYWRsaW5lLmNsYXNzTmFtZSA9IFwibWVudS1oZWFkbGluZVwiO1xuICAgIG1lbnVIZWFkbGluZS5pbm5lckhUTUwgPSBcIlRvZGF5J3MgU3BlY2lhbHNcIjtcblxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NOYW1lID0gXCJtZW51LWNvbnRhaW5lclwiO1xuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBWZWdnaWUsXG4gICAgICAgICAgICBcIlZlZ2dpZSBLYWJvYlwiLFxuICAgICAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYW0gdGVtcG9yIGluIHF1YW0gcXVpcyBzb2RhbGVzLlwiLFxuICAgICAgICAgICAgXCIkMTEuOTlcIlxuICAgICAgICApXG4gICAgKTtcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgQ2hpY2tlbixcbiAgICAgICAgICAgIFwiQ2hpY2tlbiBLYWJvYlwiLFxuICAgICAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYW0gdGVtcG9yIGluIHF1YW0gcXVpcyBzb2RhbGVzLlwiLFxuICAgICAgICAgICAgXCIkMTEuOTlcIlxuICAgICAgICApXG4gICAgKTtcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgQmVlZixcbiAgICAgICAgICAgIFwiQmVlZiBLYWJvYlwiLFxuICAgICAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOdWxsYW0gdGVtcG9yIGluIHF1YW0gcXVpcyBzb2RhbGVzLlwiLFxuICAgICAgICAgICAgXCIkMTEuOTlcIlxuICAgICAgICApXG4gICAgKTtcblxuICAgIC8vIE1haW4gaXRlbXMgdG8gdGhlIGRpdlxuICAgIGRpdkVsLmFwcGVuZENoaWxkKG1lbnVIZWFkbGluZSk7XG4gICAgZGl2RWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICBkaXZFbC5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcblxuICAgIGNvbnNvbGUubG9nKFwiYWRkaW5zZyBtZW51XCIpO1xuXG4gICAgcmV0dXJuIGRpdkVsO1xufVxuIiwiaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2YmFyKCkge1xuICAgIGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmF2TGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBhYm91dExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICBuYXZDb250YWluZXIuY2xhc3NOYW1lID0gXCJuYXZDb250YWluZXJcIjtcbiAgICBuYXZMaXN0RGl2LmNsYXNzTmFtZSA9IFwiZGl2LW5hdi1saXN0XCI7XG4gICAgbmF2TGlzdC5jbGFzc0xpc3QgPSBcIm5hdi1saXN0XCI7XG5cbiAgICBob21lTGluay5jbGFzc05hbWUgPSBcImhvbWUtbmF2XCI7XG4gICAgaG9tZUxpbmsuaW5uZXJIVE1MID0gXCJLYWJvYiBIdXRcIjtcblxuICAgIGFib3V0TGluay5jbGFzc05hbWUgPSBcImFib3V0LW5hdlwiO1xuICAgIGFib3V0TGluay5pbm5lckhUTUwgPSBcIkFib3V0XCI7XG5cbiAgICBtZW51TGluay5jbGFzc05hbWUgPSBcIm1lbnUtbmF2XCI7XG4gICAgbWVudUxpbmsuaW5uZXJIVE1MID0gXCJNZW51XCI7XG5cbiAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlzdERpdik7XG4gICAgbmF2TGlzdERpdi5hcHBlbmRDaGlsZChuYXZMaXN0KTtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGFib3V0TGluayk7XG5cbiAgICByZXR1cm4gbmF2Q29udGFpbmVyO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vYWJvdXQuanNcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vbmF2YmFyLmpzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3Rlci5qc1wiO1xuY29uc29sZS5sb2coXCJMb2FkaW5nIHVwIHBhZ2VcIik7XG5cbi8vIFRhYiBsb2dpYyBnb2VzIHdpdGhpbiBoZXJlIGFjdHVhbGx5XG4vLyB3aXBlcyB0aGUgY3VycmVudCBkaXYgYW5kIHJlcGxhY2VzIGl0IHdpdGggdGhlIG1vZHVsZSBkaXZcblxuY29uc3QgaG9tZVJlbmRlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiWW91IGNsaWNrZWQgb24gSE9NRVwiKTtcbn07XG5cbmNvbnN0IGFib3V0UmVuZGVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJZb3UgY2xpY2tlZCBvbiBBQk9VVFwiKTtcbn07XG5cbmNvbnN0IG1lbnVSZW5kZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcIllvdSBjbGlja2VkIG9uIE1FTlVVVVwiKTtcbn07XG5cbmNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHt9O1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICAvLyBoYXZlIHRocmVlIGxpbmtzIGhlcmVcbiAgICAvLyBoZXJlIHdlIGFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgbGlzdCBncm91cGluZ1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChOYXZiYXIoKSk7XG5cbiAgICBjb25zdCBjb250YWluZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyRWwuY2xhc3NOYW1lID0gXCJjb250YWluZXJcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lckVsKTtcblxuICAgIGNvbnRhaW5lckVsLmFwcGVuZENoaWxkKEhvbWUoKSk7XG4gICAgY29uc3QgaG9tZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLW5hdlwiKTtcbiAgICBjb25zdCBtZW51RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbmF2XCIpO1xuICAgIGNvbnN0IGFib3V0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0LW5hdlwiKTtcblxuICAgIGhvbWVFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250YWluZXJFbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjb250YWluZXJFbC5hcHBlbmRDaGlsZChIb21lKCkpO1xuICAgIH0pO1xuICAgIGFib3V0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGFpbmVyRWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoQWJvdXQoKSk7XG4gICAgfSk7XG5cbiAgICBtZW51RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGFpbmVyRWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoTWVudSgpKTtcbiAgICB9KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRm9vdGVyKCkpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==