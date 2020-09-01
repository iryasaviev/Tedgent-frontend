'use strict';

class Ajax {
    async send(data = {}, url = '') {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await response.json();
    }
}

class Page {
    constructor() {
        this.ajaxCl = new Ajax();
        this.validationCl = new Validation(this);

        this.body = document.getElementById('body');

        this.name = this.body.dataset.pageName;
    }

    /**
     * Устанавливает обработчики событий.
     */
    setHandlers() {
        this.validationCl.setHandlers();

        switch (this.name) {
            case "signin":
                break;

            case "signup":
                break;
        }

        if (this.name === 'signin') {
            let formSubmitBtn = document.getElementById('formSubmitBtn');
            formSubmitBtn.onclick = () => new Signin(this).toComeIn();
        }
    }
}

class Validation {
    constructor(pageCl) {
        this.pageCl = pageCl;
    }

    /**
     * Показывает сообщение с ошибкой.
     * 
     * @param {object} inpWrapper обёрточный блок поля для ввода.
     * @param {string} errorText текст ошибки.
     */
    showError(inpWrapper, errorText) {
        inpWrapper.getElementsByClassName('js-inp-error-txt')[0].innerText = errorText;

        if (!inpWrapper.classList.contains('inp-error')) {
            inpWrapper.classList.add('inp-error');
        }
    }

    /**
     * Скрывает сообщение ошибки.
     * 
     * @param {object} inpWrapper обёрточный блок поля для ввода.
     */
    hideError(inpWrapper) {
        inpWrapper.getElementsByClassName('js-inp-error-txt')[0].innerText = '';

        if (inpWrapper.classList.contains('inp-error')) {
            inpWrapper.classList.remove('inp-error');
        }
    }

    /**
     * Проверка значения на пустоту.
     * 
     * @param {object} value значение.
     */
    checkOnEmpty(value) {
        if (value.length <= 0) {
            return false;
        }
        else {
            for (let char of value) {
                if (char !== ' ') {
                    return true;
                }
            }
        }
    }

    // Email
    checkOnEmail(value) {
        const regexp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
        return regexp.test(value);
    }

    // Пароль (Строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 символов)
    checkOnPassword(value) {
        const regexp = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        return regexp.test(value);
    }

    /**
     * Проверят значение полей фамилии и имени на валидность веденных данных.
     * 
     * @param {object} inpWrapper обёрточный блок поля для ввода.
     * @param {object} inp поле для ввода.
     */
    fullNameValidation(inpWrapper, inp) {
        let haveError = false;

        if (!this.checkOnEmpty(inp.value)) {
            haveError = true;
            this.showError(inpWrapper,
                'Это поле не может быть пустым.');
        }

        if (!haveError) {
            this.hideError(inpWrapper);
        }
    }

    /**
     * Проверяет значение поля для ввода почты.
     * 
     * @param {object} inpWrapper обёрточный блок поля для ввода.
     * @param {object} inp поле для ввода.
     */
    emailValidation(inpWrapper, inp) {
        let haveError = false;

        if (!this.checkOnEmail(inp.value)) {
            haveError = true;
            this.showError(inpWrapper,
                'Неверно введён. Пример: support@tedgent.com');
        }

        if (!haveError) {
            this.hideError(inpWrapper);
        }
    }

    /**
     * Проверяет значение поля для ввода пароля.
     * 
     * @param {object} inpWrapper обёрточный блок поля для ввода.
     * @param {object} inp поле для ввода.
     */
    passwordValidation(inpWrapper, inp) {
        let haveError = false;

        if (!this.checkOnPassword(inp.value)) {
            haveError = true;
            this.showError(inpWrapper,
                'Пароль должен быть на латинице, содержать минимум одну цифру, букву в верхнем и нижнем регистре и иметь длину не менее 8 символов.');
        }

        if (!haveError) {
            this.hideError(inpWrapper);
        }
    }

    /**
     * Проверяет значение с полей для ввода нового пароля на идентичность.
     * 
     * @param {object} inpWrapper обёрточный блок поля для ввода.
     * @param {object} passInp поле для ввода нового пароля.
     * @param {object} passInpConfirm поле для повторного ввода нового пароля.
     */
    validatePasswordForConfritm(passInpConfirmWrapper, passInp, passInpConfirm) {
        let haveError = false;

        if (passInp.value.length !== 0) {
            if (passInp.value !== passInpConfirm.value) {
                this.showError(passInpConfirmWrapper,
                    'Пароли не совпадают.');
                haveError = true;
            }
        }

        if (!haveError) {
            this.hideError(passInpConfirmWrapper);
        }
    }

    /**
     * Устанавливает обработчики событий.
     */
    setHandlers() {
        const inpWrappers = this.pageCl.body.getElementsByClassName('js-inp-wrapper');

        for (let inpWrapper of inpWrappers) {
            let inp = inpWrapper.getElementsByClassName('js-inp')[0];

            // Вешает обработчики событий на поля ФИО
            if (inp.name === 'firstName' || inp.name === 'lastName') {
                inpWrapper.getElementsByClassName('js-inp')[0].addEventListener('input', () => this.fullNameValidation(inpWrapper, inp));
            }

            // Вешает обработчик события на поле для ввода почты
            if (inp.name === 'email') {
                inpWrapper.getElementsByClassName('js-inp')[0].addEventListener('input', () => this.emailValidation(inpWrapper, inp));
            }

            // Вешает обработчик события на поле для пароля
            if (inp.name === 'password') {
                inpWrapper.getElementsByClassName('js-inp')[0].addEventListener('input', () => this.passwordValidation(inpWrapper, inp));
            }

            // Вешает обработчики событий на поля для ввода нового пароля и его повтора,
            // если страница регистрации
            if (this.pageCl.name === 'signup') {
                if (inp.name === 'password' || inp.name === 'passwordConfirm') {
                    let password = this.pageCl.body.getElementsByClassName('js-password-inp')[0],
                        passwordConfirm = this.pageCl.body.getElementsByClassName('js-password-inp-confirm')[0],
                        passInpConfirmWrapper = this.pageCl.body.getElementsByClassName('js-password-inp-confirm-wrapper')[0];

                    inp.addEventListener('input', () => this.validatePasswordForConfritm(passInpConfirmWrapper, password, passwordConfirm));
                }
            }
        }
    }
}

class Signin {
    constructor(page) {
        this.pageCl = page;

        this.form = document.getElementById('form');
    }

    /**
     * Валидирует, собирает и отправляет данные с формы. 
     */
    toComeIn() {
        if (this.validateForm()) {
            const data = this.collectData();

            this.pageCl.ajaxCl.send(data, '/api/user/signin')
                .then((result) => {
                    console.log(result);
                });
        }
    }

    /**
     * Проверяет данные формы после нажатия на кнопку Войти.
     */
    validateForm() {
        let inpWrappers = this.form.getElementsByClassName('js-inp-wrapper'),
            result = true,
            event = new Event('input');

        for (let inpWrapper of inpWrappers) {
            let inp = inpWrapper.getElementsByClassName('js-inp')[0];
            inp.dispatchEvent(event);

            if (inpWrapper.classList.contains('inp-error')) {
                if (result) {
                    result = false;
                }
            }
        }

        return result;
    }

    /**
     * Собирает данные с формы.
     */
    collectData() {
        const inps = this.form.getElementsByClassName('js-inp');

        let data = {
            email: '',
            password: ''
        };
        for (let inp of inps) {
            switch (inp.name) {
                case 'email':
                    data.email = inp.value;
                    break;

                case 'password':
                    data.password = inp.value;
                    break;
            }
        }

        return data;
    }
}

class Signup {
    constructor(page) {
        this.pageCl = page;

        this.form = document.getElementById('form');
    }

    /**
     * Валидирует, собирает и отправляет данные с формы. 
     */
    toComeIn() {
        if (this.validateForm()) {
            const data = this.collectData();

            this.pageCl.ajaxCl.send(data, '/api/user/signup')
                .then((result) => {
                    console.log(result);
                });
        }
    }

    /**
     * Проверяет данные формы после нажатия на кнопку Войти.
     */
    validateForm() {
        let inpWrappers = this.form.getElementsByClassName('js-inp-wrapper'),
            result = true,
            event = new Event('input');

        for (let inpWrapper of inpWrappers) {
            let inp = inpWrapper.getElementsByClassName('js-inp')[0];
            inp.dispatchEvent(event);

            if (inpWrapper.classList.contains('inp-error')) {
                if (result) {
                    result = false;
                }
            }
        }

        return result;
    }

    /**
     * Собирает данные с формы.
     */
    collectData() {
        const inps = this.form.getElementsByClassName('js-inp');

        let data = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: ''
        };
        for (let inp of inps) {
            switch (inp.name) {
                case 'firstName':
                    data.firstName = inp.value;
                    break;

                case 'lastName':
                    data.lastName = inp.value;
                    break;

                case 'email':
                    data.email = inp.value;
                    break;

                case 'password':
                    data.password = inp.value;
                    break;

                case 'passwordConfirm':
                    data.passwordConfirm = inp.value;
                    break;
            }
        }

        return data;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const pageCl = new Page();

    pageCl.setHandlers();
});