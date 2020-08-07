'use strict';

class Validation {
    constructor() {
        this.body = document.getElementById('body');
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

    fullNameValidation(inp, inpWrapper) {
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
    
    passwordValidation(inp) {

    }

    setHandlers() {
        const inps = this.body.getElementsByClassName('js-inp');
        for (let inp of inps) {

            // Вешает обработчики событий на поля ФИО
            if (inp.name === 'firstName' || inp.name === 'lastName') {
                inp.addEventListener('input', () => this.fullNameValidation(inp));
            }

            // Вешает обработчик события на поля для паролей
            if (inp.name === 'password') {
                inp.addEventListener('input', () => this.passwordValidation(inp));
            }

            // Вешает обработчики событий на поля для ввода нового пароля и его повтора 
            if (inp.name === 'password' || inp.name === 'passwordConfirm') {
                let newPassword = this.page.content.getElementsByClassName('js-account-settings-new-password-inp')[0],
                    newPasswordRetry = this.page.content.getElementsByClassName('js-account-settings-new-password-retry-inp')[0];
                inp.addEventListener('input', () => this.validateNewPassword(newPassword, newPasswordRetry));
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Тут вешаются обработчики событий
});