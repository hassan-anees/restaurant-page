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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"Poppins\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\n    /* font-weight: 600; */\n    font-style: normal;\n}\n\nhtml {\n    box-sizing: border-box;\n    font-family: \"Poppins\", sans-serif;\n}\nbody {\n    margin: 0;\n    padding: 0;\n}\nh1,\nh2,\nh3,\nh4,\np {\n    margin: 0;\n}\n\nh1 {\n    font-size: 4rem;\n}\n\nimg {\n    display: block;\n    max-width: 100%;\n}\n\n/* css for nav */\n.home-nav {\n    font-size: 3rem;\n}\n.navContainer {\n    display: flex;\n    position: sticky;\n    background-color: #e9ca7c;\n    /* min-height: 7vh; */\n    z-index: 100;\n    top: 0;\n    bottom: 0;\n    justify-content: center;\n    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);\n}\n.div-nav-list {\n    display: flex;\n    justify-content: center;\n}\n\n.nav-list {\n    display: flex;\n    align-items: end;\n    color: black;\n    font-size: 1.5rem;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n    list-style-type: none;\n}\n\n.nav-list > li {\n    margin-left: 20px;\n    margin-right: 20px;\n    padding-top: 8px;\n}\n\nli {\n    cursor: pointer;\n}\n\n/* Adding CSS for Main */\n/* .image-container {\n    background-image: url(\"./kabob.jpg\");\n    background-blend-mode: multiply;\n} */\n\n.hero-home {\n    background-color: rgba(51, 51, 51, 0.407);\n    color: white;\n    text-align: center;\n    /* background-color: rgb(196, 11, 11); */\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-blend-mode: multiply;\n    padding: 10vh 0;\n    background-size: cover;\n}\n\n.home-description {\n    margin-top: 50px;\n    text-align: center;\n    font-size: 1.8rem;\n}\n\n.item-container {\n    margin-top: 40px;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n}\n\n.attention-item {\n    border-radius: 25px;\n    /* border: 2px solid #73ad21; */\n    background-color: rgb(230, 147, 117);\n    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);\n    padding: 20px;\n    max-width: 350px;\n    min-width: 200px;\n    margin: 20px;\n}\n\n.attention-item p {\n    padding: 10px;\n    font-size: 1.25rem;\n}\n\n.attention-item h3 {\n    font-size: 1.5rem;\n}\n\n@media all and (max-width: 767px) {\n    .item-container {\n        flex-direction: column;\n        align-items: center;\n    }\n}\n\n/* About Css */\n\n.contact-headline,\n.motive-headline {\n    margin-top: 20px;\n    text-align: center;\n    font-size: 2.6rem;\n    font-weight: 200;\n}\n\n.motive-div-p {\n    padding: 10px;\n    margin: 0 auto;\n    max-width: 855px;\n}\n\n.motive-div-p p {\n    font-size: 1.125rem;\n}\n/* .motive-p {\n    font-size: 1.125rem;\n} */\n\n.about-info {\n    padding: 20px;\n    text-align: center;\n}\n\n.pdiv {\n    display: inline-block;\n    text-align: left;\n}\n.pdiv p {\n    font-size: 1.125rem;\n}\n\n/* Menu CSS */\n\n.menu-headline {\n    margin-top: 20px;\n    text-align: center;\n    font-size: 2.6rem;\n    font-weight: 200;\n}\n\n.menu-item-div {\n    display: flex;\n    padding: 10px;\n}\n\n.nd-div {\n    max-width: 400px;\n    padding: 10px;\n}\n\n.nd-div p {\n    padding: 10px;\n}\n\n.menu-item-div img {\n    width: 80px;\n}\n\n.menu-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,0DAAuD;IACvD,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,kCAAkC;AACtC;AACA;IACI,SAAS;IACT,UAAU;AACd;AACA;;;;;IAKI,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA,gBAAgB;AAChB;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,yBAAyB;IACzB,qBAAqB;IACrB,YAAY;IACZ,MAAM;IACN,SAAS;IACT,uBAAuB;IACvB,gDAAgD;AACpD;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,UAAU;IACV,SAAS;IACT,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA,wBAAwB;AACxB;;;GAGG;;AAEH;IACI,yCAAyC;IACzC,YAAY;IACZ,kBAAkB;IAClB,wCAAwC;IACxC,yDAAoC;IACpC,+BAA+B;IAC/B,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,+BAA+B;IAC/B,oCAAoC;IACpC,gDAAgD;IAChD,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI;QACI,sBAAsB;QACtB,mBAAmB;IACvB;AACJ;;AAEA,cAAc;;AAEd;;IAEI,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;AACA;;GAEG;;AAEH;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;AACpB;AACA;IACI,mBAAmB;AACvB;;AAEA,aAAa;;AAEb;IACI,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB","sourcesContent":["@font-face {\n    font-family: \"Poppins\";\n    src: url(\"./Poppins/Poppins-Regular.ttf\") format(\"ttf\");\n    /* font-weight: 600; */\n    font-style: normal;\n}\n\nhtml {\n    box-sizing: border-box;\n    font-family: \"Poppins\", sans-serif;\n}\nbody {\n    margin: 0;\n    padding: 0;\n}\nh1,\nh2,\nh3,\nh4,\np {\n    margin: 0;\n}\n\nh1 {\n    font-size: 4rem;\n}\n\nimg {\n    display: block;\n    max-width: 100%;\n}\n\n/* css for nav */\n.home-nav {\n    font-size: 3rem;\n}\n.navContainer {\n    display: flex;\n    position: sticky;\n    background-color: #e9ca7c;\n    /* min-height: 7vh; */\n    z-index: 100;\n    top: 0;\n    bottom: 0;\n    justify-content: center;\n    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);\n}\n.div-nav-list {\n    display: flex;\n    justify-content: center;\n}\n\n.nav-list {\n    display: flex;\n    align-items: end;\n    color: black;\n    font-size: 1.5rem;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n    list-style-type: none;\n}\n\n.nav-list > li {\n    margin-left: 20px;\n    margin-right: 20px;\n    padding-top: 8px;\n}\n\nli {\n    cursor: pointer;\n}\n\n/* Adding CSS for Main */\n/* .image-container {\n    background-image: url(\"./kabob.jpg\");\n    background-blend-mode: multiply;\n} */\n\n.hero-home {\n    background-color: rgba(51, 51, 51, 0.407);\n    color: white;\n    text-align: center;\n    /* background-color: rgb(196, 11, 11); */\n    background-image: url(\"./kabob.jpg\");\n    background-blend-mode: multiply;\n    padding: 10vh 0;\n    background-size: cover;\n}\n\n.home-description {\n    margin-top: 50px;\n    text-align: center;\n    font-size: 1.8rem;\n}\n\n.item-container {\n    margin-top: 40px;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n}\n\n.attention-item {\n    border-radius: 25px;\n    /* border: 2px solid #73ad21; */\n    background-color: rgb(230, 147, 117);\n    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);\n    padding: 20px;\n    max-width: 350px;\n    min-width: 200px;\n    margin: 20px;\n}\n\n.attention-item p {\n    padding: 10px;\n    font-size: 1.25rem;\n}\n\n.attention-item h3 {\n    font-size: 1.5rem;\n}\n\n@media all and (max-width: 767px) {\n    .item-container {\n        flex-direction: column;\n        align-items: center;\n    }\n}\n\n/* About Css */\n\n.contact-headline,\n.motive-headline {\n    margin-top: 20px;\n    text-align: center;\n    font-size: 2.6rem;\n    font-weight: 200;\n}\n\n.motive-div-p {\n    padding: 10px;\n    margin: 0 auto;\n    max-width: 855px;\n}\n\n.motive-div-p p {\n    font-size: 1.125rem;\n}\n/* .motive-p {\n    font-size: 1.125rem;\n} */\n\n.about-info {\n    padding: 20px;\n    text-align: center;\n}\n\n.pdiv {\n    display: inline-block;\n    text-align: left;\n}\n.pdiv p {\n    font-size: 1.125rem;\n}\n\n/* Menu CSS */\n\n.menu-headline {\n    margin-top: 20px;\n    text-align: center;\n    font-size: 2.6rem;\n    font-weight: 200;\n}\n\n.menu-item-div {\n    display: flex;\n    padding: 10px;\n}\n\n.nd-div {\n    max-width: 400px;\n    padding: 10px;\n}\n\n.nd-div p {\n    padding: 10px;\n}\n\n.menu-item-div img {\n    width: 80px;\n}\n\n.menu-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n"],"sourceRoot":""}]);
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
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNDc0M7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEa0M7QUFDRTtBQUNOOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx3Q0FBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLHlDQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksc0NBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVFMEI7QUFDTDs7QUFFTjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCOztBQUVRO0FBQ0E7QUFDRTtBQUNFO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixzREFBTTs7QUFFOUI7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixvREFBSTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxvREFBSTtBQUNwQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdDQUFnQyxxREFBSztBQUNyQyxLQUFLOztBQUVMO0FBQ0E7QUFDQSxnQ0FBZ0Msb0RBQUk7QUFDcEMsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8zLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8zLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8zLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8zLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8zLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly8zLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vMy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8zLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLzMtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1BvcHBpbnMvUG9wcGlucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4va2Fib2IuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG4gICAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbmltZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIGNzcyBmb3IgbmF2ICovXFxuLmhvbWUtbmF2IHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4ubmF2Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5Y2E3YztcXG4gICAgLyogbWluLWhlaWdodDogN3ZoOyAqL1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA4cHggLTlweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG4uZGl2LW5hdi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5uYXYtbGlzdCA+IGxpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDhweDtcXG59XFxuXFxubGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEFkZGluZyBDU1MgZm9yIE1haW4gKi9cXG4vKiAuaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2thYm9iLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcbn0gKi9cXG5cXG4uaGVyby1ob21lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAwLjQwNyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAxMSwgMTEpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcbiAgICBwYWRkaW5nOiAxMHZoIDA7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5ob21lLWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmF0dGVudGlvbi1pdGVtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgIzczYWQyMTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMTQ3LCAxMTcpO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDhweCAtOXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmF0dGVudGlvbi1pdGVtIHAge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5hdHRlbnRpb24taXRlbSBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAuaXRlbS1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLyogQWJvdXQgQ3NzICovXFxuXFxuLmNvbnRhY3QtaGVhZGxpbmUsXFxuLm1vdGl2ZS1oZWFkbGluZSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5tb3RpdmUtZGl2LXAge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA4NTVweDtcXG59XFxuXFxuLm1vdGl2ZS1kaXYtcCBwIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuLyogLm1vdGl2ZS1wIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59ICovXFxuXFxuLmFib3V0LWluZm8ge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wZGl2IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ucGRpdiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuLyogTWVudSBDU1MgKi9cXG5cXG4ubWVudS1oZWFkbGluZSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5tZW51LWl0ZW0tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm5kLWRpdiB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5uZC1kaXYgcCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0tZGl2IGltZyB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBEQUF1RDtJQUN2RCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBOzs7OztJQUtJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLE1BQU07SUFDTixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGdEQUFnRDtBQUNwRDtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsd0JBQXdCO0FBQ3hCOzs7R0FHRzs7QUFFSDtJQUNJLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4Qyx5REFBb0M7SUFDcEMsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0Isb0NBQW9DO0lBQ3BDLGdEQUFnRDtJQUNoRCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBLGNBQWM7O0FBRWQ7O0lBRUksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTs7R0FFRzs7QUFFSDtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUEsYUFBYTs7QUFFYjtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuL1BvcHBpbnMvUG9wcGlucy1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICAgIC8qIGZvbnQtd2VpZ2h0OiA2MDA7ICovXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG5pbWcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBjc3MgZm9yIG5hdiAqL1xcbi5ob21lLW5hdiB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuLm5hdkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWNhN2M7XFxuICAgIC8qIG1pbi1oZWlnaHQ6IDd2aDsgKi9cXG4gICAgei1pbmRleDogMTAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCA1cHggOHB4IC05cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuLmRpdi1uYXYtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ubmF2LWxpc3QgPiBsaSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA4cHg7XFxufVxcblxcbmxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBBZGRpbmcgQ1NTIGZvciBNYWluICovXFxuLyogLmltYWdlLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9rYWJvYi5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG59ICovXFxuXFxuLmhlcm8taG9tZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMC40MDcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMTEsIDExKTsgKi9cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2thYm9iLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xcbiAgICBwYWRkaW5nOiAxMHZoIDA7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5ob21lLWRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmF0dGVudGlvbi1pdGVtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgIzczYWQyMTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMTQ3LCAxMTcpO1xcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDhweCAtOXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmF0dGVudGlvbi1pdGVtIHAge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5hdHRlbnRpb24taXRlbSBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAuaXRlbS1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLyogQWJvdXQgQ3NzICovXFxuXFxuLmNvbnRhY3QtaGVhZGxpbmUsXFxuLm1vdGl2ZS1oZWFkbGluZSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5tb3RpdmUtZGl2LXAge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA4NTVweDtcXG59XFxuXFxuLm1vdGl2ZS1kaXYtcCBwIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuLyogLm1vdGl2ZS1wIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59ICovXFxuXFxuLmFib3V0LWluZm8ge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wZGl2IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ucGRpdiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuLyogTWVudSBDU1MgKi9cXG5cXG4ubWVudS1oZWFkbGluZSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5tZW51LWl0ZW0tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm5kLWRpdiB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5uZC1kaXYgcCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0tZGl2IGltZyB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dCgpIHtcbiAgICBjb25zdCBkaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbW90aXZlSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgbW90aXZlSDIuY2xhc3NOYW1lID0gXCJtb3RpdmUtaGVhZGxpbmVcIjtcbiAgICBjb25zdCBtb3RpdmVEaXZQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb3RpdmVEaXZQLmNsYXNzTmFtZSA9IFwibW90aXZlLWRpdi1wXCI7XG4gICAgY29uc3QgbW90aXZlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIC8vIG1vdGl2ZVAuY2xhc3NOYW1lID0gXCJtb3RpdmUtcFwiO1xuXG4gICAgbW90aXZlSDIuaW5uZXJIVE1MID0gXCJPdXIgU3RvcnlcIjtcbiAgICBtb3RpdmVQLmlubmVySFRNTCA9XG4gICAgICAgIFwiRnVzY2Ugc2VtcGVyLCBsaWJlcm8gdmVsIHNvbGxpY2l0dWRpbiBmYXVjaWJ1cywgcHVydXMgZmVsaXMgY29udmFsbGlzIGFudGUsIHF1aXMgZGlnbmlzc2ltIG5pYmggdG9ydG9yIGlkIG9kaW8uIEludGVnZXIgYXVndWUgbGFjdXMsIGV1aXNtb2QgaW4gcXVhbSBpZCwgZGlnbmlzc2ltIHNvbGxpY2l0dWRpbiBvcmNpLiBEb25lYyBtb2xsaXMgY29uZ3VlIG1pLCBmcmluZ2lsbGEgaW1wZXJkaWV0IG1hdXJpcyB2ZWhpY3VsYSB1bHRyaWNpZXMuIE5hbSBhdCBhY2N1bXNhbiBtYXVyaXMsIG5lYyBiaWJlbmR1bSBlc3QuIFBlbGxlbnRlc3F1ZSBzZWQgdGVsbHVzIG1hdXJpcy4gTnVuYyBlcm9zIG1hdXJpcywgdmVoaWN1bGEgYSBvcm5hcmUgZWdldCwgdGluY2lkdW50IGV0IGVsaXQuIFBlbGxlbnRlc3F1ZSBlZmZpY2l0dXIgYmliZW5kdW0gZmVybWVudHVtLiBNYXVyaXMgYXQgZWxlaWZlbmQgc2VtLiBJbiBkaWduaXNzaW0gZnJpbmdpbGxhIG1hdXJpcyBhYyBjb21tb2RvLiBOYW0gbm9uIHB1cnVzIG1hZ25hLiBDcmFzIG5pc2kgZGlhbSwgcnV0cnVtIG5vbiBwbGFjZXJhdCB2aXRhZSwgZmFjaWxpc2lzIGF0IG1pLiBFdGlhbSBhbGlxdWFtIG1hc3NhIHZpdGFlIGxlY3R1cyBibGFuZGl0LCBxdWlzIGltcGVyZGlldCBlbmltIGZyaW5naWxsYS4gRXRpYW0gY29uZ3VlIHF1YW0gbGVjdHVzLCBhIGxhb3JlZXQgdGVsbHVzIGZhdWNpYnVzIHNlZC4gTmFtIG9ybmFyZSBub24gYW50ZSBub24gYWNjdW1zYW4uIFBlbGxlbnRlc3F1ZSBlZ2V0IG5lcXVlIG9kaW8uXCI7XG5cbiAgICBjb25zdCBjb250YWN0SDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29udGFjdEgyLmNsYXNzTmFtZSA9IFwiY29udGFjdC1oZWFkbGluZVwiO1xuICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluZm9EaXYuY2xhc3NOYW1lID0gXCJhYm91dC1pbmZvXCI7XG4gICAgY29uc3QgcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcERpdi5jbGFzc05hbWUgPSBcInBkaXZcIjtcblxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgY29udGFjdEgyLmlubmVySFRNTCA9IFwiQ29udGFjdCBJbmZvcm1hdGlvblwiO1xuICAgIHAxLmlubmVySFRNTCA9IFwiUGhvbmU6IDEyMy00NTYtNzg5XCI7XG4gICAgcDIuaW5uZXJIVE1MID0gXCJFbWFpbDogYWRtaW5Aa2Fib2JodXQuY29tXCI7XG4gICAgcDMuaW5uZXJIVE1MID0gXCJBZGRyZXNzOiAxMjMgTWFyeSBEciwgTm93aGVyZSwgU09cIjtcblxuICAgIHBEaXYuYXBwZW5kQ2hpbGQocDEpO1xuICAgIHBEaXYuYXBwZW5kQ2hpbGQocDIpO1xuICAgIHBEaXYuYXBwZW5kQ2hpbGQocDMpO1xuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocERpdik7XG4gICAgbW90aXZlRGl2UC5hcHBlbmRDaGlsZChtb3RpdmVQKTtcblxuICAgIGRpdkVsLmFwcGVuZENoaWxkKG1vdGl2ZUgyKTtcbiAgICBkaXZFbC5hcHBlbmRDaGlsZChtb3RpdmVEaXZQKTtcbiAgICBkaXZFbC5hcHBlbmRDaGlsZChjb250YWN0SDIpO1xuICAgIGRpdkVsLmFwcGVuZENoaWxkKGluZm9EaXYpO1xuXG4gICAgY29uc29sZS5sb2coXCJhZGRpbmcgYWJvdXRcIik7XG5cbiAgICByZXR1cm4gZGl2RWw7XG59XG4iLCJpbXBvcnQgS2Fib2JCYW5uZXIgZnJvbSBcIi4va2Fib2IuanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XG4gICAgY29uc3QgZGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBjb25zdCBoZWFkTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblxuICAgIGRpdkVsLmNsYXNzTmFtZSA9IFwiaG9tZS1zZWN0aW9uXCI7XG4gICAgaGVyby5jbGFzc05hbWUgPSBcImhlcm8taG9tZVwiO1xuXG4gICAgaGVhZExpbmUuaW5uZXJIVE1MID0gXCJXZWxjb21lIHRvIEthYm9iIGh1dFwiO1xuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiQ3VzdG9taXplIHlvdXIgb3duIGthYmFiIGludG8gd2hhdGV2ZXIgeW91IGxpa2UhXCI7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJob21lLWRlc2NyaXB0aW9uXCI7XG5cbiAgICBjb25zdCBsaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsaXN0RGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZnJlc2hIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBmcmVzaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmcmVzaEgzLmlubmVySFRNTCA9IFwiRnJlc2ggSW5ncmVkaWVudHNcIjtcbiAgICBmcmVzaFAuaW5uZXJIVE1MID0gXCJXZSByZXByZXNlbnQgb3V0IGxvY2FsIGZhcm1lcnMgdG8gZ2V0IGhpZ2gtcXVhbGl0eSBvcmdhbmljIGluZHJlZGllbnRzXCI7XG4gICAgbGlzdERpdjEuYXBwZW5kQ2hpbGQoZnJlc2hIMyk7XG4gICAgbGlzdERpdjEuYXBwZW5kQ2hpbGQoZnJlc2hQKTtcblxuICAgIGNvbnN0IGxpc3REaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoYW5kSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgaGFuZFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBoYW5kSDMuaW5uZXJIVE1MID0gXCJIYW5kIE1hZGVcIjtcbiAgICBoYW5kUC5pbm5lckhUTUwgPVxuICAgICAgICBcIk91ciBncmVlayBjdWx0dXJlIGxldHMgdXMgc3RheSB0cnVlIHRvIHRoZSBhcnQgb2Yga2Fib2IgbWFraW5nLiBFbnN1cmluZyB0aGF0IGV2ZXJ5dGhpbmcgaXMgZG9uZSBieSBoYW5kIVwiO1xuICAgIGxpc3REaXYyLmFwcGVuZENoaWxkKGhhbmRIMyk7XG4gICAgbGlzdERpdjIuYXBwZW5kQ2hpbGQoaGFuZFApO1xuXG4gICAgY29uc3QgbGlzdERpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhc3RlSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgdGFzdGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFzdGVIMy5pbm5lckhUTUwgPSBcIkF1dGhlbnRpYyBUYXN0ZVwiO1xuICAgIHRhc3RlUC5pbm5lckhUTUwgPVxuICAgICAgICBcIkRpc2NvdmVyIHRoZSByaWNoIGFuZCBkZWVwIGZsYXZvcnMgb2YgR3JlZWsgY3Vpc2luZSB3ZSBicmluZyBmb3J3YXJkISBCZSB3YXJuZWQsIHlvdSdsbCBnZXQgaG9va2VkIVwiO1xuICAgIGxpc3REaXYzLmFwcGVuZENoaWxkKHRhc3RlSDMpO1xuICAgIGxpc3REaXYzLmFwcGVuZENoaWxkKHRhc3RlUCk7XG5cbiAgICBsaXN0RGl2LmFwcGVuZENoaWxkKGxpc3REaXYxKTtcbiAgICBsaXN0RGl2LmFwcGVuZENoaWxkKGxpc3REaXYyKTtcbiAgICBsaXN0RGl2LmFwcGVuZENoaWxkKGxpc3REaXYzKTtcbiAgICBsaXN0RGl2LmNsYXNzTmFtZSA9IFwiaXRlbS1jb250YWluZXJcIjtcblxuICAgIGxpc3REaXYxLmNsYXNzTmFtZSA9IFwiYXR0ZW50aW9uLWl0ZW1cIjtcbiAgICBsaXN0RGl2Mi5jbGFzc05hbWUgPSBcImF0dGVudGlvbi1pdGVtXCI7XG4gICAgbGlzdERpdjMuY2xhc3NOYW1lID0gXCJhdHRlbnRpb24taXRlbVwiO1xuXG4gICAgZGl2RWwuYXBwZW5kQ2hpbGQoaGVybyk7XG4gICAgaGVyby5hcHBlbmRDaGlsZChoZWFkTGluZSk7XG4gICAgZGl2RWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGRpdkVsLmFwcGVuZENoaWxkKGxpc3REaXYpO1xuXG4gICAgY29uc29sZS5sb2coXCJhZGRpbmcgaG9tZVwiKTtcblxuICAgIHJldHVybiBkaXZFbDtcbn1cbiIsImltcG9ydCBWZWdnaWUgZnJvbSBcIi4vdmVnZ2llLmpwZ1wiO1xuaW1wb3J0IENoaWNrZW4gZnJvbSBcIi4vY2hpY2tlbi5qcGdcIjtcbmltcG9ydCBCZWVmIGZyb20gXCIuL2JlZWYuanBnXCI7XG5cbi8vIHJldHVybnMgYSBkaXYgb2YgYSBtZW51IGl0ZW1cbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKGltZ1NyYywgZGlzaE5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtRGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtRGl2RWwuY2xhc3NOYW1lID0gXCJtZW51LWl0ZW0tZGl2XCI7XG4gICAgY29uc3QgaW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IGRpc2hOYW1lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgY29uc3QgZGlzaERlc2NyaXB0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBwcmljZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgbmFtZURlc2NyaXB0aW9uRGl2RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWVEZXNjcmlwdGlvbkRpdkVsLmNsYXNzTmFtZSA9IFwibmQtZGl2XCI7XG5cbiAgICBpbWdFbC5zcmMgPSBpbWdTcmM7XG4gICAgZGlzaE5hbWVFbC5pbm5lckhUTUwgPSBkaXNoTmFtZTtcbiAgICBkaXNoRGVzY3JpcHRpb25FbC5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbjtcbiAgICBwcmljZUVsLmlubmVySFRNTCA9IHByaWNlO1xuXG4gICAgbmFtZURlc2NyaXB0aW9uRGl2RWwuYXBwZW5kQ2hpbGQoZGlzaE5hbWVFbCk7XG4gICAgbmFtZURlc2NyaXB0aW9uRGl2RWwuYXBwZW5kQ2hpbGQoZGlzaERlc2NyaXB0aW9uRWwpO1xuXG4gICAgbWVudUl0ZW1EaXZFbC5hcHBlbmRDaGlsZChpbWdFbCk7XG4gICAgbWVudUl0ZW1EaXZFbC5hcHBlbmRDaGlsZChuYW1lRGVzY3JpcHRpb25EaXZFbCk7XG4gICAgbWVudUl0ZW1EaXZFbC5hcHBlbmRDaGlsZChwcmljZUVsKTtcblxuICAgIHJldHVybiBtZW51SXRlbURpdkVsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb25zdCBkaXZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2RWwuY2xhc3NOYW1lID0gXCJtZW51LXNlY3Rpb25cIjtcblxuICAgIGNvbnN0IG1lbnVIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBtZW51SGVhZGxpbmUuY2xhc3NOYW1lID0gXCJtZW51LWhlYWRsaW5lXCI7XG4gICAgbWVudUhlYWRsaW5lLmlubmVySFRNTCA9IFwiVG9kYXkncyBTcGVjaWFsc1wiO1xuXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1lbnUtY29udGFpbmVyXCI7XG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFZlZ2dpZSxcbiAgICAgICAgICAgIFwiVmVnZ2llIEthYm9iXCIsXG4gICAgICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhbSB0ZW1wb3IgaW4gcXVhbSBxdWlzIHNvZGFsZXMuXCIsXG4gICAgICAgICAgICBcIiQxMS45OVwiXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBDaGlja2VuLFxuICAgICAgICAgICAgXCJDaGlja2VuIEthYm9iXCIsXG4gICAgICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhbSB0ZW1wb3IgaW4gcXVhbSBxdWlzIHNvZGFsZXMuXCIsXG4gICAgICAgICAgICBcIiQxMS45OVwiXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBCZWVmLFxuICAgICAgICAgICAgXCJCZWVmIEthYm9iXCIsXG4gICAgICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhbSB0ZW1wb3IgaW4gcXVhbSBxdWlzIHNvZGFsZXMuXCIsXG4gICAgICAgICAgICBcIiQxMS45OVwiXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgLy8gTWFpbiBpdGVtcyB0byB0aGUgZGl2XG4gICAgZGl2RWwuYXBwZW5kQ2hpbGQobWVudUhlYWRsaW5lKTtcbiAgICBkaXZFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgIGRpdkVsLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG4gICAgY29uc29sZS5sb2coXCJhZGRpbnNnIG1lbnVcIik7XG5cbiAgICByZXR1cm4gZGl2RWw7XG59XG4iLCJpbXBvcnQgbWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIoKSB7XG4gICAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBuYXZMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuICAgIG5hdkNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm5hdkNvbnRhaW5lclwiO1xuICAgIG5hdkxpc3REaXYuY2xhc3NOYW1lID0gXCJkaXYtbmF2LWxpc3RcIjtcbiAgICBuYXZMaXN0LmNsYXNzTGlzdCA9IFwibmF2LWxpc3RcIjtcblxuICAgIGhvbWVMaW5rLmNsYXNzTmFtZSA9IFwiaG9tZS1uYXZcIjtcbiAgICBob21lTGluay5pbm5lckhUTUwgPSBcIkthYm9iIEh1dFwiO1xuXG4gICAgYWJvdXRMaW5rLmNsYXNzTmFtZSA9IFwiYWJvdXQtbmF2XCI7XG4gICAgYWJvdXRMaW5rLmlubmVySFRNTCA9IFwiQWJvdXRcIjtcblxuICAgIG1lbnVMaW5rLmNsYXNzTmFtZSA9IFwibWVudS1uYXZcIjtcbiAgICBtZW51TGluay5pbm5lckhUTUwgPSBcIk1lbnVcIjtcblxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZMaXN0RGl2KTtcbiAgICBuYXZMaXN0RGl2LmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobWVudUxpbmspO1xuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQoYWJvdXRMaW5rKTtcblxuICAgIHJldHVybiBuYXZDb250YWluZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiLi9hYm91dC5qc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9uYXZiYXIuanNcIjtcbmNvbnNvbGUubG9nKFwiTG9hZGluZyB1cCBwYWdlXCIpO1xuXG4vLyBUYWIgbG9naWMgZ29lcyB3aXRoaW4gaGVyZSBhY3R1YWxseVxuLy8gd2lwZXMgdGhlIGN1cnJlbnQgZGl2IGFuZCByZXBsYWNlcyBpdCB3aXRoIHRoZSBtb2R1bGUgZGl2XG5cbmNvbnN0IGhvbWVSZW5kZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcIllvdSBjbGlja2VkIG9uIEhPTUVcIik7XG59O1xuXG5jb25zdCBhYm91dFJlbmRlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwiWW91IGNsaWNrZWQgb24gQUJPVVRcIik7XG59O1xuXG5jb25zdCBtZW51UmVuZGVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJZb3UgY2xpY2tlZCBvbiBNRU5VVVVcIik7XG59O1xuXG5jb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7fTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgLy8gaGF2ZSB0aHJlZSBsaW5rcyBoZXJlXG4gICAgLy8gaGVyZSB3ZSBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGxpc3QgZ3JvdXBpbmdcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoTmF2YmFyKCkpO1xuXG4gICAgY29uc3QgY29udGFpbmVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lckVsLmNsYXNzTmFtZSA9IFwiY29udGFpbmVyXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXJFbCk7XG5cbiAgICBjb250YWluZXJFbC5hcHBlbmRDaGlsZChIb21lKCkpO1xuICAgIGNvbnN0IGhvbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1uYXZcIik7XG4gICAgY29uc3QgbWVudUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LW5hdlwiKTtcbiAgICBjb25zdCBhYm91dEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dC1uYXZcIik7XG5cbiAgICBob21lRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGFpbmVyRWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoSG9tZSgpKTtcbiAgICB9KTtcbiAgICBhYm91dEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRhaW5lckVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNvbnRhaW5lckVsLmFwcGVuZENoaWxkKEFib3V0KCkpO1xuICAgIH0pO1xuXG4gICAgbWVudUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRhaW5lckVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNvbnRhaW5lckVsLmFwcGVuZENoaWxkKE1lbnUoKSk7XG4gICAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9