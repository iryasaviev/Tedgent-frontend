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

/***/ "./src/css/test.css":
/*!**************************!*\
  !*** ./src/css/test.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/test.css?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/app.css */ \"./src/css/app.css\");\n/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_test_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/test.css */ \"./src/css/test.css\");\n/* harmony import */ var _css_test_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_test_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_dark_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/dark-theme.css */ \"./src/css/dark-theme.css\");\n/* harmony import */ var _css_dark_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_dark_theme_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _img_pp_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/pp.jpg */ \"./src/img/pp.jpg\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

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

/***/ "./src/js/fileLoad.js":
/*!****************************!*\
  !*** ./src/js/fileLoad.js ***!
  \****************************/
/*! exports provided: FileLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FileLoad\", function() { return FileLoad; });\nclass FileLoad {\r\n    readFile(event, input) {\r\n        // https://web.dev/read-files/\r\n        return event.target.files;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/fileLoad.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MoreMenu\", function() { return MoreMenu; });\nclass MoreMenu {\r\n    constructor() {\r\n        this.items = document.getElementsByClassName('js-more-menu');\r\n    }\r\n\r\n    openOrClose(wrapper) {\r\n        wrapper.classList.toggle('more-menu-active');\r\n    }\r\n\r\n    setHandlers() {\r\n        for (let item of this.items) {\r\n            item.getElementsByClassName('js-more-menu-btn')[0].onclick = () => this.openOrClose(item);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/moreMenu.js?");

/***/ }),

/***/ "./src/js/page.js":
/*!************************!*\
  !*** ./src/js/page.js ***!
  \************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Page\", function() { return Page; });\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./src/js/sidebar.js\");\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select */ \"./src/js/select.js\");\n/* harmony import */ var _testCreate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testCreate */ \"./src/js/testCreate.js\");\n/* harmony import */ var _moreMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moreMenu */ \"./src/js/moreMenu.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Page {\r\n    constructor() {\r\n        this.body = document.getElementById('body');\r\n        this.num = this.body.dataset.pageNum;\r\n    }\r\n    setHandlers() {\r\n        switch (this.num) {\r\n            // Profile page\r\n            case '1':\r\n                break;\r\n\r\n            // Tests list page\r\n            case '2':\r\n                break;\r\n\r\n            // Test create page\r\n            case '3':\r\n                let testCreateCl = new _testCreate__WEBPACK_IMPORTED_MODULE_2__[\"TestCreate\"](),\r\n                    testCreateSubjectSelect = this.body.getElementsByClassName('js-test-create-subject-select')[0];\r\n\r\n                if (testCreateSubjectSelect !== undefined) {\r\n                    testCreateSubjectSelect.onclick = () => testCreateCl.selectSubject(testCreateSubjectSelect);\r\n                }\r\n\r\n                let testCreateKeywordsInput = this.body.getElementsByClassName('js-test-create-kewords-inp')[0];\r\n                if (testCreateKeywordsInput !== undefined) {\r\n                    testCreateKeywordsInput.onkeyup = (event) => testCreateCl.highlightKeyword(event, testCreateKeywordsInput);\r\n                    testCreateKeywordsInput.onkeydown = (event) => testCreateCl.highlightKeyword(event, testCreateKeywordsInput);\r\n                }\r\n\r\n                let testCreateAttchmentsInput = this.body.getElementsByClassName('js-test-create-attachments-inp')[0];\r\n                if (testCreateAttchmentsInput !== undefined) {\r\n                    testCreateAttchmentsInput.onchange = (event) => testCreateCl.uploadAttachment(event, testCreateAttchmentsInput);\r\n                }\r\n                break;\r\n        }\r\n\r\n        new _sidebar__WEBPACK_IMPORTED_MODULE_0__[\"Sidebar\"]().setHandlers();\r\n        new _select__WEBPACK_IMPORTED_MODULE_1__[\"Select\"]().setHandlers();\r\n        new _moreMenu__WEBPACK_IMPORTED_MODULE_3__[\"MoreMenu\"]().setHandlers();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/page.js?");

/***/ }),

/***/ "./src/js/select.js":
/*!**************************!*\
  !*** ./src/js/select.js ***!
  \**************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Select\", function() { return Select; });\nclass Select {\r\n    constructor() {\r\n        this.items = document.getElementsByClassName('select');\r\n    }\r\n\r\n    openOrClose(currentSelect) {\r\n        currentSelect.classList.toggle('active');\r\n\r\n        let btn = currentSelect.getElementsByClassName('select_hd--icon')[0];\r\n        btn.classList.toggle('i-down-arrow');\r\n        btn.classList.toggle('i-up-arrow');\r\n    }\r\n\r\n    selectItem(currentSelect, currentOption, isLoading = true) {\r\n        let optionValue = currentOption.innerHTML;\r\n        currentSelect.getElementsByClassName('select_hd-value')[0].innerHTML = optionValue;\r\n        currentSelect.getElementsByClassName('select_hd-value')[0].dataset.selectOptionValue = currentOption.dataset.selectOption;\r\n\r\n        if (!isLoading) {\r\n            this.openOrClose(currentSelect);\r\n        }\r\n    }\r\n\r\n    setHandlers() {\r\n        for (let item of this.items) {\r\n            item.getElementsByClassName('select_hd')[0].onclick = () => this.openOrClose(item);\r\n\r\n            for (let option of item.getElementsByClassName('select_bd-option')) {\r\n                option.onclick = () => this.selectItem(item, option, false);\r\n\r\n                if (option.classList.contains('option-choice')) {\r\n                    this.selectItem(item, option, true);\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/select.js?");

/***/ }),

/***/ "./src/js/sidebar.js":
/*!***************************!*\
  !*** ./src/js/sidebar.js ***!
  \***************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sidebar\", function() { return Sidebar; });\n/* harmony import */ var _darkTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./darkTheme */ \"./src/js/darkTheme.js\");\n\r\n\r\nclass Sidebar {\r\n    constructor() {\r\n        this.body = document.getElementById('body');\r\n        this.menu = this.body.getElementsByClassName('sidebar')[0];\r\n    }\r\n\r\n    openOrClose() {\r\n        this.body.classList.toggle('sidebar-active');\r\n\r\n        let btn = this.menu.getElementsByClassName('sidebar_hd--btn')[0];\r\n        btn.classList.toggle('i-arrow-right');\r\n        btn.classList.toggle('i-arrow-left');\r\n    }\r\n\r\n    nightModeToggle() {\r\n        // new DarkTheme().setOrRemoveTheme();\r\n        this.body.classList.toggle('dark-theme');\r\n    }\r\n\r\n    setHandlers() {\r\n        this.menu.getElementsByClassName('sidebar_hd--btn')[0].onclick = () => this.openOrClose();\r\n\r\n        for (let nightModeBtn of this.menu.getElementsByClassName('js-dark-theme-btn')) {\r\n            nightModeBtn.onclick = () => this.nightModeToggle();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/sidebar.js?");

/***/ }),

/***/ "./src/js/subject.js":
/*!***************************!*\
  !*** ./src/js/subject.js ***!
  \***************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Subject\", function() { return Subject; });\nclass Subject {\r\n    constructor() {\r\n        this.list = [\r\n            {\r\n                num: '0',\r\n                name: 'Другой',\r\n                color: 'subject-bcg-0'\r\n            },\r\n            {\r\n                num: '1',\r\n                name: 'Математика',\r\n                color: 'subject-bcg-1'\r\n            },\r\n            {\r\n                num: '2',\r\n                name: 'Алгебра',\r\n                color: 'subject-bcg-1-1'\r\n            },\r\n            {\r\n                num: '3',\r\n                name: 'Геометрия',\r\n                color: 'subject-bcg-1-2'\r\n            },\r\n            {\r\n                num: '4',\r\n                name: 'Информатика',\r\n                color: 'subject-bcg-1-3'\r\n            },\r\n            {\r\n                num: '5',\r\n                name: 'Родной язык',\r\n                color: 'subject-bcg-2'\r\n            },\r\n            {\r\n                num: '6',\r\n                name: 'Чтение / Литература',\r\n                color: 'subject-bcg-2-1'\r\n            },\r\n            {\r\n                num: '7',\r\n                name: 'Иностранный язык',\r\n                color: 'subject-bcg-2-2'\r\n            },\r\n            {\r\n                num: '8',\r\n                name: 'География',\r\n                color: 'subject-bcg-3'\r\n            },\r\n            {\r\n                num: '9',\r\n                name: 'Биология',\r\n                color: 'subject-bcg-3-1'\r\n            },\r\n            {\r\n                num: '10',\r\n                name: 'Физика',\r\n                color: 'subject-bcg-3-2'\r\n            },\r\n            {\r\n                num: '11',\r\n                name: 'Химия',\r\n                color: 'subject-bcg-3-3'\r\n            },\r\n            {\r\n                num: '12',\r\n                name: 'Астрономия',\r\n                color: 'subject-bcg-3-4'\r\n            },\r\n            {\r\n                num: '13',\r\n                name: 'История',\r\n                color: 'subject-bcg-4'\r\n            },\r\n            {\r\n                num: '14',\r\n                name: 'Обществознание',\r\n                color: 'subject-bcg-4-1'\r\n            }\r\n        ];\r\n    }\r\n\r\n    getShortName(subjectNum) {\r\n        let result = '';\r\n\r\n        if (subjectNum !== '0') {\r\n            for (let subject of this.list) {\r\n                if (subject.num === subjectNum) {\r\n                    let subjectNameWords = subject.name.split(' ');\r\n\r\n                    result = subjectNameWords[0].split('')[0];\r\n\r\n                    if (subjectNameWords.length > 1) {\r\n                        result += subjectNameWords[1].split('')[0];\r\n                    }\r\n\r\n                    return result;\r\n                }\r\n            }\r\n        }\r\n\r\n        return result;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/subject.js?");

/***/ }),

/***/ "./src/js/testCreate.js":
/*!******************************!*\
  !*** ./src/js/testCreate.js ***!
  \******************************/
/*! exports provided: TestCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TestCreate\", function() { return TestCreate; });\n/* harmony import */ var _subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subject */ \"./src/js/subject.js\");\n/* harmony import */ var _fileLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fileLoad */ \"./src/js/fileLoad.js\");\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message */ \"./src/js/message.js\");\n\r\n\r\n\r\n\r\n/**\r\n * Класс создания теста.\r\n */\r\nclass TestCreate {\r\n    constructor() {\r\n        this.attachments = [];\r\n    }\r\n\r\n    /**\r\n     * Отвечает за выбор основного предмета теста.\r\n     * @param {*} select \r\n     */\r\n    selectSubject(select) {\r\n        let selectOptionData = select.getElementsByClassName('select_hd-value')[0].dataset.selectOptionValue,\r\n            logo = document.getElementById('bodyContent').getElementsByClassName('js-test-subject-logo')[0],\r\n            subjectCl = new _subject__WEBPACK_IMPORTED_MODULE_0__[\"Subject\"]();\r\n\r\n        for (let subject of subjectCl.list) {\r\n            if (subject.num === selectOptionData) {\r\n                if (!logo.classList.contains(subject.color)) {\r\n                    logo.classList.add(subject.color);\r\n                    logo.innerText = subjectCl.getShortName(subject.num);\r\n                }\r\n            }\r\n            else {\r\n                if (logo.classList.contains(subject.color)) {\r\n                    logo.classList.remove(subject.color);\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Выделяет ключевое слово.\r\n     * Написанное слово выделяется если перед ним (без пробела) присутсвует знак \"#\", либо после нажатия клавиш \"Tab\", \"Space\", \"Enter\".\r\n     */\r\n    highlightKeyword(event, input) {\r\n        if (event.code === 'Space' ||\r\n            event.code === 'Tab' ||\r\n            event.code === 'Semicolon' ||\r\n            event.code === 'Enter') {\r\n\r\n            if (event.code === 'Space' || event.code === 'Enter' || event.code === 'Semicolon') {\r\n                event.preventDefault();\r\n            }\r\n\r\n            let inputWords = input.textContent.split(';');\r\n\r\n            input.innerHTML = '';\r\n\r\n            for (let wordWithSemicolon of inputWords) {\r\n                for (let word of wordWithSemicolon.split(';')) {\r\n                    word = word.replace(/\\s+/g, '');\r\n\r\n                    if (word !== \";\" && word !== \"\") {\r\n                        input.insertAdjacentHTML('beforeend', `<span class=\"keyword\" data-test-keyword-value=\"${word}\">${word};</span>`);\r\n                    }\r\n                }\r\n            }\r\n\r\n            if (input.textContent.trim().length > 0) {\r\n                let range = new Range();\r\n                range.setStartAfter(input.lastElementChild);\r\n                range.collapse(true);\r\n\r\n                let selection = document.getSelection();\r\n                selection.removeAllRanges();\r\n                selection.addRange(range);\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Добавляет вложения.\r\n     */\r\n    uploadAttachment(event) {\r\n        let fileLoadCl = new _fileLoad__WEBPACK_IMPORTED_MODULE_1__[\"FileLoad\"](),\r\n            files = fileLoadCl.readFile(event),\r\n            wrapper = document.getElementsByClassName('js-test-create-attachments-files')[0];\r\n\r\n        for (let file of files) {\r\n            if (this.attachments.length >= 5) {\r\n                new _message__WEBPACK_IMPORTED_MODULE_2__[\"Message\"]().show('Ошибка! Количество вложений не может быть больше 5.');\r\n                return;\r\n            }\r\n\r\n            this.attachments[this.attachments.length] = file;\r\n\r\n            wrapper.insertAdjacentHTML('afterbegin',\r\n                `<div class=\"test-create_bd-attachments-file js-test-create-attachment\">\r\n                <span class=\"i-file icon\"></span>\r\n                <span class=\"txt js-test-create-attachment-name\">${file.name}</span>\r\n                <button class=\"i-cross btn delete js-test-create-attachment-delete-btn\"></button>\r\n                </div>`);\r\n\r\n            let attachment = wrapper.getElementsByClassName('js-test-create-attachment')[0],\r\n                delBtn = attachment.getElementsByClassName('js-test-create-attachment-delete-btn')[0];\r\n\r\n            delBtn.onclick = () => this.deleteAttachment(attachment);\r\n        }\r\n    }\r\n\r\n    deleteAttachment(attachment) {\r\n        let i = 0;\r\n        for (let file of this.attachments) {\r\n            let attachmentName = attachment.getElementsByClassName('js-test-create-attachment-name')[0].innerText;\r\n\r\n            if (file.name === attachmentName) {\r\n                attachment.remove();\r\n                this.attachments.splice(i, 1);\r\n                break;\r\n            }\r\n            i++;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/testCreate.js?");

/***/ })

/******/ });