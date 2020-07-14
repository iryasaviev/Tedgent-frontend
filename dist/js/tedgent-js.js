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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/app.css":
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/app.css?");

/***/ }),

/***/ "./src/css/dark-theme.css":
/*!********************************!*\
  !*** ./src/css/dark-theme.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/dark-theme.css?");

/***/ }),

/***/ "./src/css/raiting.css":
/*!*****************************!*\
  !*** ./src/css/raiting.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/raiting.css?");

/***/ }),

/***/ "./src/css/settings.css":
/*!******************************!*\
  !*** ./src/css/settings.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/settings.css?");

/***/ }),

/***/ "./src/css/test-create.css":
/*!*********************************!*\
  !*** ./src/css/test-create.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/test-create.css?");

/***/ }),

/***/ "./src/css/test-result.css":
/*!*********************************!*\
  !*** ./src/css/test-result.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/test-result.css?");

/***/ }),

/***/ "./src/css/test.css":
/*!**************************!*\
  !*** ./src/css/test.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/test.css?");

/***/ }),

/***/ "./src/css/tests.css":
/*!***************************!*\
  !*** ./src/css/tests.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/tests.css?");

/***/ }),

/***/ "./src/img/pp.jpg":
/*!************************!*\
  !*** ./src/img/pp.jpg ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/pp.jpg\");\n\n//# sourceURL=webpack:///./src/img/pp.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/app.css */ \"./src/css/app.css\");\n/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_raiting_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/raiting.css */ \"./src/css/raiting.css\");\n/* harmony import */ var _css_raiting_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_raiting_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_test_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/test.css */ \"./src/css/test.css\");\n/* harmony import */ var _css_test_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_test_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_tests_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/tests.css */ \"./src/css/tests.css\");\n/* harmony import */ var _css_tests_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_tests_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_test_create_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/test-create.css */ \"./src/css/test-create.css\");\n/* harmony import */ var _css_test_create_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_test_create_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_test_result_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/test-result.css */ \"./src/css/test-result.css\");\n/* harmony import */ var _css_test_result_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_test_result_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_settings_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/settings.css */ \"./src/css/settings.css\");\n/* harmony import */ var _css_settings_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_settings_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_dark_theme_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/dark-theme.css */ \"./src/css/dark-theme.css\");\n/* harmony import */ var _css_dark_theme_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_dark_theme_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _img_pp_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/pp.jpg */ \"./src/img/pp.jpg\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ \"./src/js/page.js\");\n\r\n\r\nclass App {\r\n    constructor() { }\r\n\r\n    load() {\r\n        new _page__WEBPACK_IMPORTED_MODULE_0__[\"Page\"]().setHandlers();\r\n    }\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    let app = new App().load();\r\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/controls.js":
/*!****************************!*\
  !*** ./src/js/controls.js ***!
  \****************************/
/*! exports provided: Controls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controls\", function() { return Controls; });\n/**\r\n * Класс с методами для работы с элементами управления.\r\n */\r\nclass Controls {\r\n    constructor(page) {\r\n        this.page = page;\r\n    }\r\n\r\n    /**\r\n     * Отключает возможность взайимодествия с кнопкой.\r\n     * \r\n     * @param {object} btn кнопка, которую нужно отключить.\r\n     */\r\n    disableButton(btn) {\r\n        if (!btn.classList.contains('btn-disable')) {\r\n            btn.classList.add('btn-disable');\r\n        }\r\n\r\n        if (!btn.hasAttribute('disabled')) {\r\n            btn.setAttribute('disabled', '');\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Включает возможность взайимодествия с кнопкой.\r\n     * \r\n     * @param {object} btn кнопка, которую нужно включить.\r\n     */\r\n    enableButton(btn) {\r\n        if (btn.classList.contains('btn-disable')) {\r\n            btn.classList.remove('btn-disable');\r\n        }\r\n\r\n        if (btn.hasAttribute('disabled')) {\r\n            btn.removeAttribute('disabled');\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Изменяет состояние тумблера.\r\n     * \r\n     * @param {object} toggle элемент.\r\n     */\r\n    switchToggle(toggle) {\r\n        toggle.classList.toggle('toggle-active');\r\n\r\n        let toggleBtn = toggle.getElementsByClassName('js-toggle-btn')[0];\r\n        if (toggle.classList.contains('toggle-active')) {\r\n            toggleBtn.dataset.toggleValue = 'true';\r\n        }\r\n        else {\r\n            toggleBtn.dataset.toggleValue = 'false';\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Устанавливает обработчики событий.\r\n     */\r\n    setHandlers() {\r\n\r\n        // Устанавливает обработчики события на тумблеры\r\n        let toggles = this.page.body.getElementsByClassName('js-toggle');\r\n        for (let toggle of toggles) {\r\n            let toggleBtn = toggle.getElementsByClassName('js-toggle-btn')[0];\r\n            toggleBtn.onclick = () => this.switchToggle(toggle);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/controls.js?");

/***/ }),

/***/ "./src/js/cookie.js":
/*!**************************!*\
  !*** ./src/js/cookie.js ***!
  \**************************/
/*! exports provided: Cookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cookie\", function() { return Cookie; });\nclass Cookie {\r\n    getCookie(name) {\r\n        let matches = document.cookie.match(new RegExp(\r\n            \"(?:^|; )\" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, '\\\\$1') + \"=([^;]*)\"\r\n        ));\r\n        return matches ? decodeURIComponent(matches[1]) : undefined;\r\n    }\r\n\r\n    setCookie(name, value, options = {}) {\r\n        options = {\r\n            path: '/',\r\n            ...options\r\n        };\r\n\r\n        if (options.expires instanceof Date) {\r\n            options.expires = options.expires.toUTCString();\r\n        }\r\n\r\n        let updatedCookie = encodeURIComponent(name) + \"=\" + encodeURIComponent(value);\r\n\r\n        for (let optionKey in options) {\r\n            updatedCookie += \"; \" + optionKey;\r\n            let optionValue = options[optionKey];\r\n            if (optionValue !== true) {\r\n                updatedCookie += \"=\" + optionValue;\r\n            }\r\n        }\r\n\r\n        document.cookie = updatedCookie;\r\n    }\r\n\r\n    deleteCookie(name) {\r\n        setCookie(name, \"\", {\r\n            'max-age': -1\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/cookie.js?");

/***/ }),

/***/ "./src/js/darkTheme.js":
/*!*****************************!*\
  !*** ./src/js/darkTheme.js ***!
  \*****************************/
/*! exports provided: DarkTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DarkTheme\", function() { return DarkTheme; });\n/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie */ \"./src/js/cookie.js\");\n\r\n\r\nclass DarkTheme {\r\n    setOrRemoveTheme() {\r\n        let cookie = new _cookie__WEBPACK_IMPORTED_MODULE_0__[\"Cookie\"](),\r\n            cookieValue = cookie.getCookie('darkTheme');\r\n\r\n        if (cookieValue !== undefined) {\r\n            let body = document.getElementById('body');\r\n            if (cookieValue === 'true') {\r\n                cookie.deleteCookie('darkTheme');\r\n            }\r\n            else {\r\n                cookie.setCookie('darkTheme', 'true');\r\n            }\r\n            body.classList.toggle('dark-theme');\r\n        }\r\n        else {\r\n            cookie.setCookie('darkTheme', 'true');\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/darkTheme.js?");

/***/ }),

/***/ "./src/js/fields.js":
/*!**************************!*\
  !*** ./src/js/fields.js ***!
  \**************************/
/*! exports provided: Fields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Fields\", function() { return Fields; });\nclass Fields {\r\n    constructor(page) {\r\n        this.page = page;\r\n    }\r\n\r\n    /**\r\n     * Проверяет количество введенных символов в поле и предпринимает соотвествующие меры при нарушении ограничений.\r\n     * \r\n     * @param {*} event событие.\r\n     * @param {*} inpWrapper обёрточный блок родитель у поля для ввода и блока количества введенных символов.\r\n     */\r\n    checkValueLengthAndTakeAction(event, inpWrapper) {\r\n        let maxLimit = 200, minLimit = 0;\r\n\r\n        if (inpWrapper.dataset.charactersLimit !== 'true')\r\n            return;\r\n\r\n        let inp = event.target;\r\n\r\n        if (inp.dataset.charactersMaxLimitValue !== undefined) {\r\n            maxLimit = Number(inp.dataset.charactersMaxLimitValue);\r\n        }\r\n\r\n        if (inp.dataset.charactersMinLimitValue !== undefined) {\r\n            minLimit = Number(inp.dataset.charactersMinLimitValue);\r\n        }\r\n\r\n        if (!this.checkCharactersLimit(inp.value, maxLimit, minLimit)) {\r\n            this.overwriteValue(inp, maxLimit);\r\n        }\r\n\r\n        this.changeCharactersLimitValue(inpWrapper, inp, maxLimit);\r\n    }\r\n\r\n    /**\r\n     * Перезаписывает введенное в поле значение в пределах лимита.\r\n     * \r\n     * @param {*} inp поле для ввода.\r\n     * @param {number} maxLimit максимально допустимое количество символов.\r\n     */\r\n    overwriteValue(inp, maxLimit) {\r\n        let newValue = '',\r\n            charNum = 1;\r\n\r\n        for (let char of inp.value) {\r\n\r\n            if (newValue == undefined || newValue == '') {\r\n                newValue = char\r\n            }\r\n            else {\r\n                newValue += char;\r\n            }\r\n\r\n            if (charNum >= maxLimit) {\r\n                break;\r\n            }\r\n\r\n            charNum++;\r\n        }\r\n\r\n        inp.value = newValue;\r\n    }\r\n\r\n    /**\r\n     * Меняет значение количества введеных символов в соответсвующем блоке.\r\n     * \r\n     * @param {*} inpWrapper обёрточный блок родитель у поля для ввода и блока количества введенных символов.\r\n     * @param {*} inp поле для ввода.\r\n     * @param {number} maxLimit максимально допустимое количество символов из которого вычитается количество введенных.\r\n     * \r\n     */\r\n    changeCharactersLimitValue(inpWrapper, inp, maxLimit) {\r\n        let valueTag = inpWrapper.getElementsByClassName('js-inp-limit-value')[0];\r\n\r\n        if (valueTag !== undefined) {\r\n            valueTag.innerText = maxLimit - inp.value.length;\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Проверяет количество введенных символов с поставленным ограничением.\r\n     * \r\n     * @param {string} value введенное значение.\r\n     * @param {number} maxLimit максимально допустимое количество символов.\r\n     * @param {number} minLimit  минимально допустимое количество символов. По умолчанию = 0.\r\n     */\r\n    checkCharactersLimit(value, maxLimit = 200, minLimit = 0) {\r\n        if (value.length <= minLimit) {\r\n            return false;\r\n        }\r\n\r\n        if (value.length >= maxLimit) {\r\n            return false;\r\n        }\r\n\r\n        return true;\r\n    }\r\n\r\n    /**\r\n     * Проверяет введенные значения и приводит их к соотвествующему виду в поле для ввода даты.\r\n     * \r\n     * @param {object} event объект события.\r\n     */\r\n    checkValueForDateInput(event) {\r\n        let inp = event.target,\r\n            value = inp.value,\r\n            newValue = '',\r\n            charNum = 0;\r\n\r\n        for (let char of value) {\r\n\r\n            // Проверка на числовой тип и точку\r\n            if (isNaN(char) && char !== '.') {\r\n                break;\r\n            }\r\n\r\n            // Если кол-во символов превышает или равно 10\r\n            if (charNum >= 10) {\r\n                break;\r\n            }\r\n\r\n            // Ставится точка после 2 числовых символов (день)\r\n            if (charNum === 2) {\r\n                if (char !== '.') {\r\n                    newValue += '.';\r\n                }\r\n            }\r\n\r\n            // Ставится точка после 5 символов (месяц)\r\n            if (charNum === 5) {\r\n                if (char !== '.') {\r\n                    newValue += '.';\r\n                }\r\n            }\r\n\r\n            newValue += char;\r\n\r\n            charNum++;\r\n        }\r\n\r\n        inp.value = newValue;\r\n    }\r\n\r\n    /**\r\n     * Автоматический увеличивает высоту textarea по мере его заполнения.\r\n     * \r\n     * @param {object} event объект события.\r\n     * @param {number} paddingTop верхний padding поля.\r\n     * @param {number} paddingBottom нижний padding поля.\r\n     * @param {string} defaultHeight размер поля по умолчанию (прим. 36px).\r\n     */\r\n    autoHeightChange(event, paddingTop, paddingBottom, defaultHeight = 'inherit') {\r\n        let inp = event.target,\r\n            computed = window.getComputedStyle(inp);\r\n\r\n        inp.style.height = defaultHeight;\r\n\r\n        let height = parseInt(computed.getPropertyValue('border-top-width'), 10)\r\n            + parseInt(computed.getPropertyValue('padding-top'), 10)\r\n            + inp.scrollHeight - (paddingTop + paddingBottom)\r\n            + parseInt(computed.getPropertyValue('padding-bottom'), 10)\r\n            + parseInt(computed.getPropertyValue('border-bottom-width'), 10);\r\n\r\n        if (inp.value === '') {\r\n            inp.removeAttribute('style');\r\n        }\r\n        else {\r\n            inp.style.height = height + 'px';\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Устанавливает обработчики событий.\r\n     */\r\n    setHandlers() { \r\n        let inpWrappers = this.page.body.getElementsByClassName('js-inp-wrapper');\r\n        for (let inpWrapper of inpWrappers) {\r\n            if (inpWrapper.dataset.autoHangHandler === 'true') {\r\n                inpWrapper.getElementsByClassName('js-inp')[0].oninput = (event) => this.checkValueLengthAndTakeAction(event, inpWrapper);\r\n            }\r\n        }\r\n\r\n        let dateInps = this.page.body.getElementsByClassName('js-date-inp');\r\n        for (let dateInp of dateInps) {\r\n            dateInp.oninput = (event) => this.checkValueForDateInput(event);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/fields.js?");

/***/ }),

/***/ "./src/js/message.js":
/*!***************************!*\
  !*** ./src/js/message.js ***!
  \***************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\nclass Message {\r\n    constructor() {\r\n        this.body = document.getElementById('body');\r\n        this.messWrapper = this.body.getElementsByClassName('js-message')[0];\r\n    }\r\n\r\n    show(text) {\r\n        let messText = this.messWrapper.getElementsByClassName('js-message-text')[0];\r\n\r\n        messText.innerText = text;\r\n\r\n        if (!this.body.classList.contains('message-active')) {\r\n            this.body.classList.add('message-active');\r\n        }\r\n\r\n        setTimeout(this.hide, 4000);\r\n    }\r\n\r\n    hide() {\r\n        if (this.body.classList.contains('message-active')) {\r\n            this.body.classList.remove('message-active');\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/message.js?");

/***/ }),

/***/ "./src/js/moreMenu.js":
/*!****************************!*\
  !*** ./src/js/moreMenu.js ***!
  \****************************/
/*! exports provided: MoreMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MoreMenu\", function() { return MoreMenu; });\nclass MoreMenu {\r\n    constructor() {\r\n        this.items = document.getElementsByClassName('js-more-menu');\r\n    }\r\n\r\n    openOrClose(wrapper) {\r\n        wrapper.classList.toggle('active');\r\n    }\r\n\r\n    setHandlers() {\r\n        for (let item of this.items) {\r\n            item.getElementsByClassName('js-more-menu-btn')[0].onclick = () => this.openOrClose(item);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/moreMenu.js?");

/***/ }),

/***/ "./src/js/page.js":
/*!************************!*\
  !*** ./src/js/page.js ***!
  \************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Page\", function() { return Page; });\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./src/js/sidebar.js\");\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select */ \"./src/js/select.js\");\n/* harmony import */ var _photoFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photoFrame */ \"./src/js/photoFrame.js\");\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls */ \"./src/js/controls.js\");\n/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fields */ \"./src/js/fields.js\");\n/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings */ \"./src/js/settings/settings.js\");\n/* harmony import */ var _moreMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moreMenu */ \"./src/js/moreMenu.js\");\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message */ \"./src/js/message.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// import { TestCreate } from './testCreate/testCreate';\r\n\r\n\r\n\r\n\r\n\r\nclass Page {\r\n    constructor() {\r\n        this.body = document.getElementById('body');\r\n        this.backgroundImg = this.body.getElementsByClassName('js-background-img')[0];\r\n        this.content = document.getElementById('bodyContent');\r\n        this.menu = this.body.getElementsByClassName('js-menu')[0];\r\n        this.menuPageTitle = this.menu.getElementsByClassName('js-menu-page-title')[0];\r\n        this.photoFrame = this.body.getElementsByClassName('js-photo-frame')[0];\r\n        this.message = this.body.getElementsByClassName('js-message')[0];\r\n\r\n        this.selectCl = new _select__WEBPACK_IMPORTED_MODULE_1__[\"Select\"]();\r\n        this.messageCl = new _message__WEBPACK_IMPORTED_MODULE_7__[\"Message\"]();\r\n        this.photoFrameCl = new _photoFrame__WEBPACK_IMPORTED_MODULE_2__[\"PhotoFrame\"](this);\r\n\r\n        this.controlsCl = new _controls__WEBPACK_IMPORTED_MODULE_3__[\"Controls\"](this);\r\n        this.fieldCl = new _fields__WEBPACK_IMPORTED_MODULE_4__[\"Fields\"](this);\r\n\r\n        this.num = this.body.dataset.pageNum;\r\n    }\r\n\r\n    /**\r\n     * Закрывает все активные всплывающие окна, селекты и подобные элементы по клику на body.\r\n     * \r\n     * @param {*} event событие.\r\n     */\r\n    closeWindows(event) {\r\n        const items = this.body.getElementsByClassName('active'),\r\n            itemsCount = items.length;\r\n\r\n        for (let i = 0; itemsCount > i; i++) {\r\n            if (!items[0].contains(event.target)) {\r\n                items[0].classList.remove('active');\r\n            }\r\n        }\r\n    }\r\n\r\n    runPage(pageNum) {\r\n        let contentBd = this.content.getElementsByClassName('js-conent-bd')[0];\r\n\r\n        \r\n    }\r\n\r\n    setHandlers() {\r\n        switch (this.num) {\r\n            // Profile page\r\n            case '1':\r\n                break;\r\n\r\n            // Tests list page\r\n            case '2':\r\n                break;\r\n\r\n            // Test create page\r\n            case '3':\r\n                new TestCreate(this).setHandlers();\r\n                break;\r\n\r\n            // Test page\r\n            case '3':\r\n                new Test(this).setHandlers();\r\n                break;\r\n\r\n            // Test result for crator page\r\n            case '4':\r\n                break;\r\n\r\n            // Settings page\r\n            case '5':\r\n                new _settings_settings__WEBPACK_IMPORTED_MODULE_5__[\"Settings\"](this).setHandlers();\r\n                break;\r\n\r\n            // Service settings page\r\n            case '6':\r\n                break;\r\n        }\r\n\r\n        this.photoFrameCl.setHandlers();\r\n        new _sidebar__WEBPACK_IMPORTED_MODULE_0__[\"Sidebar\"]().setHandlers();\r\n        this.selectCl.setHandlers();\r\n        new _moreMenu__WEBPACK_IMPORTED_MODULE_6__[\"MoreMenu\"]().setHandlers();\r\n        this.controlsCl.setHandlers();\r\n        this.fieldCl.setHandlers();\r\n\r\n        this.body.onclick = (event) => this.closeWindows(event);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/page.js?");

/***/ }),

/***/ "./src/js/photoFrame.js":
/*!******************************!*\
  !*** ./src/js/photoFrame.js ***!
  \******************************/
/*! exports provided: PhotoFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PhotoFrame\", function() { return PhotoFrame; });\nclass PhotoFrame {\r\n    constructor(page) {\r\n        this.page = page;\r\n\r\n        this.wrapper = page.body.getElementsByClassName('js-photo-frame')[0];\r\n        this.img = this.wrapper.getElementsByClassName('js-photo-frame-img')[0];\r\n    }\r\n\r\n    /**\r\n     * Показывает или закрывает необходимое изображение.\r\n     * \r\n     * @param {*} pathToImg путь к изображению.\r\n     */\r\n    showOrCloseFrame(pathToImg) {\r\n        if (pathToImg !== undefined) {\r\n            if (!this.page.body.classList.contains('photo-frame-active')) {\r\n                this.page.body.classList.add('photo-frame-active');\r\n            }\r\n            this.img.src = pathToImg;\r\n        }\r\n        else {\r\n            if (this.page.body.classList.contains('photo-frame-active')) {\r\n                this.page.body.classList.remove('photo-frame-active');\r\n            }\r\n            this.img.src = '';\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Устанавливает обработчики событий.\r\n     */\r\n    setHandlers() {\r\n        this.wrapper.onclick = () => this.showOrCloseFrame();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/photoFrame.js?");

/***/ }),

/***/ "./src/js/select.js":
/*!**************************!*\
  !*** ./src/js/select.js ***!
  \**************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Select\", function() { return Select; });\nclass Select {\r\n    constructor() {\r\n        this.items = document.getElementsByClassName('js-select');\r\n    }\r\n\r\n    openOrClose(currentSelect) {\r\n        currentSelect.classList.toggle('active');\r\n    }\r\n\r\n    selectItem(currentSelect, currentOption, isLoading = true) {\r\n        let optionValue = currentOption.innerHTML;\r\n        currentSelect.getElementsByClassName('select_hd-value')[0].innerHTML = optionValue;\r\n        currentSelect.getElementsByClassName('select_hd-value')[0].dataset.selectOptionValue = currentOption.dataset.selectOption;\r\n\r\n        let valueInp = currentSelect.getElementsByClassName('js-select-value-inp')[0],\r\n            event = new Event('input');\r\n\r\n        valueInp.value = currentOption.dataset.selectOption;\r\n        valueInp.dispatchEvent(event);\r\n\r\n        if (!isLoading) {\r\n            this.openOrClose(currentSelect);\r\n        }\r\n    }\r\n\r\n    setHandlers() {\r\n        for (let item of this.items) {\r\n            item.getElementsByClassName('js-select-head')[0].onclick = () => this.openOrClose(item);\r\n\r\n            for (let option of item.getElementsByClassName('select_bd-option')) {\r\n                option.addEventListener('click', () => this.selectItem(item, option, false));\r\n\r\n                if (option.classList.contains('option-choice')) {\r\n                    this.selectItem(item, option, true);\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/select.js?");

/***/ }),

/***/ "./src/js/settings/serviceSettings.js":
/*!********************************************!*\
  !*** ./src/js/settings/serviceSettings.js ***!
  \********************************************/
/*! exports provided: ServiceSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ServiceSettings\", function() { return ServiceSettings; });\nclass ServiceSettings {\r\n    constructor(page) {\r\n        this.page = page;\r\n    }\r\n\r\n    /**\r\n     * Изменяет фоновое изображение.\r\n     * \r\n     * @param {object} imgWrapper родительский блок выбранного изображения.\r\n     * @param {object} solidColorToggle тумблер переключения фона на сплошной цвет. Срабатывает (выключается) при выборе изображения в качестве фона.\r\n     */\r\n    changeBackgroundImage(imgWrapper, solidColorToggle) {\r\n        const imgNum = imgWrapper.dataset.backgroundImgNum;\r\n\r\n        let bcgSelector = `bd_bcg-${imgNum}`;\r\n\r\n        for (let num = 1; 6 >= num; num++) {\r\n            if (this.page.backgroundImg.classList.contains(`bd_bcg-${num}`)) {\r\n                this.page.backgroundImg.classList.remove(`bd_bcg-${num}`);\r\n            }\r\n        }\r\n\r\n        this.page.backgroundImg.classList.add(bcgSelector);\r\n\r\n        if (!this.page.backgroundImg.classList.contains('bd_bcg-active')) {\r\n            this.page.backgroundImg.classList.add('bd_bcg-active');\r\n\r\n            if (solidColorToggle.classList.contains('toggle-active')) {\r\n                this.page.controlsCl.switchToggle(solidColorToggle);\r\n            }\r\n        }\r\n\r\n        // ToDo: Реализовать отправку изменений на сервер.\r\n    }\r\n\r\n    /**\r\n     * Выбирает размыто ли фоновое изображение.\r\n     * \r\n     * @param {object} toggle тумблер.\r\n     */\r\n    toggleBackgroundBlur(toggle) {\r\n        let toggleValue = toggle.getElementsByClassName('js-toggle-btn')[0].dataset.toggleValue;\r\n\r\n        if (toggleValue === 'true') {\r\n            if (!this.page.backgroundImg.classList.contains('bd_bcg-blur')) {\r\n                this.page.backgroundImg.classList.add('bd_bcg-blur');\r\n            }\r\n        }\r\n        else {\r\n            if (this.page.backgroundImg.classList.contains('bd_bcg-blur')) {\r\n                this.page.backgroundImg.classList.remove('bd_bcg-blur');\r\n            }\r\n        }\r\n\r\n        // ToDo: Реализовать отправку изменений на сервер.\r\n    }\r\n\r\n    /**\r\n     * Выбирает является ли сплошной цвет фоном.\r\n     * \r\n     * @param {object} toggle тумблер.\r\n     */\r\n    toggleBackgroundSolidColor(toggle) {\r\n        let toggleValue = toggle.getElementsByClassName('js-toggle-btn')[0].dataset.toggleValue;\r\n\r\n        if (toggleValue === 'true') {\r\n            if (this.page.backgroundImg.classList.contains('bd_bcg-active')) {\r\n                this.page.backgroundImg.classList.remove('bd_bcg-active');\r\n            }\r\n        }\r\n        else {\r\n            if (!this.page.backgroundImg.classList.contains('bd_bcg-active')) {\r\n                this.page.backgroundImg.classList.add('bd_bcg-active');\r\n            }\r\n        }\r\n\r\n        // ToDo: Реализовать отправку изменений на сервер.\r\n    }\r\n\r\n    /**\r\n     * Устанавливает обработчики событий.\r\n     */\r\n    setHandlers() {\r\n\r\n        // Устанавливает обработчики событий на выбираемые фоновые изображения\r\n        let bcgImgWrapper = this.page.content.getElementsByClassName('js-settings-service-appearance-img-wrapper'),\r\n            bcgImgSolidColorToggle = this.page.content.getElementsByClassName('js-settings-service-appearance-img-solid-color-toggle')[0]\r\n        for (let wrapper of bcgImgWrapper) {\r\n            wrapper.onclick = () => this.changeBackgroundImage(wrapper, bcgImgSolidColorToggle);\r\n        }\r\n\r\n        // Устанавливает обработчик события на тумблер для выбора размытия фона\r\n        let bcgImgBlurToggle = this.page.content.getElementsByClassName('js-settings-service-appearance-img-blur-toggle')[0];\r\n        bcgImgBlurToggle.onclick = () => this.toggleBackgroundBlur(bcgImgBlurToggle);\r\n\r\n        // Устанавливает обработчик события на тумблер для установки сплошного цвета в качестве фона\r\n        bcgImgSolidColorToggle.onclick = () => this.toggleBackgroundSolidColor(bcgImgSolidColorToggle);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/settings/serviceSettings.js?");

/***/ }),

/***/ "./src/js/settings/settings.js":
/*!*************************************!*\
  !*** ./src/js/settings/settings.js ***!
  \*************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Settings\", function() { return Settings; });\n/* harmony import */ var _settingsContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settingsContent */ \"./src/js/settings/settingsContent.js\");\n/* harmony import */ var _serviceSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serviceSettings */ \"./src/js/settings/serviceSettings.js\");\n\r\n\r\n\r\n\r\nclass Settings {\r\n    constructor(page) {\r\n        this.page = page;\r\n    }\r\n\r\n    checkAndRunPage(pageNum) {\r\n        let content;\r\n\r\n        switch (pageNum) {\r\n            case '5.1':\r\n                content = new _settingsContent__WEBPACK_IMPORTED_MODULE_0__[\"SettingsContent\"]().getAccountSettingsPage();\r\n                break;\r\n\r\n            case '5.2':\r\n                content = new _settingsContent__WEBPACK_IMPORTED_MODULE_0__[\"SettingsContent\"]().getServiceSettingsPage();\r\n                break;\r\n        }\r\n\r\n        let body = this.page.body.getElementsByClassName('js-settings-bd')[0];\r\n        body.innerHTML = content;\r\n    }\r\n\r\n    /**\r\n     * Устанавливает обработчики событий.\r\n     */\r\n    setHandlers() {\r\n        let pivotMenu = this.page.body.getElementsByClassName('js-settings-pivot-menu')[0],\r\n            pivotMenuBtns = pivotMenu.getElementsByClassName('js-settings-pivot-menu-btn');\r\n\r\n        for (let pivotMenuBtn of pivotMenuBtns) {\r\n            pivotMenuBtn.onclick = () => this.checkAndRunPage(pivotMenuBtn.dataset.linkBtnPageNum);\r\n        }\r\n\r\n        // if (this.page.num === '6') {\r\n        //     new ServiceSettings(this.page).setHandlers();\r\n        // }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/settings/settings.js?");

/***/ }),

/***/ "./src/js/settings/settingsContent.js":
/*!********************************************!*\
  !*** ./src/js/settings/settingsContent.js ***!
  \********************************************/
/*! exports provided: SettingsContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SettingsContent\", function() { return SettingsContent; });\nclass SettingsContent {\r\n\r\n    getAccountSettingsPage(data) {\r\n        return `<div class=\"cnt-block\">\r\n        <div class=\"cnt-block_hd\">\r\n          <div class=\"cnt-block_hd-title\">Публичные данные</div>\r\n        </div>\r\n        <div class=\"settings-acc-info-block_bd cnt-block_bd\">\r\n          <label class=\"settings-acc-info-label\">\r\n            <span class=\"label-txt\">Фамилия</span>\r\n            <div class=\"inp_wr inp-limit-value-visisble js-inp-wrapper\" data-characters-limit=\"true\"\r\n              data-auto-hang-handler=\"true\">\r\n              <input class=\"inp js-inp\" name=\"firstName\" data-characters-max-limit-value=\"50\" type=\"text\">\r\n              <span class=\"inp-limit--value js-inp-limit-value\">50</span>\r\n            </div>\r\n          </label>\r\n          <label class=\"settings-acc-info-label\">\r\n            <span class=\"label-txt\">Имя</span>\r\n            <div class=\"inp_wr inp-limit-value-visisble js-inp-wrapper\" data-characters-limit=\"true\"\r\n              data-auto-hang-handler=\"true\">\r\n              <input class=\"inp js-inp\" name=\"lastName\" data-characters-max-limit-value=\"50\" type=\"text\">\r\n              <span class=\"inp-limit--value js-inp-limit-value\">50</span>\r\n            </div>\r\n          </label>\r\n          <label class=\"settings-acc-info-label\">\r\n            <span class=\"label-txt\">Отчество</span>\r\n            <div class=\"inp_wr inp-limit-value-visisble js-inp-wrapper\" data-characters-limit=\"true\"\r\n              data-auto-hang-handler=\"true\">\r\n              <input class=\"inp js-inp\" name=\"patronymic\" data-characters-max-limit-value=\"50\" type=\"text\">\r\n              <span class=\"inp-limit--value js-inp-limit-value\">50</span>\r\n            </div>\r\n          </label>\r\n          <label class=\"settings-acc-info-label\">\r\n            <span class=\"label-txt\">Дата рождения</span>\r\n            <div class=\"date-inp_wr\">\r\n              <span class=\"date-inp--icon inp--icon i-calendar\"></span>\r\n              <input class=\"inp date--inp js-date-inp\" type=\"text\"\r\n                placeholder=\"03.07.2020\">\r\n            </div>\r\n          </label>\r\n          <label class=\"settings-acc-info-label\">\r\n            <span class=\"label-txt\">Имя пользователя</span>\r\n            <div class=\"inp_wr inp-limit-value-visisble js-inp-wrapper\" data-characters-limit=\"true\"\r\n              data-auto-hang-handler=\"true\">\r\n              <input class=\"inp js-inp\" name=\"userName\" data-characters-max-limit-value=\"30\" type=\"text\">\r\n              <span class=\"inp-limit--value js-inp-limit-value\">30</span>\r\n            </div>\r\n            <span class=\"label-dsc\">Имя пользователя позволяет найти Ваш профиль не зная Вашего личного\r\n              идентификатора.</span>\r\n            <span class=\"label-dsc\">Можно использовать латиницу (a-z), цифры (0-9) и тире. Минимальная длина — 5\r\n              символов.</span>\r\n            <span class=\"label-dsc\">Ваш профиль будет доступен по ссылке <a\r\n                class=\"link js-settings-account-info-username-link\"\r\n                href=\"https://tedgent.org/ir-yasaviev\">https://tedgent.org/ir-yasaviev</a></span>\r\n          </label>\r\n        </div>\r\n        <div class=\"settings-acc-info-block_ft cnt-block_ft\">\r\n          <button class=\"btn btn-1 settings-save--btn\">Сохранить</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"cnt-block\">\r\n        <div class=\"cnt-block_hd\">\r\n          <div class=\"cnt-block_hd-title\">Безопасность</div>\r\n        </div>\r\n        <div class=\"settings-acc-security-block_bd cnt-block_bd\">\r\n          <label class=\"settings-acc-security-label\">\r\n            <span class=\"label-txt\">Старый пароль</span>\r\n            <div class=\"inp_wr js-inp-wrapper\" data-characters-limit=\"true\" data-auto-hang-handler=\"true\">\r\n              <input class=\"inp js-inp\" name=\"oldPassword\" data-characters-max-limit-value=\"30\" type=\"password\">\r\n            </div>\r\n          </label>\r\n          <label class=\"settings-acc-security-label\">\r\n            <span class=\"label-txt\">Новый пароль</span>\r\n            <div class=\"inp_wr js-inp-wrapper\" data-characters-limit=\"true\" data-auto-hang-handler=\"true\">\r\n              <input class=\"inp js-inp\" name=\"newPassword\" data-characters-max-limit-value=\"30\" type=\"password\">\r\n            </div>\r\n            <span class=\"label-dsc\">Пароль должен быть на латинице (a-z), содержать цифры (0-9), один знак в верхнем\r\n              регистре (A) и один в нижнем (a).</span>\r\n          </label>\r\n          <label class=\"settings-acc-security-label\">\r\n            <span class=\"label-txt\">Повторите новый пароль</span>\r\n            <div class=\"inp_wr js-inp-wrapper\" data-characters-limit=\"true\" data-auto-hang-handler=\"true\">\r\n              <input class=\"inp js-inp\" name=\"newPassword\" data-characters-max-limit-value=\"30\" type=\"password\">\r\n            </div>\r\n          </label>\r\n        </div>\r\n        <div class=\"settings-acc-security-block_ft cnt-block_ft\">\r\n          <button class=\"btn btn-1 settings-save--btn\">Сохранить</button>\r\n        </div>\r\n      </div>`;\r\n    }\r\n\r\n    getServiceSettingsPage(data) {\r\n        return `<div class=\"cnt-block\">\r\n        <div class=\"cnt-block_hd\">\r\n          <div class=\"cnt-block_hd-title\">Внешний вид</div>\r\n        </div>\r\n        <div class=\"settings-service-appearance-block_bd cnt-block_bd\">\r\n          <div class=\"settings-service-appearance-label\">\r\n            <span class=\"label-txt\">Фон</span>\r\n            <div class=\"settings-service-appearance-bcgds\">\r\n              <div class=\"settings-service-appearance-bcg js-settings-service-appearance-img-wrapper\"\r\n                data-background-img-num=\"1\">\r\n                <img class=\"settings-service-appearance-bcg--img js-settings-service-appearance-img\"\r\n                  src=\"../img/background1.jpg\">\r\n              </div>\r\n              <div class=\"settings-service-appearance-bcg js-settings-service-appearance-img-wrapper\"\r\n                data-background-img-num=\"2\">\r\n                <img class=\"settings-service-appearance-bcg--img js-settings-service-appearance-img\"\r\n                  src=\"../img/background2.jpg\">\r\n              </div>\r\n              <div class=\"settings-service-appearance-bcg js-settings-service-appearance-img-wrapper\"\r\n                data-background-img-num=\"3\">\r\n                <img class=\"settings-service-appearance-bcg--img js-settings-service-appearance-img\"\r\n                  src=\"../img/background3.jpg\">\r\n              </div>\r\n              <div class=\"settings-service-appearance-bcg js-settings-service-appearance-img-wrapper\"\r\n                data-background-img-num=\"4\">\r\n                <img class=\"settings-service-appearance-bcg--img js-settings-service-appearance-img\"\r\n                  src=\"../img/background4.jpg\">\r\n              </div>\r\n              <div class=\"settings-service-appearance-bcg js-settings-service-appearance-img-wrapper\"\r\n                data-background-img-num=\"5\">\r\n                <img class=\"settings-service-appearance-bcg--img js-settings-service-appearance-img\"\r\n                  src=\"../img/background5.jpg\">\r\n              </div>\r\n              <div class=\"settings-service-appearance-bcg js-settings-service-appearance-img-wrapper\"\r\n                data-background-img-num=\"6\">\r\n                <img class=\"settings-service-appearance-bcg--img js-settings-service-appearance-img\"\r\n                  src=\"../img/background6.jpg\">\r\n              </div>\r\n            </div>\r\n            <label class=\"settings-service-appearance-bcg-toggle toggle js-toggle js-settings-service-appearance-img-solid-color-toggle\">\r\n              <button class=\"toggle--btn js-toggle-btn\" data-toggle-value=\"false\">\r\n                <div class=\"toggle--lever js-toggle-lever\"></div>\r\n              </button>\r\n              <span class=\"toggle--txt js-toggle-txt\">Сплошной цвет</span>\r\n            </label>\r\n            <label class=\"settings-service-appearance-bcg-toggle toggle js-toggle js-settings-service-appearance-img-blur-toggle\">\r\n              <button class=\"toggle--btn js-toggle-btn\" data-toggle-value=\"true\">\r\n                <div class=\"toggle--lever js-toggle-lever\"></div>\r\n              </button>\r\n              <span class=\"toggle--txt js-toggle-txt\">Размытие</span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>`;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/settings/settingsContent.js?");

/***/ }),

/***/ "./src/js/sidebar.js":
/*!***************************!*\
  !*** ./src/js/sidebar.js ***!
  \***************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sidebar\", function() { return Sidebar; });\n/* harmony import */ var _darkTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./darkTheme */ \"./src/js/darkTheme.js\");\n\r\n\r\nclass Sidebar {\r\n    constructor() {\r\n        this.body = document.getElementById('body');\r\n        this.menu = this.body.getElementsByClassName('sidebar')[0];\r\n    }\r\n\r\n    openOrClose() {\r\n        this.body.classList.toggle('sidebar-active');\r\n\r\n        let btn = this.menu.getElementsByClassName('sidebar_hd--btn')[0];\r\n        btn.classList.toggle('i-arrow-right');\r\n        btn.classList.toggle('i-arrow-left');\r\n    }\r\n\r\n    nightModeToggle() {\r\n        // new DarkTheme().setOrRemoveTheme();\r\n        this.body.classList.toggle('dark-theme');\r\n    }\r\n\r\n    setHandlers() {\r\n        this.menu.getElementsByClassName('sidebar_hd--btn')[0].onclick = () => this.openOrClose();\r\n\r\n        for (let nightModeBtn of this.menu.getElementsByClassName('js-dark-theme-btn')) {\r\n            nightModeBtn.onclick = () => this.nightModeToggle();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/sidebar.js?");

/***/ })

/******/ });