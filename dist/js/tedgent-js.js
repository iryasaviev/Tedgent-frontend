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

/***/ "./src/js/answer.js":
/*!**************************!*\
  !*** ./src/js/answer.js ***!
  \**************************/
/*! exports provided: Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Answer\", function() { return Answer; });\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ \"./src/js/controls.js\");\n\r\n\r\n/**\r\n * Класс содержащий методы для работы с ответами. \r\n */\r\nclass Answer {\r\n    constructor() {\r\n        this.controlsCl = new _controls__WEBPACK_IMPORTED_MODULE_0__[\"Controls\"]();\r\n    }\r\n\r\n    /**\r\n     * Меняет тип варианта ответа.\r\n     * \r\n     * @param {object} question блок вопроса.\r\n     */\r\n    changeAnswerType(question) {\r\n        const select = question.getElementsByClassName('js-test-create-answer-type-select')[0],\r\n            answersWrapper = question.getElementsByClassName('js-test-question-answers')[0],\r\n            selectOptionData = select.getElementsByClassName('js-select-value')[0].dataset.selectOptionValue,\r\n            currentAnswerType = question.dataset.answersType;\r\n\r\n        question.dataset.answersType = selectOptionData;\r\n\r\n        if (selectOptionData === '1' || selectOptionData === '2') {\r\n\r\n            // Если текущий выбранный вариант ответа явлется текстовым или числовым.\r\n            if (currentAnswerType === '3' || currentAnswerType === '4') {\r\n\r\n                // Заменяет вариант ответа с текстового или числового на множестевнный или единичный.\r\n                answersWrapper.innerHTML = '';\r\n                this.addAnswer(question);\r\n\r\n                // Включает возможность взаимодействия с кнопкой добавления варианта ответа.\r\n                this.controlsCl.enableButton(question.getElementsByClassName('js-test-create-answer-add-btn')[0]);\r\n            }\r\n            else {\r\n                let answers = answersWrapper.getElementsByClassName('js-test-question-answer'),\r\n                    answerNum = 1;\r\n\r\n                for (let answer of answers) {\r\n                    let answerChoiceBtn = answer.getElementsByClassName('js-test-question-answer-choice-btn')[0];\r\n\r\n                    answerChoiceBtn.remove();\r\n                    answer.insertAdjacentHTML('afterbegin', this.getAnswerChoiceBtn(selectOptionData, question.dataset.questionNum, answerNum));\r\n\r\n                    answer.getElementsByClassName('js-test-question-answer-choice-inp')[0].onchange = () => this.chooseAnAnswer(answer, question);\r\n\r\n                    answerNum++;\r\n                }\r\n\r\n                this.deselect(question);\r\n            }\r\n\r\n            return;\r\n        }\r\n\r\n        if (selectOptionData === '3' || selectOptionData === '4') {\r\n            this.addAnswer(question);\r\n\r\n            this.controlsCl.disableButton(question.getElementsByClassName('js-test-create-answer-add-btn')[0]);\r\n            return;\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Возвращает блок с кнопкой варианта ответа.\r\n     * Используется при смене варианта ответа.\r\n     * \r\n     * @param {string} type тип варианта ответа который нужно вернуть.\r\n     * @param {string} questionNum номер вопроса.\r\n     * @param {string} answerNum номер ответа.\r\n     */\r\n    getAnswerChoiceBtn(type, questionNum, answerNum) {\r\n        switch (type) {\r\n            case '1':\r\n                return `<div class=\"test-question-answer-checkbox js-test-question-answer-choice-btn\">\r\n                <input class=\"test-question-answer-checkbox--inp js-test-question-answer-choice-inp\" id=\"answer${questionNum}${answerNum}\" name=\"answerCheck${questionNum}\" type=\"checkbox\">\r\n                <label class=\"js-test-question-answer-choice-label\" for=\"answer${questionNum}${answerNum}\"></label>\r\n                </div>`;\r\n\r\n            case '2':\r\n                return `<div class=\"test-question-answer-radio js-test-question-answer-choice-btn\">\r\n                <input class=\"test-question-answer-radio--inp js-test-question-answer-choice-inp\" id=\"answer${questionNum}${answerNum}\" name=\"answerRadio${questionNum}\" type=\"radio\">\r\n                <label class=\"js-test-question-answer-choice-label\" for=\"answer${questionNum}${answerNum}\"></label>\r\n                </div>`;\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Добавляет новый вариант ответа.\r\n     * \r\n     * @param {object} question вопрос в котором добавляется вариант ответа.\r\n     * @param {number} maxLimit максимальное ограничение на количество вариантов ответов в вопросе.\r\n     */\r\n    addAnswer(question, maxLimit = 1) {\r\n        const questionNum = question.dataset.questionNum,\r\n            type = question.dataset.answersType,\r\n            answersWrapper = question.getElementsByClassName('js-test-question-answers')[0],\r\n            answerAddBtn = question.getElementsByClassName('js-test-create-answer-add-btn')[0];\r\n\r\n        let answers = answersWrapper.getElementsByClassName('js-test-question-answer');\r\n        switch (type) {\r\n            case '1':\r\n                if (this.checkQuantityOfAnswers(question)) {\r\n                    answersWrapper.insertAdjacentHTML('beforeEnd', this.getAnswerItem(type, questionNum, answers.length));\r\n\r\n                    if (!this.checkQuantityOfAnswers(question)) {\r\n                        this.controlsCl.disableButton(answerAddBtn);\r\n                    }\r\n                }\r\n                break;\r\n\r\n            case '2':\r\n                if (this.checkQuantityOfAnswers(question)) {\r\n                    answersWrapper.insertAdjacentHTML('beforeEnd', this.getAnswerItem(type, questionNum, answers.length));\r\n\r\n                    if (!this.checkQuantityOfAnswers(question)) {\r\n                        this.controlsCl.disableButton(answerAddBtn);\r\n                    }\r\n                }\r\n                break;\r\n\r\n            case '3':\r\n                answersWrapper.innerHTML = this.getAnswerItem(type, questionNum);\r\n                break;\r\n\r\n            case '4':\r\n                answersWrapper.innerHTML = this.getAnswerItem(type, questionNum);\r\n                break;\r\n        }\r\n\r\n        if (type === '1' || type === '2') {\r\n            const newAnswer = answers[answers.length - 1];\r\n\r\n            // Вешает обработчик события метода удаления вопроса на добавленный вариант ответа.\r\n            newAnswer.getElementsByClassName('js-test-create-question-answer-delete-btn')[0].onclick = (event) => this.deleteAnswer(event, question);\r\n\r\n            // Вешает обработчик события метода выделения выбранного варианта ответа.\r\n            newAnswer.getElementsByClassName('js-test-question-answer-choice-inp')[0].onchange = () => this.chooseAnAnswer(newAnswer, question);\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Возвращает DOMString варианта ответа.\r\n     * \r\n     * @param {string} type тип возвращаемого варианта.\r\n     * @param {string} questionNum номер вопроса.\r\n     * @param {number} answerNum номер варианта ответа.\r\n     */\r\n    getAnswerItem(type, questionNum, answerNum = 1) {\r\n        switch (type) {\r\n            case '1':\r\n                return `<div class=\"test_create_bd-question-answer js-test-question-answer\" data-answer-num=\"${answerNum + 1}\">\r\n                <div class=\"test-question-answer-checkbox js-test-question-answer-choice-btn\">\r\n                <input class=\"test-question-answer-checkbox--inp js-test-question-answer-choice-inp\" id=\"answer${questionNum}${answerNum + 1}\" name=\"answerCheck1\" type=\"checkbox\">\r\n                <label class=\"js-test-question-answer-choice-label\" for=\"answer${questionNum}${answerNum + 1}\"></label>\r\n                </div>\r\n                <input class=\"inp test_create_bd-question-answer--inp js-test-question-answer-inp\" name=\"answer\" type=\"text\" placeholder=\"Ответ №${answerNum + 1}\">\r\n                <button class=\"test_create_bd-question-answer--btn btn i-cross js-test-create-question-answer-delete-btn\"></button></div>`;\r\n\r\n            case '2':\r\n                return `<div class=\"test_create_bd-question-answer js-test-question-answer\" data-answer-num=\"${answerNum + 1}\">\r\n                <div class=\"test-question-answer-radio js-test-question-answer-choice-btn\">\r\n                <input class=\"test-question-answer-radio--inp js-test-question-answer-choice-inp\" id=\"answer${questionNum}${answerNum + 1}\" name=\"answerRadio1\" type=\"radio\">\r\n                <label class=\"js-test-question-answer-choice-label\" for=\"answer${questionNum}${answerNum + 1}\"></label>\r\n                </div>\r\n                <input class=\"inp test_create_bd-question-answer--inp js-test-question-answer-inp\" name=\"answer\" type=\"text\" placeholder=\"Ответ №${answerNum + 1}\">\r\n                <button class=\"test_create_bd-question-answer--btn btn i-cross js-test-create-question-answer-delete-btn\"></button></div>`;\r\n\r\n            case '3':\r\n                return `<div class=\"test_create_bd-question-answer js-test-question-answer\" data-answer-num=\"1\">\r\n                <input class=\"inp test_create_bd-question-answer--inp js-test-question-answer-inp\" name=\"answer\" type=\"text\" placeholder=\"Ответ...\">`;\r\n\r\n            case '4':\r\n                return `<div class=\"test_create_bd-question-answer js-test-question-answer\" data-answer-num=\"1\">\r\n                <input class=\"inp test_create_bd-question-answer--inp js-test-question-answer-inp\" name=\"answer\" type=\"number\" step=\"any\" placeholder=\"1\">`;\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Удаляет вариант ответа.\r\n     * \r\n     * @param {object} event событие.\r\n     * @param {object} question вопрос удаляемого ответа.\r\n     */\r\n    deleteAnswer(event, question) {\r\n        let answerForDelete = this.surfacingToAnswer(event.target),\r\n            answers = question.getElementsByClassName('js-test-question-answer');\r\n\r\n        if (answerForDelete !== undefined) {\r\n\r\n            // Удаляет вариант ответа\r\n            answerForDelete.remove();\r\n\r\n            // Переисывает значения атрибутов у оставшихся вариантов\r\n            let newAnswerNum = 1;\r\n            for (let answer of answers) {\r\n                answer.dataset.answerNum = newAnswerNum;\r\n\r\n                answer.getElementsByClassName('js-test-question-answer-inp')[0].placeholder = `Ответ №${newAnswerNum}`;\r\n                answer.getElementsByClassName('js-test-question-answer-choice-inp')[0].id = `answer${question.dataset.questionNum}${newAnswerNum}`;\r\n                answer.getElementsByClassName('js-test-question-answer-choice-label')[0].setAttribute('for', `answer${question.dataset.questionNum}${newAnswerNum}`);\r\n\r\n                newAnswerNum++;\r\n            }\r\n\r\n            if (this.checkQuantityOfAnswers(question)) {\r\n                this.controlsCl.enableButton(question.getElementsByClassName('js-test-create-answer-add-btn')[0]);\r\n            }\r\n            else {\r\n                this.controlsCl.disableButton(question.getElementsByClassName('js-test-create-answer-add-btn')[0]);\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Проверяет количество вопросов.\r\n     * Возвращает false если количество вопросов равно или превышает заданный лимит и true, если нет.\r\n     * \r\n     * @param {object} question - блок вопроса. \r\n     * @param {number} maxLimit - максимальный заданный лимит количества вопросов. По умолчанию равен 6.\r\n     */\r\n    checkQuantityOfAnswers(question, maxLimit = 6) {\r\n        const answers = question.getElementsByClassName('js-test-question-answer');\r\n\r\n        if (answers.length >= maxLimit) {\r\n            return false;\r\n        }\r\n        else {\r\n            return true;\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Выделяет выбранный ответ.\r\n     * \r\n     * @param {object} answer вариант ответа.\r\n     */\r\n    chooseAnAnswer(answer, question) {\r\n        const choiceBtnInp = answer.getElementsByClassName('js-test-question-answer-choice-inp')[0];\r\n\r\n        // Если тип кнопок radio => удаляет все ранее выделенные варианты.\r\n        if (choiceBtnInp.getAttribute('type') === 'radio') {\r\n            for (let item of question.getElementsByClassName('js-test-question-answer')) {\r\n                if (item.classList.contains('test-question-answer-active')) {\r\n                    item.classList.remove('test-question-answer-active');\r\n                }\r\n            }\r\n        }\r\n\r\n        if (choiceBtnInp.checked) {\r\n            if (!answer.classList.contains('test-question-answer-active')) {\r\n                answer.classList.add('test-question-answer-active');\r\n            }\r\n        }\r\n        else {\r\n            if (answer.classList.contains('test-question-answer-active')) {\r\n                answer.classList.remove('test-question-answer-active');\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Удаляет выделения выбранных ответов.\r\n     * \r\n     * @param {object} question вопрос, с выбранных вариантов которого нужно снять выделение.\r\n     */\r\n    deselect(question) {\r\n        for (let answer of question.getElementsByClassName('js-test-question-answer')) {\r\n            if (answer.classList.contains('test-question-answer-active')) {\r\n                answer.classList.remove('test-question-answer-active');\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n    * Всплытие с element до ответа.\r\n    * \r\n    * @param {object} element \r\n    */\r\n    surfacingToAnswer(element) {\r\n        while (element !== document) {\r\n            if (element !== null) {\r\n                if (element.classList.contains('js-test-question-answer')) {\r\n                    return element;\r\n                }\r\n                element = element.parentNode;\r\n            }\r\n            else {\r\n                return undefined;\r\n            }\r\n        }\r\n    }\r\n\r\n    setHandlers() {\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/answer.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Controls\", function() { return Controls; });\n/**\r\n * Класс с методами для работы с элементами управления.\r\n */\r\nclass Controls {\r\n\r\n    /**\r\n     * Отключает возможность взайимодествия с кнопкой.\r\n     * \r\n     * @param {object} btn кнопка, которую нужно отключить.\r\n     */\r\n    disableButton(btn) {\r\n        if (!btn.classList.contains('btn-disable')) {\r\n            btn.classList.add('btn-disable');\r\n        }\r\n\r\n        if (!btn.hasAttribute('disabled')) {\r\n            btn.setAttribute('disabled', '');\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Включает возможность взайимодествия с кнопкой.\r\n     * \r\n     * @param {object} btn кнопка, которую нужно включить.\r\n     */\r\n    enableButton(btn) {\r\n        if (btn.classList.contains('btn-disable')) {\r\n            btn.classList.remove('btn-disable');\r\n        }\r\n\r\n        if (btn.hasAttribute('disabled')) {\r\n            btn.removeAttribute('disabled');\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/controls.js?");

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

/***/ "./src/js/delegation.js":
/*!******************************!*\
  !*** ./src/js/delegation.js ***!
  \******************************/
/*! exports provided: Delegation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Delegation\", function() { return Delegation; });\nclass Delegation {\r\n    router() {\r\n        let target = event.target,\r\n            click = target;\r\n\r\n        // Поиск элемента с data-атрибутами\r\n        while (target !== event.currentTarget) {\r\n\r\n            // Если target == null, значит был удалён элемент из DOM дерева.\r\n            // Не знаю на сколько верное решение.\r\n            if (target !== null) {\r\n                if (target.hasAttribute('data-controller')) {\r\n                    let method = target.dataset.method,\r\n                        controll = target.dataset.controller;\r\n                    if (method === click.dataset.target) {\r\n                        Controller(click, controll, method, target);\r\n                    }\r\n                    break;\r\n                }\r\n                target = target.parentNode;\r\n            }\r\n            else {\r\n                break;\r\n            }\r\n        }\r\n    }\r\n\r\n    controller(click, controll, method, target) {\r\n        if (method !== null && controll !== null) {\r\n            window[controll][method](click, target);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/delegation.js?");

/***/ }),

/***/ "./src/js/fileLoad.js":
/*!****************************!*\
  !*** ./src/js/fileLoad.js ***!
  \****************************/
/*! exports provided: FileLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FileLoad\", function() { return FileLoad; });\n/**\r\n * Класс отвечающий за зазгрузку файлов.\r\n */\r\nclass FileLoad {\r\n    constructor() {\r\n        this.bufferImagePath;\r\n    }\r\n\r\n    /**\r\n     * Считывает и возвращает загруженный файл.\r\n     * \r\n     * @param {*} event события.\r\n     */\r\n    readFile(event) {\r\n        // https://web.dev/read-files/\r\n        return event.target.files;\r\n    }\r\n\r\n    /**\r\n     * Загружает и выводит изображание.\r\n     * \r\n     * @param {*} file загруженный файл.\r\n     * @param {*} loadFunc функция, которая вызываеся после загрузки изображения.\r\n     * @param {*} loadFuncParams параметры вызываемой после загрузки функции.\r\n     */\r\n    readImage(file, loadFunc, loadFuncParams) {\r\n        if (file.type && file.type.indexOf('image') === -1) {\r\n            // ToDo: реализовать вывод ошибки.\r\n            console.log('File is not an image.', file.type, file);\r\n            return;\r\n        }\r\n\r\n        let reader = new FileReader();\r\n\r\n        reader.onload = (event) => {\r\n            loadFunc(event.target.result, loadFuncParams);\r\n        }\r\n        reader.readAsDataURL(file);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/fileLoad.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Page\", function() { return Page; });\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./src/js/sidebar.js\");\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select */ \"./src/js/select.js\");\n/* harmony import */ var _photoFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photoFrame */ \"./src/js/photoFrame.js\");\n/* harmony import */ var _testCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testCreate */ \"./src/js/testCreate.js\");\n/* harmony import */ var _moreMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moreMenu */ \"./src/js/moreMenu.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Page {\r\n    constructor() {\r\n        this.body = document.getElementById('body');\r\n        this.num = this.body.dataset.pageNum;\r\n    }\r\n    setHandlers() {\r\n        switch (this.num) {\r\n            // Profile page\r\n            case '1':\r\n                break;\r\n\r\n            // Tests list page\r\n            case '2':\r\n                break;\r\n\r\n            // Test create page\r\n            case '3':\r\n                new _testCreate__WEBPACK_IMPORTED_MODULE_3__[\"TestCreate\"]().setHandlers()\r\n                break;\r\n        }\r\n\r\n        new _photoFrame__WEBPACK_IMPORTED_MODULE_2__[\"PhotoFrame\"]().setHandlers();\r\n        new _sidebar__WEBPACK_IMPORTED_MODULE_0__[\"Sidebar\"]().setHandlers();\r\n        new _select__WEBPACK_IMPORTED_MODULE_1__[\"Select\"]().setHandlers();\r\n        new _moreMenu__WEBPACK_IMPORTED_MODULE_4__[\"MoreMenu\"]().setHandlers();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/page.js?");

/***/ }),

/***/ "./src/js/photoFrame.js":
/*!******************************!*\
  !*** ./src/js/photoFrame.js ***!
  \******************************/
/*! exports provided: PhotoFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PhotoFrame\", function() { return PhotoFrame; });\nclass PhotoFrame {\r\n    constructor() {\r\n        this.wrapper = document.getElementsByClassName('js-photo-frame')[0];\r\n        this.img = this.wrapper.getElementsByClassName('js-photo-frame-img')[0];\r\n    }\r\n\r\n    showOrCloseFrame(pathToImg) {\r\n        const body = document.getElementById('body');\r\n\r\n        if (pathToImg !== undefined) {\r\n            if (!body.classList.contains('photo-frame-active')) {\r\n                body.classList.add('photo-frame-active');\r\n            }\r\n            this.img.src = pathToImg;\r\n        }\r\n        else {\r\n            if (body.classList.contains('photo-frame-active')) {\r\n                body.classList.remove('photo-frame-active');\r\n            }\r\n            this.img.src = '';\r\n        }\r\n    }\r\n\r\n    setHandlers() {\r\n        this.wrapper.onclick = () => this.showOrCloseFrame();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/photoFrame.js?");

/***/ }),

/***/ "./src/js/question.js":
/*!****************************!*\
  !*** ./src/js/question.js ***!
  \****************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Question\", function() { return Question; });\n/* harmony import */ var _photoFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photoFrame */ \"./src/js/photoFrame.js\");\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ \"./src/js/message.js\");\n/* harmony import */ var _fileLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fileLoad */ \"./src/js/fileLoad.js\");\n/* harmony import */ var _answer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./answer */ \"./src/js/answer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * Class with methods for work with question.\r\n * Класс с методами для работы с вопросом.\r\n */\r\nclass Question {\r\n  constructor() {\r\n    this.answerCl = new _answer__WEBPACK_IMPORTED_MODULE_3__[\"Answer\"]();\r\n\r\n    this.wrapper = document.getElementById('bodyContent');\r\n    this.body = this.wrapper.getElementsByClassName('js-test-questions')[0];\r\n    this.questions = this.body.getElementsByClassName('js-test-question');\r\n  }\r\n\r\n  /**\r\n   * Отвечает за загрузку изображения вопроса.\r\n   * \r\n   * @param {object} event \r\n   */\r\n  loadImage(event) {\r\n    const question = this.surfacingToQuestion(event.target);\r\n\r\n    new _fileLoad__WEBPACK_IMPORTED_MODULE_2__[\"FileLoad\"]().readImage(event.target.files[0], this.showImage, {\r\n      showFunc: this.showImage,\r\n      questionTag: question\r\n    });\r\n  }\r\n\r\n  /**\r\n   * Выводит изображение вопроса.\r\n   * \r\n   * @param {string} path - Blob путь загруженного изображения.\r\n   * @param {object} params - Необходимые параметры.\r\n   */\r\n  showImage(path, params) {\r\n    const question = params.questionTag;\r\n\r\n    if (question === undefined) {\r\n      new _message__WEBPACK_IMPORTED_MODULE_1__[\"Message\"]().show('Что-то пошло не так. Поажлуйста, перезагрузите страницу.');\r\n      return;\r\n    }\r\n\r\n    const imgBackground = question.getElementsByClassName('js-test-question-img-background')[0],\r\n      imgTag = question.getElementsByClassName('js-test-question-img')[0];\r\n\r\n    imgTag.setAttribute('src', path);\r\n\r\n    if (!question.classList.contains('test_create_bd-question-image-active')) {\r\n      question.classList.add('test_create_bd-question-image-active');\r\n    }\r\n\r\n    imgBackground.onclick = () => new _photoFrame__WEBPACK_IMPORTED_MODULE_0__[\"PhotoFrame\"]().showOrCloseFrame(path);\r\n  }\r\n\r\n  deleteImage(question) {\r\n    const img = question.getElementsByClassName('js-test-question-img')[0];\r\n\r\n    img.src = '';\r\n\r\n    if (question.classList.contains('test_create_bd-question-image-active')) {\r\n      question.classList.remove('test_create_bd-question-image-active');\r\n    }\r\n  }\r\n\r\n  addQuestion() {\r\n    const addParamsBtn = this.body.getElementsByClassName('js-test-question-add-btn-params')[0],\r\n      addParamsWrapper = addParamsBtn.getElementsByClassName('js-test-question-add-btn-params-wrapper')[0],\r\n      addParamsQuestionsQuantity = addParamsWrapper.getElementsByClassName('js-test-question-add-btn-params-questions')[0].value,\r\n      addParamsAnswersQuantity = addParamsWrapper.getElementsByClassName('js-test-question-add-btn-params-answers')[0].value,\r\n      addParamsType = addParamsWrapper.getElementsByClassName('js-test-question-add-btn-params-type')[0].getElementsByClassName('js-select-value').dataset.selectOptionValue;\r\n\r\n    let newQuestions;\r\n    for (let i = 0; 30 >= i; i++) {\r\n\r\n      // Если количество имеющихся и новых вопросов превышает 30, то добавлние прекращается\r\n      if (30 >= this.questions.length + newQuestions.length) {\r\n        return;\r\n      }\r\n\r\n      let newQuestion = this.getQuestionItem(addParamsType, this.questions.length + newQuestions.length);\r\n      newQuestions[newQuestions.length] = newQuestion;\r\n    }\r\n\r\n    // Вставка новых вопросов в body\r\n    if (newQuestions.length > 0) {\r\n      this.body.insertAdjacentElement('beforeend', newQuestions);\r\n    }\r\n  }\r\n\r\n  getQuestionItem(answerType, questionNum) {\r\n    switch (answerType) {\r\n      case '1':\r\n        return `<div class=\"test_create_bd-question js-test-question\" data-question-num=\"${questionNum}\" data-answers-type=\"1\">\r\n                <div class=\"test_create_bd-question-col1\">\r\n                  <div class=\"test_create_bd-question-col1-row\">\r\n                    <button class=\"test_create_bd-question-col1-row--btn btn i-cross\"></button>\r\n                    <input class=\"inp test_create_bd-question-col1-row--inp\" name=\"qustion\" type=\"text\" placeholder=\"Вопрос №${questionNum}\">\r\n                  </div>\r\n                  <div class=\"test_create_bd-question-col1-row test_create_bd-question-col1-row-image\">\r\n                    <div class=\"test_create_bd-question-col1-image\">\r\n                      <div class=\"test_create_bd-question-col1-image--bcg js-test-question-img-background\"></div>\r\n                      <img class=\"test_create_bd-question-col1--img js-test-question-img\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"test_create_bd-question-col1-row test_create_bd-question-answers js-test-question-answers\">\r\n                    <div class=\"test_create_bd-question-answer js-test-question-answer\" data-answer-num=\"1\">\r\n                      <div class=\"test-question-answer-checkbox js-test-question-answer-choice-btn\">\r\n                        <input class=\"test-question-answer-checkbox--inp js-test-question-answer-choice-inp\" id=\"answer${questionNum}1\" name=\"answerCheck1\"\r\n                          type=\"checkbox\">\r\n                        <label class=\"js-test-question-answer-choice-label\" for=\"answer${questionNum}1\"></label>\r\n                      </div>\r\n                      <input class=\"inp test_create_bd-question-answer--inp js-test-question-answer-inp\" name=\"answer\" type=\"text\" placeholder=\"Ответ №1\">\r\n                      <button class=\"test_create_bd-question-answer--btn btn i-cross js-test-create-question-answer-delete-btn\"></button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"test_create_bd-question-col1-row test_create_bd-question-col1-row-add-answer\">\r\n                    <button class=\"test_create_bd-question-answer-add--btn btn js-test-create-answer-add-btn\">\r\n                      <span class=\"i-plus\"></span>\r\n                      <span class=\"txt\">Вариант</span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"test_create_bd-question-col2\">\r\n                  <label class=\"test_create_bd-question-col2--btn btn i-image\">\r\n                    <input class=\"test_create_bd-question-col2--inp js-test-create-question-image-inp\" type=\"file\"\r\n                      accept=\"image/*\">\r\n                  </label>\r\n                  <div class=\"test_create_bd-question--select select js-test-create-answer-type-select\">\r\n                    <button class=\"test_create_bd-question--select_hd select_hd\">\r\n                      <div class=\"select_hd-value js-select-value\" data-select-option-value=\"1\">\r\n                        <div class=\"test_create_bd-question--select-option--icon i-checkbox\"></div>\r\n                        <div class=\"test_create_bd-question--select-option--txt\">Множественный выбор</div>\r\n                      </div>\r\n                      <div class=\"select_hd--icon i-down-arrow\"></div>\r\n                    </button>\r\n                    <div class=\"select_bd\">\r\n                      <button class=\"select_bd-option\" data-select-option=\"1\">\r\n                        <div class=\"test_create_bd-question--select-option--icon i-checkbox\"></div>\r\n                        <div class=\"test_create_bd-question--select-option--txt\">Множественный выбор</div>\r\n                      </button>\r\n                      <button class=\"select_bd-option\" data-select-option=\"2\">\r\n                        <div class=\"test_create_bd-question--select-option--icon i-radiobox\"></div>\r\n                        <div class=\"test_create_bd-question--select-option--txt\">Одиночный выбор</div>\r\n                      </button>\r\n                      <button class=\"select_bd-option\" data-select-option=\"3\">\r\n                        <div class=\"test_create_bd-question--select-option--icon i-text\"></div>\r\n                        <div class=\"test_create_bd-question--select-option--txt\">Текстовый ответ</div>\r\n                      </button>\r\n                      <button class=\"select_bd-option\" data-select-option=\"4\">\r\n                        <div class=\"test_create_bd-question--select-option--icon i-number\"></div>\r\n                        <div class=\"test_create_bd-question--select-option--txt\">Числовой ответ</div>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>`;\r\n\r\n      case '2':\r\n        return ``;\r\n\r\n      case '3':\r\n        return ``;\r\n\r\n      case '4':\r\n        return ``;\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Показывает окно с дополнительными параметрами при добавлении вопроса.\r\n   */\r\n  showOrCloseQuestionAddParams() {\r\n    const addBtnWrapper = this.body.getElementsByClassName('js-test-question-add-btn-wrapper')[0];\r\n    addBtnWrapper.classList.toggle('test_create_bd-question-add-btn--more-active');\r\n  }\r\n\r\n  /**\r\n   * Вслытие с element до вопроса.\r\n   * \r\n   * @param {*} element \r\n   */\r\n  surfacingToQuestion(element) {\r\n    while (element !== document) {\r\n      if (element !== null) {\r\n        if (element.classList.contains('js-test-question')) {\r\n          return element;\r\n        }\r\n        element = element.parentNode;\r\n      }\r\n      else {\r\n        return undefined;\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Устанавливает обработчики события.\r\n   */\r\n  setHandlers() {\r\n    for (let question of this.questions) {\r\n\r\n      // Вешает обработчик события input на соответствующий тег у селекта\r\n      let answerTypeSelectValueInp = question.getElementsByClassName('select_hd-value--inp')[0];\r\n      answerTypeSelectValueInp.oninput = () => this.answerCl.changeAnswerType(question);\r\n\r\n      question.getElementsByClassName('js-test-create-answer-add-btn')[0].onclick = () => this.answerCl.addAnswer(question, 6);\r\n      question.getElementsByClassName('js-test-create-question-answer-delete-btn')[0].onclick = (event) => this.answerCl.deleteAnswer(event, question);\r\n      question.getElementsByClassName('js-test-question-answer-choice-inp')[0].onchange = () => this.answerCl.chooseAnAnswer(question.getElementsByClassName('js-test-question-answer')[0], question);\r\n\r\n      // Вешает обработчик события метода загрзуки изображения вопроса\r\n      question.getElementsByClassName('js-test-create-question-image-inp')[0].onchange = (event) => this.loadImage(event);\r\n\r\n      // Вешает обработчик события метода удаления загруженной фотографии вопроса\r\n      question.getElementsByClassName('js-test-question-img-del-btn')[0].onclick = () => this.deleteImage(question);\r\n    }\r\n\r\n    const questionAddMoreBtn = this.body.getElementsByClassName('js-test-question-add-btn-params')[0];\r\n    if (questionAddMoreBtn !== undefined) {\r\n      questionAddMoreBtn.onclick = () => this.showOrCloseQuestionAddParams();\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/js/question.js?");

/***/ }),

/***/ "./src/js/select.js":
/*!**************************!*\
  !*** ./src/js/select.js ***!
  \**************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Select\", function() { return Select; });\nclass Select {\r\n    constructor() {\r\n        this.items = document.getElementsByClassName('select');\r\n    }\r\n\r\n    openOrClose(currentSelect) {\r\n        currentSelect.classList.toggle('active');\r\n\r\n        let btn = currentSelect.getElementsByClassName('select_hd--icon')[0];\r\n        if (btn !== undefined) {\r\n            btn.classList.toggle('i-down-arrow');\r\n            btn.classList.toggle('i-up-arrow');\r\n        }\r\n    }\r\n\r\n    selectItem(currentSelect, currentOption, isLoading = true) {\r\n        let optionValue = currentOption.innerHTML;\r\n        currentSelect.getElementsByClassName('select_hd-value')[0].innerHTML = optionValue;\r\n        currentSelect.getElementsByClassName('select_hd-value')[0].dataset.selectOptionValue = currentOption.dataset.selectOption;\r\n\r\n        let valueInp = currentSelect.getElementsByClassName('js-select-value-inp')[0],\r\n            event = new Event('input');\r\n\r\n        valueInp.value = currentOption.dataset.selectOption;\r\n        valueInp.dispatchEvent(event);\r\n\r\n        if (!isLoading) {\r\n            this.openOrClose(currentSelect);\r\n        }\r\n    }\r\n\r\n    setHandlers() {\r\n        for (let item of this.items) {\r\n            item.getElementsByClassName('select_hd')[0].onclick = () => this.openOrClose(item);\r\n\r\n            for (let option of item.getElementsByClassName('select_bd-option')) {\r\n                // option.onclick = () => this.selectItem(item, option, false);\r\n                option.addEventListener('click', () => this.selectItem(item, option, false));\r\n\r\n                if (option.classList.contains('option-choice')) {\r\n                    this.selectItem(item, option, true);\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/select.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TestCreate\", function() { return TestCreate; });\n/* harmony import */ var _delegation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delegation */ \"./src/js/delegation.js\");\n/* harmony import */ var _subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subject */ \"./src/js/subject.js\");\n/* harmony import */ var _fileLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fileLoad */ \"./src/js/fileLoad.js\");\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message */ \"./src/js/message.js\");\n/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question */ \"./src/js/question.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * Класс создания теста.\r\n */\r\nclass TestCreate {\r\n    constructor() {\r\n        this.wrapper = document.getElementById('bodyContent');\r\n        this.attachments = [];\r\n    }\r\n\r\n    /**\r\n     * Отвечает за выбор основного предмета теста.\r\n     * @param {*} select \r\n     */\r\n    selectSubject(select) {\r\n        let selectOptionData = select.getElementsByClassName('select_hd-value')[0].dataset.selectOptionValue,\r\n            logo = document.getElementById('bodyContent').getElementsByClassName('js-test-subject-logo')[0],\r\n            subjectCl = new _subject__WEBPACK_IMPORTED_MODULE_1__[\"Subject\"]();\r\n\r\n        for (let subject of subjectCl.list) {\r\n            if (subject.num === selectOptionData) {\r\n                if (!logo.classList.contains(subject.color)) {\r\n                    logo.classList.add(subject.color);\r\n                    logo.innerText = subjectCl.getShortName(subject.num);\r\n                }\r\n            }\r\n            else {\r\n                if (logo.classList.contains(subject.color)) {\r\n                    logo.classList.remove(subject.color);\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Выделяет ключевое слово.\r\n     * Написанное слово выделяется если перед ним (без пробела) присутсвует знак \"#\", либо после нажатия клавиш \"Tab\", \"Space\", \"Enter\".\r\n     */\r\n    highlightKeyword(event, input) {\r\n        if (event.code === 'Space' ||\r\n            event.code === 'Tab' ||\r\n            event.code === 'Semicolon' ||\r\n            event.code === 'Enter') {\r\n\r\n            if (event.code === 'Space' || event.code === 'Enter' || event.code === 'Semicolon') {\r\n                event.preventDefault();\r\n            }\r\n\r\n            let inputWords = input.textContent.split(';');\r\n\r\n            input.innerHTML = '';\r\n\r\n            for (let wordWithSemicolon of inputWords) {\r\n                for (let word of wordWithSemicolon.split(';')) {\r\n                    word = word.replace(/\\s+/g, '');\r\n\r\n                    if (word !== \";\" && word !== \"\") {\r\n                        input.insertAdjacentHTML('beforeend', `<span class=\"keyword\" data-test-keyword-value=\"${word}\">${word};</span>`);\r\n                    }\r\n                }\r\n            }\r\n\r\n            if (input.textContent.trim().length > 0) {\r\n                let range = new Range();\r\n                range.setStartAfter(input.lastElementChild);\r\n                range.collapse(true);\r\n\r\n                let selection = document.getSelection();\r\n                selection.removeAllRanges();\r\n                selection.addRange(range);\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Добавляет вложения.\r\n     */\r\n    uploadAttachment(event) {\r\n        let fileLoadCl = new _fileLoad__WEBPACK_IMPORTED_MODULE_2__[\"FileLoad\"](),\r\n            files = fileLoadCl.readFile(event),\r\n            wrapper = document.getElementsByClassName('js-test-create-attachments-files')[0];\r\n\r\n        for (let file of files) {\r\n            if (this.attachments.length >= 5) {\r\n                new _message__WEBPACK_IMPORTED_MODULE_3__[\"Message\"]().show('Ошибка! Количество вложений не может быть больше 5.');\r\n                return;\r\n            }\r\n\r\n            this.attachments[this.attachments.length] = file;\r\n\r\n            wrapper.insertAdjacentHTML('afterbegin',\r\n                `<div class=\"test-create_bd-attachments-file js-test-create-attachment\">\r\n                <span class=\"i-file icon\"></span>\r\n                <span class=\"txt js-test-create-attachment-name\">${file.name}</span>\r\n                <button class=\"i-cross btn delete js-test-create-attachment-delete-btn\"></button>\r\n                </div>`);\r\n\r\n            let attachment = wrapper.getElementsByClassName('js-test-create-attachment')[0],\r\n                delBtn = attachment.getElementsByClassName('js-test-create-attachment-delete-btn')[0];\r\n\r\n            delBtn.onclick = () => this.deleteAttachment(attachment);\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Удаляет вложение.\r\n     * @param {*} attachment \r\n     */\r\n    deleteAttachment(attachment) {\r\n        let i = 0;\r\n        for (let file of this.attachments) {\r\n            let attachmentName = attachment.getElementsByClassName('js-test-create-attachment-name')[0].innerText;\r\n\r\n            if (file.name === attachmentName) {\r\n                attachment.remove();\r\n                this.attachments.splice(i, 1);\r\n                break;\r\n            }\r\n            i++;\r\n        }\r\n    }\r\n\r\n    setHandlers() {\r\n        const questionCl = new _question__WEBPACK_IMPORTED_MODULE_4__[\"Question\"]();\r\n        questionCl.setHandlers();\r\n\r\n        const testCreateSubjectSelect = this.wrapper.getElementsByClassName('js-test-create-subject-select')[0];\r\n        if (testCreateSubjectSelect !== undefined) {\r\n            testCreateSubjectSelect.onclick = () => this.selectSubject(testCreateSubjectSelect);\r\n        }\r\n\r\n        const testCreateKeywordsInput = this.wrapper.getElementsByClassName('js-test-create-kewords-inp')[0];\r\n        if (testCreateKeywordsInput !== undefined) {\r\n            testCreateKeywordsInput.onkeyup = (event) => this.highlightKeyword(event, testCreateKeywordsInput);\r\n            testCreateKeywordsInput.onkeydown = (event) => this.highlightKeyword(event, testCreateKeywordsInput);\r\n        }\r\n\r\n        const testCreateAttchmentsInput = this.wrapper.getElementsByClassName('js-test-create-attachments-inp')[0];\r\n        if (testCreateAttchmentsInput !== undefined) {\r\n            testCreateAttchmentsInput.onchange = (event) => this.uploadAttachment(event, testCreateAttchmentsInput);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/testCreate.js?");

/***/ })

/******/ });