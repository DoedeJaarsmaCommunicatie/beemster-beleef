(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~dist/scripts/routes/common"],{

/***/ "./node_modules/@glidejs/glide/entry/entry-modular.js":
/*!************************************************************!*\
  !*** ./node_modules/@glidejs/glide/entry/entry-modular.js ***!
  \************************************************************/
/*! exports provided: Swipe, Images, Anchors, Controls, Keyboard, Autoplay, Breakpoints, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Glide; });
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index */ "./node_modules/@glidejs/glide/src/index.js");
/* harmony import */ var _src_components_run__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/run */ "./node_modules/@glidejs/glide/src/components/run.js");
/* harmony import */ var _src_components_gaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/gaps */ "./node_modules/@glidejs/glide/src/components/gaps.js");
/* harmony import */ var _src_components_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/html */ "./node_modules/@glidejs/glide/src/components/html.js");
/* harmony import */ var _src_components_peek__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/peek */ "./node_modules/@glidejs/glide/src/components/peek.js");
/* harmony import */ var _src_components_move__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/move */ "./node_modules/@glidejs/glide/src/components/move.js");
/* harmony import */ var _src_components_sizes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/sizes */ "./node_modules/@glidejs/glide/src/components/sizes.js");
/* harmony import */ var _src_components_build__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/build */ "./node_modules/@glidejs/glide/src/components/build.js");
/* harmony import */ var _src_components_clones__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/clones */ "./node_modules/@glidejs/glide/src/components/clones.js");
/* harmony import */ var _src_components_resize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/resize */ "./node_modules/@glidejs/glide/src/components/resize.js");
/* harmony import */ var _src_components_direction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/direction */ "./node_modules/@glidejs/glide/src/components/direction.js");
/* harmony import */ var _src_components_translate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/translate */ "./node_modules/@glidejs/glide/src/components/translate.js");
/* harmony import */ var _src_components_transition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/transition */ "./node_modules/@glidejs/glide/src/components/transition.js");
/* harmony import */ var _src_components_swipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/swipe */ "./node_modules/@glidejs/glide/src/components/swipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swipe", function() { return _src_components_swipe__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _src_components_images__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/images */ "./node_modules/@glidejs/glide/src/components/images.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Images", function() { return _src_components_images__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _src_components_anchors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/components/anchors */ "./node_modules/@glidejs/glide/src/components/anchors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Anchors", function() { return _src_components_anchors__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _src_components_controls__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/components/controls */ "./node_modules/@glidejs/glide/src/components/controls.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controls", function() { return _src_components_controls__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _src_components_keyboard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/components/keyboard */ "./node_modules/@glidejs/glide/src/components/keyboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return _src_components_keyboard__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _src_components_autoplay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/components/autoplay */ "./node_modules/@glidejs/glide/src/components/autoplay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autoplay", function() { return _src_components_autoplay__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _src_components_breakpoints__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../src/components/breakpoints */ "./node_modules/@glidejs/glide/src/components/breakpoints.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breakpoints", function() { return _src_components_breakpoints__WEBPACK_IMPORTED_MODULE_19__["default"]; });
























const COMPONENTS = {
  Html: _src_components_html__WEBPACK_IMPORTED_MODULE_3__["default"],
  Translate: _src_components_translate__WEBPACK_IMPORTED_MODULE_11__["default"],
  Transition: _src_components_transition__WEBPACK_IMPORTED_MODULE_12__["default"],
  Direction: _src_components_direction__WEBPACK_IMPORTED_MODULE_10__["default"],
  Peek: _src_components_peek__WEBPACK_IMPORTED_MODULE_4__["default"],
  Sizes: _src_components_sizes__WEBPACK_IMPORTED_MODULE_6__["default"],
  Gaps: _src_components_gaps__WEBPACK_IMPORTED_MODULE_2__["default"],
  Move: _src_components_move__WEBPACK_IMPORTED_MODULE_5__["default"],
  Clones: _src_components_clones__WEBPACK_IMPORTED_MODULE_8__["default"],
  Resize: _src_components_resize__WEBPACK_IMPORTED_MODULE_9__["default"],
  Build: _src_components_build__WEBPACK_IMPORTED_MODULE_7__["default"],
  Run: _src_components_run__WEBPACK_IMPORTED_MODULE_1__["default"]
}



class Glide extends _src_index__WEBPACK_IMPORTED_MODULE_0__["default"] {
  mount (extensions = {}) {
    return super.mount(Object.assign({}, COMPONENTS, extensions))
  }
}


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/anchors.js":
/*!***************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/anchors.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/object */ "./node_modules/@glidejs/glide/src/utils/object.js");
/* harmony import */ var _core_event_events_binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/event/events-binder */ "./node_modules/@glidejs/glide/src/core/event/events-binder.js");




/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  const Binder = new _core_event_events_binder__WEBPACK_IMPORTED_MODULE_1__["default"]()

  /**
   * Holds detaching status of anchors.
   * Prevents detaching of already detached anchors.
   *
   * @private
   * @type {Boolean}
   */
  let detached = false

  /**
   * Holds preventing status of anchors.
   * If `true` redirection after click will be disabled.
   *
   * @private
   * @type {Boolean}
   */
  let prevented = false

  const Anchors = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount () {
      /**
       * Holds collection of anchors elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._a = Components.Html.wrapper.querySelectorAll('a')

      this.bind()
    },

    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind () {
      Binder.on('click', Components.Html.wrapper, this.click)
    },

    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind () {
      Binder.off('click', Components.Html.wrapper)
    },

    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click (event) {
      if (prevented) {
        event.stopPropagation()
        event.preventDefault()
      }
    },

    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach () {
      prevented = true

      if (!detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = false

          this.items[i].setAttribute(
            'data-href',
            this.items[i].getAttribute('href')
          )

          this.items[i].removeAttribute('href')
        }

        detached = true
      }

      return this
    },

    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach () {
      prevented = false

      if (detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = true

          this.items[i].setAttribute(
            'href',
            this.items[i].getAttribute('data-href')
          )
        }

        detached = false
      }

      return this
    }
  }

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_0__["define"])(Anchors, 'items', {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get () {
      return Anchors._a
    }
  })

  /**
   * Detach anchors inside slides:
   * - on swiping, so they won't redirect to its `href` attributes
   */
  Events.on('swipe.move', () => {
    Anchors.detach()
  })

  /**
   * Attach anchors inside slides:
   * - after swiping and transitions ends, so they can redirect after click again
   */
  Events.on('swipe.end', () => {
    Components.Transition.after(() => {
      Anchors.attach()
    })
  })

  /**
   * Unbind anchors inside slides:
   * - on destroying, to bring anchors to its initial state
   */
  Events.on('destroy', () => {
    Anchors.attach()
    Anchors.unbind()
    Binder.destroy()
  })

  return Anchors
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/autoplay.js":
/*!****************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/autoplay.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/object */ "./node_modules/@glidejs/glide/src/utils/object.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit */ "./node_modules/@glidejs/glide/src/utils/unit.js");
/* harmony import */ var _core_event_events_binder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/event/events-binder */ "./node_modules/@glidejs/glide/src/core/event/events-binder.js");





/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  const Binder = new _core_event_events_binder__WEBPACK_IMPORTED_MODULE_2__["default"]()

  const Autoplay = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount () {
      this.start()

      if (Glide.settings.hoverpause) {
        this.bind()
      }
    },

    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start () {
      if (Glide.settings.autoplay) {
        if (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(this._i)) {
          this._i = setInterval(() => {
            this.stop()

            Components.Run.make('>')

            this.start()
          }, this.time)
        }
      }
    },

    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop () {
      this._i = clearInterval(this._i)
    },

    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind () {
      Binder.on('mouseover', Components.Html.root, () => {
        this.stop()
      })

      Binder.on('mouseout', Components.Html.root, () => {
        this.start()
      })
    },

    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind () {
      Binder.off(['mouseover', 'mouseout'], Components.Html.root)
    }
  }

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_0__["define"])(Autoplay, 'time', {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get () {
      let autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay')

      if (autoplay) {
        return Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["toInt"])(autoplay)
      }

      return Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["toInt"])(Glide.settings.autoplay)
    }
  })

  /**
   * Stop autoplaying and unbind events:
   * - on destroying, to clear defined interval
   * - on updating via API to reset interval that may changed
   */
  Events.on(['destroy', 'update'], () => {
    Autoplay.unbind()
  })

  /**
   * Stop autoplaying:
   * - before each run, to restart autoplaying
   * - on pausing via API
   * - on destroying, to clear defined interval
   * - while starting a swipe
   * - on updating via API to reset interval that may changed
   */
  Events.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], () => {
    Autoplay.stop()
  })

  /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */
  Events.on(['run.after', 'play', 'swipe.end'], () => {
    Autoplay.start()
  })

  /**
   * Remount autoplaying:
   * - on updating via API to reset interval that may changed
   */
  Events.on('update', () => {
    Autoplay.mount()
  })

  /**
   * Destroy a binder:
   * - on destroying glide instance to clearup listeners
   */
  Events.on('destroy', () => {
    Binder.destroy()
  })

  return Autoplay
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/breakpoints.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/breakpoints.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./node_modules/@glidejs/glide/src/utils/log.js");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/wait */ "./node_modules/@glidejs/glide/src/utils/wait.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/unit */ "./node_modules/@glidejs/glide/src/utils/unit.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/object */ "./node_modules/@glidejs/glide/src/utils/object.js");
/* harmony import */ var _core_event_events_binder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/event/events-binder */ "./node_modules/@glidejs/glide/src/core/event/events-binder.js");







/**
 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
 *
 * @param {Object} points
 * @returns {Object}
 */
function sortBreakpoints (points) {
  if (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_2__["isObject"])(points)) {
    return Object(_utils_object__WEBPACK_IMPORTED_MODULE_3__["sortKeys"])(points)
  } else {
    Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["warn"])(`Breakpoints option must be an object`)
  }

  return {}
}

/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  const Binder = new _core_event_events_binder__WEBPACK_IMPORTED_MODULE_4__["default"]()

  /**
   * Holds reference to settings.
   *
   * @type {Object}
   */
  let settings = Glide.settings

  /**
   * Holds reference to breakpoints object in settings. Sorts breakpoints
   * from smaller to larger. It is required in order to proper
   * matching currently active breakpoint settings.
   *
   * @type {Object}
   */
  let points = sortBreakpoints(settings.breakpoints)

  /**
   * Cache initial settings before overwritting.
   *
   * @type {Object}
   */
  let defaults = Object.assign({}, settings)

  const Breakpoints = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match (points) {
      if (typeof window.matchMedia !== 'undefined') {
        for (let point in points) {
          if (points.hasOwnProperty(point)) {
            if (window.matchMedia(`(max-width: ${point}px)`).matches) {
              return points[point]
            }
          }
        }
      }

      return defaults
    }
  }

  /**
   * Overwrite instance settings with currently matching breakpoint settings.
   * This happens right after component initialization.
   */
  Object.assign(settings, Breakpoints.match(points))

  /**
   * Update glide with settings of matched brekpoint:
   * - window resize to update slider
   */
  Binder.on('resize', window, Object(_utils_wait__WEBPACK_IMPORTED_MODULE_1__["throttle"])(() => {
    Glide.settings = Object(_utils_object__WEBPACK_IMPORTED_MODULE_3__["mergeOptions"])(settings, Breakpoints.match(points))
  }, Glide.settings.throttle))

  /**
   * Resort and update default settings:
   * - on reinit via API, so breakpoint matching will be performed with options
   */
  Events.on('update', () => {
    points = sortBreakpoints(points)

    defaults = Object.assign({}, settings)
  })

  /**
   * Unbind resize listener:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destroy', () => {
    Binder.off('resize', window)
  })

  return Breakpoints
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/build.js":
/*!*************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/build.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./node_modules/@glidejs/glide/src/utils/dom.js");


/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  const Build = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount () {
      Events.emit('build.before')

      this.typeClass()
      this.activeClass()

      Events.emit('build.after')
    },

    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass () {
      Components.Html.root.classList.add(Glide.settings.classes[Glide.settings.type])
    },

    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass () {
      let classes = Glide.settings.classes
      let slide = Components.Html.slides[Glide.index]

      if (slide) {
        slide.classList.add(classes.activeSlide)

        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["siblings"])(slide).forEach((sibling) => {
          sibling.classList.remove(classes.activeSlide)
        })
      }
    },

    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses () {
      let classes = Glide.settings.classes

      Components.Html.root.classList.remove(classes[Glide.settings.type])

      Components.Html.slides.forEach((sibling) => {
        sibling.classList.remove(classes.activeSlide)
      })
    }
  }

  /**
   * Clear building classes:
   * - on destroying to bring HTML to its initial state
   * - on updating to remove classes before remounting component
   */
  Events.on(['destroy', 'update'], () => {
    Build.removeClasses()
  })

  /**
   * Remount component:
   * - on resizing of the window to calculate new dimentions
   * - on updating settings via API
   */
  Events.on(['resize', 'update'], () => {
    Build.mount()
  })

  /**
   * Swap active class of current slide:
   * - after each move to the new index
   */
  Events.on('move.after', () => {
    Build.activeClass()
  })

  return Build
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/clones.js":
/*!**************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/clones.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/object */ "./node_modules/@glidejs/glide/src/utils/object.js");


/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  const Clones = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount () {
      this.items = []

      if (Glide.isType('carousel')) {
        this.items = this.collect()
      }
    },

    /**
     * Collect clones with pattern.
     *
     * @return {Void}
     */
    collect (items = []) {
      let { slides } = Components.Html
      let { perView, classes } = Glide.settings

      let peekIncrementer = +!!Glide.settings.peek
      let part = perView + peekIncrementer
      let start = slides.slice(0, part)
      let end = slides.slice(-part)

      for (let r = 0; r < Math.max(1, Math.floor(perView / slides.length)); r++) {
        for (let i = 0; i < start.length; i++) {
          let clone = start[i].cloneNode(true)

          clone.classList.add(classes.cloneSlide)

          items.push(clone)
        }

        for (let i = 0; i < end.length; i++) {
          let clone = end[i].cloneNode(true)

          clone.classList.add(classes.cloneSlide)

          items.unshift(clone)
        }
      }

      return items
    },

    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append () {
      let { items } = this
      let { wrapper, slides } = Components.Html

      let half = Math.floor(items.length / 2)
      let prepend = items.slice(0, half).reverse()
      let append = items.slice(half, items.length)
      let width = `${Components.Sizes.slideWidth}px`

      for (let i = 0; i < append.length; i++) {
        wrapper.appendChild(append[i])
      }

      for (let i = 0; i < prepend.length; i++) {
        wrapper.insertBefore(prepend[i], slides[0])
      }

      for (let i = 0; i < items.length; i++) {
        items[i].style.width = width
      }
    },

    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove () {
      let { items } = this

      for (let i = 0; i < items.length; i++) {
        Components.Html.wrapper.removeChild(items[i])
      }
    }
  }

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_0__["define"])(Clones, 'grow', {
    /**
     * Gets additional dimentions value caused by clones.
     *
     * @return {Number}
     */
    get () {
      return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length
    }
  })

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('update', () => {
    Clones.remove()
    Clones.mount()
    Clones.append()
  })

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('build.before', () => {
    if (Glide.isType('carousel')) {
      Clones.append()
    }
  })

  /**
   * Remove clones HTMLElements:
   * - on destroying, to bring HTML to its initial state
   */
  Events.on('destroy', () => {
    Clones.remove()
  })

  return Clones
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/controls.js":
/*!****************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/controls.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./node_modules/@glidejs/glide/src/utils/dom.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./node_modules/@glidejs/glide/src/utils/object.js");
/* harmony import */ var _utils_detect_passive_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/detect-passive-event */ "./node_modules/@glidejs/glide/src/utils/detect-passive-event.js");
/* harmony import */ var _core_event_events_binder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/event/events-binder */ "./node_modules/@glidejs/glide/src/core/event/events-binder.js");






const NAV_SELECTOR = '[data-glide-el="controls[nav]"]'
const CONTROLS_SELECTOR = '[data-glide-el^="controls"]'

/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  const Binder = new _core_event_events_binder__WEBPACK_IMPORTED_MODULE_3__["default"]()

  let capture = (_utils_detect_passive_event__WEBPACK_IMPORTED_MODULE_2__["default"]) ? { passive: true } : false

  const Controls = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount () {
      /**
       * Collection of navigation HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR)

      /**
       * Collection of controls HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR)

      this.addBindings()
    },

    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive () {
      for (let i = 0; i < this._n.length; i++) {
        this.addClass(this._n[i].children)
      }
    },

    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive () {
      for (let i = 0; i < this._n.length; i++) {
        this.removeClass(this._n[i].children)
      }
    },

    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass (controls) {
      let settings = Glide.settings
      let item = controls[Glide.index]

      if (item) {
        item.classList.add(settings.classes.activeNav)

        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["siblings"])(item).forEach(sibling => {
          sibling.classList.remove(settings.classes.activeNav)
        })
      }
    },

    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass (controls) {
      let item = controls[Glide.index]

      if (item) {
        item.classList.remove(Glide.settings.classes.activeNav)
      }
    },

    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings () {
      for (let i = 0; i < this._c.length; i++) {
        this.bind(this._c[i].children)
      }
    },

    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings () {
      for (let i = 0; i < this._c.length; i++) {
        this.unbind(this._c[i].children)
      }
    },

    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind (elements) {
      for (let i = 0; i < elements.length; i++) {
        Binder.on('click', elements[i], this.click)
        Binder.on('touchstart', elements[i], this.click, capture)
      }
    },

    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind (elements) {
      for (let i = 0; i < elements.length; i++) {
        Binder.off(['click', 'touchstart'], elements[i])
      }
    },

    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in driection precised in
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {Void}
     */
    click (event) {
      event.preventDefault()

      Components.Run.make(Components.Direction.resolve(event.currentTarget.getAttribute('data-glide-dir')))
    }
  }

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_1__["define"])(Controls, 'items', {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get () {
      return Controls._c
    }
  })

  /**
   * Swap active class of current navigation item:
   * - after mounting to set it to initial index
   * - after each move to the new index
   */
  Events.on(['mount.after', 'move.after'], () => {
    Controls.setActive()
  })

  /**
   * Remove bindings and HTML Classes:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destroy', () => {
    Controls.removeBindings()
    Controls.removeActive()
    Binder.destroy()
  })

  return Controls
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/direction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/direction.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./node_modules/@glidejs/glide/src/utils/log.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./node_modules/@glidejs/glide/src/utils/object.js");



const VALID_DIRECTIONS = ['ltr', 'rtl']
const FLIPED_MOVEMENTS = {
  '>': '<',
  '<': '>',
  '=': '='
}

/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  const Direction = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount () {
      this.value = Glide.settings.direction
    },

    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve (pattern) {
      let token = pattern.slice(0, 1)

      if (this.is('rtl')) {
        return pattern.split(token).join(FLIPED_MOVEMENTS[token])
      }

      return pattern
    },

    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is (direction) {
      return this.value === direction
    },

    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass () {
      Components.Html.root.classList.add(Glide.settings.classes.direction[this.value])
    },

    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass () {
      Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value])
    }
  }

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_1__["define"])(Direction, 'value', {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get () {
      return Direction._v
    },

    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set (value) {
      if (VALID_DIRECTIONS.indexOf(value) > -1) {
        Direction._v = value
      } else {
        Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["warn"])('Direction value must be `ltr` or `rtl`')
      }
    }
  })

  /**
   * Clear direction class:
   * - on destroy to bring HTML to its initial state
   * - on update to remove class before reappling bellow
   */
  Events.on(['destroy', 'update'], () => {
    Direction.removeClass()
  })

  /**
   * Remount component:
   * - on update to reflect changes in direction value
   */
  Events.on('update', () => {
    Direction.mount()
  })

  /**
   * Apply direction class:
   * - before building to apply class for the first time
   * - on updating to reapply direction class that may changed
   */
  Events.on(['build.before', 'update'], () => {
    Direction.addClass()
  })

  return Direction
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/gaps.js":
/*!************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/gaps.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/unit */ "./node_modules/@glidejs/glide/src/utils/unit.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./node_modules/@glidejs/glide/src/utils/object.js");
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/wait */ "./node_modules/@glidejs/glide/src/utils/wait.js");




const MARGIN_TYPE = {
  ltr: ['marginLeft', 'marginRight'],
  rtl: ['marginRight', 'marginLeft']
}

/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  const Gaps = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply (slides) {
      for (let i = 0, len = slides.length; i < len; i++) {
        let style = slides[i].style
        let direction = Components.Direction.value

        if (i !== 0) {
          style[MARGIN_TYPE[direction][0]] = `${this.value / 2}px`
        } else {
          style[MARGIN_TYPE[direction][0]] = ''
        }

        if (i !== slides.length - 1) {
          style[MARGIN_TYPE[direction][1]] = `${this.value / 2}px`
        } else {
          style[MARGIN_TYPE[direction][1]] = ''
        }
      }
    },

    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove (slides) {
      for (let i = 0, len = slides.length; i < len; i++) {
        let style = slides[i].style

        style.marginLeft = ''
        style.marginRight = ''
      }
    }
  }

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_1__["define"])(Gaps, 'value', {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get () {
      return Object(_utils_unit__WEBPACK_IMPORTED_MODULE_0__["toInt"])(Glide.settings.gap)
    }
  })

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_1__["define"])(Gaps, 'grow', {
    /**
     * Gets additional dimentions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get () {
      return Gaps.value * (Components.Sizes.length - 1)
    }
  })

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_1__["define"])(Gaps, 'reductor', {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get () {
      let perView = Glide.settings.perView

      return (Gaps.value * (perView - 1)) / perView
    }
  })

  /**
   * Apply calculated gaps:
   * - after building, so slides (including clones) will receive proper margins
   * - on updating via API, to recalculate gaps with new options
   */
  Events.on(['build.after', 'update'], Object(_utils_wait__WEBPACK_IMPORTED_MODULE_2__["throttle"])(() => {
    Gaps.apply(Components.Html.wrapper.children)
  }, 30))

  /**
   * Remove gaps:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', () => {
    Gaps.remove(Components.Html.wrapper.children)
  })

  return Gaps
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/html.js":
/*!************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/html.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./node_modules/@glidejs/glide/src/utils/log.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ "./node_modules/@glidejs/glide/src/utils/dom.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/object */ "./node_modules/@glidejs/glide/src/utils/object.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/unit */ "./node_modules/@glidejs/glide/src/utils/unit.js");





const TRACK_SELECTOR = '[data-glide-el="track"]'

/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components) {
  const Html = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount () {
      this.root = Glide.selector
      this.track = this.root.querySelector(TRACK_SELECTOR)
      this.slides = Array.prototype.slice.call(this.wrapper.children).filter((slide) => {
        return !slide.classList.contains(Glide.settings.classes.cloneSlide)
      })
    }
  }

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_2__["define"])(Html, 'root', {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get () {
      return Html._r
    },

    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set (r) {
      if (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_3__["isString"])(r)) {
        r = document.querySelector(r)
      }

      if (Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["exist"])(r)) {
        Html._r = r
      } else {
        Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["warn"])('Root element must be a existing Html node')
      }
    }
  })

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_2__["define"])(Html, 'track', {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get () {
      return Html._t
    },

    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set (t) {
      if (Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["exist"])(t)) {
        Html._t = t
      } else {
        Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["warn"])(`Could not find track element. Please use ${TRACK_SELECTOR} attribute.`)
      }
    }
  })

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_2__["define"])(Html, 'wrapper', {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get () {
      return Html.track.children[0]
    }
  })

  return Html
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/images.js":
/*!**************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/images.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_event_events_binder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/event/events-binder */ "./node_modules/@glidejs/glide/src/core/event/events-binder.js");


/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  const Binder = new _core_event_events_binder__WEBPACK_IMPORTED_MODULE_0__["default"]()

  const Images = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount () {
      this.bind()
    },

    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind () {
      Binder.on('dragstart', Components.Html.wrapper, this.dragstart)
    },

    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind () {
      Binder.off('dragstart', Components.Html.wrapper)
    },

    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart (event) {
      event.preventDefault()
    }
  }

  /**
   * Remove bindings from images:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destroy', () => {
    Images.unbind()
    Binder.destroy()
  })

  return Images
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/keyboard.js":
/*!****************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/keyboard.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_event_events_binder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/event/events-binder */ "./node_modules/@glidejs/glide/src/core/event/events-binder.js");


/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  const Binder = new _core_event_events_binder__WEBPACK_IMPORTED_MODULE_0__["default"]()

  const Keyboard = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount () {
      if (Glide.settings.keyboard) {
        this.bind()
      }
    },

    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind () {
      Binder.on('keyup', document, this.press)
    },

    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind () {
      Binder.off('keyup', document)
    },

    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press (event) {
      if (event.keyCode === 39) {
        Components.Run.make(Components.Direction.resolve('>'))
      }

      if (event.keyCode === 37) {
        Components.Run.make(Components.Direction.resolve('<'))
      }
    }
  }

  /**
   * Remove bindings from keyboard:
   * - on destroying to remove added events
   * - on updating to remove events before remounting
   */
  Events.on(['destroy', 'update'], () => {
    Keyboard.unbind()
  })

  /**
   * Remount component
   * - on updating to reflect potential changes in settings
   */
  Events.on('update', () => {
    Keyboard.mount()
  })

  /**
   * Destroy binder:
   * - on destroying to remove listeners
   */
  Events.on('destroy', () => {
    Binder.destroy()
  })

  return Keyboard
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/move.js":
/*!************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/move.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/object */ "./node_modules/@glidejs/glide/src/utils/object.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit */ "./node_modules/@glidejs/glide/src/utils/unit.js");



/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  const Move = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount () {
      this._o = 0
    },

    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make (offset = 0) {
      this.offset = offset

      Events.emit('move', {
        movement: this.value
      })

      Components.Transition.after(() => {
        Events.emit('move.after', {
          movement: this.value
        })
      })
    }
  }

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_0__["define"])(Move, 'offset', {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get () {
      return Move._o
    },

    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set (value) {
      Move._o = !Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(value) ? Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["toInt"])(value) : 0
    }
  })

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_0__["define"])(Move, 'translate', {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get () {
      return Components.Sizes.slideWidth * Glide.index
    }
  })

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_0__["define"])(Move, 'value', {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get () {
      let offset = this.offset
      let translate = this.translate

      if (Components.Direction.is('rtl')) {
        return translate + offset
      }

      return translate - offset
    }
  })

  /**
   * Make movement to proper slide on:
   * - before build, so glide will start at `startAt` index
   * - on each standard run to move to newly calculated index
   */
  Events.on(['build.before', 'run'], () => {
    Move.make()
  })

  return Move
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/peek.js":
/*!************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/peek.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/object */ "./node_modules/@glidejs/glide/src/utils/object.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit */ "./node_modules/@glidejs/glide/src/utils/unit.js");



/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  const Peek = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount () {
      this.value = Glide.settings.peek
    }
  }

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_0__["define"])(Peek, 'value', {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get () {
      return Peek._v
    },

    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set (value) {
      if (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value)) {
        value.before = Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["toInt"])(value.before)
        value.after = Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["toInt"])(value.after)
      } else {
        value = Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["toInt"])(value)
      }

      Peek._v = value
    }
  })

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_0__["define"])(Peek, 'reductor', {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get () {
      let value = Peek.value
      let perView = Glide.settings.perView

      if (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value)) {
        return (value.before / perView) + (value.after / perView)
      }

      return value * 2 / perView
    }
  })

  /**
   * Recalculate peeking sizes on:
   * - when resizing window to update to proper percents
   */
  Events.on(['resize', 'update'], () => {
    Peek.mount()
  })

  return Peek
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/resize.js":
/*!**************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/resize.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/wait */ "./node_modules/@glidejs/glide/src/utils/wait.js");
/* harmony import */ var _core_event_events_binder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/event/events-binder */ "./node_modules/@glidejs/glide/src/core/event/events-binder.js");




/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  const Binder = new _core_event_events_binder__WEBPACK_IMPORTED_MODULE_1__["default"]()

  const Resize = {
    /**
     * Initializes window bindings.
     */
    mount () {
      this.bind()
    },

    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind () {
      Binder.on('resize', window, Object(_utils_wait__WEBPACK_IMPORTED_MODULE_0__["throttle"])(() => {
        Events.emit('resize')
      }, Glide.settings.throttle))
    },

    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind () {
      Binder.off('resize', window)
    }
  }

  /**
   * Remove bindings from window:
   * - on destroying, to remove added EventListener
   */
  Events.on('destroy', () => {
    Resize.unbind()
    Binder.destroy()
  })

  return Resize
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/run.js":
/*!***********************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/run.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./node_modules/@glidejs/glide/src/utils/log.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./node_modules/@glidejs/glide/src/utils/object.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/unit */ "./node_modules/@glidejs/glide/src/utils/unit.js");




/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  const Run = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount () {
      this._o = false
    },

    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make (move) {
      if (!Glide.disabled) {
        Glide.disable()

        this.move = move

        Events.emit('run.before', this.move)

        this.calculate()

        Events.emit('run', this.move)

        Components.Transition.after(() => {
          if (this.isStart()) {
            Events.emit('run.start', this.move)
          }

          if (this.isEnd()) {
            Events.emit('run.end', this.move)
          }

          if (this.isOffset('<') || this.isOffset('>')) {
            this._o = false

            Events.emit('run.offset', this.move)
          }

          Events.emit('run.after', this.move)

          Glide.enable()
        })
      }
    },

    /**
     * Calculates current index based on defined move.
     *
     * @return {Void}
     */
    calculate () {
      let { move, length } = this
      let { steps, direction } = move

      let countableSteps = (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(Object(_utils_unit__WEBPACK_IMPORTED_MODULE_2__["toInt"])(steps))) && (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_2__["toInt"])(steps) !== 0)

      switch (direction) {
        case '>':
          if (steps === '>') {
            Glide.index = length
          } else if (this.isEnd()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true

              Glide.index = 0
            }
          } else if (countableSteps) {
            Glide.index += Math.min(length - Glide.index, -Object(_utils_unit__WEBPACK_IMPORTED_MODULE_2__["toInt"])(steps))
          } else {
            Glide.index++
          }
          break

        case '<':
          if (steps === '<') {
            Glide.index = 0
          } else if (this.isStart()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true

              Glide.index = length
            }
          } else if (countableSteps) {
            Glide.index -= Math.min(Glide.index, Object(_utils_unit__WEBPACK_IMPORTED_MODULE_2__["toInt"])(steps))
          } else {
            Glide.index--
          }
          break

        case '=':
          Glide.index = steps
          break

        default:
          Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["warn"])(`Invalid direction pattern [${direction}${steps}] has been used`)
          break
      }
    },

    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart () {
      return Glide.index === 0
    },

    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd () {
      return Glide.index === this.length
    },

    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset (direction) {
      return this._o && this.move.direction === direction
    }
  }

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_1__["define"])(Run, 'move', {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get () {
      return this._m
    },

    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set (value) {
      let step = value.substr(1)

      this._m = {
        direction: value.substr(0, 1),
        steps: step ? (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_2__["toInt"])(step) ? Object(_utils_unit__WEBPACK_IMPORTED_MODULE_2__["toInt"])(step) : step) : 0
      }
    }
  })

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_1__["define"])(Run, 'length', {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get () {
      let { settings } = Glide
      let { length } = Components.Html.slides

      // If the `bound` option is acitve, a maximum running distance should be
      // reduced by `perView` and `focusAt` settings. Running distance
      // should end before creating an empty space after instance.
      if (Glide.isType('slider') && settings.focusAt !== 'center' && settings.bound) {
        return (length - 1) - (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_2__["toInt"])(settings.perView) - 1) + Object(_utils_unit__WEBPACK_IMPORTED_MODULE_2__["toInt"])(settings.focusAt)
      }

      return length - 1
    }
  })

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_1__["define"])(Run, 'offset', {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get () {
      return this._o
    }
  })

  return Run
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/sizes.js":
/*!*************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/sizes.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/object */ "./node_modules/@glidejs/glide/src/utils/object.js");


/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  const Sizes = {
    /**
     * Setups dimentions of slides.
     *
     * @return {Void}
     */
    setupSlides () {
      let width = `${this.slideWidth}px`
      let slides = Components.Html.slides

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.width = width
      }
    },

    /**
     * Setups dimentions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper (dimention) {
      Components.Html.wrapper.style.width = `${this.wrapperSize}px`
    },

    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove () {
      let slides = Components.Html.slides

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.width = ''
      }

      Components.Html.wrapper.style.width = ''
    }
  }

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_0__["define"])(Sizes, 'length', {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get () {
      return Components.Html.slides.length
    }
  })

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_0__["define"])(Sizes, 'width', {
    /**
     * Gets width value of the glide.
     *
     * @return {Number}
     */
    get () {
      return Components.Html.root.offsetWidth
    }
  })

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_0__["define"])(Sizes, 'wrapperSize', {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get () {
      return (Sizes.slideWidth * Sizes.length) + Components.Gaps.grow + Components.Clones.grow
    }
  })

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_0__["define"])(Sizes, 'slideWidth', {
    /**
     * Gets width value of the single slide.
     *
     * @return {Number}
     */
    get () {
      return (Sizes.width / Glide.settings.perView) - Components.Peek.reductor - Components.Gaps.reductor
    }
  })

  /**
   * Apply calculated glide's dimensions:
   * - before building, so other dimentions (e.g. translate) will be calculated propertly
   * - when resizing window to recalculate sildes dimensions
   * - on updating via API, to calculate dimensions based on new options
   */
  Events.on(['build.before', 'resize', 'update'], () => {
    Sizes.setupSlides()
    Sizes.setupWrapper()
  })

  /**
   * Remove calculated glide's dimensions:
   * - on destoting to bring markup to its inital state
   */
  Events.on('destroy', () => {
    Sizes.remove()
  })

  return Sizes
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/swipe.js":
/*!*************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/swipe.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_wait__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/wait */ "./node_modules/@glidejs/glide/src/utils/wait.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit */ "./node_modules/@glidejs/glide/src/utils/unit.js");
/* harmony import */ var _utils_detect_passive_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/detect-passive-event */ "./node_modules/@glidejs/glide/src/utils/detect-passive-event.js");
/* harmony import */ var _core_event_events_binder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/event/events-binder */ "./node_modules/@glidejs/glide/src/core/event/events-binder.js");






const START_EVENTS = ['touchstart', 'mousedown']
const MOVE_EVENTS = ['touchmove', 'mousemove']
const END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave']
const MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave']

/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  const Binder = new _core_event_events_binder__WEBPACK_IMPORTED_MODULE_3__["default"]()

  let swipeSin = 0
  let swipeStartX = 0
  let swipeStartY = 0
  let disabled = false
  let capture = (_utils_detect_passive_event__WEBPACK_IMPORTED_MODULE_2__["default"]) ? { passive: true } : false

  const Swipe = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount () {
      this.bindSwipeStart()
    },

    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start (event) {
      if (!disabled && !Glide.disabled) {
        this.disable()

        let swipe = this.touches(event)

        swipeSin = null
        swipeStartX = Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["toInt"])(swipe.pageX)
        swipeStartY = Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["toInt"])(swipe.pageY)

        this.bindSwipeMove()
        this.bindSwipeEnd()

        Events.emit('swipe.start')
      }
    },

    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move (event) {
      if (!Glide.disabled) {
        let { touchAngle, touchRatio, classes } = Glide.settings

        let swipe = this.touches(event)

        let subExSx = Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["toInt"])(swipe.pageX) - swipeStartX
        let subEySy = Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["toInt"])(swipe.pageY) - swipeStartY
        let powEX = Math.abs(subExSx << 2)
        let powEY = Math.abs(subEySy << 2)
        let swipeHypotenuse = Math.sqrt(powEX + powEY)
        let swipeCathetus = Math.sqrt(powEY)

        swipeSin = Math.asin(swipeCathetus / swipeHypotenuse)

        if (swipeSin * 180 / Math.PI < touchAngle) {
          event.stopPropagation()

          Components.Move.make(subExSx * Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["toFloat"])(touchRatio))

          Components.Html.root.classList.add(classes.dragging)

          Events.emit('swipe.move')
        } else {
          return false
        }
      }
    },

    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end (event) {
      if (!Glide.disabled) {
        let settings = Glide.settings

        let swipe = this.touches(event)
        let threshold = this.threshold(event)

        let swipeDistance = swipe.pageX - swipeStartX
        let swipeDeg = swipeSin * 180 / Math.PI
        let steps = Math.round(swipeDistance / Components.Sizes.slideWidth)

        this.enable()

        if (swipeDistance > threshold && swipeDeg < settings.touchAngle) {
          // While swipe is positive and greater than threshold move backward.
          if (settings.perTouch) {
            steps = Math.min(steps, Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["toInt"])(settings.perTouch))
          }

          if (Components.Direction.is('rtl')) {
            steps = -steps
          }

          Components.Run.make(Components.Direction.resolve(`<${steps}`))
        } else if (
          swipeDistance < -threshold &&
          swipeDeg < settings.touchAngle
        ) {
          // While swipe is negative and lower than negative threshold move forward.
          if (settings.perTouch) {
            steps = Math.max(steps, -Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["toInt"])(settings.perTouch))
          }

          if (Components.Direction.is('rtl')) {
            steps = -steps
          }

          Components.Run.make(Components.Direction.resolve(`>${steps}`))
        } else {
          // While swipe don't reach distance apply previous transform.
          Components.Move.make()
        }

        Components.Html.root.classList.remove(settings.classes.dragging)

        this.unbindSwipeMove()
        this.unbindSwipeEnd()

        Events.emit('swipe.end')
      }
    },

    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart () {
      let settings = Glide.settings

      if (settings.swipeThreshold) {
        Binder.on(START_EVENTS[0], Components.Html.wrapper, (event) => {
          this.start(event)
        }, capture)
      }

      if (settings.dragThreshold) {
        Binder.on(START_EVENTS[1], Components.Html.wrapper, (event) => {
          this.start(event)
        }, capture)
      }
    },

    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart () {
      Binder.off(START_EVENTS[0], Components.Html.wrapper, capture)
      Binder.off(START_EVENTS[1], Components.Html.wrapper, capture)
    },

    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove () {
      Binder.on(MOVE_EVENTS, Components.Html.wrapper, Object(_utils_wait__WEBPACK_IMPORTED_MODULE_0__["throttle"])((event) => {
        this.move(event)
      }, Glide.settings.throttle), capture)
    },

    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove () {
      Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture)
    },

    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd () {
      Binder.on(END_EVENTS, Components.Html.wrapper, (event) => {
        this.end(event)
      })
    },

    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd () {
      Binder.off(END_EVENTS, Components.Html.wrapper)
    },

    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches (event) {
      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return event
      }

      return event.touches[0] || event.changedTouches[0]
    },

    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold (event) {
      let settings = Glide.settings

      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return settings.dragThreshold
      }

      return settings.swipeThreshold
    },

    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable () {
      disabled = false

      Components.Transition.enable()

      return this
    },

    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable () {
      disabled = true

      Components.Transition.disable()

      return this
    }
  }

  /**
   * Add component class:
   * - after initial building
   */
  Events.on('build.after', () => {
    Components.Html.root.classList.add(Glide.settings.classes.swipeable)
  })

  /**
   * Remove swiping bindings:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destroy', () => {
    Swipe.unbindSwipeStart()
    Swipe.unbindSwipeMove()
    Swipe.unbindSwipeEnd()
    Binder.destroy()
  })

  return Swipe
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/transition.js":
/*!******************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/transition.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/object */ "./node_modules/@glidejs/glide/src/utils/object.js");


/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  /**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */
  let disabled = false

  const Transition = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose (property) {
      let settings = Glide.settings

      if (!disabled) {
        return `${property} ${this.duration}ms ${settings.animationTimingFunc}`
      }

      return `${property} 0ms ${settings.animationTimingFunc}`
    },

    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set (property = 'transform') {
      Components.Html.wrapper.style.transition = this.compose(property)
    },

    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove () {
      Components.Html.wrapper.style.transition = ''
    },

    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after (callback) {
      setTimeout(() => {
        callback()
      }, this.duration)
    },

    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable () {
      disabled = false

      this.set()
    },

    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable () {
      disabled = true

      this.set()
    }
  }

  Object(_utils_object__WEBPACK_IMPORTED_MODULE_0__["define"])(Transition, 'duration', {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get () {
      let settings = Glide.settings

      if (Glide.isType('slider') && Components.Run.offset) {
        return settings.rewindDuration
      }

      return settings.animationDuration
    }
  })

  /**
   * Set transition `style` value:
   * - on each moving, because it may be cleared by offset move
   */
  Events.on('move', () => {
    Transition.set()
  })

  /**
   * Disable transition:
   * - before initial build to avoid transitioning from `0` to `startAt` index
   * - while resizing window and recalculating dimentions
   * - on jumping from offset transition at start and end edges in `carousel` type
   */
  Events.on(['build.before', 'resize', 'translate.jump'], () => {
    Transition.disable()
  })

  /**
   * Enable transition:
   * - on each running, because it may be disabled by offset move
   */
  Events.on('run', () => {
    Transition.enable()
  })

  /**
   * Remove transition:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', () => {
    Transition.remove()
  })

  return Transition
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/components/translate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/components/translate.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mutator_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mutator/index */ "./node_modules/@glidejs/glide/src/mutator/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  const Translate = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set (value) {
      let transform = Object(_mutator_index__WEBPACK_IMPORTED_MODULE_0__["default"])(Glide, Components).mutate(value)

      Components.Html.wrapper.style.transform = `translate3d(${-1 * transform}px, 0px, 0px)`
    },

    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove () {
      Components.Html.wrapper.style.transform = ''
    }
  }

  /**
   * Set new translate value:
   * - on move to reflect index change
   * - on updating via API to reflect possible changes in options
   */
  Events.on('move', (context) => {
    let gap = Components.Gaps.value
    let length = Components.Sizes.length
    let width = Components.Sizes.slideWidth

    if (Glide.isType('carousel') && Components.Run.isOffset('<')) {
      Components.Transition.after(() => {
        Events.emit('translate.jump')

        Translate.set(width * (length - 1))
      })

      return Translate.set(-width - (gap * length))
    }

    if (Glide.isType('carousel') && Components.Run.isOffset('>')) {
      Components.Transition.after(() => {
        Events.emit('translate.jump')

        Translate.set(0)
      })

      return Translate.set((width * length) + (gap * length))
    }

    return Translate.set(context.movement)
  })

  /**
   * Remove translate:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', () => {
    Translate.remove()
  })

  return Translate
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/core/event/events-binder.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/core/event/events-binder.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventsBinder; });
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/unit */ "./node_modules/@glidejs/glide/src/utils/unit.js");


class EventsBinder {
  /**
   * Construct a EventsBinder instance.
   */
  constructor (listeners = {}) {
    this.listeners = listeners
  }

  /**
   * Adds events listeners to arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Function} closure
   * @param  {Boolean|Object} capture
   * @return {Void}
   */
  on (events, el, closure, capture = false) {
    if (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_0__["isString"])(events)) {
      events = [events]
    }

    for (let i = 0; i < events.length; i++) {
      this.listeners[events[i]] = closure

      el.addEventListener(events[i], this.listeners[events[i]], capture)
    }
  }

  /**
   * Removes event listeners from arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Boolean|Object} capture
   * @return {Void}
   */
  off (events, el, capture = false) {
    if (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_0__["isString"])(events)) {
      events = [events]
    }

    for (let i = 0; i < events.length; i++) {
      el.removeEventListener(events[i], this.listeners[events[i]], capture)
    }
  }

  /**
   * Destroy collected listeners.
   *
   * @returns {Void}
   */
  destroy () {
    delete this.listeners
  }
}


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/core/event/events-bus.js":
/*!******************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/core/event/events-bus.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventsBus; });
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/unit */ "./node_modules/@glidejs/glide/src/utils/unit.js");


class EventsBus {
  /**
   * Construct a EventBus instance.
   *
   * @param {Object} events
   */
  constructor (events = {}) {
    this.events = events
    this.hop = events.hasOwnProperty
  }

  /**
   * Adds listener to the specifed event.
   *
   * @param {String|Array} event
   * @param {Function} handler
   */
  on (event, handler) {
    if (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_0__["isArray"])(event)) {
      for (let i = 0; i < event.length; i++) {
        this.on(event[i], handler)
      }
    }

    // Create the event's object if not yet created
    if (!this.hop.call(this.events, event)) {
      this.events[event] = []
    }

    // Add the handler to queue
    var index = this.events[event].push(handler) - 1

    // Provide handle back for removal of event
    return {
      remove () {
        delete this.events[event][index]
      }
    }
  }

  /**
   * Runs registered handlers for specified event.
   *
   * @param {String|Array} event
   * @param {Object=} context
   */
  emit (event, context) {
    if (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_0__["isArray"])(event)) {
      for (let i = 0; i < event.length; i++) {
        this.emit(event[i], context)
      }
    }

    // If the event doesn't exist, or there's no handlers in queue, just leave
    if (!this.hop.call(this.events, event)) {
      return
    }

    // Cycle through events queue, fire!
    this.events[event].forEach((item) => {
      item(context || {})
    })
  }
}


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/core/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/core/index.js ***!
  \*******************************************************/
/*! exports provided: mount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount", function() { return mount; });
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./node_modules/@glidejs/glide/src/utils/log.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit */ "./node_modules/@glidejs/glide/src/utils/unit.js");



/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
 */
function mount (glide, extensions, events) {
  let components = {}

  for (let name in extensions) {
    if (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(extensions[name])) {
      components[name] = extensions[name](glide, components, events)
    } else {
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["warn"])('Extension must be a function')
    }
  }

  for (let name in components) {
    if (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(components[name].mount)) {
      components[name].mount()
    }
  }

  return components
}


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/defaults.js":
/*!*****************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/defaults.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: 'slider',

  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,

  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,

  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,

  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,

  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: false,

  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: true,

  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: true,

  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: false,

  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,

  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,

  /**
   * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
   *
   * @type {Number|Boolean}
   */
  perTouch: false,

  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,

  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,

  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,

  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: true,

  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,

  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,

  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: 'ltr',

  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,

  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},

  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    direction: {
      ltr: 'glide--ltr',
      rtl: 'glide--rtl'
    },
    slider: 'glide--slider',
    carousel: 'glide--carousel',
    swipeable: 'glide--swipeable',
    dragging: 'glide--dragging',
    cloneSlide: 'glide__slide--clone',
    activeNav: 'glide__bullet--active',
    activeSlide: 'glide__slide--active',
    disabledArrow: 'glide__arrow--disabled'
  }
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Glide; });
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults */ "./node_modules/@glidejs/glide/src/defaults.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log */ "./node_modules/@glidejs/glide/src/utils/log.js");
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/index */ "./node_modules/@glidejs/glide/src/core/index.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/object */ "./node_modules/@glidejs/glide/src/utils/object.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/unit */ "./node_modules/@glidejs/glide/src/utils/unit.js");
/* harmony import */ var _core_event_events_bus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/event/events-bus */ "./node_modules/@glidejs/glide/src/core/event/events-bus.js");








class Glide {
  /**
   * Construct glide.
   *
   * @param  {String} selector
   * @param  {Object} options
   */
  constructor (selector, options = {}) {
    this._c = {}
    this._t = []
    this._e = new _core_event_events_bus__WEBPACK_IMPORTED_MODULE_5__["default"]()

    this.disabled = false
    this.selector = selector
    this.settings = Object(_utils_object__WEBPACK_IMPORTED_MODULE_3__["mergeOptions"])(_defaults__WEBPACK_IMPORTED_MODULE_0__["default"], options)
    this.index = this.settings.startAt
  }

  /**
   * Initializes glide.
   *
   * @param {Object} extensions Collection of extensions to initialize.
   * @return {Glide}
   */
  mount (extensions = {}) {
    this._e.emit('mount.before')

    if (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_4__["isObject"])(extensions)) {
      this._c = Object(_core_index__WEBPACK_IMPORTED_MODULE_2__["mount"])(this, extensions, this._e)
    } else {
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["warn"])('You need to provide a object on `mount()`')
    }

    this._e.emit('mount.after')

    return this
  }

  /**
   * Collects an instance `translate` transformers.
   *
   * @param  {Array} transformers Collection of transformers.
   * @return {Void}
   */
  mutate (transformers = []) {
    if (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_4__["isArray"])(transformers)) {
      this._t = transformers
    } else {
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["warn"])('You need to provide a array on `mutate()`')
    }

    return this
  }

  /**
   * Updates glide with specified settings.
   *
   * @param {Object} settings
   * @return {Glide}
   */
  update (settings = {}) {
    this.settings = Object(_utils_object__WEBPACK_IMPORTED_MODULE_3__["mergeOptions"])(this.settings, settings)

    if (settings.hasOwnProperty('startAt')) {
      this.index = settings.startAt
    }

    this._e.emit('update')

    return this
  }

  /**
   * Change slide with specified pattern. A pattern must be in the special format:
   * `>` - Move one forward
   * `<` - Move one backward
   * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
   * `>>` - Rewinds to end (last slide)
   * `<<` - Rewinds to start (first slide)
   *
   * @param {String} pattern
   * @return {Glide}
   */
  go (pattern) {
    this._c.Run.make(pattern)

    return this
  }

  /**
   * Move track by specified distance.
   *
   * @param {String} distance
   * @return {Glide}
   */
  move (distance) {
    this._c.Transition.disable()
    this._c.Move.make(distance)

    return this
  }

  /**
   * Destroy instance and revert all changes done by this._c.
   *
   * @return {Glide}
   */
  destroy () {
    this._e.emit('destroy')

    return this
  }

  /**
   * Start instance autoplaying.
   *
   * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
   * @return {Glide}
   */
  play (interval = false) {
    if (interval) {
      this.settings.autoplay = interval
    }

    this._e.emit('play')

    return this
  }

  /**
   * Stop instance autoplaying.
   *
   * @return {Glide}
   */
  pause () {
    this._e.emit('pause')

    return this
  }

  /**
   * Sets glide into a idle status.
   *
   * @return {Glide}
   */
  disable () {
    this.disabled = true

    return this
  }

  /**
   * Sets glide into a active status.
   *
   * @return {Glide}
   */
  enable () {
    this.disabled = false

    return this
  }

  /**
   * Adds cuutom event listener with handler.
   *
   * @param  {String|Array} event
   * @param  {Function} handler
   * @return {Glide}
   */
  on (event, handler) {
    this._e.on(event, handler)

    return this
  }

  /**
   * Checks if glide is a precised type.
   *
   * @param  {String} name
   * @return {Boolean}
   */
  isType (name) {
    return this.settings.type === name
  }

  /**
   * Gets value of the core options.
   *
   * @return {Object}
   */
  get settings () {
    return this._o
  }

  /**
   * Sets value of the core options.
   *
   * @param  {Object} o
   * @return {Void}
   */
  set settings (o) {
    if (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_4__["isObject"])(o)) {
      this._o = o
    } else {
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["warn"])('Options must be an `object` instance.')
    }
  }

  /**
   * Gets current index of the slider.
   *
   * @return {Object}
   */
  get index () {
    return this._i
  }

  /**
   * Sets current index a slider.
   *
   * @return {Object}
   */
  set index (i) {
    this._i = Object(_utils_unit__WEBPACK_IMPORTED_MODULE_4__["toInt"])(i)
  }

  /**
   * Gets type name of the slider.
   *
   * @return {String}
   */
  get type () {
    return this.settings.type
  }

  /**
   * Gets value of the idle status.
   *
   * @return {Boolean}
   */
  get disabled () {
    return this._d
  }

  /**
   * Sets value of the idle status.
   *
   * @return {Boolean}
   */
  set disabled (status) {
    this._d = !!status
  }
}


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/mutator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/mutator/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./node_modules/@glidejs/glide/src/utils/log.js");
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/unit */ "./node_modules/@glidejs/glide/src/utils/unit.js");
/* harmony import */ var _transformers_rtl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformers/rtl */ "./node_modules/@glidejs/glide/src/mutator/transformers/rtl.js");
/* harmony import */ var _transformers_gap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transformers/gap */ "./node_modules/@glidejs/glide/src/mutator/transformers/gap.js");
/* harmony import */ var _transformers_grow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transformers/grow */ "./node_modules/@glidejs/glide/src/mutator/transformers/grow.js");
/* harmony import */ var _transformers_peeking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transformers/peeking */ "./node_modules/@glidejs/glide/src/mutator/transformers/peeking.js");
/* harmony import */ var _transformers_focusing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transformers/focusing */ "./node_modules/@glidejs/glide/src/mutator/transformers/focusing.js");









/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components, Events) {
  /**
   * Merge instance transformers with collection of default transformers.
   * It's important that the Rtl component be last on the list,
   * so it reflects all previous transformations.
   *
   * @type {Array}
   */
  let TRANSFORMERS = [
    _transformers_gap__WEBPACK_IMPORTED_MODULE_3__["default"],
    _transformers_grow__WEBPACK_IMPORTED_MODULE_4__["default"],
    _transformers_peeking__WEBPACK_IMPORTED_MODULE_5__["default"],
    _transformers_focusing__WEBPACK_IMPORTED_MODULE_6__["default"]
  ].concat(Glide._t, [_transformers_rtl__WEBPACK_IMPORTED_MODULE_2__["default"]])

  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate (translate) {
      for (var i = 0; i < TRANSFORMERS.length; i++) {
        let transformer = TRANSFORMERS[i]

        if (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(transformer) && Object(_utils_unit__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(transformer().modify)) {
          translate = transformer(Glide, Components, Events).modify(translate)
        } else {
          Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["warn"])('Transformer should be a function that returns an object with `modify()` method')
        }
      }

      return translate
    }
  }
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/mutator/transformers/focusing.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/mutator/transformers/focusing.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify (translate) {
      let gap = Components.Gaps.value
      let width = Components.Sizes.width
      let focusAt = Glide.settings.focusAt
      let slideWidth = Components.Sizes.slideWidth

      if (focusAt === 'center') {
        return translate - (width / 2 - slideWidth / 2)
      }

      return translate - (slideWidth * focusAt) - (gap * focusAt)
    }
  }
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/mutator/transformers/gap.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/mutator/transformers/gap.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify (translate) {
      return translate + (Components.Gaps.value * Glide.index)
    }
  }
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/mutator/transformers/grow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/mutator/transformers/grow.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify (translate) {
      return translate + (Components.Clones.grow / 2)
    }
  }
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/mutator/transformers/peeking.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/mutator/transformers/peeking.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/unit */ "./node_modules/@glidejs/glide/src/utils/unit.js");


/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify (translate) {
      if (Glide.settings.focusAt >= 0) {
        let peek = Components.Peek.value

        if (Object(_utils_unit__WEBPACK_IMPORTED_MODULE_0__["isObject"])(peek)) {
          return translate - peek.before
        }

        return translate - peek
      }

      return translate
    }
  }
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/mutator/transformers/rtl.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/mutator/transformers/rtl.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (Glide, Components) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify (translate) {
      if (Components.Direction.is('rtl')) {
        return -translate
      }

      return translate
    }
  }
});


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/utils/detect-passive-event.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/utils/detect-passive-event.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */

let supportsPassive = false

try {
  let opts = Object.defineProperty({}, 'passive', {
    get () {
      supportsPassive = true
    }
  })

  window.addEventListener('testPassive', null, opts)
  window.removeEventListener('testPassive', null, opts)
} catch (e) {}

/* harmony default export */ __webpack_exports__["default"] = (supportsPassive);


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/utils/dom.js":
/*!******************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/utils/dom.js ***!
  \******************************************************/
/*! exports provided: siblings, exist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return siblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exist", function() { return exist; });
/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */
function siblings (node) {
  if (node && node.parentNode) {
    let n = node.parentNode.firstChild
    let matched = []

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== node) {
        matched.push(n)
      }
    }

    return matched
  }

  return []
}

/**
 * Checks if passed node exist and is a valid element.
 *
 * @param  {Element} node
 * @return {Boolean}
 */
function exist (node) {
  if (node && node instanceof window.HTMLElement) {
    return true
  }

  return false
}


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/utils/log.js":
/*!******************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/utils/log.js ***!
  \******************************************************/
/*! exports provided: warn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
 */
function warn (msg) {
  console.error(`[Glide warn]: ${msg}`)
}


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/utils/object.js":
/*!*********************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/utils/object.js ***!
  \*********************************************************/
/*! exports provided: define, sortKeys, mergeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "define", function() { return define; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortKeys", function() { return sortKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */
function define (obj, prop, definition) {
  Object.defineProperty(obj, prop, definition)
}

/**
 * Sorts aphabetically object keys.
 *
 * @param  {Object} obj
 * @return {Object}
 */
function sortKeys (obj) {
  return Object.keys(obj).sort().reduce((r, k) => {
    r[k] = obj[k]

    return (r[k], r)
  }, {})
}

/**
 * Merges passed settings object with default options.
 *
 * @param  {Object} defaults
 * @param  {Object} settings
 * @return {Object}
 */
function mergeOptions (defaults, settings) {
  let options = Object.assign({}, defaults, settings)

  // `Object.assign` do not deeply merge objects, so we
  // have to do it manually for every nested object
  // in options. Although it does not look smart,
  // it's smaller and faster than some fancy
  // merging deep-merge algorithm script.
  if (settings.hasOwnProperty('classes')) {
    options.classes = Object.assign({}, defaults.classes, settings.classes)

    if (settings.classes.hasOwnProperty('direction')) {
      options.classes.direction = Object.assign({}, defaults.classes.direction, settings.classes.direction)
    }
  }

  if (settings.hasOwnProperty('breakpoints')) {
    options.breakpoints = Object.assign({}, defaults.breakpoints, settings.breakpoints)
  }

  return options
}


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/utils/time.js":
/*!*******************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/utils/time.js ***!
  \*******************************************************/
/*! exports provided: now */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/**
 * Returns a current time.
 *
 * @return {Number}
 */
function now () {
  return new Date().getTime()
}


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/utils/unit.js":
/*!*******************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/utils/unit.js ***!
  \*******************************************************/
/*! exports provided: toInt, toFloat, isString, isObject, isNumber, isFunction, isUndefined, isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt", function() { return toInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloat", function() { return toFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toInt (value) {
  return parseInt(value)
}

/**
 * Converts value entered as number
 * or string to flat value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toFloat (value) {
  return parseFloat(value)
}

/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */
function isString (value) {
  return typeof value === 'string'
}

/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
 */
function isObject (value) {
  let type = typeof value

  return type === 'function' || type === 'object' && !!value // eslint-disable-line no-mixed-operators
}

/**
 * Indicates whether the specified value is a number.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isNumber (value) {
  return typeof value === 'number'
}

/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isFunction (value) {
  return typeof value === 'function'
}

/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isUndefined (value) {
  return typeof value === 'undefined'
}

/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isArray (value) {
  return value.constructor === Array
}


/***/ }),

/***/ "./node_modules/@glidejs/glide/src/utils/wait.js":
/*!*******************************************************!*\
  !*** ./node_modules/@glidejs/glide/src/utils/wait.js ***!
  \*******************************************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./node_modules/@glidejs/glide/src/utils/time.js");


/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
 */
function throttle (func, wait, options) {
  let timeout, context, args, result
  let previous = 0
  if (!options) options = {}

  let later = function () {
    previous = options.leading === false ? 0 : Object(_time__WEBPACK_IMPORTED_MODULE_0__["now"])()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }

  let throttled = function () {
    let at = Object(_time__WEBPACK_IMPORTED_MODULE_0__["now"])()
    if (!previous && options.leading === false) previous = at
    let remaining = wait - (at - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = at
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }

  throttled.cancel = function () {
    clearTimeout(timeout)
    previous = 0
    timeout = context = args = null
  }

  return throttled
}


/***/ })

}]);