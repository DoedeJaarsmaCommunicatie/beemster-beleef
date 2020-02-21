(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dist/scripts/routes/arrangement-archive"],{

/***/ "./assets/scripts/app/filter/Filter.js":
/*!*********************************************!*\
  !*** ./assets/scripts/app/filter/Filter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _FilterItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterItem */ "./assets/scripts/app/filter/FilterItem.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }



var Filter =
/*#__PURE__*/
function () {
  function Filter() {
    _classCallCheck(this, Filter);

    _isParam.set(this, {
      writable: true,
      value: true
    });

    _defineProperty(this, "target", void 0);
  }

  _createClass(Filter, [{
    key: "build",
    value: function build() {
      if (!this.target) {
        return;
      }

      var items = document.querySelectorAll("[data-param=\"".concat(this.target, "\"]"));

      if (!items || items.length === 0) {
        return;
      }

      for (var i = 0; i < items.length; i++) {
        new _FilterItem__WEBPACK_IMPORTED_MODULE_0__["default"](items[i]).init();
      }

      return this;
    }
    /**
     *
     * @param {string} val
     */

  }, {
    key: "setTarget",
    value: function setTarget(val) {
      this.target = val;
      return this;
    }
  }, {
    key: "isUrl",
    value: function isUrl() {
      _classPrivateFieldSet(this, _isParam, false);

      return this;
    }
  }, {
    key: "isParam",
    value: function isParam() {
      _classPrivateFieldSet(this, _isParam, true);

      return this;
    }
  }]);

  return Filter;
}();

var _isParam = new WeakMap();



/***/ }),

/***/ "./assets/scripts/app/filter/FilterItem.js":
/*!*************************************************!*\
  !*** ./assets/scripts/app/filter/FilterItem.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterItem; });
/* harmony import */ var _URLBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./URLBuilder */ "./assets/scripts/app/filter/URLBuilder.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var FilterItem =
/*#__PURE__*/
function () {
  /**
   * @param {HTMLInputElement} checkbox
   */

  /**
   *
   * @param {HTMLInputElement} el
   */
  function FilterItem(el) {
    _classCallCheck(this, FilterItem);

    _defineProperty(this, "element", void 0);

    _defineProperty(this, "checkbox", void 0);

    this.element = el;
  }

  _createClass(FilterItem, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.element.addEventListener('input', function (e) {
        if (e.target.checked) {
          _this.selectEvent(e);
        } else {
          _this.deSelectEvent(e);
        }
      });
    }
  }, {
    key: "selectEvent",
    value: function selectEvent(e) {
      var el = e.target;
      new _URLBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](el.dataset.param, el.dataset.slug, true).build();
    }
  }, {
    key: "deSelectEvent",
    value: function deSelectEvent(e) {
      var el = e.target;
      new _URLBuilder__WEBPACK_IMPORTED_MODULE_0__["default"](el.dataset.param, el.dataset.slug, false).build();
    }
  }]);

  return FilterItem;
}();



/***/ }),

/***/ "./assets/scripts/app/filter/URLBuilder.js":
/*!*************************************************!*\
  !*** ./assets/scripts/app/filter/URLBuilder.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return URLBuilder; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var URLBuilder =
/*#__PURE__*/
function () {
  /**
   *
   * @param {string} target
   * @param {string} slug
   * @param {boolean} add
   */
  function URLBuilder(target, slug) {
    var add = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    _classCallCheck(this, URLBuilder);

    _defineProperty(this, "path", void 0);

    _defineProperty(this, "target", void 0);

    _defineProperty(this, "slug", void 0);

    _defineProperty(this, "add", void 0);

    this.path = window.location.pathname;
    this.target = target;
    this.slug = slug;
    this.add = add;
  }

  _createClass(URLBuilder, [{
    key: "build",
    value: function build() {
      if (this.hasParams()) {
        if (this.add) {
          window.location.pathname = this.injectParams();
        } else {
          this.removeParams();
        }
      } else {
        window.location.pathname = this.appendParams();
      }
    }
  }, {
    key: "removeParams",
    value: function removeParams() {
      var path = this.path.split('/');
      var params = path[path.indexOf(this.target) + 1].split(',');

      if (params.length < 2) {
        delete path[path.indexOf(this.target)];
        delete path[path.indexOf(this.slug)];
        window.location.pathname = path.join('/');
      } else {
        delete params[params.indexOf(this.slug)];
        path[path.indexOf(this.target) + 1] = params.filter(Boolean).join(',');
        window.location.pathname = path.join('/');
      }
    }
  }, {
    key: "injectParams",
    value: function injectParams() {
      var path = this.path.split('/');
      var params = path[path.indexOf(this.target) + 1].split(',');
      params.push(this.slug);
      path[path.indexOf(this.target) + 1] = params.join(',');
      return path.join('/');
    }
    /**
     *
     * @returns {string}
     */

  }, {
    key: "appendParams",
    value: function appendParams() {
      var path = this.path.split('/');
      path.splice(path.indexOf('arrangement') + 1, 0, this.target);
      path.splice(path.indexOf(this.target) + 1, 0, this.slug);
      return path.join('/');
    }
  }, {
    key: "hasParams",
    value: function hasParams() {
      return this.path.includes(this.target);
    }
  }]);

  return URLBuilder;
}();



/***/ }),

/***/ "./assets/scripts/routes/PostTypeArchiveArrangement.js":
/*!*************************************************************!*\
  !*** ./assets/scripts/routes/PostTypeArchiveArrangement.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_filter_Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/filter/Filter */ "./assets/scripts/app/filter/Filter.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {// Fire initial hooks
  },
  finalize: function finalize() {
    // Javascript that fires on page. after page specific JS is fires.
    themeFilter();
    timeFilter();
  }
});

var themeFilter = function themeFilter() {
  new _app_filter_Filter__WEBPACK_IMPORTED_MODULE_0__["default"]().setTarget('thema').isUrl().build();
};

var timeFilter = function timeFilter() {
  new _app_filter_Filter__WEBPACK_IMPORTED_MODULE_0__["default"]().setTarget('tijd').isUrl().build();
};

/***/ })

}]);