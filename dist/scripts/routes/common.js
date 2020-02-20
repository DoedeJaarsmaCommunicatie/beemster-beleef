(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dist/scripts/routes/common"],{

/***/ "./assets/scripts/app/reviews/Reviews.js":
/*!***********************************************!*\
  !*** ./assets/scripts/app/reviews/Reviews.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reviews; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var Reviews =
/*#__PURE__*/
function () {
  /**
   *
   * @type {Array<HTMLButtonElement>}
   */

  /**
   *
   * @type {Array<HTMLElement>}
   */
  function Reviews() {
    _classCallCheck(this, Reviews);

    _setReviews.add(this);

    _setIndicators.add(this);

    _onload.add(this);

    _defineProperty(this, "indicators", []);

    _defineProperty(this, "reviews", []);

    _classPrivateMethodGet(this, _onload, _onload2).call(this);
  }
  /**
   *
   * @param {number} i index of the
   */


  _createClass(Reviews, [{
    key: "setReviewActive",
    value: function setReviewActive(i) {
      this.hideAll();
      this.show(i);
    }
    /**
     *
     * @param {number} n index of the
     */

  }, {
    key: "showSlide",
    value: function showSlide(n) {
      if (n > this.reviews.length) {
        return;
      }

      this.setReviewActive(n);
    }
    /**
     *
     * @param {number} i
     */

  }, {
    key: "show",
    value: function show(i) {
      this.reviews[i].classList.add('is-active');
      this.indicators[i].classList.add('is-active');
    }
  }, {
    key: "hideAll",
    value: function hideAll() {
      for (var j = 0; j < this.reviews.length; j++) {
        this.reviews[j].classList.remove('is-active');
        this.indicators[j].classList.remove('is-active');
      }
    }
  }]);

  return Reviews;
}();

var _onload = new WeakSet();

var _setIndicators = new WeakSet();

var _setReviews = new WeakSet();

var _onload2 = function _onload2() {
  _classPrivateMethodGet(this, _setIndicators, _setIndicators2).call(this);

  _classPrivateMethodGet(this, _setReviews, _setReviews2).call(this);

  this.showSlide(0);
};

var _setIndicators2 = function _setIndicators2() {
  var indicators = document.querySelectorAll('.review-dot');

  if (indicators.length === 0) {
    throw new Error('No indicators found');
  }

  this.indicators = indicators;
};

var _setReviews2 = function _setReviews2() {
  var reviews = document.querySelectorAll('.review');

  if (reviews.length === 0) {
    throw new Error('No reviews found');
  }

  this.reviews = reviews;
};



/***/ }),

/***/ "./assets/scripts/app/reviews/index.js":
/*!*********************************************!*\
  !*** ./assets/scripts/app/reviews/index.js ***!
  \*********************************************/
/*! exports provided: Reviews, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reviews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reviews */ "./assets/scripts/app/reviews/Reviews.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reviews", function() { return _Reviews__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_Reviews__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./assets/scripts/routes/Common.js":
/*!*****************************************!*\
  !*** ./assets/scripts/routes/Common.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_reviews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/reviews */ "./assets/scripts/app/reviews/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {// Javascript that fires on all pages.
  },
  finalize: function finalize() {
    // Javascript that fires on all pages. after page specific JS is fires.
    window['review'] = new _app_reviews__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
});

/***/ })

}]);