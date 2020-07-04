export class Fields {
    constructor(page) {
        this.page = page;
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

        valueTag.innerText = maxLimit - inp.value.length;
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
     * Автоматический увеличивает высоту textarea по мере его заполнения.
     * 
     * @param {object} event объект события.
     * @param {number} paddingTop верхний padding поля.
     * @param {number} paddingBottom нижний padding поля.
     */
    autoHeightChange(event, paddingTop, paddingBottom) {
        let inp = event.target,
            computed = window.getComputedStyle(inp);

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
            inpWrapper.getElementsByClassName('js-inp')[0].oninput = (event) => this.checkValueLengthAndTakeAction(event, inpWrapper);
        }

        let dateInps = this.page.body.getElementsByClassName('js-date-inp');
        for (let dateInp of dateInps) {
            dateInp.oninput = (event) => this.checkValueForDateInput(event);
        }
    }
}