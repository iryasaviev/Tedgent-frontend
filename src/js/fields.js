import { ValidationErrorMessages } from './validationErrorMessages';

export class Fields {
    constructor(page) {
        this.page = page;

        this.validationErrorMessagesCl = new ValidationErrorMessages();
    }

    /**
     * Проверяет количество введенных символов в поле и предпринимает соотвествующие меры при нарушении ограничений.
     * 
     * @param {*} event событие.
     * @param {*} inpWrapper обёрточный блок родитель у поля для ввода и блока количества введенных символов.
     */
    checkValueLengthAndTakeAction(event, inpWrapper) {
        let maxLimit = 200, minLimit = 0;

        if (inpWrapper.dataset.charactersLimit !== 'true')
            return;

        let inp = event.target;

        if (inp.dataset.charactersMaxLimitValue !== undefined) {
            maxLimit = Number(inp.dataset.charactersMaxLimitValue);
        }

        if (inp.dataset.charactersMinLimitValue !== undefined) {
            minLimit = Number(inp.dataset.charactersMinLimitValue);
        }

        if (!this.checkCharactersLimit(inp.value, maxLimit, minLimit)) {
            this.overwriteValue(inp, maxLimit);
        }

        this.changeCharactersLimitValue(inpWrapper, inp, maxLimit);
    }

    /**
     * Перезаписывает введенное в поле значение в пределах лимита.
     * 
     * @param {*} inp поле для ввода.
     * @param {number} maxLimit максимально допустимое количество символов.
     */
    overwriteValue(inp, maxLimit) {
        let newValue = '',
            charNum = 1;

        for (let char of inp.value) {

            if (newValue == undefined || newValue == '') {
                newValue = char
            }
            else {
                newValue += char;
            }

            if (charNum >= maxLimit) {
                break;
            }

            charNum++;
        }

        inp.value = newValue;
    }

    /**
     * Меняет значение количества введеных символов в соответсвующем блоке.
     * 
     * @param {*} inpWrapper обёрточный блок родитель у поля для ввода и блока количества введенных символов.
     * @param {*} inp поле для ввода.
     * @param {number} maxLimit максимально допустимое количество символов из которого вычитается количество введенных.
     * 
     */
    changeCharactersLimitValue(inpWrapper, inp, maxLimit) {
        let valueTag = inpWrapper.getElementsByClassName('js-inp-limit-value')[0];

        if (valueTag !== undefined) {
            valueTag.innerText = maxLimit - inp.value.length;
        }
    }

    /**
     * Проверяет количество введенных символов с поставленным ограничением.
     * 
     * @param {string} value введенное значение.
     * @param {number} maxLimit максимально допустимое количество символов.
     * @param {number} minLimit  минимально допустимое количество символов. По умолчанию = 0.
     */
    checkCharactersLimit(value, maxLimit = 200, minLimit = 0) {
        if (value.length <= minLimit) {
            return false;
        }

        if (value.length >= maxLimit) {
            return false;
        }

        return true;
    }

    /**
     * Проверяет введенные значения и приводит их к соотвествующему виду в поле для ввода даты.
     * 
     * @param {object} event объект события.
     */
    checkValueForDateInput(event) {
        let inp = event.target,
            value = inp.value,
            newValue = '',
            charNum = 0;

        for (let char of value) {

            // Проверка на пробел
            if (char === ' ') {
                break;
            }

            // Проверка на числовой тип и точку
            if (isNaN(char) && char !== '.') {
                break;
            }

            // Если кол-во символов превышает или равно 10
            if (charNum >= 10) {
                break;
            }

            // Ставится точка после 2 числовых символов (день)
            if (charNum === 2) {
                if (char !== '.') {
                    newValue += '.';
                }
            }

            // Ставится точка после 5 символов (месяц)
            if (charNum === 5) {
                if (char !== '.') {
                    newValue += '.';
                }
            }

            newValue += char;

            charNum++;
        }

        inp.value = newValue;
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

    // Проверка на числовой тип
    checkOnNum(value) {
        return isNaN(value);
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

    // Имя пользователя (с ограничением 4-20 символов, которыми могут быть буквы и цифры, первый символ обязательно буква)
    checkOnUsername(value) {
        const regexp = /^[a-zA-z0-9_-]{5,20}$/;
        return regexp.test(value);
    }

    // Набор из букв (латиница + кириллица)
    checkOnLetters(value) {
        const regexp = /^[а-яА-ЯёЁa-zA-Z]+$/;
        return regexp.test(value);
    }

    // Набор из букв и цифр (латиница + кириллица)
    checkOnLettersAndNums(inp) {
        const regexp = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
        return regexp.test(value);
    }

    /**
     * Проверка поля на пустоту.
     * 
     * @param {object} event объект события.
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

    /**
     * Вслытие с target до оберточного блока поля для ввода.
     * 
     * @param {object} target элемент с которого производится всплытие.
     */
    surfacingToInpWrapper(target) {
        while (target !== document) {
            if (target !== null) {
                if (target.classList.contains('inp_wr')) {
                    return target;
                }
                target = target.parentNode;
            }
            else {
                return undefined;
            }
        }
    }

    /**
     * Автоматический увеличивает высоту textarea по мере его заполнения.
     * 
     * @param {object} event объект события.
     * @param {number} paddingTop верхний padding поля.
     * @param {number} paddingBottom нижний padding поля.
     * @param {string} defaultHeight размер поля по умолчанию (прим. 36px).
     */
    autoHeightChange(event, paddingTop, paddingBottom, defaultHeight = 'inherit') {
        let inp = event.target,
            computed = window.getComputedStyle(inp);

        inp.style.height = defaultHeight;

        let height = parseInt(computed.getPropertyValue('border-top-width'), 10)
            + parseInt(computed.getPropertyValue('padding-top'), 10)
            + inp.scrollHeight - (paddingTop + paddingBottom)
            + parseInt(computed.getPropertyValue('padding-bottom'), 10)
            + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

        if (inp.value === '') {
            inp.removeAttribute('style');
        }
        else {
            inp.style.height = height + 'px';
        }
    }

    /**
     * Устанавливает обработчики событий.
     */
    setHandlers() {
        let inpWrappers = this.page.body.getElementsByClassName('js-inp-wrapper');
        for (let inpWrapper of inpWrappers) {
            if (inpWrapper.dataset.autoHangHandler === 'true') {
                inpWrapper.getElementsByClassName('js-inp')[0].oninput = (event) => this.checkValueLengthAndTakeAction(event, inpWrapper);
                // inpWrapper.getElementsByClassName('js-inp')[0].oninput = (event) => this.checkValue(event, inpWrapper);
            }
        }

        let dateInps = this.page.body.getElementsByClassName('js-date-inp');
        for (let dateInp of dateInps) {
            dateInp.oninput = (event) => this.checkValueForDateInput(event);
        }
    }
}