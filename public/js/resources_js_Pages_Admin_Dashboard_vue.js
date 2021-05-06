(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Panel.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Panel.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["title"],
  setup: function setup() {
    var logout = function logout() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.post(route("admin.logout"));
    };

    return {
      logout: logout
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Panel */ "./resources/js/Layouts/Panel.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["statistics"],
  components: {
    Layout: _Layouts_Panel__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Panel.vue?vue&type=template&id=30b5ca30":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Panel.vue?vue&type=template&id=30b5ca30 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex flex-col min-h-screen pt-12 bg-gray-100"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  key: 1
};
var _hoisted_4 = {
  "class": "fixed top-0 z-10 flex w-full shadow"
};
var _hoisted_5 = {
  "class": "flex items-center w-56 h-12 px-5 bg-gray-800 space-s-2"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" لوحة التحكم ");

var _hoisted_7 = {
  "class": "flex items-center justify-end flex-grow h-12 px-5 bg-gray-700 border-b border-gray-800 space-s-1"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ملفي ");

var _hoisted_9 = {
  "class": "flex flex-grow"
};
var _hoisted_10 = {
  "class": "fixed right-0 z-10 w-full h-12 pb-0 bg-gray-700 md:pb-12 top-12 md:w-56 md:h-screen"
};
var _hoisted_11 = {
  "class": "flex h-full p-1 overflow-x-auto md:p-2 space-s-2 md:space-s-0 md:space-y-2 md:flex-col md:overflow-y-auto scrolling-area"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" الاحصائيات ");

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" المناطق ");

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" المدن ");

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" الاعضاء ");

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" الاشتراكات ");

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" رسائل اتصل بنا ");

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" الاعدادات ");

var _hoisted_19 = {
  "class": "flex-grow w-full pt-12 md:pt-0 md:pr-56"
};
var _hoisted_20 = {
  "class": "p-5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("main", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "head"
  }, [$props.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("title", _hoisted_2, "لوحة التحكم | " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("title", _hoisted_3, "لوحة التحكم"))])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("header", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('admin.dashboard'),
    "class": "text-white"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('admin.profile'),
    "class": ["px-2 py-1 text-white rounded hover:bg-gray-800", {
      'bg-gray-800': _ctx.route().current() == 'admin.profile'
    }]
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $setup.logout && $setup.logout.apply($setup, arguments);
    }),
    "class": "px-2 py-1 text-white rounded hover:bg-gray-800"
  }, " خروج ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("article", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('admin.dashboard'),
    "class": ["flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800", {
      'bg-gray-800': _ctx.route().current() == 'admin.dashboard'
    }]
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('admin.regions'),
    "class": ["flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800", {
      'bg-gray-800': ['admin.regions', 'admin.regions.create', 'admin.regions.show'].includes(_ctx.route().current())
    }]
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_13];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('admin.cities'),
    "class": ["flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800", {
      'bg-gray-800': ['admin.cities', 'admin.cities.create', 'admin.cities.show'].includes(_ctx.route().current())
    }]
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_14];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('admin.users'),
    "class": ["flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800", {
      'bg-gray-800': ['admin.users', 'admin.users.create', 'admin.users.show'].includes(_ctx.route().current())
    }]
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_15];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('admin.subscriptions'),
    "class": ["flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800", {
      'bg-gray-800': ['admin.subscriptions'].includes(_ctx.route().current())
    }]
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_16];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('admin.contact-us'),
    "class": ["flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800", {
      'bg-gray-800': ['admin.contact-us', 'admin.contact-us.create', 'admin.contact-us.show'].includes(_ctx.route().current())
    }]
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_17];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('admin.settings'),
    "class": ["flex items-center flex-shrink-0 h-8 px-2 text-white rounded md:h-10 md:px-4 hover:bg-gray-800", {
      'bg-gray-800': ['admin.settings'].includes(_ctx.route().current())
    }]
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_18];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href", "class"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "grid grid-cols-6 gap-4"
};
var _hoisted_2 = {
  "class": "col-span-6 md:col-span-2"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", {
  "class": "text-xl text-gray-900"
}, "المناطق", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "mt-2 bg-white rounded shadow-sm px-4 py-2"
};
var _hoisted_5 = {
  "class": "flex items-center justify-center"
};
var _hoisted_6 = {
  "class": "text-2xl py-4"
};
var _hoisted_7 = {
  "class": "col-span-6 md:col-span-2"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", {
  "class": "text-xl text-gray-900"
}, "المدن", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "mt-2 bg-white rounded shadow-sm px-4 py-2"
};
var _hoisted_10 = {
  "class": "flex items-center justify-center"
};
var _hoisted_11 = {
  "class": "text-2xl py-4"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "md:col-span-2"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "col-span-6 md:col-span-2"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", {
  "class": "text-xl text-gray-900"
}, "العملاء", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "mt-2 bg-white rounded shadow-sm px-4 py-2"
};
var _hoisted_16 = {
  "class": "flex items-center justify-center"
};
var _hoisted_17 = {
  "class": "text-2xl py-4"
};
var _hoisted_18 = {
  "class": "col-span-6 md:col-span-2"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", {
  "class": "text-xl text-gray-900"
}, "الشركات", -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "mt-2 bg-white rounded shadow-sm px-4 py-2"
};
var _hoisted_21 = {
  "class": "flex items-center justify-center"
};
var _hoisted_22 = {
  "class": "text-2xl py-4"
};
var _hoisted_23 = {
  "class": "col-span-6 md:col-span-2"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", {
  "class": "text-xl text-gray-900"
}, "الافراد", -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "mt-2 bg-white rounded shadow-sm px-4 py-2"
};
var _hoisted_26 = {
  "class": "flex items-center justify-center"
};
var _hoisted_27 = {
  "class": "text-2xl py-4"
};
var _hoisted_28 = {
  "class": "col-span-6 md:col-span-4"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", {
  "class": "text-xl text-gray-900"
}, "رسائل اتصل بنا", -1
/* HOISTED */
);

var _hoisted_30 = {
  "class": "mt-2 bg-white rounded shadow-sm px-4 py-2"
};
var _hoisted_31 = {
  "class": "flex items-center justify-around"
};
var _hoisted_32 = {
  "class": "text-2xl py-4"
};
var _hoisted_33 = {
  "class": "text-2xl py-4"
};

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "text-xs italic"
}, "جديدة", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("layout");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_layout, {
    title: "الاحصائيات"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.statistics.regions), 1
      /* TEXT */
      )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.statistics.cities), 1
      /* TEXT */
      )])])]), _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.statistics.clients), 1
      /* TEXT */
      )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.statistics.companies), 1
      /* TEXT */
      )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.statistics.workers), 1
      /* TEXT */
      )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.statistics.messages), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.statistics.new_messages) + " ", 1
      /* TEXT */
      ), _hoisted_34])])])])])];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./resources/js/Layouts/Panel.vue":
/*!****************************************!*\
  !*** ./resources/js/Layouts/Panel.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Panel_vue_vue_type_template_id_30b5ca30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panel.vue?vue&type=template&id=30b5ca30 */ "./resources/js/Layouts/Panel.vue?vue&type=template&id=30b5ca30");
/* harmony import */ var _Panel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel.vue?vue&type=script&lang=js */ "./resources/js/Layouts/Panel.vue?vue&type=script&lang=js");



_Panel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Panel_vue_vue_type_template_id_30b5ca30__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Panel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Layouts/Panel.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Panel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Admin/Dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Admin/Dashboard.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_4dff49ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=4dff49ca */ "./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js");



_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Dashboard_vue_vue_type_template_id_4dff49ca__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Admin/Dashboard.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Layouts/Panel.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/Layouts/Panel.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Panel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Panel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Panel.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Panel.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/Panel.vue?vue&type=template&id=30b5ca30":
/*!**********************************************************************!*\
  !*** ./resources/js/Layouts/Panel.vue?vue&type=template&id=30b5ca30 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Panel_vue_vue_type_template_id_30b5ca30__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Panel_vue_vue_type_template_id_30b5ca30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Panel.vue?vue&type=template&id=30b5ca30 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/Panel.vue?vue&type=template&id=30b5ca30");


/***/ }),

/***/ "./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_4dff49ca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_4dff49ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=template&id=4dff49ca */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca");


/***/ })

}]);