(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tabs/components/news/newsList"],{

/***/ 290:
/*!**********************************************************************************************!*\
  !*** C:/Users/admin/Documents/HBuilderProjects/slhx/pages/tabs/components/news/newsList.vue ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newsList_vue_vue_type_template_id_775cb7dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsList.vue?vue&type=template&id=775cb7dc&scoped=true& */ 291);
/* harmony import */ var _newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsList.vue?vue&type=script&lang=js& */ 293);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);

var renderjs




/* normalize component */

var component = Object(_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newsList_vue_vue_type_template_id_775cb7dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _newsList_vue_vue_type_template_id_775cb7dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "775cb7dc",
  null,
  false,
  _newsList_vue_vue_type_template_id_775cb7dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/tabs/components/news/newsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 291:
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/admin/Documents/HBuilderProjects/slhx/pages/tabs/components/news/newsList.vue?vue&type=template&id=775cb7dc&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_template_id_775cb7dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./newsList.vue?vue&type=template&id=775cb7dc&scoped=true& */ 292);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_template_id_775cb7dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_template_id_775cb7dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_template_id_775cb7dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_template_id_775cb7dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 292:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/admin/Documents/HBuilderProjects/slhx/pages/tabs/components/news/newsList.vue?vue&type=template&id=775cb7dc&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    mypWaterfall: function() {
      return Promise.all(/*! import() | mypUI/myp-waterfall/myp-waterfall */[__webpack_require__.e("common/vendor"), __webpack_require__.e("mypUI/myp-waterfall/myp-waterfall")]).then(__webpack_require__.bind(null, /*! @/mypUI/myp-waterfall/myp-waterfall.vue */ 133))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. ????????????????????????????????????")
    console.error(
      "2. ???????????????????????? easycom ??????????????????https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. ?????????????????? easycom ????????????????????????????????? components ??????????????????"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 293:
/*!***********************************************************************************************************************!*\
  !*** C:/Users/admin/Documents/HBuilderProjects/slhx/pages/tabs/components/news/newsList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./newsList.vue?vue&type=script&lang=js& */ 294);
/* harmony import */ var _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_newsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 294:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/admin/Documents/HBuilderProjects/slhx/pages/tabs/components/news/newsList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var newsItem = function newsItem() {__webpack_require__.e(/*! require.ensure | pages/tabs/components/news/newsItem */ "pages/tabs/components/news/newsItem").then((function () {return resolve(__webpack_require__(/*! ./newsItem.vue */ 298));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};









var rawItems = [{
  title: "??????87????????? ???????????????3????????????",
  ref: "????????????",
  commentNum: "1.2???",
  time: "1?????????",
  top: "1",
  icon: "/static/logo.png" },
{
  title: "31????????????????????????1566+20230???",
  ref: "????????????",
  commentNum: "1.2???",
  time: "1?????????",
  top: "1",
  icon: "/static/logo.png" },
{
  title: "?????????????????????????????????????????????",
  ref: "????????????",
  commentNum: "1.2???",
  time: "1?????????",
  top: "1",
  icon: "/static/logo.png" },
{
  title: "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
  ref: "????????????",
  commentNum: "1.2???",
  time: "1?????????",
  top: "1",
  icon: "/static/logo.png" },

{
  title: "???????????????????????????????????????",
  ref: "????????????",
  commentNum: "12",
  time: "2?????????",
  top: "0",
  icon: "/static/logo.png",
  imgs: ["/static/mock/m2.jpeg"] },

{
  title: "?????????12????????????????????????????????????????????????????????????",
  ref: "????????????",
  commentNum: "12",
  time: "2?????????",
  top: "0",
  icon: "/static/logo.png",
  imgs: ["/static/mock/m12.jpeg"] },

{
  title: "1076???????????????????????????????????????",
  ref: "????????????",
  commentNum: "12",
  time: "2?????????",
  top: "0",
  icon: "/static/logo.png",
  imgs: ["/static/mock/m1.jpeg"] },

{
  title: "????????????????????????????????????????????????????????????????????????????????????",
  ref: "????????????",
  commentNum: "12",
  time: "2?????????",
  top: "0",
  icon: "/static/logo.png",
  imgs: ["/static/mock/m11.jpeg"] },

{
  title: "?????????????????????????????????55????????????",
  ref: "?????????",
  commentNum: "347",
  time: "??????",
  top: "0",
  icon: "/static/logo.png",
  imgs: ["/static/mock/m11.jpeg", "/static/mock/m11.jpeg"] },

{
  title: "?????????????????????????????????????????????",
  ref: "?????????",
  commentNum: "347",
  time: "??????",
  top: "0",
  icon: "/static/logo.png",
  imgs: ["/static/mock/m11.jpeg", "/static/mock/m11.jpeg", "/static/mock/m11.jpeg"] },

{
  title: "???????????????????????????????????????",
  ref: "?????????",
  commentNum: "347",
  time: "??????",
  top: "0",
  icon: "/static/logo.png",
  imgs: ["/static/mock/m11.jpeg", "/static/mock/m11.jpeg", "/static/mock/m11.jpeg"] }

// {
// 	title: "?????????????????????????????????55????????????",
// 	ref: "?????????",
// 	commentNum: "347",
// 	time: "??????",
// 	top: "0",
// 	icon: "/static/logo.png",
// 	imgs: ["/static/mock/m6.jpeg", "/static/mock/m7.jpeg"],
// },
// {
// 	title: "?????????????????????????????????????????????",
// 	ref: "?????????",
// 	commentNum: "347",
// 	time: "??????",
// 	top: "0",
// 	icon: "/static/logo.png",
// 	imgs: ["/static/mock/m3.jpeg", "/static/mock/m4.jpeg", "/static/mock/m5.jpeg"],
// },
// {
// 	title: "???????????????????????????????????????",
// 	ref: "?????????",
// 	commentNum: "347",
// 	time: "??????",
// 	top: "0",
// 	icon: "/static/logo.png",
// 	imgs: ["/static/mock/m8.jpeg", "/static/mock/m9.jpeg", "/static/mock/m10.jpeg"],
// },
];var _default =
{
  components: {
    newsItem: newsItem },

  props: [],
  data: function data() {
    return {
      items: [] };

  },
  computed: {},
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    // ??????
    toLoadData: function toLoadData() {var _this = this;
      var ins = this.$refs['myp-list'];
      var cp = ins.mypCurrentPage;
      var that = this;
      setTimeout(function () {
        if (cp === 1) {
          that.items = rawItems;
          ins.mypEndSuccess(true);
        } else {
          _this.items = _this.items.concat(_this.items);
          if (cp >= 2) {
            ins.mypEndSuccess(false);
          } else {
            ins.mypEndSuccess(true);
          }
        }
      }, 300);
    } } };exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/tabs/components/news/newsList.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/tabs/components/news/newsList-create-component',
    {
        'pages/tabs/components/news/newsList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(290))
        })
    },
    [['pages/tabs/components/news/newsList-create-component']]
]);
